import {memo, useState, useEffect} from "react";
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

  return (
    <div className={styles.energy}>
      <p>Your Energy: {energyPercens}</p>
      <div className={styles.energy_wrapper}>
        <div className={styles.progress} style={{width: `${energyPercens}`}}></div>
        <div className={styles.energy_count}>
          <span>{currentEnergy}</span>
        </div>
      </div>
    </div>
  )
}

export default memo(Energy);