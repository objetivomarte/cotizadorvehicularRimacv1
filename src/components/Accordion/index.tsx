import { useState, useEffect } from 'react'
import Switch from '../../components/FormInputs/Switch'
import styles from './Accordion.module.scss'
import { ICoverage } from '../../utils/insurance'

type Props = {
  items: Array<ICoverage>
  selecteds?: Array<number>
  onCoverage?: (coverage: ICoverage, action: string) => void
}

const Accordion:React.FC<Props> = ({ items, selecteds, onCoverage }) => {
  const [activeId, setActiveId] = useState<number | null>(null)
  const isActive = (id: number) => activeId === id

  const toggleAccordion = (id: number) => {
    if (id === activeId) setActiveId(null)
    else setActiveId(id)
  }

  const isSelected = (id: number) => selecteds?.includes(id) 

  const handleCoverage = (coverage: ICoverage, action: string) => onCoverage
    ? onCoverage(coverage, action)
    : null

  useEffect(() => {
    if (items.length) {
      setActiveId(items[0].id)
    }
  }, [items])

  return (
    <div className={styles.accordion}>
      {items.map(item => (
        <article
          key={item.name}
          className={`${styles.item} ${isActive(item.id) ? styles.active : ''}`}
        >
          <header>
            {item.icon && (
              <div className={styles.icon} style={{ backgroundImage: `url(${item.icon})` }} />
            )}
            <div className={styles.name}>
              <p className="pl-4 mr-10">{item.name}</p>
            </div>
            <div className={styles.aside}>
              <div className={styles.switch}>
                <Switch
                  defaultChecked={isSelected(item.id)}
                  onChange={() => handleCoverage(
                    item, isSelected(item.id) ? 'remove' : 'add'
                  )}
                />
              </div>
              <button
                className={styles.openAction}
                onClick={() => toggleAccordion(item.id)}
              />
            </div>
          </header>
          <main>
            <div className={styles.mainAction}>
              <button
                className={isSelected(item.id) ? styles.remove : styles.add}
                onClick={() => handleCoverage(
                  item, isSelected(item.id) ? 'remove' : 'add'
                )}
              >
                {isSelected(item.id) ? 'Quitar' : 'Agregar'}
              </button>
            </div>
            <article className={styles.content}>
              {item.content}
            </article>
            <button 
              className={styles.viewButton}
              onClick={() => toggleAccordion(item.id)}
            >
              ver {isActive(item.id) ? 'menos' : 'más'}
            </button>
          </main>
        </article>
      ))}
    </div>
  )
}

export default Accordion
