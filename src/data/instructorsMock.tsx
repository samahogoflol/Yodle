import mariiaVovchenkoPhoto from "../assets/instructorsPhoto/mariiaVovchenko.jpg"
import semBoulPhoto from "../assets/instructorsPhoto/semBoul.jpg"
import charlesPiastri from "../assets/instructorsPhoto/Charles Piastri.jpg"
import saraJohnson from "../assets/instructorsPhoto/Sarah Johnson.jpg"
import jakobHamilton from "../assets/instructorsPhoto/Jakob Hamilton.jpg"
import davidRussell from "../assets/instructorsPhoto/David Russell.jpg"
import michaelSmith from "../assets/instructorsPhoto/Michael Smith.jpg"
import philipMoris from "../assets/instructorsPhoto/PhilipMoris.jpg"
import philipMorisInAWork from "../assets/instructorsPhoto/PhilipMoris-inAWork.jpg"
import samantaJosef from "../assets/instructorsPhoto/SamantaJosef.jpg"
import samantaJosefInAWork from "../assets/instructorsPhoto/SamantaJosef-inAWork.jpg"
import PiereBearman from "../assets/instructorsPhoto/PierBearman.jpg"

import type { InstructorsProps } from "../types/instructors"

export const INSTRUCTORS_MOCK_DATA: InstructorsProps[] = [
    {
        id : 1,
        photoMain : mariiaVovchenkoPhoto,
        name : "Mariia Vovchenko ",
        aboutInstructor : "Making skiing fun for kids aged 4-12 with patience, playfulness, and proven results over 5 years of teaching.",
        experience : 6,
        rating : 4.8,
        mainPageReview : true,
    },
    {
        id : 2,
        photoMain : semBoulPhoto,
        name : "Sem Boul",
        aboutInstructor : "Former competitive skier helping beginners discover their passion for the slopes with modern teaching methods.",
        experience : 6,
        rating : 4.9,
         mainPageReview : true,
    },
    {
        id : 3,
        photoMain : charlesPiastri,
        name : "Charles Piastri",
        aboutInstructor : "8+ years teaching in the Alps, specializing in technique refinement for intermediate to advanced skiers.",
        experience : 9,
        rating : 4.8,
        mainPageReview : true,
    },
    {
        id : 4,
        photoMain : saraJohnson,
        name : "Sarah Johnson",
        aboutInstructor : "Great with children and first-timers - I make learning fun and fear-free!",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 8,
        rating : 4.9,
        mainPageReview : false,
        howManyFeedback : 127,
        price : 85,
        isWorking: true,
        time : [
            {nineAM: "9:00 AM"},
        ]
    },
     {
        id : 5,
        photoMain : jakobHamilton,
        name : "Jakob Hamilton",
        aboutInstructor : "Passionate about building confidence and turning snowboard anxiety into pure excitement!",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 5,
        rating : 4.7,
        mainPageReview : false,
        howManyFeedback : 76,
        price : 70,
        isWorking: true,
        time : [
            {nineAM: "9:00 AM"},
            {twoPM : "2:00 PM"}
        ]
    },
     {
        id : 6,
        photoMain : davidRussell,
        name : "David Russell",
        aboutInstructor : "Experienced with kids, seniors, and adaptive skiing - everyone deserves to love the mountain!",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 4,
        rating : 4.9,
        mainPageReview : false,
        howManyFeedback : 51,
        price : 75,
        isWorking: true,
        time : [
            {nineAM: "9:00 AM"},
            {twoPM : "3:00 PM"}
        ]
    },
     {
        id : 7,
        photoMain : michaelSmith,
        photoInAWork : michaelSmith,
        name : "Michael Smith",
        aboutInstructor : "Best ski lesson I've ever had. The instructor tailored everything to my level and I improved more in one day than in years of skiing alone.",
        rating : 4.0,
        mainPageReview : false,
        mainPageReviewSlider : true,
    },
     {
        id : 8,
        photoMain : philipMoris,
        photoInAWork : philipMorisInAWork,
        name : "Philip Moris",
        aboutInstructor : "Professional, friendly, and really knows how to teach. My whole family progressed so much faster than we expected!",
        rating : 5.0,
        mainPageReview : false,
        mainPageReviewSlider : true,
    },
     {
        id : 9,
        photoMain : samantaJosef,
        photoInAWork : samantaJosefInAWork,
        name : "Samanta Josef",
        aboutInstructor : "Our instructor was amazing with our 6-year-old — by day three, she was skiing blue runs with a huge smile!",
        rating : 5.0,
        mainPageReview : false,
        mainPageReviewSlider : true,
    },
     {
        id : 10,
        photoMain : PiereBearman,
        photoInAWork : PiereBearman,
        name : "Piere Bearman",
        aboutInstructor : "Finally conquered my fear of steep slopes thanks to patient guidance and clear technique tips. Highly recommend!",
        rating : 5.0,
        mainPageReview : false,
        mainPageReviewSlider : true,
    },

]