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
import Exit from './pages/exit'
import UpdateEntry from './pages/update-entry'
import UpdateExit from './pages/update-exit'

/* protect router */
import ProtectedRoute from './utils/private-route'


const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
      <Route path="/new-entry"  element={<ProtectedRoute><Entry /></ProtectedRoute>} />
      <Route path="/exit"  element={<ProtectedRoute><Exit /></ProtectedRoute>} />
      <Route path="/update-entry/:id"  element={<ProtectedRoute><UpdateEntry /></ProtectedRoute>} />
      <Route path="/update-exit/:id"  element={<ProtectedRoute><UpdateExit /></ProtectedRoute>} />


    </Routes>
  </BrowserRouter>
)

export default Routing
