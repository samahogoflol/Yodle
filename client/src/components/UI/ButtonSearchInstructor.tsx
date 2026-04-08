import { ArrowRight } from "./Icons/ArrowRight";
import { SnowChangeBtn } from "./Icons/SnowChangeBtn";
import { useState } from "react";


interface ButtonProps {
    onClick? : () => void;
    name : string;
    className? : string;
    type? : "button" | "submit";
    form? : string;
}

const ButtonSearchInstruktor:React.FC<ButtonProps> = ({onClick, name, className, type = "button", form}) => {

    const [changeBtnArrow , setChangeBtnArrow] = useState(false)

    return (
        <>
            <button
                type={type}
                form={form}
                onClick={onClick}
                className={` ${className} h-[51px] w-full md:w-fit justify-center bg-[#EA4300] flex items-center md:justify-between pl-5 pr-1 text-white font-semibold cursor-pointer`}
                onMouseEnter={()=> setChangeBtnArrow(true)}
                onMouseLeave={()=> setChangeBtnArrow(false)}
            >
            <span className="pr-7">{name}</span>
                {changeBtnArrow? <SnowChangeBtn/> : <ArrowRight/> }
            </button>
        </>
    )
}

export default ButtonSearchInstruktor;