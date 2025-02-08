import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import useGetGithubRepos from '../../Hooks/useGetGithubRepos'
import { H2 } from '../../SharedComponents/StyledComponents'
import LoadingSquares from '../../SharedComponents/LoadingSquares'
import ErrorSkull from '../../SharedComponents/ErrorSkull'

export default function Projects() {
  const { starredReadmes, starredRepos, isLoading, hasError } =
    useGetGithubRepos()

  function getGitHubRawUrl(repoName: string, src: string) {
    if (!src.startsWith('http')) {
      return `https://raw.githubusercontent.com/shmootidy/${repoName}/master/${src}`
    }
    return src
  }

  function getReadmeTextDisplay(readmeText: string, repoName: string) {
    const lines = readmeText
      .replace(/^#.*\n?/, '')
      .trim()
      .split('\n')
    return lines.slice(0, 1).join('\n')
  }

  function getFirstImageSrc(readmeText: string, repoName: string) {
    const firstImageMatch = readmeText.match(/!\[.*?\]\((.*?)\)/)
    const firstImageUrl = firstImageMatch ? firstImageMatch[1] : null
    const firstImgSrc = firstImageUrl
      ? getGitHubRawUrl(repoName, firstImageUrl)
      : null
    return firstImgSrc
  }

  return (
    <div>
      {hasError ? <ErrorSkull /> : null}
      {isLoading ? (
        <LoadingSquares />
      ) : (
        <>
          {Object.keys(starredReadmes).map((repoName) => {
            const firstImageSrc = getFirstImageSrc(
              starredReadmes[repoName],
              repoName
            )
            const repoUrl = starredRepos.find(
              (r) => r.name === repoName
            )?.html_url
            return (
              <div style={{ marginBottom: 60 }} key={repoName}>
                <H2 style={{ flexGrow: 1 }}>{repoName}</H2>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: ({ src, alt }) => (
                      <img
                        src={getGitHubRawUrl(repoName, src || '')}
                        alt={alt || ''}
                        style={{ maxWidth: '100%' }}
                      />
                    ),
                  }}
                >
                  {getReadmeTextDisplay(starredReadmes[repoName], repoName)}
                </ReactMarkdown>
                {firstImageSrc ? <ProjectImage src={firstImageSrc} /> : null}
                <VisitRepoLink href={repoUrl} target='_blank'>
                  visit repo
                </VisitRepoLink>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

const ProjectImage = styled.img`
  width: 100%;
`
const VisitRepoLink = styled.a`
  // border-bottom: 1px solid #ececec;
  color: #cb3837;
  font-weight: 600;
  font-size: 20px;
`
