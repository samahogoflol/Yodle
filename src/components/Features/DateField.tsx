import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import {format, isPast, isToday} from "date-fns"

import "../../styles/index.css"
import { CalendarIcon } from '../UI/Icons/CalendarIcon';

interface DataFieldProps {
    data: Date | null; 
    onSelect: (data: Date | null) => void;
    className?: string;
}

interface CustomInputProps {
    value?: string;
    onClick? : () => void;
    className? : string;
}

const DateField: React.FC<DataFieldProps> = ({ data, onSelect}) => {

    const isDateValid = (date: Date) => {
        return !isPast(date) || isToday(date);
    };
    
    const formattedDate = data ? format(data, 'MM/dd/yyyy') : '';

   const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(({ value, onClick, className, ...props }, ref) => (
        <div 
            className={`${value? "bg-primary-selected border-0 w-[278px] h-[45px] hover:bg-primary-selected hover:text-white" : ""} 
            " group w-[278px] h-[45px] p-3 border border-white text-white outline-none cursor-pointer 
            hover:bg-background-light hover:text-black hover:border-none "`}
            onClick={onClick}   
            ref={ref}           
            {...props}          
        >
            <div className='flex items-center'> 
            <input
                value={value}
                placeholder="Select a Date"
                className="bg-transparent outline-none w-[230px] placeholder-white cursor-pointer group-hover:placeholder-black"
                readOnly 
            />
            <CalendarIcon/>
            </div>
        </div>
    ));

    return (
        <div className="w-[278px]">
            
            <div className="flex items-center text-white gap-2 mb-3">
                <CalendarIcon/>
                <p>Date</p>
            </div>
            
            <DatePicker
                selected={data}
                onChange={(date: Date | null) => onSelect(date)} 
                filterDate={isDateValid}
                placeholderText="Select a Date"
                dateFormat="MM/dd/yyyy"
                className=""
                calendarClassName="custom-calendar-popup"
                customInput={<CustomInput value={formattedDate}/>}
            />
        </div>
    );
};

export default DateField;