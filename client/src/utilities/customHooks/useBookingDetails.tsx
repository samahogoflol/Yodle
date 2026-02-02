import { useContext } from "react";

import { BookingContext } from "../../store/BookingDetailsContext";
import type { BookingContextType } from "../../store/BookingDetailsContext";

export const useBookingDetails = (): BookingContextType => {
    const context = useContext(BookingContext);

    if(context === undefined || context === null) {
        throw(new Error ("Something wrong"))
    }

    return context as BookingContextType;
};