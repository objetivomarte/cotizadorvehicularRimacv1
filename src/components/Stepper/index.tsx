import styles from './Stepper.module.scss'

type Props = {
  currentStep: number
  size: number
  onClick?: () => void
}

const Stepper:React.FC<Props> = ({
  currentStep,
  size,
  onClick
}) => {
  const percentage = currentStep * 100 / size
  return (
    <article className={styles.stepper}>
      <button 
        className={styles.button} 
        onClick={onClick} 
      />
      <div className={styles.description}>
        PASO {currentStep} DE {size}
      </div>
      <div className={styles.slider}>
        <span style={{ width: `${percentage}%` }} />
      </div>
    </article>
  )
}

export default Stepper
