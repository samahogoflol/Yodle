import type { InstructorsProps } from './instructors'; 

export interface BookingDetailsProps {
    instructor : InstructorsProps;
    bookingStartTime : string;
    bookingEndTime : string;
    lessonTime : string;
    numberOfParticipants : number;
}