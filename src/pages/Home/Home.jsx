import Banner from "../../components/Home/Banner";
import AboutBuilding from "../../components/Home/AboutBuilding";
import VisitUs from "../../components/Home/VisitUs";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <AboutBuilding></AboutBuilding>

      <Container>
        <VisitUs></VisitUs>
      </Container>
    </div>
  );
};

export default Home;
