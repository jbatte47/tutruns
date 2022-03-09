import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./components/landing";
import RouterExperiments from "./components/router-experiments";
import SecretRouterExperiments from "./components/secret-router-experiment";
import NotFound from "./components/not-found";

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/secret/:someInternalId" element={<SecretRouterExperiments />} />
        <Route path="/router*" element={<RouterExperiments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
