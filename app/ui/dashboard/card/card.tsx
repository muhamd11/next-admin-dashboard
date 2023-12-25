import styles from './card.module.scss'
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={30}/>
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}> 10,273</span>
        <span className={styles.detail}><span className={styles.positive}>12%</span>more than pervious week</span>
      </div>
    </div>
  )
}

export default Card