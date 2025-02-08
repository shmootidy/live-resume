import styled from '@emotion/styled'
import { ReactElement, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileLines,
  faFolderClosed,
} from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ExperienceFileNavigation from './ExperienceFileNavigation'
import ExperienceFileDetails from './ExperienceFileDetails'

export default function Experience() {
  const [selectedDir, setSelectedDir] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  return (
    <>
      <ExperienceFileNavigation
        selectedDir={selectedDir}
        selectedFile={selectedFile}
        onSelectDir={setSelectedDir}
        onSelectFile={setSelectedFile}
      />
      {selectedFile ? (
        <ExperienceFileDetails
          selectedDir={selectedDir}
          selectedFile={selectedFile}
        />
      ) : null}
    </>
  )
}
const ExperienceDetailsLineNumbers = styled.pre`
  display: block;
  padding: 0.5em;
  font-size: 12px;
  min-width: 16px;
  color: rgb(140, 140, 140);
`
