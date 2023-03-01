import React, {useContext} from "react";
import './header.modules.css'
import Navbar from "../../../components/navbar/Navbar";
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <div className="headerContainer">
            <Navbar/>
            <h2 className="capital">
                <b/>" Начни сейчас! С нами <br/>
                удобно, быстро и доступно "
            </h2>
            <div className="portfolio">
                <ul>
                    <li>
            <span className="text">
              Плата за подписку начинается после окончания
              <br/> бесплатного пробного периода
            </span>
                        <button className="Buttons Neons">Бесплатно 12 дней</button>
                       <button className="buttons neons">Другие абонементы</button>
                    </li>
                </ul>
            </div>
            <h3 className="span">
                <strong>Подробнее</strong>
            </h3>
            <div className="point"></div>
        </div>
    );
};

export default Header;
