type LessonItem = {
    [key: string]: string; 
}

export interface InstructorsProps {
    id: number;
    photoMain?: string;
    photoInAWork?: string;
    name: string;
    aboutInstructor: string;
    isWorking?: boolean;
    experience?: number;
    rating: number;
    howManyFeedback? : number;
    price? : number;
    mainPageReview?: boolean;
    lessons? : LessonItem[];
    time? : LessonItem[];
    mainPageReviewSlider? : boolean;
}