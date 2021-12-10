import { useEffect } from 'react'
import { useClient } from '../../context/clientContext'
import { useStep } from '../../context/formContext'
import '../../css/StepEight.css'

const StepEight = () => {
  const { setNextStep } = useStep()
  const { client, setClient } = useClient()

  useEffect(() => {
    if (
      '' !== client.lastName &&
      '' !== client.firstName &&
      '' !== client.address &&
      '' !== client.city &&
      '' !== client.mobile &&
      '' !== client.email
    ) {
      setNextStep(true)
    } else {
      setNextStep(false)
    }
  }, [client])

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='ecc-form__step ecc-form__step--eight'>
      <div className='ecc-sidebar ecc-step__client'>
        <form className='ecc-client-info'>
          <h1>Client data</h1>

          <div className='ecc-client__form'>
            <div className='ecc-input__group'>
              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='lastName'
                  value={client.lastName}
                  id='lastName'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='lastName'
                  className={`ecc-input__label ${
                    client.lastName && client.lastName !== '' ? 'hasValue' : ''
                  }`}
                >
                  Last Name
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='firstName'
                  value={client.firstName}
                  id='firstName'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='firstName'
                  className={`ecc-input__label ${
                    client.firstName && client.firstName !== ''
                      ? 'hasValue'
                      : ''
                  }`}
                >
                  First Name
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='companyName'
                  value={client.companyName}
                  id='companyName'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='companyName'
                  className={`ecc-input__label ${
                    client.companyName && client.companyName !== ''
                      ? 'hasValue'
                      : ''
                  }`}
                >
                  Company
                </label>
              </div>
            </div>

            <div className='ecc-input__group'>
              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='address'
                  value={client.address}
                  id='address'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='address'
                  className={`ecc-input__label ${
                    client.address && client.address !== '' ? 'hasValue' : ''
                  }`}
                >
                  Address
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='zip'
                  value={client.zip}
                  id='zip'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='zip'
                  className={`ecc-input__label ${
                    client.zip && client.zip !== '' ? 'hasValue' : ''
                  }`}
                >
                  Postal Code
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='city'
                  value={client.city}
                  id='city'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='city'
                  className={`ecc-input__label ${
                    client.city && client.city !== '' ? 'hasValue' : ''
                  }`}
                >
                  City
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='state'
                  value={client.state}
                  id='state'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='state'
                  className={`ecc-input__label ${
                    client.state && client.state !== '' ? 'hasValue' : ''
                  }`}
                >
                  State
                </label>
              </div>
            </div>

            <div className='ecc-input__group'>
              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='phone'
                  value={client.phone}
                  id='phone'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='phone'
                  className={`ecc-input__label ${
                    client.phone && client.phone !== '' ? 'hasValue' : ''
                  }`}
                >
                  Phone
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='mobile'
                  value={client.mobile}
                  id='mobile'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='mobile'
                  className={`ecc-input__label ${
                    client.mobile && client.mobile !== '' ? 'hasValue' : ''
                  }`}
                >
                  Mobile
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='email'
                  value={client.email}
                  id='email'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='email'
                  className={`ecc-input__label ${
                    client.email && client.email !== '' ? 'hasValue' : ''
                  }`}
                >
                  Email
                </label>
              </div>
            </div>

            <div className='ecc-input__group'>
              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='vat'
                  value={client.vat}
                  id='vat'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='vat'
                  className={`ecc-input__label ${
                    client.vat && client.vat !== '' ? 'hasValue' : ''
                  }`}
                >
                  VAT
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='ira'
                  value={client.ira}
                  id='ira'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='ira'
                  className={`ecc-input__label ${
                    client.ira && client.ira !== '' ? 'hasValue' : ''
                  }`}
                >
                  IRA
                </label>
              </div>

              <div className='ecc-input__item'>
                <input
                  type='text'
                  name='profession'
                  value={client.profession}
                  id='profession'
                  className='ecc-input__input'
                  onChange={handleChange}
                />
                <label
                  htmlFor='profession'
                  className={`ecc-input__label ${
                    client.profession && client.profession !== ''
                      ? 'hasValue'
                      : ''
                  }`}
                >
                  Profession
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StepEight
