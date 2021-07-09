import ClientImage from '../../../assets/images/client_male_success.svg'
import styles from './Aside.module.scss'

const Aside = () => {
  return (
    <section className={styles.aside}>
      <img 
        className={styles.media}
        src={ClientImage} 
        alt="Seguro Vehiclar Tracking" 
      />
    </section>
  )
}

export default Aside