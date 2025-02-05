export default function ShmooSearch() {
  return (
    <div
      style={{
        display: 'flex',
        padding: 16,
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontWeight: 600,
        borderTop: '1px solid #d2d2d2',
      }}
    >
      <span
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 1rem',
          width: '100%',
        }}
      >
        <svg
          viewBox='0 0 1260 250'
          xmlns='http://www.w3.org/2000/svg'
          style={{ width: 110 }}
        >
          <path
            fill='#231F20'
            d='
  M0 50  h200 v50 h-50 v50 h50 v100 H0 v-50 h100 v-50 H0 z
  M240 0 h100 v50 h100 v200 h-50 v-150 h-50 v150 H240 z
  M480 50 v200 h100 V100 h50 v150 h50 V100 h50 v150 h50 V50 H480 z
  M820 50 v200 h200 V50 z M920 100 h50 v100 h-50 z
  M1060 50 v200 h200 V50 z M1170 100 h50 v100 h-50 z
  '
            strokeWidth='5'
            stroke='#f7f7f7'
          ></path>
        </svg>
        <a
          href='mailto:shmooritchie@gmail.com?subject=I saw your resume!'
          style={{
            border: '1px solid #ccc',
            fontSize: 14,
            padding: '13px 28px',
          }}
        >
          Contact Me
        </a>
      </span>
    </div>
  )
}
