interface DurationButtonProps {
    duration : string;
    isActive : boolean;
    onClick: () => void;
    className?: string;
}

const DurationButton:React.FC<DurationButtonProps> = ({duration, isActive, onClick, className}) => {

    const activeClasses = isActive? "bg-blue-600 text-white border-blue-600" : "bg-white text-black border-gray-400";

    return (
        <button
        onClick={onClick}
        className={`
                pl-3 pr-8 h-[45px] border hover:bg-blue-600 hover:text-white 
                ${activeClasses}
                ${className}`}
        >
            {duration}
        </button>
    )
}

export default DurationButton;