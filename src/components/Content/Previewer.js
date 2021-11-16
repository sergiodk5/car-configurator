import { useMyCar } from '../../context/carContext'
import '../../css/Previewer.css'

const Previewer = () => {
  const myCar = useMyCar()

  return (
    <div className='ecc-previewer'>
      <div className='ecc-previewer__image'>
        <img src={myCar.image} alt={myCar.model} />
      </div>

      <div className='ecc-previewer__extras'>
        {myCar.battery.hasOwnProperty('type') && (
          <div className='ecc-previewer__box ecc-previewer__battery'>
            <div className='ecc-previewer__box__image ecc-previewer__battery__image'>
              <img src={myCar.battery.image} alt={myCar.battery.type} />
            </div>
            <div className='ecc-previewer__info ecc-previewer__battery__info'>
              <div className='ecc-previewer__battery__type'>
                {myCar.battery.type}
              </div>
              <div className='ecc-previewer__battery__kWh'>
                {myCar.battery.kWh}
              </div>
              <div className='ecc-previewer__battery__maxRange'>
                {myCar.battery.maxRange}
              </div>
              <div className='ecc-previewer__battery__price'>
                +{myCar.battery.price}€
              </div>
            </div>
          </div>
        )}

        {myCar.color.hasOwnProperty('name') && (
          <div className='ecc-previewer__box ecc-previewer__color'>
            <div className='ecc-previewer__box__image ecc-previewer__color__thumb'>
              <img src={myCar.color.thumb} alt={myCar.color.name} />
            </div>
            <div className='ecc-previewer__info ecc-previewer__color__info'>
              <div className='ecc-previewer__color__name'>
                {myCar.color.name}
              </div>
              <div className='ecc-previewer__color__price'>
                +{myCar.color.price}€
              </div>
            </div>
          </div>
        )}

        {myCar.interior.hasOwnProperty('type') && (
          <div className='ecc-previewer__box ecc-previewer__interior'>
            <div className='ecc-previewer__box__image ecc-previewer__interior__thumb'>
              <img src={myCar.interior.image} alt={myCar.interior.type} />
            </div>
            <div className='ecc-previewer__info ecc-previewer__interior__info'>
              <div className='ecc-previewer__interior__name'>
                {myCar.interior.type}
              </div>
              <div className='ecc-previewer__interior__price'>
                +{myCar.interior.price}€
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Previewer
