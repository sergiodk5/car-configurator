import { useEffect, useState } from 'react'
import { useMyCar } from '../../context/carContext'
import { useClient } from '../../context/clientContext'
import '../../css/StepSeven.css'
import ContactForm from '../partials/ContactForm'
import Overview from '../partials/Overview'

const initialFromElemsState = {
  lastName: true,
  firstName: true,
  address: true,
  zip: true,
  city: true,
  state: true,
  mobile: true,
  email: true,
}

const StepSeven = () => {
  const myCarProvider = useMyCar()
  const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const { client, setClient } = useClient()
  const [formElems, setFormElems] = useState(initialFromElemsState)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setFormElems({
      lastName: '' !== client.lastName,
      firstName: '' !== client.firstName,
      address: '' !== client.address,
      zip: '' !== client.zip,
      city: '' !== client.city,
      state: '' !== client.state,
      mobile: '' !== client.mobile,
      email: client.email.match(validEmailFormat) ? true : false,
    })
  }, [client])

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
      console.log(client)
      console.log(myCarProvider)
    }
  }

  return (
    <div className='ecc-form__step ecc-form__step--seven'>
      <div className='ecc-sidebar ecc-step__overview'>
        {loader && (
          <div className='ecc-form-loader'>
            <div className='ecc-spinner'></div>
          </div>
        )}
        <ContactForm
          client={client}
          setClient={setClient}
          loader={loader}
          formElems={formElems}
          handleSubmit={handleSubmit}
        />
        <Overview handleSubmit={handleSubmit} myCarProvider={myCarProvider} />
      </div>
    </div>
  )
}

export default StepSeven
