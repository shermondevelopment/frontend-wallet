import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


/* pages */
import Signin from './pages/signin'
import Signup from './pages/signup'
import Entry from './pages/entry'
import Home from './pages/home'


const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new-entry"  element={<Entry />} />
    </Routes>
  </BrowserRouter>
)

export default Routing
