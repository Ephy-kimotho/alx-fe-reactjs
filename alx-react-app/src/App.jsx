import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Ephy" age="20" bio="Loves coding and listening to music"/>
    
    </>
  );
}

export default App;
