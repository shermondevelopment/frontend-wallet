import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

/* pages */
import Signin from './pages/signin';
import Signup from './pages/signup'


const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
)

export default Routing
