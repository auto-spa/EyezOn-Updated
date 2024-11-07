import About from "./components/About/about";
import AboutU from "./components/About/AboutU";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import ChooseUsU from "./components/ChooseUs/ChooseUsU";
import ContactForm from "./components/Contact/ContactU";
import Featured from "./components/Featured/Feature";
import FooterU from "./components/Footer/footerU";

import Gallery from "./components/GalleryHome/gallery";
import HorizontalGallery from "./components/GalleryHome/galleryu";
import GalleryU from "./components/GalleryHome/galleryu";

import Hero from "./components/Hero/Hero";
import HeroU from "./components/Hero/HeroU";

import Package from "./components/Package/package";
import Quote from "./components/Quote/qoute";
import FlipCardComponent from "./components/ServicesCard/servicecard";
import ServiceCardsU from "./components/ServicesCard/ServicesCardU";

import Testimonial from "./components/Testimonial/testimonial";
import TestimonialsU from "./components/Testimonial/TestimonialU";




export default function Home() {
  return (
   <>
{/* <Navbar/> */}
{/* <Hero/> */}
<HeroU/>
{/* <About/> */}
{/* <FlipCardComponent/> */}
<ServiceCardsU/>
{/* <Quote/> */}
<Featured/>
<AboutU/>
{/* <Package/> */}
{/* <ChooseUs/> */}
<ChooseUsU/>
{/* <Testimonial/> */}
{/* <Gallery/> */}
<HorizontalGallery/>
<TestimonialsU/>
<ContactForm/>
{/* <FooterU/> */}


{/* <Footer/> */}
   </>
  );
}
