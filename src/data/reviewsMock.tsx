import type { Reviews } from "../types/reviews"

import michaelSmithMainPhoto from "../assets/reviews/Michael Smith.jpg"
import philipMorisMainPhoto from "../assets/reviews/PhilipMoris.jpg"
import philipMorisLessonPhoto from "../assets/reviews/PhilipMoris-inALesson.jpg"
import samantaJosefMainPhoto from "../assets/reviews/SamantaJosef.jpg"
import samantaJosefLessonPhoto from "../assets/reviews/SamantaJosef-inALesson.jpg"
import piereBearmanMainPhoto from "../assets/reviews/PierBearman.jpg"


export const REVIEWS_MOCK_DATA:Reviews[] = [
    {
        id : 1,
        name : "Michael Smith",
        review : "Best ski lesson I've ever had. The instructor tailored everything to my level and I improved more in one day than in years of skiing alone.",
        grade : 4.0,
        photoMain : michaelSmithMainPhoto,
        photoInALesson : michaelSmithMainPhoto
    },
    {
        id : 2,
        name : "Philip Moris",
        review : "Professional, friendly, and really knows how to teach. My whole family progressed so much faster than we expected!",
        grade : 5.0,
        photoMain : philipMorisMainPhoto,
        photoInALesson : philipMorisLessonPhoto
    },
    {
        id : 3,
        name : "Samanta Josef",
        review : "Our instructor was amazing with our 6-year-old — by day three, she was skiing blue runs with a huge smile!",
        grade : 5.0,
        photoMain : samantaJosefMainPhoto,
        photoInALesson : samantaJosefLessonPhoto
    },
     {
        id : 4,
        name : "Piere Bearman",
        review : "Finally conquered my fear of steep slopes thanks to patient guidance and clear technique tips. Highly recommend!",
        grade : 5.0,
        photoMain : piereBearmanMainPhoto,
        photoInALesson : piereBearmanMainPhoto
    }
] 