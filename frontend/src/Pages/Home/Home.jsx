import CollegeCardSection from "../../Components/Cardsection/CollegeCardSection";
import Hero from "../../Components/Hero/Hero";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import ResearchPaper from "../../Components/Research/ResearchPaper";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <CollegeCardSection />
      <PhotoGallery />
      <ResearchPaper />
      <Review />
    </div>
  );
};

export default Home;
