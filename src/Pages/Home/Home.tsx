
import CountryList from '../Components/CountryList';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SliderPortion from '../Components/SliderPortion';
import Welcome from '../Components/Welcome';
import './Home.css';

const Home = () => {
  return (
    <div className='main-container px-20 py-5'>
      <Header />
      <Welcome />
      <SliderPortion />
      <CountryList />
      <Footer />
    </div>
  )
}

export default Home