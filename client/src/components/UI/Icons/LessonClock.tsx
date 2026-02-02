interface LessonClockProps {
    className?: string;
}

const LessonClock:React.FC<LessonClockProps> = ({className}) => {
    return (
        <svg 
            width="14" 
            height="17" 
            viewBox="0 0 14 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path 
                d="M4.45703 0.5H9.45703M6.95703 6.125V9.45833" 
                stroke="currentColor" 
                strokeLinecap="round"
            />
            <path 
                d="M6.95833 15.9167C10.5252 15.9167 13.4167 13.0252 13.4167 9.45833C13.4167 5.89149 10.5252 3 6.95833 3C3.39149 3 0.5 5.89149 0.5 9.45833C0.5 13.0252 3.39149 15.9167 6.95833 15.9167Z" 
                stroke="currentColor"
            />
            <path 
                d="M13.418 3.05664L11.5547 4.91997" 
                stroke="currentColor" 
                strokeLinecap="round"
            />
        </svg>
    );
}

export default LessonClock;