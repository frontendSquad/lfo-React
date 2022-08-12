import "./App.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/dropdown-menu.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/css/style.css';



import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/home/Home';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
export default App;





// import Header from './components/Header';

// import HeaderBanner from './components/HeaderBanner';
// import AboutUsHome from './components/AboutUsHome';
// import HomeServices from './components/HomeServices';
// import HomeStories from './components/HomeStories';
// import HomeTestimonials from './components/HomeTestimonials';
// import HomeBlogs from './components/HomeBlogs';
// import Footer from './components/Footer';
/*
const servicesCard = [
  {
    icon: "test Icon",
    title: "Tutor Profiles",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris..."
  },
  {
    icon: "test Icon",
    title: "Tutoring Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris..."
  },
  {
    icon: "test Icon",
    title: "University Application",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris..."
  },
  {
    icon: "test Icon",
    title: "Tutor Listing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris..."
  },
]
*/
