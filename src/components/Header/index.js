import { useEffect, useState } from 'react'
import { useMyCar } from '../../context/carContext'
import { useStep } from '../../context/formContext'
import '../../css/FormHeader.css'
import priceCalculator from '../../utils/priceCalculator'

const menus = [
  'Μοντέλο',
  'Τύπος Συσσωρευτή',
  'Χρώμα',
  'Εσωτερικό',
  'Εξοπλισμός',
  'Εγγύηση',
  'Τρόπος Πληρωμής',
  'Σύνοψη',
  'Στοιχεία',
]

const MenuItem = ({ idx, title }) => {
  const { step, setStep } = useStep()

  return (
    <li
      className={`ecc-step ${
        idx < step ? 'completed' : idx === step ? 'current' : ''
      }`}
      onClick={() => setStep(idx)}
    >
      {title}
    </li>
  )
}

const Header = () => {
  const myCarProvider = useMyCar()

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(priceCalculator(myCarProvider))
  }, [myCarProvider])

  return (
    <div className='ecc-header'>
      <div className='ecc-header__indicator'>
        <ul className='ecc-steps'>
          {menus.map((menu, idx) => (
            <MenuItem key={idx} idx={idx} title={menu} />
          ))}
        </ul>
        <div className='ecc-total-price'>{total}€</div>
      </div>
    </div>
  )
}

export default Header
