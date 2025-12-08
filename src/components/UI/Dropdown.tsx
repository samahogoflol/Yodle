import { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "./Icons/ArrowDownIcon";

interface DropdownProps  {
    options : readonly string [];
    value : string | null;
    onChange : (newValue: string) => void;
    placeholder?: string;
    className?: string;
    icon? : React.ReactNode;
}

const Dropdown:React.FC<DropdownProps> = ({options, value, onChange, placeholder, className, icon}) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        onChange(option); 
        setIsOpen(false); 
    };

    const displayValue = value || placeholder;

    const handleClickOutside = (event: MouseEvent) => {
    if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) && 
        isOpen
    ) {
        setIsOpen(false);
    }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    },[isOpen])

    return (
        <div 
        ref={dropdownRef}
        className="relative">
            
            <button 
                type="button"
                className={`${className} w-[278px] h-[45px] text-left p-3 flex justify-between items-center cursor-pointer `}
                onClick={handleToggle} 
            >
                <div className="flex items-center gap-2 ">
                    {icon? icon : null }
                    <span>{displayValue}</span> 
                </div>
                <div className={`${isOpen ? 'rotate-180' : ""}`}>
                    <ArrowDownIcon/>
                </div>
            </button>
            
            {isOpen && (
                <ul className="absolute z-10 mt-1 bg-white shadow-lg  overflow-auto w-full ">
                    {options.map((option) => (
                        <li 
                            
                            key={option} 
                            className="p-3 cursor-pointer hover:bg-[#2E78E5] hover:text-white"
                            onClick={() => handleOptionClick(option)} 
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;