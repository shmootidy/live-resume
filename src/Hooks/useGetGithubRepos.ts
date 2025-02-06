import { Octokit } from '@octokit/rest'
import { useEffect, useState } from 'react'

const octokit = new Octokit()

type GitHubStarredRepo = Awaited<
  ReturnType<typeof octokit.activity.listReposStarredByUser>
>['data'][0]

export default function useGetGithubRepos() {
  const [starredRepos, setStarredRepos] = useState<GitHubStarredRepo[]>([])
  const [starredReadmes, setStarredReadmes] = useState<{
    [key: string]: string
  }>({})
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  function fetchReadmes(repos, octokit) {
    const readmePromises = repos.map((repo) => {
      return octokit.repos
        .getReadme({ owner: 'shmootidy', repo: repo.name })
        .then(({ data }) => {
          return {
            repoName: repo.name,
            content: atob(data.content),
          }
        })
        .catch((err) => {
          console.error(`Error fetching README for ${repo.name}.`, err)
          return { repoName: repo.name, content: 'Error loading README' }
          // setHasError(true)
        })
    })

    return Promise.all(readmePromises).then((readmesArray) => {
      const readmesObject = readmesArray.reduce(
        (acc, { repoName, content }) => {
          acc[repoName] = content
          return acc
        },
        {} as { [key: string]: string }
      )

      setStarredReadmes(readmesObject)
      return readmesObject
    })
  }

  useEffect(() => {
    setIsLoading(true)

    const cachedData = localStorage.getItem('cached_repos_and_readmes')
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData)
      const isExpired = Date.now() - timestamp > 60 * 60 * 1000

      if (!isExpired) {
        console.log('Loading from cache...')
        setStarredRepos(data.starredRepos)
        setStarredReadmes(data.starredReadmes)
        setIsLoading(false)
        return
      }
    }

    console.log('Fetching from Github API...')
    let fetchedRepos: GitHubStarredRepo[] = []
    octokit.activity
      .listReposStarredByUser({ username: 'shmootidy' })
      .then(({ data }) => {
        setStarredRepos(data)
        fetchedRepos = data
        return fetchReadmes(data, octokit)
      })
      .then((readmesObject) => {
        localStorage.setItem(
          'cached_repos_and_readmes',
          JSON.stringify({
            timestamp: Date.now(),
            data: { starredRepos: fetchedRepos, starredReadmes: readmesObject },
          })
        )
        setIsLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching repos!', err)
        setHasError(true)
        setIsLoading(false)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    starredReadmes,
    starredRepos,
    isLoading,
    hasError,
  }
}
