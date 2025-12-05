type LessonItem = {
    [key: string]: string; 
}

export interface InstructorsProps {
    id: number;
    photo: string;
    name: string;
    aboutInstructor: string;
    isWorking?: boolean;
    experience: number;
    rating: number;
    howManyFeedback? : number;
    price? : number;
    mainPageReview : boolean;
    lessons? : LessonItem[];
    time? : LessonItem[];
}