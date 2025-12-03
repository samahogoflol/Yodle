import arrowToRight from "../../assets/icons/arrow-to-right.png"

interface ButtonProps {
    onClick : () => void;
    name : string;
}

const ButtonSearchInstruktor:React.FC<ButtonProps> = ({onClick, name}) => {
    return (
        <>
            <button
            onClick={onClick}
            className="w-[215px] h-[51px] bg-[#EA4300] flex items-center justify-between pl-5 pr-4 text-white font-semibold cursor-pointer mt-5"
            type="button"
            >
            {name}
            <img src={arrowToRight} alt="Search instructor" />
            </button>
        </>
    )
}

export default ButtonSearchInstruktor;