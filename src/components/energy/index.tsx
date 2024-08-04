import {memo, useState, useEffect} from "react";
import {motion} from "framer-motion";
import {calculatePercentage} from "../../utils/helper";
import styles from "./style.module.scss";

interface IProps {
  maxEnergy: number;
  currentEnergy: number;
}

const Energy: React.FC<IProps> = ({maxEnergy, currentEnergy}) => {
  const [energyPercens, setEnergyPercens] = useState<string>('100%');

  useEffect(() => {
    const percentage = calculatePercentage(currentEnergy, maxEnergy);
    setEnergyPercens(percentage);
  }, [currentEnergy, maxEnergy])

  // Анимация при первичном появлении
  const animation = {
    hidden: {
      y: 200, 
      opacity: 0,
    },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { 
        delay: 1.5 * 0.5 
      }
    }
  }

  return (
    <motion.div 
      className={styles.energy}
      initial={animation.hidden}
      animate={animation.visible}
      viewport={{ once: true }}
    >
      <p>Your Energy: {energyPercens}</p>
      <div className={styles.energy_wrapper}>
        <div className={styles.progress} style={{width: `${energyPercens}`}}></div>
        <div className={styles.energy_count}>
          <span>{currentEnergy}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(Energy);