import Container from "../Shared/Container";
import image1 from "../../assets/about/aboutIcon.png";
import image2 from "../../assets/about/about1.jpg";
import image3 from "../../assets/about/about2.jpg";
import image4 from "../../assets/about/about3.png";
import image5 from "../../assets/about/about4.jpg";

import SubHeading from "../Shared/SubHeading";
import Heading from "../Shared/Heading";
import AnimatedButton from "../Shared/Navbar/AnimatedButton";
import { Parallax } from "react-parallax";

const AboutBuilding = () => {
  return (
    <div className="bg-[#F8F8F8] md:py-24 pt-5">
      <Container>
        <div className="text-center mb-10">
          <Heading label={"About The Building"} textSize={"lg"}></Heading>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 px-5">
          <div className="grid grid-cols-1 place-items-center md:place-items-start gap-5 md:gap-0 md:grid-cols-2 md:grid-rows-2 md:gap-x-8">
            {/* card-1 */}
            <div className="w-64 p-5 md:mb-8 flex flex-col items-center bg-white md:justify-self-end rounded">
              {/* icon */}
              <img className="" src={image1} alt="" />

              {/* heading */}
              <SubHeading label="Strong Team"></SubHeading>
              {/* intro */}
              <p className="text-justify py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nesciunt recusandae totam vero quo molestias repellendus
                architecto atque, enim quam.
              </p>
            </div>

            {/* card-2 */}
            <div className="w-64 md:self-end">
              <img className="rounded" src={image2} alt="" />
            </div>

            {/* card-3 */}
            <div className=" w-64 md:justify-self-end md:self-start">
              <img className="rounded" src={image3} alt="" />
            </div>

            {/* card-4 */}
            <div className="w-64 md:mt-8 rounded px-5 flex flex-col items-center bg-[#222E3C] text-white">
              {/* icon */}
              <img className="" src={image4} alt="" />

              {/* heading */}
              <SubHeading label="Luxury Apartment"></SubHeading>
              {/* intro */}
              <p className="text-justify py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nesciunt recusandae totam vero quo molestias repellendus
                architecto atque, enim quam.
              </p>
            </div>
          </div>

          <div
            className="flex-1"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
          >
            <div className="w-full h-full content-center text-white p-10 space-y-5">
              <SubHeading label={"ABOUT US"}></SubHeading>
              <Heading
                label={"Discover Our Apartments"}
                textSize="lg"
              ></Heading>
              <p className="text-justify text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dolorem sit consequuntur expedita exercitationem consectetur
                debitis fuga dolor voluptate perspiciatis neque amet eos
                aspernatur aliquam non, magnam illo repudiandae commodi saepe
                excepturi pariatur repellendus deserunt nam? Sequi, quis,
                commodi deleniti et provident placeat distinctio non incidunt
                fugit nesciunt quos! Officia inventore neque hic qui unde
                laborum ab doloribus culpa officiis numquam consequatur
                quibusdam perspiciatis sint et fuga itaque fugit a, cupiditate
                delectus nulla voluptatibus adipisci, harum aut? Maiores, eum
                deleniti?
              </p>
              <AnimatedButton label="Book Now"></AnimatedButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutBuilding;
