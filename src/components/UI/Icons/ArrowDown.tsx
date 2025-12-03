interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => (
    <svg 
        width="12" 
        height="7" 
        viewBox="0 0 12 7" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
        className={className} 
    >
        <path 
            d="M0.75 0.75L5.75 5.75L10.75 0.75" 
            stroke="currentColor"  
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowDown;