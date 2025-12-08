import mariiaVovchenkoPhoto from "../assets/instructorsPhoto/mariiaVovchenko.jpg"
import semBoulPhoto from "../assets/instructorsPhoto/semBoul.jpg"
import charlesPiastri from "../assets/instructorsPhoto/Charles Piastri.jpg"
import saraJohnson from "../assets/instructorsPhoto/Sarah Johnson.jpg"
import jakobHamilton from "../assets/instructorsPhoto/Jakob Hamilton.jpg"
import davidRussell from "../assets/instructorsPhoto/David Russell.jpg"
import emmaAntonelli from "../assets/instructorsPhoto/Emma Antonelli.jpg"
import tinaVerstappen from "../assets/instructorsPhoto/Tina Verstappen.jpg"
import seanGasly from "../assets/instructorsPhoto/Sean Gasly.jpg"
import nicoNorris from "../assets/instructorsPhoto/Nico Norris.jpg"
import oscarLeclerc from "../assets/instructorsPhoto/Oscar Leclerc.jpg"
import piereBortoleto from "../assets/instructorsPhoto/Piere Bortoleto.jpg"
import rachelOcon from "../assets/instructorsPhoto/Rachel Ocon.jpg"
import carlosGellar from "../assets/instructorsPhoto/Carlos Gellar.jpg"
import fernandoStroll from "../assets/instructorsPhoto/Fernando Stroll.jpg"

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
        photoMain : emmaAntonelli,
        name : "Emma Antonelli",
        aboutInstructor : "Year-round action sports coach — shredding snow in winter, concrete in summer, always pushing your limits.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 4,
        rating : 4.7,
        mainPageReview : false,
        howManyFeedback : 21,
        price : 70,
        isWorking: true,
        time : [
            {nineAM: "9:00 AM"},
            {threePM : "3:00 PM"},
            {fourPm : "4:00 PM"}
        ]
    },
     {
        id : 8,
        photoMain : tinaVerstappen,
        name : "Tina Verstappen",
        aboutInstructor : "15 years switching between boards and skis, teaching the unique flow and technique of each discipline.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 15,
        rating : 4.2,
        mainPageReview : false,
        howManyFeedback : 57,
        price : 95,
        isWorking: true,
        time : [
            {nineAM: "11:00 AM"},
            {threePM : "2:00 PM"},
            {fourPm : "5:00 PM"}
        ]
    },
    {
        id : 9,
        photoMain : seanGasly,
        name : "Sean Gasly",
        aboutInstructor : "Dual-certified in skiing and snowboarding, helping families where everyone rides differently enjoy the mountain together.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 5,
        rating : 4.6,
        mainPageReview : false,
        howManyFeedback : 17,
        price : 55,
        isWorking: true,
        time : [
            {nineAM: "10:00 AM"},
            {threePM : "3:00 PM"},
            {fourPm : "5:00 PM"}
        ]
    },
    {
        id : 10,
        photoMain : nicoNorris,
        name : "Nico Norris",
        aboutInstructor : "From powder days to park sessions, I coach skiers and snowboarders of all styles and skill levels.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 5,
        rating : 4.8,
        mainPageReview : false,
        howManyFeedback : 25,
        price : 65,
        isWorking: true,
        time : [
            {nineAM: "10:00 AM"},
            {threePM : "2:00 PM"},
            {fourPm : "4:00 PM"}
        ]
    },
     {
        id : 11,
        photoMain : oscarLeclerc,
        name : "Oscar Leclerc",
        aboutInstructor : "Fluent in both snow sports — whether you're on one plank or two, I'll get you carving with confidence.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 8,
        rating : 4.4,
        mainPageReview : false,
        howManyFeedback : 36,
        price : 70,
        isWorking: true,
        time : [
            {nineAM: "10:00 AM"},
            {threePM : "2:00 PM"},
            {fourPm : "4:00 PM"}
        ]
    },
     {
        id : 12,
        photoMain : "",
        name : "Alexander Lawson",
        aboutInstructor : "Multi-sport instructor specializing in helping skiers transition to snowboarding (and boarders curious about skiing).",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 4,
        rating : 4.1,
        mainPageReview : false,
        howManyFeedback : 29,
        price : 50,
        isWorking: true,
        time : [
            {nineAM: "8:00 AM"},
            {threePM : "11:00 AM"},
            {fourPm : "4:00 PM"}
        ]
    },
    {
        id : 13,
        photoMain : piereBortoleto,
        name : "Piere Bortoleto",
        aboutInstructor : "Teaching couples and friends with different preferences — ensuring everyone progresses together on the mountain.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 6,
        rating : 3.9,
        mainPageReview : false,
        howManyFeedback : 35,
        price : 50,
        isWorking: true,
        time : [
            {nineAM: "9:00 AM"},
            {threePM : "12:00 PM"},
            {fourPm : "5:00 PM"}
        ]
    },
    {
        id : 14,
        photoMain : rachelOcon,
        name : "Rachel Ocon",
        aboutInstructor : "Expert in freestyle terrain parks for both skiers and snowboarders, making jumps and rails accessible and safe.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 8,
        rating : 4.1,
        mainPageReview : false,
        howManyFeedback : 38,
        price : 65,
        isWorking: true,
        time : [
            {nineAM: "10:00 AM"},
            {threePM : "3:00 PM"},
            {fourPm : "5:00 PM"}
        ]
    },
    {
        id : 15,
        photoMain : carlosGellar,
        name : "Carlos Gellar",
        aboutInstructor : "Versatile mountain guide comfortable coaching any riding style, from mellow cruising to aggressive freeriding.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 4,
        rating : 4.2,
        mainPageReview : false,
        howManyFeedback : 28,
        price : 55,
        isWorking: true,
        time : [
            {nineAM: "8:00 AM"},
            {threePM : "4:00 PM"},
            {fourPm : "5:00 PM"}
        ]
    },
    {
        id : 16,
        photoMain : fernandoStroll,
        name : "Fernando Stroll",
        aboutInstructor : "Certified in both disciplines with a focus on biomechanics, helping you move efficiently whether on skis or board.",
        lessons : [
            {skiing : "Skiing"},
            {snowboarding : "Snowboarding"}
        ],
        experience : 3,
        rating : 4.3,
        mainPageReview : false,
        howManyFeedback : 24,
        price : 55,
        isWorking: true,
        time : [
            {nineAM: "8:00 AM"},
            {threePM : "4:00 PM"},
            {fourPm : "5:00 PM"}
        ]
    },
]