import RimacLogo from '../../assets/images/rimac-logo.svg'
import PhoneIcon from '../../assets/images/icon_phone.svg'
import styles from './Header.module.scss'

type Props = {
  background?: string
  border?: boolean
}

const Header:React.FC<Props> = ({ background = 'white', border }) => {
  return (
    <header
      className={`${styles.header} ${border ? styles.border : ''}`} 
      style={{ background }}
    >
      <section className={styles.container}>
        <article className="brand">
          <img src={RimacLogo} alt={process.env.REACT_APP_NAME} />
        </article>
        <nav className={styles.nav}>
          <p className="d-desktop-block">¿Tienes alguna duda?</p>
          <img src={PhoneIcon} alt="Llámanos" />
          <div>
            <a 
              className="link--text"
              href={`tel:${process.env.REACT_APP_PHONE}`}
            >
              <p className="d-desktop-block link--text">{process.env.REACT_APP_PHONE}</p>
              <p className="d-desktop-none link--text">Llámanos</p>
            </a>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Header
