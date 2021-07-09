import { useHistory } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { updateInsurance, insuranceSelector } from '../store/insurance'
import LayoutWizzard from '../layouts/Wizzard'
import Select from '../components/FormInputs/Select'
import Radio from '../components/FormInputs/Radio'
import NumberInput from '../components/FormInputs/NumberInput'
import Card from '../components/Card'
import CarIcon from '../assets/images/icon_car.svg'
import { rules } from '../utils/validations'
import { IInsurance } from '../utils/insurance'
import brands from '../utils/brands'
import { money, years } from '../utils/helpers'
import { insurancePriceRange } from '../utils/insurance'

const CarInfo = () => {
  const history = useHistory()
  const insurance = useAppSelector(insuranceSelector)
  const dispatch = useAppDispatch()
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit 
  } = useForm<IInsurance>({
    mode: 'onChange',
    defaultValues: insurance
  })

  const onSubmit: SubmitHandler<IInsurance> = (data) => {
    dispatch(updateInsurance(data))
    history.push('/arma-tu-plan')
  }

  return (
    <LayoutWizzard>
      <article className="mb-8 mt-10 mt-desktop-0">
        <h2 className="subtitle-1 headline-desktop mb-2">
          ¡Hola, <span className="primary--text">{insurance.customer?.firstName}!</span>
        </h2>
        <p>Completa los datos de tu auto</p>
      </article>
      
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="row no-gutters">
          <div className="col-desktop-7">
            <Select
              label="Año"
              items={years()}
              defaultValue={watch('year')}
              {...register('year')}
            />
            <Select
              label="Marca"
              items={brands}
              defaultValue={watch('brand')}
              error={errors.brand}
              {...register('brand', { required: rules.required })}
            />
          </div>
          <div className="col-desktop-5">
            <div className="mb-8 mt-3 mt-desktop-0 ml-desktop-16">
              <Card
                title="ayuda"
                description="¿No encuentras el modelo?"
                buttonText="clic aquí"
                image={CarIcon}
              />
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-desktop-7">

            <section className="d-desktop-flex justify-space-between align-center mb-5">
              <p className="mb-4">¿Tu auto es a gas?</p>
              <div className="d-flex">
                {['Sí', 'No'].map(option => (
                  <div key={option} className="mr-8">
                    <Radio
                      value={option}
                      checked={watch('gas') === option}
                      {...register('gas')}
                    >
                      {option}
                    </Radio>
                  </div>
                ))}
              </div>
            </section>

            <hr className="d-desktop-block mb-8" />

            <div className="row">
              <div className="col-desktop-7 mb-4 mt-desktop-1">
                <p>Indica la suma asegurada</p>
                <p className="body-2">
                  MIN ${money(insurancePriceRange.min)} 
                  <span className="gray-light-2--text px-3">|</span>
                  MAX ${money(insurancePriceRange.max)}
                </p>
              </div>
              <div className="col-desktop-5">
                <NumberInput
                  symbol="$"
                  step={insurancePriceRange.step}
                  min={insurancePriceRange.min}
                  max={insurancePriceRange.max}
                  defaultValue={watch('insurancePrice')}
                  onChange={(value) => setValue('insurancePrice', value)}
                />
              </div>
            </div>

          </div>
        </div>

        <button
          type="submit"
          className="btn primary fullwidth-mobile mt-6"
        >
          CONTINUAR
        </button>
      </form>

    </LayoutWizzard>
  )
}

export default CarInfo