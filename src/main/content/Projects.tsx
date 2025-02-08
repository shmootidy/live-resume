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
                <VisitRepoLink href={'#'} target='_blank'>
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

const ProjectSubtitle = styled.h4`
  font-family: 'Fira Mono';
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  margin: 0 0.5rem;
  font-weight: 400;
`

const ImageTechBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 8px;
`

const ProjectTech = styled.div`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  color: white;
  margin: 0.8rem 0.2rem 0.5rem 0rem;
`

const Tech = styled.span`
  padding: 2px 5px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
`

const TechKey = styled(Tech)`
  background: #5b5b5b;
  border-radius: 3px 0 0 3px;
`

const TechValue = styled(Tech)<{ isOdd: boolean }>`
  background: ${(props) => (props.isOdd ? '#E45637' : '#04C504')};
  border-radius: 0 3px 3px 0;
`
