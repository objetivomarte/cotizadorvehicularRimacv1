import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { updateInsurance, insuranceSelector } from '../../store/insurance'
import LayoutMain from '../../layouts/Main'
import TextField from '../../components/FormInputs/TextField'
import Select from '../../components/FormInputs/Select'
import Checkbox from '../../components/FormInputs/Checkbox'
import Aside from './Aside'
import { rules, mask } from '../../utils/validations'
import { customerFormat } from '../../utils/customer'
import { api, randomId } from '../../utils/helpers'

interface IForm {
  documentType: string
  document: number | string
  phone: number | null
  plate: string
  terms: boolean
}

const Home = () => {
  const history = useHistory()
  const insurance = useAppSelector(insuranceSelector)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit 
  } = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      documentType: insurance.customer?.documentType,
      document: insurance.customer?.document,
      phone: insurance.customer?.phone,
      plate: insurance.plate,
      terms: insurance.terms
    }
  })

  const handleDocumentType = (event: any) => {
    setValue('documentType', event.target.value)
    setValue('document', '', { shouldValidate: true })
  }

  const onSubmit: SubmitHandler<IForm> = (data) => {
    setLoading(true)
    api(`users/${randomId()}`)
      .then(({ name, email }) => {
        dispatch(updateInsurance({
          plate: data.plate,
          terms: data.terms,
          customer: customerFormat({ ...data, name, email })
        }))
        setLoading(false)
        history.push('/datos-del-auto')
      })
  }

  return (
    <LayoutMain
      headerBorder={false}
      headerBg="transparent"
      aside={<Aside />}
      asideWidth={40}
    >
      <h2 className="subtitle-2 subtitle-1-desktop mb-6">
        Déjanos tus datos
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="row no-gutters form-input_group">
          <div className="col-4">
            <Select
              items={['DNI', 'CE']}
              defaultValue={watch('documentType')}
              {...register('documentType')}
              onChange={handleDocumentType}
            />
          </div>
          <div className="col-8">
            <TextField
              label="Nro de documento"
              mask={mask.document(watch('documentType'))}
              defaultValue={watch('document')}
              error={errors.document}
              {...register('document', {
                required: rules.required,
                minLength: watch('documentType') === 'DNI'
                  ? rules.minLength(8)
                  : rules.minLength(3)
              })}
            />
          </div>
        </div>        

        <TextField 
          label="Celular"
          mask={mask.phone}
          defaultValue={watch('phone')}
          error={errors.phone}
          {...register('phone', {
            required: rules.required,
            minLength: rules.minLength(9)
          })}
        />

        <TextField 
          label="Placa"
          mask={mask.plate}
          defaultValue={watch('plate')}
          error={errors.plate}
          {...register('plate', {
            required: rules.required,
            minLength: {
              value: 7,
              message: 'Este campo debe tener mínimo 6 caracteres'
            }
          })}
        />
        
        <div className="pt-2" />

        <Checkbox
          defaultChecked={watch('terms')}
          error={errors.terms}
          {...register('terms', { required: rules.required })}
        >    
          Acepto la <a 
            href="#link" 
            target="_blank" 
            rel="noreferrer" 
            className="text-underline"
          >
            Política de Protección de Datos Personales
          </a> y los <a 
            href="#link"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Términos y Condiciones.
          </a>
        </Checkbox>

        <button
          type="submit"
          className="btn primary fullwidth-mobile mt-6"
          disabled={loading}
        >
          {loading ? 'procesando' : 'cotízalo'}
        </button>

      </form>
    </LayoutMain>
  )
}

export default Home