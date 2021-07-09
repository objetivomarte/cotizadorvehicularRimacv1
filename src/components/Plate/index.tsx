import Image from '../../assets/images/placa_media.svg'
import styles from './Plate.module.scss'

type Props = {
  plate?: string
  brand?: string
  year?: number | null
}

const Plate:React.FC<Props> = ({ plate, brand, year }) => {
  return (
    <div className={styles.card}>
      <p className={styles.plate}>Placa: {plate}</p>
      <h2 className={styles.brand}>{brand} {year}</h2>
      <button className={styles.button}>editar</button>
      <img src={Image} alt={brand} />
    </div>
  )
}

export default Plate
