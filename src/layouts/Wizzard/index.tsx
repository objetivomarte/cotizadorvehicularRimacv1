import { useHistory } from 'react-router'
import LayoutMain from '../Main'
import StepLine from '../../components/StepLine'
import Stepper from '../../components/Stepper'
import ChevrotLeftIcon from '../../assets/images/chevrot_left.svg'
import styles from './Wizzard.module.scss'

const steps = [
  { step: 1, name: 'Datos del auto', prev: '/' },
  { step: 2, name: 'Arma tu plan', prev: 'datos-del-auto' }
]

type Props = {
  currentStep?: number
  children?: React.ReactNode
}

const Wizzard:React.FC<Props> = ({ currentStep = 1, children }) => {
  const history = useHistory()
  const prev = () => {
    const step = steps.find(({ step }) => step === currentStep)
    history.push(step?.prev || '')
  }
  return (
    <LayoutMain
      wrapperWidth={690}
      aside={
        <div className="d-mobile-none d-flex justify-center pt-15 mt-12">
          <StepLine steps={steps} currentStep={currentStep} /> 
        </div>
      }
    >
      <header className={styles.stepper}>
        <Stepper 
          size={steps.length}
          currentStep={currentStep}
          onClick={prev}
        /> 
      </header>
      <article className="d-mobile-none d-flex align-center mb-6">
        <button
          className="btn btn-circle primary outline"
          onClick={prev}
        > 
          <img src={ChevrotLeftIcon} alt="volver" />
        </button>
        <span className="body-2 ml-4">VOLVER</span>
      </article>
      {children}
    </LayoutMain>
  )
}

export default Wizzard
