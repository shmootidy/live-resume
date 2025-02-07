import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

export default function ErrorSkull() {
  return (
    <ErrorSkullWrapper>
      <SkullIcon icon={faSkullCrossbones} color='#ffcd3a33' />
      <SkullIcon icon={faSkullCrossbones} color='#cb383733' />
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

  --a1: conic-gradient(rgba(0, 0, 0, 1) 0deg 90deg, transparent 90deg 360deg);
  --a2: conic-gradient(
    transparent 0deg 90deg,
    rgba(0, 0, 0, 1) 90deg 180deg,
    transparent 180deg 90deg
  );
  --a3: conic-gradient(
    transparent 0deg 180deg,
    rgba(0, 0, 0, 1) 180deg 270deg,
    transparent 270deg 360deg
  );
  --a4: conic-gradient(transparent 0deg 270deg, rgba(0, 0, 0, 1) 270deg 360deg);

  &:nth-child(1) {
    mask-image: var(--a1);
    animation: spin1 2s infinite linear;
  }
  &:nth-child(2) {
    mask-image: var(--a2);
    animation: spin2 2s infinite linear;
  }
  &:nth-child(3) {
    mask-image: var(--a3);
    animation: spin3 2s infinite linear;
  }
  &:nth-child(4) {
    mask-image: var(--a4);
    animation: spin4 2s infinite linear;
  }

  @keyframes spin1 {
    0% {
      mask-image: var(--a1);
    }
    25% {
      mask-image: var(--a2);
    }
    50% {
      mask-image: var(--a3);
    }
    75% {
      mask-image: var(--a4);
    }
  }
  @keyframes spin2 {
    0% {
      mask-image: var(--a2);
    }
    25% {
      mask-image: var(--a3);
    }
    50% {
      mask-image: var(--a4);
    }
    75% {
      mask-image: var(--a1);
    }
  }
  @keyframes spin3 {
    0% {
      mask-image: var(--a3);
    }
    25% {
      mask-image: var(--a4);
    }
    50% {
      mask-image: var(--a1);
    }
    75% {
      mask-image: var(--a2);
    }
  }
  @keyframes spin4 {
    0% {
      mask-image: var(--a4);
    }
    25% {
      mask-image: var(--a1);
    }
    50% {
      mask-image: var(--a2);
    }
    75% {
      mask-image: var(--a3);
    }
  }
`
