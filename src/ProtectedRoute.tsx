import { Route, Redirect } from 'react-router-dom'
import { useAppSelector } from './store/hooks'
import { insuranceSelector } from './store/insurance'

type Props = {
  path: string | undefined,
  component: React.ComponentType<any>
}

const ProtectedRoute: React.FC<Props> = ({ 
  path, 
  component: Component,
  ...rest 
}) => {
  const insurance = useAppSelector(insuranceSelector)
  return (
    <Route
      {...rest}
      path={path}
      render={
        (props) => insurance.plate
          ? <Component {...props} />
          : <Redirect to="/" />
      }
    />
  )
}

export default ProtectedRoute
