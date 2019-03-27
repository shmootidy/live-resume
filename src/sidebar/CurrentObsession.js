import React from 'react'

const CurrentObsession = (props) => {
  return (
    <div>
      <div className="sidebar-subtitle">current obsession</div>
      <div className="current-obsession">
        <span className="obsession-text">{props.currentObsession.toUpperCase()}</span>
        <svg id="obsession-svg" strokeWidth="3" stroke="#8956FF" fill="rgba(137, 86, 255, .2)">
          <path d="M4 17.28 L 4 17.28 L 7.76471 18.17 L 11.5294 17.21 L 15.2941 17.1 L 19.0588 16.53 L 22.8235 17.89 L 26.5882 17.24 L 30.3529 15.98 L 34.1176 17.03 L 37.8824 19.07 L 41.6471 15.93 L 45.4118 16.38 L 49.1765 16.05 L 52.9412 16.04 L 56.7059 12.49 L 60.4706 8.16 L 64.2353 14.82 L 68 14.44 L 71.7647 14.06 L 75.5294 13.21 L 79.2941 14.64 L 83.0588 13.97 L 86.8235 14.05 L 90.5882 14.92 L 94.3529 13.12 L 98.1176 12.86 L 101.882 11.95 L 105.647 11.88 L 109.412 11.2 L 113.176 8.3 L 116.941 8.9 L 120.706 10.37 L 124.471 8.79 L 128.235 9.26 L 132 11.49 L 135.765 7.91 L 139.529 6.98 L 143.294 7.61 L 147.059 9.79 L 150.824 23.06 L 154.588 19.24 L 158.353 9.67 L 162.118 8.1 L 165.882 8.12 L 169.647 7.64 L 173.412 8.44 L 177.176 7.01 L 180.941 10.11 L 184.706 6 L 188.471 6.04 L 192.235 5 L 196 5.46 V 40 L 4 40 Z" stroke="none"></path>
          <path d="M4 17.28 L 4 17.28 L 7.76471 18.17 L 11.5294 17.21 L 15.2941 17.1 L 19.0588 16.53 L 22.8235 17.89 L 26.5882 17.24 L 30.3529 15.98 L 34.1176 17.03 L 37.8824 19.07 L 41.6471 15.93 L 45.4118 16.38 L 49.1765 16.05 L 52.9412 16.04 L 56.7059 12.49 L 60.4706 8.16 L 64.2353 14.82 L 68 14.44 L 71.7647 14.06 L 75.5294 13.21 L 79.2941 14.64 L 83.0588 13.97 L 86.8235 14.05 L 90.5882 14.92 L 94.3529 13.12 L 98.1176 12.86 L 101.882 11.95 L 105.647 11.88 L 109.412 11.2 L 113.176 8.3 L 116.941 8.9 L 120.706 10.37 L 124.471 8.79 L 128.235 9.26 L 132 11.49 L 135.765 7.91 L 139.529 6.98 L 143.294 7.61 L 147.059 9.79 L 150.824 23.06 L 154.588 19.24 L 158.353 9.67 L 162.118 8.1 L 165.882 8.12 L 169.647 7.64 L 173.412 8.44 L 177.176 7.01 L 180.941 10.11 L 184.706 6 L 188.471 6.04 L 192.235 5 L 196 5.46" fill="none"></path>
        </svg>
    </div>
    </div>
  )
}

export default CurrentObsession