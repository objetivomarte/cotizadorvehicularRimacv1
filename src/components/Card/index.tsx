import styles from './Card.module.scss'

type Props = {
  title?: string
  description?: string
  buttonText?: string
  image?: string | undefined
}

const Card:React.FC<Props> = ({
  title,
  description,
  buttonText,
  image 
}) => (
  <section className={styles.card}>
    <header className="d-desktop-block">
      <h6 className="body-2 text-uppercase">{title}</h6>
      <hr className="my-4" />
    </header>
    <main>
      <img src={image} alt="ayuda" />
      <div>
        <p className="mb-desktop-2">{description}</p>
        <a 
          href="#link"
          target="_blank"
          rel="noreferrer"
          className="caption text-uppercase link--text"
        >
          <strong>{buttonText}</strong>
        </a>
      </div>
    </main>
  </section>
)

export default Card