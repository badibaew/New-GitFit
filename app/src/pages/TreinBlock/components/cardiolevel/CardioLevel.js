import { useState } from "react";
import style from "./cardioLevel.module.css";
import Navbar from "../../../../components/navbar/Navbar";

export default function CardioLevel() {
  const text = [
    {
      id: 1,
      title: "Видео по 30 минут с упражнениями, которые сможет сделать каждый",
    },
    {
      id: 2,
      title: "Видео длительностью 1час минут для более продвинутых",
    },
    {
      id: 3,
      title: "Для профессионалов своего дела видео на 1 час и 30 минут",
    },
  ];
  const [cl, setCl] = useState(0);

  return (

    <div className={style.CardioLevel}>
      <Navbar/>
      <div className={style.CardioLevelСontainer}>
        <div className={style.cardioText}>
          <h2>Тренировки для всех уровней подготовки</h2>
        </div>
        <div
          className={`${style.cardioCards} ${
            cl === 2 ? style.img2 : cl === 3 ? style.img3 : ""
          }`}
        >
          {text.map((item) => (
            <div
              onMouseOver={() => {
                setCl(item.id);
              }}
              key={item.id}
              data-id={item.id}
              className={`${style.cardioCard} ${
                cl === item.id ? style.cardioCardTarget : ""
              }`}
            >
              <div className={style.cardioInfo}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className={style.buttons}>
          <button className={style.btnJun}>Начинающий</button>
          <button className={style.btnMid}>Продолжающий</button>
          <button className={style.btnSen}>Продвинутый</button>
        </div>
      </div>
    </div>
  );
}
