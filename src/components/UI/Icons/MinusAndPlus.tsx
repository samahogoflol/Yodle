interface Props {
    className?: string;
}

export const Minus:React.FC<Props> = ({className}) => {
    return (
        <svg 
        width="15"
        height="2"
        viewBox="0 0 15 2" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path 
            d="M0.75 0.75H13.75" 
            stroke="currentColor"
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
    </svg>
    )
    
}

export const Plus:React.FC<Props> = ({className}) => {
    return (
    <svg 
        width="15" 
        height="15" 
        viewBox="0 0 15 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path 
            d="M0.75 7.25H13.75M7.25 0.75V13.75" 
            stroke="#3A3636" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
    </svg>
  );
}