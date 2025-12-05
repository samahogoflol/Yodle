import type { BookingDetailsProps } from "../../types/BookingDetailsProps";

export const calculateBookingPrice = (bookingDetails: BookingDetailsProps): number => {
    
    const instructorPrice = bookingDetails.instructor?.price;
    const lessonTime = bookingDetails.lessonTime;
    const participants = bookingDetails.numberOfParticipants;

    if (!instructorPrice || !lessonTime || !participants || participants < 1) {
        return 0;
    }

    const durationInHours = Number(lessonTime.split(' ')[0]);
    const baseHourlyPrice = Number(instructorPrice);

    let priceAdjustment = 0;

    switch (participants) {
        case 2:
            priceAdjustment = 45; 
            break;
        case 3:
            priceAdjustment = 80; 
            break;
        case 4:
            priceAdjustment = 100; 
            break;
        case 1:
        default:
            priceAdjustment = 0; 
            break;
    }

    const adjustedHourlyRate = baseHourlyPrice + priceAdjustment;
    const totalPrice = adjustedHourlyRate * durationInHours;
    return Number(totalPrice.toFixed(2));
};