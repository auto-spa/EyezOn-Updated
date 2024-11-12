
import AboutU from "./components/About/AboutU";

import ChooseUsU from "./components/ChooseUs/ChooseUsU";
import ContactForm from "./components/Contact/ContactU";
import Featured from "./components/Featured/Feature";


import HorizontalGallery from "./components/GalleryHome/galleryu";



import HeroU from "./components/Hero/HeroU";

import Package from "./components/Package/package";

import ServiceCardsU from "./components/ServicesCard/ServicesCardU";


import TestimonialsU from "./components/Testimonial/TestimonialU";




export default function Home() {
  return (
   <>

<HeroU/>

<ServiceCardsU/>

<Featured/>
<AboutU/>


<ChooseUsU/>

<HorizontalGallery/>
<TestimonialsU/>
<Package/>
<ContactForm/>




   </>
  );
}
