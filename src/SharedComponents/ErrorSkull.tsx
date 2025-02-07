import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

export default function ErrorSkull() {
  return (
    <ErrorSkullWrapper>
      <FontAwesomeIcon icon={faSkullCrossbones} style={{ fontSize: 100 }} />
      <ErrorMessage>Oh no! The data didn't load!</ErrorMessage>
    </ErrorSkullWrapper>
  )
}

const ErrorSkullWrapper = styled.div`
  --c1: #ffcd3a33;
  --c2: #c836c333;
  --c3: #cb383733;
  --c4: #8956ff33;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  margin-top: 16px;
  border-radius: 50%;
  background: white;

  @media (min-width: 960px) {
    margin-top: 250px;
  }

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

const ErrorMessage = styled.div`
  font-weight: 700;
  font-family: 'Source Sans Pro';
  margin-top: 16px;
  font-size: 36px;
`
