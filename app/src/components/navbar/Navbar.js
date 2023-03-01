import React,{useState} from 'react';
import '../../pages/MainPage/header/header.modules.css';
import logo from './logo.svg';
import iconPortfolio from './ic_round-home.svg';
import Modal from "../reg/Register";
import {useContext} from "react";
import Context from "../content/Context";
import {RegistrationForm} from "../reg/Register2";
import {Link} from 'react-router-dom'


function Navbar() {
    const obj = useContext(Context)

    return (
        <>
            <div className='containerWrapp'>
                <div className="headerItem">
                    <div className="head">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                        <div className="headerBtn">
                          <Link to={'/tren'}><button className="headerButton Neon">Тренировки</button></Link>
                            <button onClick={() =>{obj.setModalChek(true)} } className="headerButton2 neon">Войти</button>
                            {obj.modalCheck? <Modal  />:null}
                            {obj.modalCheck2? <RegistrationForm />:null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;