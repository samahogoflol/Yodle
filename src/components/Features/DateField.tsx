import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import {format} from "date-fns"


import CalendarIcon from '../../assets/icons/Date.png';


import "../../styles/index.css"

interface DataFieldProps {
    data: Date | null; 
    onSelect: (data: Date | null) => void;
    className?: string;
}

const DateField: React.FC<DataFieldProps> = ({ data, onSelect }) => {
    
    const formattedDate = data ? format(data, 'MM/dd/yyyy') : '';

    return (
        <div className="w-[278px]">
            
            <div className="flex items-center text-[#D3DCF8] gap-2 mb-3">
                <img src={CalendarIcon} alt="Choose the date" />
                <p>Date</p>
            </div>
            
            <DatePicker
                selected={data} 
                onChange={(date: Date | null) => onSelect(date)} 
                placeholderText="Select a Date"
                dateFormat="MM/dd/yyyy"
                className="w-[278px] h-[45px] p-3 border border-[#D3DCF8] 
                           text-white bg-transparent outline-none h
                           focus:border-white cursor-pointer"
                calendarClassName="custom-calendar-popup" 
                customInput={
                    <div className="flex items-center w-[278px] px-3 border border-[#D3DCF8]">
                        <input
                            value={formattedDate}
                            placeholder="Select a Date"
                            className="bg-transparent text-white outline-none w-full cursor-pointer"
                            readOnly 
                        />
                        <img src={CalendarIcon} alt="Choose the date" />
                    </div>
                }
            />
        </div>
    );
};

export default DateField;