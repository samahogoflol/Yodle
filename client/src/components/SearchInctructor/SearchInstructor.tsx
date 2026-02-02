import { useState, useMemo } from "react"; 
import { useNavigate } from "react-router-dom";
import { searchInstructorSchema } from "../validation/searchInstructorSchema";
import { RESORTS_BY_STATE } from "../../data/resortsList";
import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";
import type { BookingDetailsState } from "../../store/BookingDetailsContext";

import Checkbox from "../UI/Checkbox";
import Location from "../UI/Icons/Location";
import DateField from "../Features/DateField";
import Dropdown from "../UI/Dropdown";
import ButtonSearchInstruktor from "../UI/ButtonSearchInstructor";
import { ResortIcon } from "../UI/Icons/ResortIcon";

import "../../styles/index.css"

type SportType = 'Skiing' | 'Snowboarding' | 'Skiing & Snowboarding' | null;

interface SearchData {
    sport: SportType; 
    state: string | null;
    resort: string | null;
    date: Date | null; 
}

const ALL_RESORTS_TO_STATE = Object.entries(RESORTS_BY_STATE).reduce((acc, [stateKey, resorts]) => {
    const StateName = stateKey.charAt(0).toUpperCase() + stateKey.slice(1); 
    resorts.forEach(resort => {
        acc[resort] = StateName;
    });
    return acc;
}, {} as Record<string, string>);

const SearchInstructor = () => {

    const {setBookingDetails} = useBookingDetails();

    const [errors, setErrors] = useState<Record<string,string>>({});

    const navigate = useNavigate();

    const [searchData, setSearchData] = useState<SearchData>({
        sport: null,
        state: null,
        resort: null,
        date: null,
    });

    const currentStateKey = searchData.state?.toLowerCase();
    
    const allResortNames = useMemo(() => {
        return Object.values(RESORTS_BY_STATE).flat();
    }, []);

    const resortOptions = currentStateKey
        ? RESORTS_BY_STATE[currentStateKey as keyof typeof RESORTS_BY_STATE] || []
        : allResortNames; 

    const handleChange = (key: keyof SearchData, value: string | Date | null) => {

        setErrors(prev => {
        if (!prev[key]) return prev;

        const updated = { ...prev };
        delete updated[key];
        return updated;
        });

        setSearchData(prevData => {
            let newState = {
                ...prevData,
                [key]: value, 
            };
            
            if (key === 'state') {
                newState.resort = null; 
            }
            if (key === 'resort' && value) {
                const selectedResort = value as string;
                const correspondingState = ALL_RESORTS_TO_STATE[selectedResort];
                if (correspondingState) {
                    newState.state = correspondingState;
                }
            }

            return newState;
        });

        setBookingDetails(prevDetails => {
            let update: Partial<BookingDetailsState> = {};
            const currentValue = value as string | Date | null;
            
            if (key === 'state' || (key === 'resort' && currentValue)) {
                
                let resortName = prevDetails.resort;
                let stateName = prevDetails.location;

                if (key === 'resort') {
                    resortName = (currentValue as string) || '';
                    stateName = ALL_RESORTS_TO_STATE[resortName] || prevDetails.location;
                } else if (key === 'state') {
                    stateName = (currentValue as string) || '';
                    if (!stateName) {
                         resortName = '';
                    }
                }
                
                update = {
                    location: stateName,
                    resort: resortName
                };

            } else if (key === 'date') {
                
                update = {
                    date: currentValue as Date | null, 
                };
            } else if (key === "sport") {
                update = {
                    typeOfSport : currentValue as string || "",
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
    const result = searchInstructorSchema.safeParse(searchData);

    if (!result.success) {
    const fieldErrors: Record<string, string> = {};

    result.error.issues.forEach(err => {
      const field = err.path[0] as string;
      fieldErrors[field] = err.message;
    });

    setErrors(fieldErrors);
    return; 
    }

    setErrors({});

    navigate("findYourInstructor");
    };


    return (
        <div className={` p-5 w-[1034px] h-[234px] bg-[#80AAEF] leading-[130%]
                       ${errors.sport ? "pt-1 pl-5" : ""}`}>
            {errors.sport && (
                <p className="text-red-500 text-sm">{errors.sport}</p>
            )}
            <div className={`flex gap-8 ${errors.sport ? "animate-shake" : ""}`}>
            <Checkbox 
                label={"Skiing"}
                checked = {searchData.sport === 'Skiing'}
                onChange={() => handleSportChange("Skiing")}
                className={`${searchData.sport === "Skiing" ? "text-white hover:text-white" :  "" } hover:text-black `}
            />
            <Checkbox 
                label={"Snowboarding"}
                checked = {searchData.sport === 'Snowboarding'}
                onChange={() => handleSportChange("Snowboarding")}
                className={`${searchData.sport === "Snowboarding" ? "text-white hover:text-white" :  "" } hover:text-black `}
            />
            <Checkbox 
                label={"Skiing & Snowboarding"}
                checked = {searchData.sport === "Skiing & Snowboarding"}
                onChange={() => handleSportChange("Skiing & Snowboarding")}
                className={`${searchData.sport === "Skiing & Snowboarding" ? "text-white hover:text-white" :  "" } hover:text-black `}
            />
           
            </div>
            <div className="flex gap-5">
            <div className={`group`}>
              <div className={`${searchData.state? "group-hover:text-white" : ""} text-white flex items-center mt-6 gap-2 mb-3 group-hover:text-black `}>
                <Location/>
                <p>State</p>
              </div>
                
                <Dropdown
                    options={["California", "Oregon", "Washington" ]}
                    value={searchData.state}
                    placeholder="Choose the State"
                    onChange={(newValue) => handleChange("state", newValue)}
                    className={` ${searchData.state? "bg-primary-selected border-none group-hover:text-white" : ""} 
                    border-1 border-white text-white group-hover:text-black group-hover:border-black 
                    ${ errors.state ? "border-red-500 text-red-600" : "border-white text-white" }`}
                    isFilterBtn={false}
               />
                {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
                
            </div>
            <div className={`group`}>
              <div className={` ${searchData.resort? "group-hover:text-white" : ""} text-white flex items-center mt-6 gap-2 mb-3 group-hover:text-black`}>
                <ResortIcon/>
                <p>Resort</p>
              </div>
                
                <Dropdown
                    options={resortOptions}
                    value={searchData.resort}
                    placeholder="Choose the Resort"
                    onChange={(newValue) => handleChange("resort", newValue)}
                    className={` ${searchData.resort? "bg-primary-selected border-none group-hover:text-white" : ""} w-[398px] border-1 border-white text-white group-hover:text-black group-hover:border-black`}
                    isFilterBtn={false}
               />
               {errors.resort && (
                    <p className="text-red-500 text-sm mt-1">{errors.resort}</p>
                )}
                
            </div>
            <div>
              <div className="mt-6">
                    <DateField
                        data={searchData.date}
                        onSelect={(newValue) => handleChange("date", newValue)}
                />
                {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>
            </div>
            </div>
            <div className={` flex justify-end`}>
                    <ButtonSearchInstruktor 
                        name={"Search instructor"}
                        onClick={handleSubmit}
                        className={`${errors.state || errors.resort || errors.date ? "mt-0" : "mt-5"}`}
                    />
            </div>
        </div>
    )
}

export default SearchInstructor;