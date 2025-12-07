import { useState} from "react";
import { Link } from "react-router-dom";
import { RESORTS_BY_STATE } from "../../data/resortsList";
import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";
import type { BookingDetailsState } from "../../store/BookingDetailsContext";

import Checkbox from "../UI/Checkbox";
import Location from "../UI/Icons/Location";
import DateField from "../Features/DateField";
import Dropdown from "../UI/Dropdown";
import resortIcon from "../../assets/icons/Mountain.png"
import ButtonSearchInstruktor from "../UI/ButtonSearchInstructor";


type SportType = 'Skiing' | 'Snowboarding' | 'Skiing & Snowboarding' | null;

interface SearchData {
    sport: SportType; 
    state: string | null;
    resort: string | null;
    date: Date | null; 
}

const SearchInstructor = () => {

    const {setBookingDetails} = useBookingDetails()

    const [searchData, setSearchData] = useState<SearchData>({
        sport: null,
        state: null,
        resort: null,
        date: null,
    });

    const currentStateKey = searchData.state?.toLowerCase();
    const resortOptions = currentStateKey ? RESORTS_BY_STATE[currentStateKey as keyof typeof RESORTS_BY_STATE] || [] : [];

   const handleChange = (key: keyof SearchData, value: string | Date | null) => {
    setSearchData(prevData => {
        const newState = {
            ...prevData,
            [key]: value, 
        };
        
        if (key === 'state') {
            newState.resort = null; 
        }

        return newState;
    });

    setBookingDetails(prevDetails => {
        let update: Partial<BookingDetailsState> = {};

        if (key === 'state') {
            
            update = {
                location: (value as string) || '', 
            }; 
        }else if (key === 'resort') {

            update = {
                resort: (value as string) || '', 
            };
        } else if (key === 'date') {
            
            update = {
                date: value as Date | null, 
            };
        } else if (key === "sport") {
            update = {
                typeOfSport : value as string || "",
            }
        }

        return {
            ...prevDetails,
            ...update,
        };
})

    }

    const handleSportChange = (sport: SportType) => {
        const newValue = searchData.sport === sport  
        ? null
        : sport;
        
        handleChange("sport", newValue)
    };

    const handleSubmit = () => {
        setSearchData(
            {
                sport: null,
                state: null,
                resort: null,
                date: null,
            }
        )
    }

    return (
        <div className="p-5 w-[1034px] h-[234px] bg-[#80AAEF] leading-[130%]">
           <div className="flex gap-8">
            <Checkbox 
                label={"Skiing"}
                checked = {searchData.sport === 'Skiing'}
                onChange={() => handleSportChange("Skiing")}
            />
            <Checkbox 
                label={"Snowboarding"}
                checked = {searchData.sport === 'Snowboarding'}
                onChange={() => handleSportChange("Snowboarding")} 
            />
            <Checkbox 
                label={"Skiing & Snowboarding"}
                checked = {searchData.sport === "Skiing & Snowboarding"}
                onChange={() => handleSportChange("Skiing & Snowboarding")} 
            />
           </div>
           <div className="flex gap-5">
            <div>
              <div className="text-[#D3DCF8] flex items-center mt-6 gap-2 mb-3">
                <Location/>
                <p>State</p>
              </div>
               
               <Dropdown
                    options={["California", "Oregon", "Washington" ]}
                    value={searchData.state}
                    placeholder="Choose the State"
                    onChange={(newValue) => handleChange("state", newValue)}
               />
               
           </div>
           <div>
              <div className="text-[#D3DCF8] flex items-center mt-6 gap-2 mb-3">
                <img src={resortIcon} alt="Choose the Resort" />
                <p>Resort</p>
              </div>
               
               <Dropdown
                    options={resortOptions}
                    value={searchData.resort}
                    placeholder="Choose the Resort"
                    onChange={(newValue) => handleChange("resort", newValue)}
                    className="w-[398px]"
               />
               
           </div>
           <div>
              <div className="mt-6">
                    <DateField
                    data={searchData.date}
                    onSelect={(newValue) => handleChange("date", newValue)}
                />
              </div>
           </div>
           </div>
           <div className="flex justify-end">
            <Link to="findYourInstructor">
             <ButtonSearchInstruktor 
                name={"Search instructor"}
                onClick={handleSubmit}
            />
            </Link>
           
           </div>

        </div>
    )
}

export default SearchInstructor;