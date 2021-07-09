import ClientImage from '../../../assets/images/client_female_car.svg'
import styles from './Aside.module.scss'

const Aside = () => {
  return (
    <section className={styles.aside}>
      <article className={styles.container}>
        <img 
          className={styles.media}
          src={ClientImage} 
          alt="Seguro Vehiclar Tracking" 
        />
        <h3 className="caption body-2-desktop mb-2">
          <strong>¡NUEVO!</strong>
        </h3>
        <h1 className="subtitle-1 title-desktop mb-3">
          <strong>
            Seguro Vehicular <br />
            <span className="primary--text">Tracking</span>  
          </strong>
        </h1>
        <p className="gray-2--text">
          Cuéntanos dónde le harás <br />seguimiento a tu seguro
        </p>
      </article>
    </section>
  )
}

export default Aside