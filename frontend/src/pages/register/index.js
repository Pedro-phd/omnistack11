import React from 'react';

import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Register() {
  return (
    <div className="register-container">

        <div className="content">

            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p className="back-link">Faça seu cadastro, entre na plataforma e ajude pessoas a entrararem os casos da sua ONG</p>
                <Link className="back-link" to="/" >
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para logon
                    </Link>
            </section>
            <form action="">
                <input type="text" placeholder="Nome da ONG"/>
                <input type="email" placeholder="E-mail"/>
                <input placeholder="WhatsApp"/>

                <div className="input-group">
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="UF" style={{ width:80 }}/>
                </div>

                <button type="submit" className="button">Cadastrar</button>

            </form>
        </div>

    </div>
  );
}
