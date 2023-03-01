import React from 'react';
import './reviews.modules.css'
import avaImg from './img/photo.png'

const Reviews = () => {
    return (
        <div className='avaMain'>
            <main>
                <div className="reviewsContainer">
                    <h1 className='avaReviewH1'>Отзывы</h1>
                    <div className="container__item">
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg}/>
                            </div>
                            <div className="container__card-title tac">@nargiz95</div>
                            <div className="container__card-text tac">
                                Классная платформа, уже год пользуюсь. Тренируюсь 3 раза в неделю,
                                вместе с G-fit полюбила спорт.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg'  src={avaImg}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                Все мои друзья тренируются с G-Fit. Удобно пользоваться в
                                спортзале.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                Все мои друзья тренируются с G-Fit. Удобно пользоваться в
                                спортзале.
                            </div>
                        </div>
                    </div>
                    <div className="container__item">
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg}/>
                            </div>
                            <div className="container__card-title tac">@nargiz95</div>
                            <div className="container__card-text tac">
                                Классная платформа, уже год пользуюсь. Тренируюсь 3 раза в неделю,
                                вместе с G-fit полюбила спорт.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                Все мои друзья тренируются с G-Fit. Удобно пользоваться в
                                спортзале.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                Все мои друзья тренируются с G-Fit. Удобно пользоваться в
                                спортзале.
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Reviews;