interface ClockProps {
    className?: string;
}

const Clock:React.FC<ClockProps> = ({className}) => {
  return (
        <svg 
            width="16.67" 
            height="16.67" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path 
                d="M10.0013 5V10L6.66797 11.6667" 
               stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M10.0013 18.3332C14.6037 18.3332 18.3346 14.6022 18.3346 9.99984C18.3346 5.39746 14.6037 1.6665 10.0013 1.6665C5.39893 1.6665 1.66797 5.39746 1.66797 9.99984C1.66797 14.6022 5.39893 18.3332 10.0013 18.3332Z" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Clock;