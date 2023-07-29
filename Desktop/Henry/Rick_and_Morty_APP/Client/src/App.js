import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/Views/About";
import Detail from "./components/Views/Detail";
import Home from "./components/Views/Home";
import Landing from "./components/Views/Landing";
import Nav from "./components/Nav";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const EMAIL = "example@email.com";
  const PASSWORD = "example123";

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  const onClose = (id) => {
    const newCharactersList = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(() => [...newCharactersList]);
  };

  const login = ({ email, password }) => {
    if (email === EMAIL && password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else alert("Usuario o contraseña incorrectos");
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Landing login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route
          path="/favorites"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
