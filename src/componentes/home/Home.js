import React, { Fragment, useState } from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { useHistory } from "react-router-dom";

const Home = () => {

    const [datos, setDatos] = useState({
        usuario: '',
        categoria: '',
        dificultad: ''
    })

    const handleInputChange = (event) => {    
        setDatos({
            ...datos,
            [event.target.name]: event.target.value

        })
    }
    
    const enviarDatos = (event) => {
        event.preventDefault();
        let user = datos.usuario
        let category = datos.categoria
        let difficult = datos.dificultad
        history.push(`/Home/Game/${user}/${category}/${difficult}`);
    }

    let history = useHistory();

    return (
        <Fragment>
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="card">
                    <form onSubmit={enviarDatos}>
                        <div class="form-group">
                            <br />
                            <br />
                            <label>Usuario</label>
                            <input type="text" name="usuario" class="form-control" id="usuario" placeholder="Ingrese usuario"
                                onChange={handleInputChange} required
                            />
                        </div>
                        <br></br>
                        <div class="form-group">
                            <label for="selectCategory">Categoría</label>
                            <select class="form-control" id="categoria" name="categoria" onChange={handleInputChange} required>
                                <option value="">Seleccionar Categoría</option>
                                <option value="9">General Knowledge</option>
                                <option value="10">Entertainment: Books</option>
                                <option value="11">Entertainment: Film</option>
                                <option value="12" >Entertainment: Music</option>
                                <option value="13" >Entertainment: Musicals-Theatres</option>
                                <option value="14" >Entertainment: Television</option>
                                <option value="15" >Entertainment: Video Games</option>
                                <option value="16" >Entertainment: Board Games</option>
                                <option value="17" >Science-Nature</option>
                                <option value="18" >Science: Computers</option>
                                <option value="19" >Science: Mathematics</option>
                                <option value="20" >Mythology</option>
                                <option value="21" >Sports</option>
                                <option value="22" >Geography</option>
                                <option value="23" >History</option>
                                <option value="24" >Politics</option>
                                <option value="25" >Art</option>
                                <option value="26" >Celebrities</option>
                                <option value="27" >Animals</option>
                                <option value="28" >Vehicles</option>
                                <option value="29" >Entertainment: Comics</option>
                                <option value="30" >Science: Gadgets</option>
                                <option value="31" >Entertainment: Japanese Anime-Manga</option>
                                <option value="32" >Entertainment: Cartoon-Animations</option>
                            </select>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <label for="selectCategory">Dificultad</label>
                            <select class="form-control" id="dificultad" name="dificultad" onChange={handleInputChange} required>
                                <option value="">Seleccionar Dificultad</option>
                                <option value="easy">Facil</option>
                                <option value="medium">Media</option>
                                <option value="hard">Dificil</option>
                            </select>
                        </div>
                        <br></br><br />
                        <button type="submit" class="btn btn-primary">
                            Ingresar
                        </button>

                        <br></br>
                    </form>
                </div>
            </main>
            <br />
            <footer>

            </footer>
        </Fragment>
    )
};

export default Home;