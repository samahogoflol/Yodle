import mariiaVovchenkoPhoto from "../assets/instructorsPhoto/mariiaVovchenko.jpg"
import semBoulPhoto from "../assets/instructorsPhoto/semBoul.jpg"
import charlesPiastri from "../assets/instructorsPhoto/Charles Piastri.jpg"
import saraJohnson from "../assets/instructorsPhoto/Sarah Johnson.jpg"
import jakobHamilton from "../assets/instructorsPhoto/Jakob Hamilton.jpg"
import davidRussell from "../assets/instructorsPhoto/David Russell.jpg"
import type { InstructorsProps } from "../types/instructors"

export const INSTRUCTORS_MOCK_DATA: InstructorsProps[] = [
    {
        id : 1,
        photo : mariiaVovchenkoPhoto,
        name : "Mariia Vovchenko ",
        aboutInstructor : "Lorem ipsum dolor sit amet consectetur. Pellentesque dis id.",
        experience : 4,
        rating : 4.8,
        mainPageReview : true,
    },
    {
        id : 2,
        photo : semBoulPhoto,
        name : "Sem Boul",
        aboutInstructor : "Lorem ipsum dolor sit amet consectetur. Pellentesque dis id.",
        experience : 2,
        rating : 5,
         mainPageReview : true,
    },
    {
        id : 3,
        photo : charlesPiastri,
        name : "Charles Piastri",
        aboutInstructor : "Lorem ipsum dolor sit amet consectetur. Pellentesque dis id.",
        experience : 6,
        rating : 4.9,
        mainPageReview : true,
    },
    {
        id : 4,
        photo : saraJohnson,
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
        photo : jakobHamilton,
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
        photo : davidRussell,
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
    }
]