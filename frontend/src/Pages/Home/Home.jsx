import CollegeCardSection from "../../Components/Cardsection/CollegeCardSection";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import ResearchPaper from "../../Components/Research/ResearchPaper";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <div>
      <CollegeCardSection />
      <PhotoGallery />
      <ResearchPaper />
      <Review />
    </div>
  );
};

export default Home;
