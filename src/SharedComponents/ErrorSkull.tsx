import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

export default function ErrorSkull() {
  return (
    <ErrorSkullWrapper>
      <SkullIcon icon={faSkullCrossbones} />
      <SkullIcon icon={faSkullCrossbones} />
      <SkullIcon icon={faSkullCrossbones} />
      <SkullIcon icon={faSkullCrossbones} />
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

const SkullIcon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 100px;

  --c1: #ffcd3a;
  --c2: #c836c3;
  --c3: #cb3837;
  --c4: #8956ff;

  --a1: conic-gradient(
    from 0deg at 50% 67.5%,
    var(--c1) 0deg 60deg,
    transparent 60deg 360deg
  );
  --a1a: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 50deg,
    var(--c1) 50deg 117deg,
    transparent 117deg 50deg
  );
  --a2: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 60deg,
    var(--c1) 60deg 180deg,
    transparent 180deg 60deg
  );
  --a2a: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 117deg,
    var(--c1) 117deg 243deg,
    transparent 243deg 117deg
  );
  --a3: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 180deg,
    var(--c1) 180deg 300deg,
    transparent 300deg 360deg
  );
  --a3a: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 243deg,
    var(--c1) 243deg 300deg,
    transparent 300deg 360deg
  );
  --a4: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 300deg,
    var(--c1) 300deg 360deg
  );
  --a4a: conic-gradient(
    from 50deg at 50% 67.5%,
    transparent 70deg 260deg,
    var(--c1) 260deg 70deg
  );

  &:nth-child(1) {
    mask-image: var(--a1);
    color: var(--c1);
    animation: spin1 4s infinite linear;
  }
  &:nth-child(2) {
    mask-image: var(--a2);
    animation: spin2 4s infinite linear;
    color: var(--c2);
  }
  &:nth-child(3) {
    mask-image: var(--a3);
    animation: spin3 4s infinite linear;
    color: var(--c3);
  }
  &:nth-child(4) {
    mask-image: var(--a4);
    animation: spin4 4s infinite linear;
    color: var(--c4);
  }

  @keyframes spin1 {
    0% {
      mask-image: var(--a1);
    }
    12.5% {
      mask-image: var(--a1a);
    }
    25% {
      mask-image: var(--a2);
    }
    37.5% {
      mask-image: var(--a2a);
    }
    50% {
      mask-image: var(--a3);
    }
    62.5% {
      mask-image: var(--a3a);
    }
    75% {
      mask-image: var(--a4);
    }
    87.5% {
      mask-image: var(--a4a);
    }
    100% {
      mask-image: var(--a1);
    }
  }
  @keyframes spin2 {
    0% {
      mask-image: var(--a2);
    }
    12.5% {
      mask-image: var(--a2a);
    }
    25% {
      mask-image: var(--a3);
    }
    37.5% {
      mask-image: var(--a3a);
    }
    50% {
      mask-image: var(--a4);
    }
    62.5% {
      mask-image: var(--a4a);
    }
    75% {
      mask-image: var(--a1);
    }
    87.5% {
      mask-image: var(--a1a);
    }
    100% {
      mask-image: var(--a2);
    }
  }
  @keyframes spin3 {
    0% {
      mask-image: var(--a3);
    }
    12.5% {
      mask-image: var(--a3a);
    }
    25% {
      mask-image: var(--a4);
    }
    37.5% {
      mask-image: var(--a4a);
    }
    50% {
      mask-image: var(--a1);
    }
    62.5% {
      mask-image: var(--a1a);
    }
    75% {
      mask-image: var(--a2);
    }
    87.5% {
      mask-image: var(--a2a);
    }
    100% {
      mask-image: var(--a3);
    }
  }
  @keyframes spin4 {
    0% {
      mask-image: var(--a4);
    }
    12.5% {
      mask-image: var(--a4a);
    }
    25% {
      mask-image: var(--a1);
    }
    37.5% {
      mask-image: var(--a1a);
    }
    50% {
      mask-image: var(--a2);
    }
    62.5% {
      mask-image: var(--a2a);
    }
    75% {
      mask-image: var(--a3);
    }
    87.5% {
      mask-image: var(--a3a);
    }
    100% {
      mask-image: var(--a4);
    }
  }
`
