import clsx from "clsx";

interface DurationButtonProps {
    duration : string;
    isActive : boolean;
    onClick: () => void;
    className?: string;
}

const DurationButton:React.FC<DurationButtonProps> = ({duration, isActive, onClick, className}) => {

   

    return (
       <button
  onClick={onClick}
  className={clsx(
    "pl-3 pr-8 h-[45px] border-1 border-white text-white",

    !isActive && "hover:bg-background-light hover:text-black hover:border-none",

    isActive && "bg-primary-selected text-white border-none",

    className
  )}
>
  {duration}
</button>
    )
}

export default DurationButton;