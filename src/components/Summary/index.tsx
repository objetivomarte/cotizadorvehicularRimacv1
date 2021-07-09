import styles from './Summary.module.scss'
import { money } from '../../utils/helpers'

type Props = {
  price?: number
  currency?: string
  features?: Array<string>
  media?: string
  children?: React.ReactNode
}

const Summary:React.FC<Props> = ({
  price = 0.00,
  currency,
  features,
  media,
  children 
}) => (
  <section className={styles.summary }>
    <header>
      <div>
        <h6 className={styles.price}>
          {currency}{money(price, 2)}
        </h6>
        <p>mensuales</p>
      </div>
      <img src={media} alt="resumen" />
    </header>
    {features?.length && (
      <main>
        <p>El precio incluye:</p>
        <ul>
          {features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </main>
    )}
    <footer>
      {children}
    </footer>
  </section>
)

export default Summary