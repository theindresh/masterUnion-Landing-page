import ExperienceEngage from '../src/components/Experience Engage/ExperienceEngage'
import MeetMasters from '../src/components/Masters/MeetMasters'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Footer from '../src/components/Footer/Footer'
import NewsTab from '../src/components/News Section/NewsTab'
import Community from './components/Community/Community'


function App() {
  return (
    <>
      <Header />
      <hr style={{ color: "white" }} />
      <Hero />
      <ExperienceEngage />
      <MeetMasters />
      <NewsTab />
      <Community />
      <Footer />
    </>
  );
}

export default App;
