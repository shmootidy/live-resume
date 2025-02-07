import styled from '@emotion/styled'

export default function LoadingSquares() {
  return (
    <div
      style={{
        margin: 0,
        minHeight: '200px',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <Dots />
    </div>
  )
}

const Dots = styled.div`
  --c1: #ffcd3a33;
  --c1a: #ffcd3a;
  --c2: #c836c333;
  --c2a: #c836c3;
  --c3: #cb383733;
  --c3a: #cb3837;
  --c4: #8956ff33;
  --c4a: #8956ff;

    width: 180px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 100%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: 
    conic-gradient(var(--c1) 50%,var(--c2) 0) no-repeat,
    conic-gradient(var(--c3) 50%,var(--c4) 0) no-repeat;
  background-size: 200% 50%;
  animation: 
    back 4s infinite steps(1),
    load 2s infinite;
  }

  @keyframes load {
    0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
    16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
    33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
    50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
    66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
    83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
    100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  }
  @keyframes back {
    0%,
    100%{background-position: 0%   0%,0%   100%}
    25% {background-position: 100% 0%,0%   100%}
    50% {background-position: 100% 0%,100% 100%}
    75% {background-position: 0%   0%,100% 100%}
  }
`
