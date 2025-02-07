import styled from '@emotion/styled'

export default function LoadingSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Spinner></Spinner>
    </div>
  )
}

const Spinner = styled.div`
  width: 150px;
  aspect-ratio: 1;
  display: grid;
  mask: conic-gradient(from 22deg, #0003, #000);
  animation: load 1s steps(8) infinite;

  --_g: linear-gradient(#17177c 0 0) 50%;
  background: var(--_g) / 34% 8% space no-repeat,
    var(--_g) / 8% 34% no-repeat space;

  &::before {
    background: var(--_g) / 34% 8% space no-repeat,
      var(--_g) / 8% 34% no-repeat space;
    content: '';
    transform: rotate(45deg);
  }

  @keyframes load {
    to {
      transform: rotate(1turn);
    }
  }
`
