import styles from "./style.module.scss";
import effect from "../../assets/effects/clicker-effect.svg";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.gradient_bg}>
        <img src={effect} alt=""/>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;