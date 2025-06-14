
import { useState } from 'react';
import CountryList from '../Components/CountryList';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SliderPortion from '../Components/SliderPortion';
import Welcome from '../Components/Welcome';
import './Home.css';

const Home = () => {
  const [countyFilter, setCountyFilter] = useState<string>('1');

  return (
    <div className='main-container px-20 py-5'>
      <Header setCountyFilter={setCountyFilter} />
      <Welcome />
      <SliderPortion />
      <CountryList countyFilter={countyFilter} />
      <Footer />
    </div>
  )
}

export default Home