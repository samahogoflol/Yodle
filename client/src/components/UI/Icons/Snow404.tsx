interface Snow404Props {
  className?: string;
}

export const Snow404: React.FC<Snow404Props> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 228 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_579_808)">
        <rect
          x="73.4727"
          y="28.7257"
          width="32.6471"
          height="185"
          transform="rotate(-15.3052 73.4727 28.7257)"
          fill="#FDFDFD"
        />
        <rect
          x="28.7246"
          y="153.794"
          width="32.6471"
          height="185"
          transform="rotate(-105.305 28.7246 153.794)"
          fill="#FDFDFD"
        />
        <rect
          x="25.6426"
          y="81.2023"
          width="30.8333"
          height="185"
          transform="rotate(-60.3052 25.6426 81.2023)"
          fill="#FDFDFD"
        />
        <rect
          x="146.064"
          y="25.6456"
          width="30.8333"
          height="185"
          transform="rotate(29.6948 146.064 25.6456)"
          fill="#FDFDFD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_579_808"
          x="19.1074"
          y="20.108"
          width="189.057"
          height="189.056"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_579_808"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_579_808"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}