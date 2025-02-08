import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { MessageWrapper } from './StyledComponents'
import useNpmSequentialColors, {
  NpmSequentialColors,
} from '../Hooks/useNpmSequentialColors'

export default function ErrorSkull() {
  const npmSequentialColors = useNpmSequentialColors()

  return (
    <ErrorSkullWrapper npmSequentialColors={npmSequentialColors}>
      <FontAwesomeIcon icon={faSkullCrossbones} style={{ fontSize: 100 }} />
      <ErrorMessage>Oh no! The data didn't load!</ErrorMessage>
    </ErrorSkullWrapper>
  )
}

const ErrorSkullWrapper = styled(MessageWrapper)<{
  npmSequentialColors: NpmSequentialColors[]
}>`
  --c1: ${(props) => props.npmSequentialColors[0].backgroundColor};
  --c2: ${(props) => props.npmSequentialColors[1].backgroundColor};
  --c3: ${(props) => props.npmSequentialColors[2].backgroundColor};
  --c4: ${(props) => props.npmSequentialColors[3].backgroundColor};
  border-radius: 50%;
  background: white;

  color: var(--c1);
  animation: color-change 5s linear infinite;

  @keyframes color-change {
    0%: {
      color: var(--c1);
    }
    25% {
      color: var(--c2);
    }
    50% {
      color: var(--c3);
    }
    75% {
      color: var(--c4);
    }
  }
`

const ErrorMessage = styled.div`
  font-weight: 700;
  font-family: 'Source Sans Pro';
  margin-top: 16px;
  font-size: 36px;
`
