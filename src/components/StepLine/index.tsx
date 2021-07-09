import styles from './StepLine.module.scss'

type Props = {
  currentStep: number
  steps: Array<any>
}

const StepLine:React.FC<Props> = ({
  currentStep,
  steps = []
}) => {
  return (
    <ul className={styles.stepLine}>
      {steps.map(step => (
        <li key={step.step} className={currentStep === step.step ? styles.active : ''}>
          <span className={styles.step}>{step.step}</span>
          <span className={styles.item}>{step.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default StepLine
