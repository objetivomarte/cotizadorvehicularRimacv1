import { useAppSelector } from '../../store/hooks'
import { insuranceSelector } from '../../store/insurance'
import LayoutMain from '../../layouts/Main'
import Aside from './Aside'
import styles from './Success.module.scss'

const Success = () => {
  const insurance = useAppSelector(insuranceSelector)
  return (
    <LayoutMain
      aside={<Aside />} 
      wrapperWidth={490}
    >
      <section className={styles.success}>
        <article className="mb-6">
          <h2 className="subtitle-1 title-desktop">
            <span className="primary--text">¡Te damos la bienvenida!</span>
            <br />
            Cuenta con nosotros para proteger tu vehículo
          </h2>
        </article>

        <article className="mb-12">
          <p>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
          </p>
          <p className="mt-3">{insurance.customer?.email}</p>
        </article>

        <button
          className="btn primary fullwidth-mobile"
          onClick={() => window.location.reload()}
        >
          cómo usar mi seguro
        </button>
      </section>
    </LayoutMain>
  )
}

export default Success