import {memo} from "react";
import {formatScore} from "../../utils/helper";
import {coinImg} from "../../assets/fruits";
import effect from "../../assets/effects/score-effect.svg";
import styles from "./style.module.scss";

interface IProps {
  score: number;
}

const Score: React.FC<IProps> = ({score}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.srore_wrapper}>
        <img src={coinImg} alt=""/>
        <div className={styles.score}>{formatScore(score)}</div>
      </div>
      <div className={styles.effect}>
        <img src={effect} alt=""/>
      </div>
    </div>
  )
}

export default memo(Score);