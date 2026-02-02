import { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "./Icons/ArrowDownIcon";
import { UpDownArrowIcon } from "./Icons/ArrowUpDown";

interface SortOption {
    label: string; 
    value: string; 
}

interface DropdownProps  {
    options : readonly string [] | readonly SortOption[];
    value : string | null;
    onChange : (newValue: string) => void;
    placeholder?: string;
    className?: string;
    icon? : React.ReactNode;
    isFilterBtn : boolean;
}

const Dropdown:React.FC<DropdownProps> = ({options, value, onChange, placeholder, className, icon, isFilterBtn}) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        onChange(option); 
        setIsOpen(false); 
    };

   const displayValueByFilters = (() => {

   const isObjectOptions = options.length > 0 && typeof options[0] === 'object';

    if (isObjectOptions) {
        const selectedOption = (options as readonly SortOption[]).find((item) => value === item.value);

        return selectedOption 
               ? selectedOption.label 
               : "Select filter";

    }
    })();

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

    const displayValue = value || placeholder;

    return (
        <div 
        ref={dropdownRef}
        className="relative">
            
            <button 
                type="button"
                className={`${className} w-[278px] h-[45px] text-left p-3 flex justify-between items-center cursor-pointer `}
                onClick={handleToggle} 
            >
                {isFilterBtn? (
                    <>
                        <UpDownArrowIcon/>
                        {displayValueByFilters}
                    </>) 
                    :(
                        <>
                            <div className="flex items-center gap-2 ">
                                {icon? icon : null }
                                <span>{displayValue}</span> 
                            </div>
                                <div className={`${isOpen ? 'rotate-180' : ""}`}>
                                <ArrowDownIcon/>
                            </div>
                        </>
                    )}
                
            </button>
            
            {isOpen && (
                <ul className="absolute z-10 mt-1 bg-white shadow-lg overflow-auto w-full ">
                    {options.map((option, index) => {
                        const isObjectOption = typeof option === 'object' && option !== null && 'label' in option && 'value' in option;
                        const display = isObjectOption ? (option as SortOption).label : (option as string);
                        const clickValue = isObjectOption ? (option as SortOption).value : (option as string);
                        const key = isObjectOption ? clickValue : clickValue + index;
                        return (
                            <li
                                key={key}
                                className="p-3 cursor-pointer hover:bg-[#2E78E5] hover:text-white"
                                onClick={() => handleOptionClick(clickValue)}
                            >
                                {display}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;