type LessonItem = {
    [key: string]: string; 
}

export interface InstructorsProps {
    id: number;
    name: string;
    aboutInstructor: string;
    photoMain?: string;
    isWorking?: boolean;
    experience?: number;
    rating: number;
    howManyFeedback? : number;
    price? : number;
    mainPageReview?: boolean;
    lessons? : LessonItem[];
    time? : LessonItem[];
}