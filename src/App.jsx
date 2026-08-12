import Linkedin_Card from "./components/Linkedin_Card";
import Netflix from "./components/Netflix_Navbar";
import Youtube_Sidebar from "./components/Youtube_Sidebar";
import Github_User_Card from "./components/GitHub_User_Card";
import Stripe_Pricing from "./components/Stripe";
import Airbnb_Listing from "./components/Airbnb";

const App = () => {
  return (
    <div>
      <Netflix/> 
      <Youtube_Sidebar/>  
      <Linkedin_Card/>
      <Github_User_Card/>
      <Stripe_Pricing/>
      <Airbnb_Listing/>
    </div>
  )
}

export default App

