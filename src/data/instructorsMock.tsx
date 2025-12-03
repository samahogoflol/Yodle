import mariiaVovchenkoPhoto from "../assets/instructorsPhoto/mariiaVovchenko.jpg"
import semBoulPhoto from "../assets/instructorsPhoto/semBoul.jpg"


interface InstructorsProps {
    id: number;
    photo: string;
    name: string;
    aboutInstructor: string;
    experience: string;
    rating: string;
}


export const INSTRUCTORS_MOCK_DATA: InstructorsProps[] = [
    {
        id : 1,
        photo : mariiaVovchenkoPhoto,
        name : "Mariia Vovchenko ",
        aboutInstructor : "Lorem ipsum dolor sit amet consectetur. Pellentesque dis id.",
        experience : "4 years",
        rating : "4.8"
    },
    {
        id : 2,
        photo : semBoulPhoto,
        name : "Sem Boul",
        aboutInstructor : "Lorem ipsum dolor sit amet consectetur. Pellentesque dis id.",
        experience : "2 years",
        rating : "5"
    },
    {
        id : 3,
        photo : semBoulPhoto,
        name : "Charles Piastri",
        aboutInstructor : "Lorem ipsum dolor sit amet consectetur. Pellentesque dis id.",
        experience : "6 years",
        rating : "4.9"
    }
]