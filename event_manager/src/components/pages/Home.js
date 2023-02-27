import Navbar from '../Navbar';
import './Home.css';
import privEvents from './privEvents';
import pubEvents from './pubEvents';
import rsoEvents from './rsoEvents';

function Home() {
    let Component
    switch (window.location.pathname) {
        case "/home/priv-events":
            Component = privEvents;
            break;
        case "/home/pub-events":
            Component = pubEvents;
            break;
        case "/home/RSO-events":
            Component = rsoEvents;
            break;
        default:
            Component = privEvents;
    }
  return (
    <>
        <Navbar />
        <Component />
    </>
  );
}

export default Home;
