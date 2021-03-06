import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form action="">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"type="text"/>
                    <button type="submit" className="button">Entrar</button>

                    <Link  className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}