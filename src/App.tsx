import Navbar from './Navbar'
import Hero from './Hero'
import News from './News'
import Games from './Games'
import './index.css'
import './App.css'
import lol from './assets/lol5.jpg';
import wildrift from './assets/wildrift.jpg';
import valo from './assets/valo2.jpg';
import lor from './assets/lor.jpg';
import teamfight from './assets/teamfight.jpg';
import BackgroundWrap from './BackgroundWrap'

const App: React.FC = () => {
    const images = [lol, valo, teamfight, wildrift, lor];
    return (
        <div>
            <div className='landing-container'>
                <Navbar />
                <Hero />
                <News />
                <Games images={images} />
            </div>
        </div>
    )
}

export default App