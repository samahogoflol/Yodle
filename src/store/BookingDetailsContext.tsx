import React, { createContext, useState } from "react";
import type { InstructorsProps } from "../types/instructors";

export interface BookingDetailsState {
    location : string;
    resort : string;
    date : Date | null;
    bookingStartTime : string;
    bookingEndTime : string;
    lessonTime : string;
    typeOfSport : string;
    numberOfParticipants : number;
    instructor : InstructorsProps | null;
}

export interface BookingContextType {
    bookingDetails: BookingDetailsState;
    setBookingDetails: React.Dispatch<React.SetStateAction<BookingDetailsState>>;
}

const INITIAL_CONTEXT_VALUE: BookingContextType = {
    
    bookingDetails: {
        location: "",
        resort : "",
        date: null,
        bookingStartTime : "",
        bookingEndTime : "",
        lessonTime : "",
        typeOfSport : "",
        numberOfParticipants : 1,
        instructor : null,
        
    },
    setBookingDetails: () => {}, 
};

export const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [bookingDetails, setBookingDetails] = useState<BookingDetailsState>(
        INITIAL_CONTEXT_VALUE.bookingDetails
    );

    const contextValue: BookingContextType = {
        bookingDetails, 
        setBookingDetails,
    };

    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
};