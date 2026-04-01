interface Digit4Props {
  className?: string;
}

export const Digit4: React.FC<Digit4Props> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 120 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_579_806)">
        <path
          d="M72.2804 168V129.36H1.00039V96.12L64.7204 -1.14441e-05H105.4V96.24H118.48V129.36H105.4V168H72.2804ZM39.2804 96.12L72.2804 96.24L72.1604 44.76L39.2804 96.12Z"
          fill="#FDFDFD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_579_806"
          x="0"
          y="0"
          width="119.48"
          height="170"
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
            result="effect1_dropShadow_579_806"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_579_806"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};