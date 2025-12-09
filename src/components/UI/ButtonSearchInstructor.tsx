import { ArrowRight } from "./Icons/ArrowRight";
import { SnowChangeBtn } from "./Icons/SnowChangeBtn";
import { useState } from "react";


interface ButtonProps {
    onClick : () => void;
    name : string;
}

const ButtonSearchInstruktor:React.FC<ButtonProps> = ({onClick, name}) => {

    const [changeBtnArrow , setChangeBtnArrow] = useState(false)



    return (
        <>
            <button
            onClick={onClick}
            className="h-[51px] bg-[#EA4300] flex items-center justify-between pl-5 pr-1 text-white font-semibold cursor-pointer mt-5"
            type="button"
            >
            <span className="pr-7">{name}</span>
                <div
                onMouseEnter={()=> setChangeBtnArrow(true)}
                onMouseLeave={()=> setChangeBtnArrow(false)}
                >
                    {changeBtnArrow? <SnowChangeBtn/> : <ArrowRight/> }
                </div>
            </button>
        </>
    )
}

export default ButtonSearchInstruktor;