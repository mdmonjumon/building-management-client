import Banner from "../../components/Home/Banner";
import AboutBuilding from "../../components/Home/AboutBuilding";
import VisitUs from "../../components/Home/VisitUs";
import Container from "../../components/Shared/Container";
import Coupon from "../../components/Home/Coupon";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Coupon></Coupon>

      <AboutBuilding></AboutBuilding>

      <Container>
        <VisitUs></VisitUs>
      </Container>
    </div>
  );
};

export default Home;
