import { Octokit } from '@octokit/rest'
import { useEffect, useState } from 'react'

const octokit = new Octokit()

type GitHubStarredRepo = Awaited<ReturnType<Octokit['repos']['get']>>['data']

export default function useGetGithubRepos() {
  const [starredRepos, setStarredRepos] = useState<GitHubStarredRepo[]>([])
  const [starredReadmes, setStarredReadmes] = useState<{
    [key: string]: string
  }>({})
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  function fetchReadmes(repos, octokit) {
    const readmePromises = repos.map((repo) => {
      return octokit.repos
        .getReadme({ owner: 'shmootidy', repo: repo.name })
        .then(({ data }) => {
          const decodedContent = new TextDecoder('utf-8').decode(
            Uint8Array.from(atob(data.content), (c) => c.charCodeAt(0))
          )
          return {
            repoName: repo.name,
            content: decodedContent,
          }
        })
        .catch((err) => {
          console.error(`Error fetching README for ${repo.name}.`, err)
          return { repoName: repo.name, content: 'Error loading README' }
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
        setStarredRepos(data.starredRepos)
        setStarredReadmes(data.starredReadmes)
        setIsLoading(false)
        return
      }
    }

    let fetchedRepos: GitHubStarredRepo[] = []
    octokit.activity
      .listReposStarredByUser({ username: 'shmootidy', sort: 'updated' })
      .then(({ data }) => {
        const singleTypeRepoData = data.map((r) => ('repo' in r ? r.repo : r))
        setStarredRepos(singleTypeRepoData)
        fetchedRepos = singleTypeRepoData
        return fetchReadmes(singleTypeRepoData, octokit)
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
