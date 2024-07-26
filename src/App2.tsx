import './index.css'
import './App.css'
import lol from './assets/lol5.jpg';
import wildrift from './assets/wildrift.jpg';
import valo from './assets/valo2.jpg';
import lor from './assets/lor.jpg';
import teamfight from './assets/teamfight.jpg';
import BackgroundWrap from './BackgroundWrap'
import Navbar from './Navbar';
import Hero from './Hero';
import News from './News';
import Games from './Games';

const App2: React.FC = () => {
    const images = [lol, valo, teamfight, wildrift, lor];
    return (
        <div>
            <Navbar />
            <Hero />
            <News />
            <Games images={images} />
        </div>
    )
}

export default App2