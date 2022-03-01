import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from '../Components/NotFound';
import JSONPath from '../Components/JSONPath';
import Paths from './Paths';
import Navbar from '../Components/Navbar';
import SiteFooter from "../Components/SiteFooter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={Paths.home} element={<JSONPath />} />
        <Route exact path={Paths.jsonPath} element={<JSONPath />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </Router>
  )
};

export default AppRouter;
