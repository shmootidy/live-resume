import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

export default function ErrorSkull() {
  return (
    <ErrorSkullWrapper>
      <SkullIcon icon={faSkullCrossbones} color='#ffcd3a33' />
      <SkullIcon icon={faSkullCrossbones} color='#cb383733' />
      {/* <SkullIcon icon={faSkullCrossbones} color='black' /> */}
      <SkullIcon icon={faSkullCrossbones} color='#c836c333' />
      <SkullIcon icon={faSkullCrossbones} color='#8956ff33' />
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

const SkullIcon = styled(FontAwesomeIcon)<{ color: string }>`
  position: absolute;
  font-size: 100px;
  color: ${({ color }) => color};

  --a1: conic-gradient(
    from 0deg at 50% 67.5%,
    rgba(0, 0, 0, 1) 0deg 70deg,
    transparent 70deg 360deg
  );
  --a1a: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 35deg,
    rgba(0, 0, 0, 1) 35deg 115deg,
    transparent 115deg 35deg
  );
  --a2: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 70deg,
    rgba(0, 0, 0, 1) 70deg 180deg,
    transparent 180deg 70deg
  );
  --a2a: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 115deg,
    rgba(0, 0, 0, 1) 115deg 225deg,
    transparent 225deg 115deg
  );
  --a3: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 180deg,
    rgba(0, 0, 0, 1) 180deg 290deg,
    transparent 290deg 360deg
  );
  --a3a: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 225deg,
    rgba(0, 0, 0, 1) 225deg 325deg,
    transparent 325deg 360deg
  );
  --a4: conic-gradient(
    from 0deg at 50% 67.5%,
    transparent 0deg 290deg,
    rgba(0, 0, 0, 1) 290deg 360deg
  );
  --a4a: conic-gradient(
    from 35deg at 50% 67.5%,
    transparent 35deg 290deg,
    rgb(27, 23, 23) 290deg 35deg
  );

  &:nth-child(1) {
    mask-image: var(--a1);
    animation: spin1 4s infinite linear;
  }
  &:nth-child(2) {
    mask-image: var(--a2);
    animation: spin2 4s infinite linear;
  }
  &:nth-child(3) {
    mask-image: var(--a3);
    animation: spin3 4s infinite linear;
  }
  &:nth-child(4) {
    mask-image: var(--a4);
    animation: spin4 4s infinite linear;
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
  }
`
