import { useHistory } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { insuranceSelector, coveragesIdSelector, updateInsurance } from '../../store/insurance'
import LayoutWizzard from '../../layouts/Wizzard'
import Plate from '../../components/Plate'
import Accordion from '../../components/Accordion'
import Summary from '../../components/Summary'
import SummaryIcon from '../..//assets/images/icon_summary.svg'
import styles from './Coverage.module.scss'
import coverages from '../../utils/coverages'
import { ICoverage, updateCoverage } from '../../utils/insurance'

const Coverage = () => {
  const history = useHistory()
  const insurance = useAppSelector(insuranceSelector)
  const coveragesId = useAppSelector(coveragesIdSelector)
  const dispatch = useAppDispatch()

  const handleCoverage = (coverage: ICoverage, action: string) => {
    const { coverages, salePrice } = updateCoverage(insurance, coverage, action)
    dispatch(updateInsurance({
      salePrice,
      coverages
    }))
  }

  return (
    <LayoutWizzard currentStep={2}>
      <article className={styles.headline}>
        <h2 className="subtitle-1 headline-desktop mb-2">
          Mira las coberturas
        </h2>
        <p>
          Conoce las coberturas para tu plan
        </p>
      </article>

      <div className="row no-gutters pb-16">
        <div className="col-desktop-7">
          
          <div className={styles.plate}>
            <Plate
              plate={insurance.plate}
              brand={insurance.brand}
              year={insurance.year}
            />
          </div>

          <section className="mt-14">
            <h3 className="subtitle-3 mb-2">Agrega o quita coberturas</h3>
            <ul className={styles.fakeTab}>
              {coverages.map(coverage => (
                <li key={coverage.id}>
                  {coverage.name}
                </li>
              ))}
            </ul>
            {coverages.map(coverage => (
              <Accordion 
                key={coverage.id} 
                items={coverage.items}
                selecteds={coveragesId}
                onCoverage={(coverage, action) => handleCoverage(coverage, action)}
              />
            ))}
          </section>
        
        </div>

        <div className="col-desktop-5">
          <div className="ml-desktop-16">
            <Summary 
              currency="$"
              price={insurance.salePrice}
              media={SummaryIcon}
              features={[
                'Llanta de respuesto',
                'Analisis de motor',
                'Aros gratis'
              ]}
            >
              <button
                className="btn primary fullwidth px-0"
                onClick={() => history.push('/gracias')}
              >
                lo quiero
              </button>
            </Summary>
          </div>
        </div>

      </div>
    </LayoutWizzard>
  )
}

export default Coverage