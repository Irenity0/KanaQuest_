import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorksSection";
import ResourcesSection from "../components/ResourcesSection";
import SuccessSection from "../components/SuccessSection ";

const HomePage = () => {
    return (
        <section className="w-11/12 mx-auto space-y-12">
            <Hero></Hero>
            <AboutUs></AboutUs>
            <SuccessSection></SuccessSection>
            <HowItWorksSection></HowItWorksSection>
            <ResourcesSection></ResourcesSection>
        </section>
    );
};

export default HomePage;