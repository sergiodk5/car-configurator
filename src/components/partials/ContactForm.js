import { useEffect, useState } from 'react'
import { useClient } from '../../context/clientContext'
import '../../css/ContactForm.css'

const initialFromElemsState = {
  lastName: true,
  firstName: true,
  address: true,
  city: true,
  mobile: true,
  email: true,
}

const ContactForm = () => {
  const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const { client, setClient } = useClient()
  const [formElems, setFormElems] = useState(initialFromElemsState)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setFormElems({
      lastName: '' !== client.lastName,
      firstName: '' !== client.firstName,
      address: '' !== client.address,
      city: '' !== client.city,
      mobile: '' !== client.mobile,
      email: client.email.match(validEmailFormat) ? true : false,
    })
  }, [client])

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = false
    for (const elem in formElems) {
      if (formElems.hasOwnProperty(elem)) {
        errors = !errors ? !formElems[elem] : true
      }
    }

    if (errors) {
      console.log('Η φόρμα δεν έχει συμπληρωθεί σωστά.')
      setLoader(false)
    } else {
      setLoader(true)
      // Next steps:
      // Send ajax call to an API with the data.
      // Get the response and redirect to a location
    }
  }

  return (
    <form className='ecc-client-info' onSubmit={handleSubmit}>
      {loader && (
        <div className='ecc-form-loader'>
          <div className='spinner'></div>
        </div>
      )}

      <h1>Εκδήλωσης Ενδιαφέροντος</h1>

      <div className='ecc-client__form'>
        <div className='ecc-input__group'>
          <div
            className={`ecc-input__item ${formElems.lastName ? '' : 'error'}`}
          >
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
              Επίθετο *
            </label>
          </div>

          <div
            className={`ecc-input__item ${formElems.firstName ? '' : 'error'}`}
          >
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
                client.firstName && client.firstName !== '' ? 'hasValue' : ''
              }`}
            >
              Όνομα *
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
              Εταιρεία
            </label>
          </div>
        </div>

        <div className='ecc-input__group'>
          <div
            className={`ecc-input__item ${formElems.address ? '' : 'error'}`}
          >
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
              Διεύθυνση *
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
              Τ.Κ.
            </label>
          </div>

          <div className={`ecc-input__item ${formElems.city ? '' : 'error'}`}>
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
              Πόλη *
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
              Νομός
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
              Τηλέφωνο
            </label>
          </div>

          <div className={`ecc-input__item ${formElems.mobile ? '' : 'error'}`}>
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
              Κινητό *
            </label>
          </div>

          <div className={`ecc-input__item ${formElems.email ? '' : 'error'}`}>
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
              Email *
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
              Α.Φ.Μ
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
              Δ.Ο.Υ
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
                client.profession && client.profession !== '' ? 'hasValue' : ''
              }`}
            >
              Επάγγελμα
            </label>
          </div>
        </div>

        <div className='ecc-input__group'>
          <div className='ecc-input__item ecc-input--submit'>
            <input type='submit' value='Αποστολή' className='btn-send' />
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
