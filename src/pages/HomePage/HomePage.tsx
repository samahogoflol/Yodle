import HeroSection from "../../components/HeroSection/HeroSection";
import ForYouBlock from "../../components/ForYouBlock/ForYouBlock";
import HowToBook from "../../components/HowToBook/HowToBook";
import OurPartners from "../../components/OurPartners/OurPartners";
import ReviewsSwiper from "../../components/Reviews/ReviewsSwiper";



const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <ForYouBlock/>
            <HowToBook/>
            <OurPartners/>
            <ReviewsSwiper/>
        </div>
    )
}

export default HomePage;