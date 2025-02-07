import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

export default function ErrorSkull() {
  return (
    <ErrorSkullWrapper>
      <StyledIcon icon={faSkullCrossbones} />
    </ErrorSkullWrapper>
  )
}

const ErrorSkullWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  margin-top: 16px;
  border-radius: 50%;
  background: white;

  @media (min-width: 960px) {
    margin-top: 250px;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  --c1: #ffcd3a33;
  --c2: #c836c333;
  --c3: #cb383733;
  --c4: #8956ff33;

  font-size: 100px;
  color: var(--c1);
  animation: color-change 10s linear infinite;

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
