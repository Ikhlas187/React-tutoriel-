// on compose "rsc" pour avoir la struture de page d'un composant React comme ci-dessous
// Ca correspond à ! en html  
import React from 'react';

const DocReactPerso = () => {
    return (
        <div>
            
        </div>
    );
};

export default DocReactPerso;

// Dans l'app.js on importe BrowserRouter, Route, Routes from react-router-dom pour faire du routage.On lui dit en quelque sorte ce qu'il doit afficher en fonction de l'url
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import React from 'react';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="*" element={<Home />}></Route> * signifie que pour toute autre route non définie on affiche le composant Home */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
// En mettant {<Home />} on dit qu'on veut afficher le composant Home pour la route "/"
// Pour la route "/about" on affiche le composant About
// Nb:Il faut toujours importer les pages qu'on veut utiliser dans l'app.js mais pour gagner du temps en mettant element={<Home />} vscode importe automatiquement le composant Home si on a bien créé le fichier Home.js dans le dossier pages 

 <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          ></NavLink>

{/* On utilise NavLink de react-router-dom pour faire la navigation entre les pages           */}

{/* Les images importées dans un composant React doivent être dans le dossier public pour être accessibles
// On peut aussi les mettre dans le dossier src mais il faut les importer comme un module */}