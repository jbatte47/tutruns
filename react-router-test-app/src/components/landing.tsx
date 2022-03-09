import { Link } from 'react-router-dom';
import { ReactComponent as LandingLogo } from '../svg/astronaut.svg';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LandingLogo className="App-logo" />
        <p>
          Head to <Link to="/router">/router</Link> to start experimenting with react-router v6!
        </p>
      </header>
    </div>
  );
};

export default LandingPage;
