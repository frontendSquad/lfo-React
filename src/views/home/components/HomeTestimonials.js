import SectionHeading from "./SectionHeading";
import TestimonialCard from "../../../components/TestimonialCard";
import { FaBandcamp, FaAppStore } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";
// // // Owl Carousel
import OwlCarousel from "react-owl-carousel";


const blogOptions = {
  loop: true,
  margin: 20,
  nav: true,
  arrow: false,
  dots: false,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1300: {
      items: 3,
    },
  },
};

const testimonialCardData = [
  {
    id: 1,
    title: "Kevin Martin 1",
    text: "Text Text Enter Here",
  },
  {
    id: 2,
    title: "Kevin Martin 2",
    text: "Text Text Enter Here",
  },
  {
    id: 3,
    title: "Kevin Martin 3",
    text: "Text Text Enter Here",
  },
  {
    id: 4,
    title: "Kevin Martin 4",
    text: "Text Text Enter Here",
  },
  {
    id: 5,
    title: "Kevin Martin 5",
    text: "Text Text Enter Here",
  },
];

function HomeTestimonials() {
  return (
    <section id="client-review" className="section client-review">
        
      <div className="container-fluid px-3 px-md-5">
        <div className="row">
          <div className="col-12">
            <div className="sec-title mb-2 text-center">
              <SectionHeading
                secHeading="TESTIMONIALS"
                secSubHeading="What Client Say"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <OwlCarousel className="client-carousel owl-theme owl-carousel" {...blogOptions}>
              {testimonialCardData.map((item) => (
                  <TestimonialCard 
                  key={item.id} 
                  data={item} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeTestimonials;
