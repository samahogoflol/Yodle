
interface ButtonApplyProps {
    name : string;
    type? : "submit" | "button" | "reset";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonApply = ({name, type, onClick} : ButtonApplyProps) => {
    return (
        <button 
            type={type} 
            className="bg-[#EA4300] py-4 px-5 text-white cursor-pointer hover:opacity-90"
            onClick={onClick}
        >
            {name}
        </button>   
    )
}