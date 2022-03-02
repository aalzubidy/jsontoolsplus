import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from '../Components/NotFound';
import JSONPath from '../Components/JSONPath';
import SchemaValidator from "../Components/SchemaValidator";
import SchemaGenerator from "../Components/SchemaGenerator";
import JSONBeautify from "../Components/JSONBeautify";
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
        <Route exact path={Paths.schemaValidator} element={<SchemaValidator />} />
        <Route exact path={Paths.schemaGenerator} element={<SchemaGenerator />} />
        <Route exact path={Paths.jsonBeautify} element={<JSONBeautify />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </Router>
  )
};

export default AppRouter;
