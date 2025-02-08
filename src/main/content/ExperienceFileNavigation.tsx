import styled from '@emotion/styled'
import { ReactElement, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileLines,
  faFolderClosed,
} from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  selectedDir: string
  onSelectDir: (dirName: string) => void
  onSelectFile: (fileName: string) => void
  selectedFile: string
}

export default function ExperienceFileNavigation(props: IProps) {
  const { selectedDir, selectedFile, onSelectDir, onSelectFile } = props
  const [headerText, setHeaderText] = useState([''])

  const thingsToShow = {
    shmoo: {
      work: {
        1: 'a bunch of stuff',
        2: 'more stuff',
        3: 'stuff',
      },
      education: {
        1: 'a bunch fof stuff',
        2: 'more sftuff',
        3: 'stuff',
      },
      projects: { 1: 'a bunch of stuff', 2: 'morffe stuff', 3: 'stuff' },
    },
  }

  function handleClickDir(dirName: string) {
    onSelectDir(dirName)
    setHeaderText([dirName])
  }

  function handleClickDirBack() {
    onSelectDir('')
    setHeaderText([])
  }

  function handleClickItem(fileName: string) {
    onSelectFile(fileName)
    setHeaderText((prev) => [...prev, fileName])
  }

  function handleClickBack() {
    onSelectFile('')
    setHeaderText((prev) => [prev[0]])
  }

  return (
    <ExperienceWrapper>
      <ExperienceHeader>
        <>
          <SlashSpan>/</SlashSpan>
          <ExperienceButton onClick={handleClickDirBack}>
            shmoo
          </ExperienceButton>
          <SlashSpan>/</SlashSpan>
        </>
        {headerText.length
          ? headerText.map((t, i) => {
              const isDir = i === 0
              const isDirClickable = !!(isDir && selectedFile)
              return (
                <>
                  {!isDir || !isDirClickable ? <span>{t}</span> : null}
                  {isDirClickable ? (
                    <ExperienceButton onClick={handleClickBack}>
                      {t}
                    </ExperienceButton>
                  ) : null}
                  {isDir ? <SlashSpan>/</SlashSpan> : null}
                </>
              )
            })
          : null}
      </ExperienceHeader>
      {!selectedDir ? (
        Object.keys(thingsToShow.shmoo).map((dirName) => {
          return (
            <ExperienceDirItem key={dirName}>
              <div
                style={{ display: 'flex', alignItems: 'center', width: '50%' }}
              >
                <ExperienceListIcon>
                  <FontAwesomeIcon icon={faFolderClosed} />
                </ExperienceListIcon>
                <ExperienceButton onClick={() => handleClickDir(dirName)}>
                  {dirName}/
                </ExperienceButton>
              </div>
              <div style={{ width: '30%' }}>folder</div>
              <div style={{ width: '20%', textAlign: 'right' }}>boop</div>
            </ExperienceDirItem>
          )
        })
      ) : (
        <>
          {!selectedFile ? (
            <>
              <ExperienceDirItem>
                <ExperienceListIcon>
                  <FontAwesomeIcon icon={faFolderClosed} />
                </ExperienceListIcon>
                <ExperienceButton onClick={() => handleClickDirBack()}>
                  ../
                </ExperienceButton>
              </ExperienceDirItem>
              {Object.keys(thingsToShow.shmoo[selectedDir]).map(
                (fileName, i) => {
                  return (
                    <ExperienceDirItem key={i}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '50%',
                        }}
                      >
                        <ExperienceListIcon>
                          <FontAwesomeIcon icon={faFileLines} />
                        </ExperienceListIcon>
                        <ExperienceButton
                          onClick={() => handleClickItem(fileName)}
                        >
                          {thingsToShow.shmoo[selectedDir][fileName]}
                        </ExperienceButton>
                      </div>
                      <div style={{ width: '30%' }}>folder</div>
                      <div style={{ width: '20%', textAlign: 'right' }}>
                        boop
                      </div>
                    </ExperienceDirItem>
                  )
                }
              )}
            </>
          ) : (
            <ExperienceDirItem>
              <ExperienceButton onClick={handleClickBack}>
                <span style={{ fontSize: 8, paddingRight: 6 }}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <span className='back'>Back</span>
              </ExperienceButton>
            </ExperienceDirItem>
          )}
        </>
      )}
    </ExperienceWrapper>
  )
}
const SlashSpan = styled.span`
  color: rgba(0, 0, 0, 0.8);
  padding: 4px 0 2px 2px;
`
const ExperienceWrapper = styled.div`
  border: 1px solid #ececec;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
  color: #343434;
  font-family: 'Source Sans Pro';
  letter-spacing: normal;
`
const ExperienceHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
  font-weight: 700;
  line-height: 1.2;
  padding: 16px 0 16px 16px;
`
const ExperienceButton = styled.button`
  padding: 4px 0 2px 2px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  color: inherit;
  text-align: left;
  font-weight: 700;
  font-family: inherit;
  &:hover {
    text-decoration: underline;
    .back {
      text-decoration: underline;
    }
  }
`
const ExperienceListIcon = styled.div`
  padding-right: 2px;
`
const ExperienceDirItem = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
  padding: 0 13px;
  height: 34px;
  align-items: center;
  font-size: 14px;
  line-height: 1;
`
