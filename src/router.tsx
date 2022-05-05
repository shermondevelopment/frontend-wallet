import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

/* pages */
import Signin from './pages/signin/signin';


const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  </BrowserRouter>
)

export default Routing
