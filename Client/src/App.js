import './App.css';
import Home from './pages/homemodule/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Watch from './pages/watch-content/Watch';
import { BrowserRouter as Router, Routes, Route , Navigate  } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
      <Route exact path="/movies" element={user ? <Home type="movie" /> : <Navigate to="/register" />} />
      <Route exact path="/series" element={user ? <Home type="series" /> : <Navigate to="/register" />} />
      <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route exact path="/register" element={!user ? <SignUp /> : <Navigate to="/" />} />
      <Route exact path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
