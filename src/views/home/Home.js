import React from "react";
import HomeTestimonials from "./components/HomeTestimonials";
import HomeBlogs from "./components/HomeBlogs";

import SectionHeading from "./components/SectionHeading";
import ServCard from "./components/ServCard";

import ButtonIcon from "./components/ButtonIcon";





const HomeStoryButton = [
  {
    id: 1,
    buttonTitle: "Enquiry Form",
    buttonUrl: "",
  },
  {
    id: 2,
    buttonTitle: "Enquiry Form 2",
    buttonUrl: "",
  },
  {
    id: 3,
    buttonTitle: "Enquiry Form 3",
    buttonUrl: "",
  },
];

const ServicesCard = [
  {
    id: 1,
    title: "Tutor Profiles",
    icon: "Icon 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris...",
    iconUrl: "/images/srv-icon-1.png",
  },
  {
    id: 2,
    title: "Tutoring Services",
    icon: "Icon 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris 3...",
    iconUrl: "/images/srv-icon-2.png",
  },
  {
    id: 3,
    title: "University Application",
    icon: "Icon 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris 1...",
    iconUrl: "/images/srv-icon-3.png",
  },
  {
    id: 4,
    title: "Tutor Listing",
    icon: "Icon 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris 2 ...",
    iconUrl: "/images/srv-icon-4.png",
  },
];



function Home() {
  // let title ="test Name"
  return (
    <>
      <section className="header-wrapper">
        <div className="header-banner">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-lg-6 col-xxl-5 align-self-center">
                <div className="pe-5 pe-lg-4">
                  <h3 className="text-uppercase">
                    LFO UK I LONDON FAMILY OFFICE
                  </h3>
                  <h2 className="mb-3">
                    Educational
                    <br /> Consultancy & <br />
                    <span className="text-maroon">Tutoring</span>
                  </h2>
                  <p className="mb-2">
                    We are primarily an education consultancy, offering services
                    to high net-worth clients throughout China and the UK.{" "}
                  </p>
                  <a className="btn btn-primary mt-2 px-5" href="#">
                    REGISTER YOUR INTEREST
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xxl-7 text-end d-none d-lg-block">
                <img
                  src="images/header-banner.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-sec pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 text-left mb-4 mb-lg-0">
              <img src="images/about-img.png" className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-lg-6 align-self-center pb-5">
              <div className="sec-title">
                <SectionHeading
                  secHeading="ABOUT OUR HISTORY"
                  secSubHeading={[
                    "We Are Primarily An",
                    <br />,
                    "Education Consultancy",
                  ]}
                />
              </div>
              <p className="text-dark fs-18 fw-bold">
                offering services to high net-worth clients <br /> throughout
                China and the UK.
              </p>
              <p className="text-light ">
                Our aim is to obtain school placements for our clients’ children
                within the UK’s leading private schools. In addition to this, we
                also offer an application service for schools and universities
                in the UK and USA.{" "}
              </p>
              {/* {
                          console.log(HomeStoryButton)
                        } */}
              {HomeStoryButton.map((item) => (
                <ButtonIcon key={item.id} data={item} />
              ))}

              {/* <a href="#_" className="btn btn-secondary mb-2 mb-lg-3 me-3 me-lg-3"><i><img src="images/phone-icon.png" alt="" /></i> + 123 456 7890</a>
                    <a href="#_" className="btn btn-secondary mb-2 mb-lg-3 me-3 me-lg-0"><i><img src="images/research-icon.png" alt="" /></i> Enquiry Form</a>
                    <a href="#_" className="btn btn-primary mb-2 mb-lg-3"><i><img src="images/whatsapp-icon.png" alt="" /></i>Whatsapp</a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="section services-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title mb-3 mb-lg-5">
                <SectionHeading
                  secHeading="SPECIAL FEATURES"
                  secSubHeading="SPECIAL FEATURES"
                />
              </div>
            </div>
            {ServicesCard.map((item) => (
              <div
                className="col-12 col-lg-6 col-xl-5 mb-3 mb-lg-5"
                key={item.id}
              >
                <ServCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section stories-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8 mx-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="sec-title mb-2">
                    <SectionHeading
                      secHeading="SUCCESS STORIES"
                      secSubHeading="Next Step Foundation"
                    />
                  </div>
                  <p className="text-center">
                    Seasons let creeping seasons was green a tree called bring
                    created Shall made whales very green may above dominion
                    seed. Day wo out. Doesn creeping can called she very. Beast
                    creeping. air secod without, good shall two forth a stars
                    every have won't seed be forth Tree fruitful may May light
                    that thating
                  </p>

                  <a href="#_" className="text-uppercase btn btn-primary">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeTestimonials />
      <HomeBlogs />
    </>
  );
}

export default Home;
