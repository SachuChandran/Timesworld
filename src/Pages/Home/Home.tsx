
import CountryList from '../Components/CountryList';
import Header from '../Components/Header';
import SliderPortion from '../Components/SliderPortion';
import Welcome from '../Components/Welcome';
import './Home.css';

const Home = () => {
  return (
    <div className='px-20 py-5'>
      <Header />
      <Welcome />
      <SliderPortion />
      <CountryList />
    </div>
  )
}

export default Home