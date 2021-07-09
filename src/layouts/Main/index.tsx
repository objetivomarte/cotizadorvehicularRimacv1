import Header from '../../components/Header'
import styles from './Main.module.scss'

type Props = {
  headerBg?: string
  headerBorder?: boolean
  wrapperWidth?: string | number
  asideWidth?: number
  aside?: React.ReactNode
  children?: React.ReactNode
}

const FULL_WIDTH = 100

const Main:React.FC<Props> = ({
  headerBg = 'white',
  headerBorder = true,
  wrapperWidth = 288,
  asideWidth = 35,
  aside,
  children 
}) => {
  const mainWidth = FULL_WIDTH - asideWidth
  return (
    <div className={styles.layout}>
      <Header background={headerBg} border={headerBorder} />
      <aside className={styles.aside} style={{ width: `${asideWidth}%` }}>
        {aside}
      </aside>
      <main className={styles.main} style={{ width: `${mainWidth}%` }}>
        <section className={styles.wrapper} style={{ width: wrapperWidth }}>
          {children}
        </section>
      </main>
    </div>
  )
}

export default Main
