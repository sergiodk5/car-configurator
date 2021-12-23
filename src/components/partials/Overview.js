import { useEffect, useState } from 'react'
import priceCalculator from '../../utils/priceCalculator'
import '../../css/Overview.css'

const Overview = ({ handleSubmit, myCarProvider }) => {
  const {
    model,
    image,
    price,
    battery,
    color,
    interior,
    components,
    guarantee,
    payment,
  } = myCarProvider

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(priceCalculator(myCarProvider))
  }, [myCarProvider])

  return (
    <div className='overview'>
      <h1 style={{ width: '100%' }}>Σύνοψη</h1>

      <div className='ecc-summary'>
        <div className='ecc-summary__container'>
          <div className='ecc-summary__wrapper'>
            <h3>Μοντέλο</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__img'>
                <img src={image} alt={model} />
              </div>
              <div className='ecc-summary__title'>
                <h4>
                  {model} ({price}€)
                </h4>
              </div>
            </div>
          </div>

          <div className='ecc-summary__wrapper'>
            <h3>Ματαρία</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__img'>
                <img src={battery.image} alt={battery.type} />
              </div>
              <div className='ecc-summary__title'>
                <h4>
                  {battery.type} +({battery.price}€)
                </h4>
              </div>
              <div className='ecc-summary__descr'>
                <p>
                  kWh {battery.kWh} max range {battery.maxRange}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='ecc-summary__container'>
          <div className='ecc-summary__wrapper'>
            <h3>Χρώμα</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__img'>
                <img src={color.image} alt={color.name} />
              </div>
              <div className='ecc-summary__title'>
                <h4>
                  {color.name} +({color.price}€)
                </h4>
              </div>
            </div>
          </div>

          <div className='ecc-summary__wrapper'>
            <h3>Εσωτερικό</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__img'>
                <img src={interior.image} alt={interior.type} />
              </div>
              <div className='ecc-summary__title'>
                <h4>
                  {interior.type} +({interior.price}€)
                </h4>
              </div>
            </div>
          </div>

          <div className='ecc-summary__wrapper'>
            <h3>Εξοπλισμός</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__title'>
                <ul>
                  {components.map((cmp, idx) => (
                    <li key={idx}>
                      <h5>
                        {cmp.name} +({cmp.price}€)
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='ecc-summary__container'>
          <div className='ecc-summary__wrapper'>
            <h3>Εγγύηση</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__title'>
                <h4 style={{ textAlign: 'left' }}>
                  {guarantee.type} +({guarantee.price}€)
                </h4>
              </div>
            </div>
          </div>

          <div className='ecc-summary__wrapper'>
            <h3>Τρόπος Πληρωμής</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__title'>
                <h4 style={{ textAlign: 'left' }}>{payment}</h4>
              </div>
            </div>
          </div>

          <div className='ecc-summary__wrapper ecc-total-box'>
            <h3>Συνολικό Κόστος</h3>
            <div className='ecc-ecc-summary__summary__item'>
              <div className='ecc-summary__title'>
                <h4 style={{ textAlign: 'left' }}>{total}€</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='ecc-summary__container'>
          <button
            type='button'
            className='btn-send'
            onClick={(e) => handleSubmit(e)}
          >
            Αποστολή
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overview
