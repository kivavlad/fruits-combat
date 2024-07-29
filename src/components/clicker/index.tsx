import {memo, useState, useEffect} from "react";
import styles from "./style.module.scss";
import {blueberryImg, cherryImg, fruitImg, orangeImg, pearImg, pineappleImg, raspberryImg, strawberryImg, watermellonImg} from "../../assets/img";

interface IProps {
  energy: number;
  setCoins: (counter: number) => void;
}

const Clicker: React.FC<IProps> = ({energy, setCoins}) => {
  const [counter, setCounter] = useState<number>(1);
  const [currentFruit, setCurrentFruit] = useState<string>('');
  const [clicks, setClicks] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const fruits = [blueberryImg, cherryImg, fruitImg, orangeImg, pearImg, pineappleImg, raspberryImg, strawberryImg, watermellonImg];

  // Узнаем координаты клика или касания
  const handleClickPosition = (e: React.MouseEvent<HTMLButtonElement>, clickValue: number) => {
    const clickPosition = {
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top
    }

    const newClick = {...clickPosition, id: Date.now()};
    setClicks((prev) => [...prev, newClick]);
    setCoins(clickValue); // Передаем значение клика

    // Удаляем индикатор через 1000 мс
    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
    }, 1000);
  }

  // Анимация при касании
  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200)
  }

  // Событие при клике
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (energy > 1) {
      setCounter(1);
      handleClickPosition(e, counter);
      triggerAnimation();
    }
  }

  // Генерация рандомного фрукта при первичном рендере
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    setCurrentFruit(fruits[randomIndex]);
  }, [])

  return (
    <div className={styles.clicker}>
      <button 
        type="button" 
        onClick={handleClick}
      >
        {clicks.map((click) => (
          <div className={styles.indicator} 
            key={click.id}
            style={{
              left: `${click.x - 90}px`,
              top: `${click.y - 70}px`,
            }}
          >
            {`+${counter}`}
          </div>
        ))}
        <img className={isAnimating ? styles.animate_fruit : styles.fruit} src={currentFruit} alt="fruit"/>
      </button>
    </div>
  )
}

export default memo(Clicker);