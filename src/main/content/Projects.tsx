import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import useGetGithubRepos from '../../Hooks/useGetGithubRepos'
import { GreenText, H2 } from '../../SharedComponents/StyledComponents'
import LoadingSquares from '../../SharedComponents/LoadingSquares'
import ErrorSkull from '../../SharedComponents/ErrorSkull'

export default function Projects() {
  const { starredReadmes, starredRepos, isLoading, hasError } =
    useGetGithubRepos()
  console.log(starredRepos)
  const getGitHubRawUrl = (repoName: string, src: string) => {
    if (!src.startsWith('http')) {
      return `https://raw.githubusercontent.com/shmootidy/${repoName}/master/${src}`
    }
    return src
  }

  function getReadmeTextDisplay(readmeText: string, repoName: string) {
    console.log(repoName)
    // console.log(readmeText.split('\n'))
    const lines = readmeText.split('\n')
    return lines.slice(0, 5).join('\n')
    // return readmeText
  }

  return (
    <div>
      {!hasError ? <ErrorSkull /> : null}
      {!isLoading ? (
        <LoadingSquares />
      ) : (
        <>
          <H2>Projects</H2>
          {Object.keys(starredReadmes).map((repoName) => {
            return (
              <div key={repoName}>
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
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

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
