import React, { createContext, useState, useEffect, useCallback } from "react";
import type { InstructorsProps } from "../types/instructors";

export interface BookingDetailsState {
    location: string;
    resort: string;
    date: Date | null;
    bookingStartTime: string;
    bookingEndTime: string;
    lessonTime: string;
    typeOfSport: string;
    numberOfParticipants: number;
    instructor: InstructorsProps | null;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface BookingContextType {
    bookingDetails: BookingDetailsState;
    setBookingDetails: React.Dispatch<React.SetStateAction<BookingDetailsState>>;
    clearBookingDetails: () => void;
}

interface StorageWrapper {
    data: BookingDetailsState;
    timestamp: number;
}

const INITIAL_BOOKING_STATE: BookingDetailsState = {
    location: "",
    resort: "",
    date: null,
    bookingStartTime: "",
    bookingEndTime: "",
    lessonTime: "",
    typeOfSport: "",
    numberOfParticipants: 1,
    instructor: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
};

export const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [bookingDetails, setBookingDetails] = useState<BookingDetailsState>(() => {
        const savedData = localStorage.getItem("bookingStorage");
        
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData) as StorageWrapper;
                const now = new Date().getTime(); 
                const TWO_HOURS_IN_MS = 2 * 60 * 60 * 1000;

                if (now - parsedData.timestamp < TWO_HOURS_IN_MS) {
                    if (parsedData.data && parsedData.data.date) { 
                        parsedData.data.date = new Date(parsedData.data.date);
                    }
                    return parsedData.data;
                } else {
                    localStorage.removeItem("bookingStorage");
                }
            } catch (error) {
                console.error("Помилка читання localStorage", error);
                localStorage.removeItem("bookingStorage");
            }
        }
        return INITIAL_BOOKING_STATE;
    });

    // 2. Функція очищення (використовуємо useCallback для стабільності посилання)
    const clearBookingDetails = useCallback(() => {
        localStorage.removeItem("bookingStorage");
        setBookingDetails(INITIAL_BOOKING_STATE);
    }, []);

    // 3. Автоматичне збереження в localStorage при змінах
    useEffect(() => {
        // Запобіжник: якщо стейт порожній (початковий), не перезаписуємо сховище
        const isInitial = 
            !bookingDetails.location && 
            !bookingDetails.bookingStartTime && 
            !bookingDetails.firstName;

        if (isInitial) return;

        const wrapperToSave: StorageWrapper = {
            data: bookingDetails,
            timestamp: new Date().getTime()
        };
        localStorage.setItem("bookingStorage", JSON.stringify(wrapperToSave));
    }, [bookingDetails]); 

    const contextValue: BookingContextType = {
        bookingDetails, 
        setBookingDetails,
        clearBookingDetails,
    };

    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
};