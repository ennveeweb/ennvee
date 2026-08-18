import Navbar from "@/components/Navbar"; 
import ThumbnailSlider from "@/components/ThumbnailSlider"; 
import Expertise_Section from "@/components/Expertise_Section"; 
import WhyUs_Section from "@/components/WhyUs_Section"; 
import Offerings_Section from "@/components/Offerings_Section";
import Process_Section from "@/components/Process_Section";
import Innovations_Section from "@/components/Innovations_Section";
import Team_Section from "@/components/Team_Section";
import SuccessStories_Section from "@/components/SuccessStories_Section";
import Contact_Section from "@/components/Contact_Section";
import Footer from "@/components/Footer";


export default function Page() {
  return (

      <>
      <Navbar /> 
      <ThumbnailSlider /> 
      <Expertise_Section />
      <WhyUs_Section />
      <Offerings_Section />
      <Process_Section />
      <Innovations_Section />
      <Team_Section />
      <SuccessStories_Section />
      <Contact_Section />
      <Footer />
      </>

  );
}