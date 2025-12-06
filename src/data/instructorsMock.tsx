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
        aboutInstructor : "Making skiing fun for kids aged 4-12 with patience, playfulness, and proven results over 10 years of teaching.",
        experience : 4,
        rating : 4.8,
        mainPageReview : true,
    },
    {
        id : 2,
        photo : semBoulPhoto,
        name : "Sem Boul",
        aboutInstructor : "Former competitive skier helping beginners discover their passion for the slopes with modern teaching methods.",
        experience : 2,
        rating : 5,
         mainPageReview : true,
    },
    {
        id : 3,
        photo : charlesPiastri,
        name : "Charles Piastri",
        aboutInstructor : "8+ years teaching in the Alps, specializing in technique refinement for intermediate to advanced skiers.",
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