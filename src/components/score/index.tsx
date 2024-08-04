import {memo} from "react";
import {motion} from "framer-motion";
import {formatScore} from "../../utils/helper";
import {coinImg} from "../../assets/icons";
import effect from "../../assets/effects/score-effect.svg";
import styles from "./style.module.scss";

interface IProps {
  score: number;
}

const Score: React.FC<IProps> = ({score}) => {
  const initial = {
    y: -200
  };

  const animate = {
    y: 0,
    transition: { 
      delay: .2 
    }
  };

  return (
    <motion.div 
      className={styles.wrapper}
      initial={initial}
      animate={animate}
      viewport={{ once: true }}
    >
      <div className={styles.srore_wrapper}>
        <img src={coinImg} alt=""/>
        <div className={styles.score}>{formatScore(score)}</div>
      </div>
      <div className={styles.effect}>
        <img src={effect} alt=""/>
      </div>
    </motion.div>
  )
}

export default memo(Score);