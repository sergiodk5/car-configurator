import '../../css/ContactForm.css'
import Input from './Input'

const ContactForm = ({ client, setClient, formElems, handleSubmit }) => {
  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form className='ecc-client-info' onSubmit={(e) => handleSubmit(e)}>
      <h1>Εκδήλωσης Ενδιαφέροντος</h1>

      <div className='ecc-client__form'>
        <div className='ecc-input__group'>
          <Input
            name='lastName'
            formInput={formElems.lastName}
            clientValue={client.lastName}
            label='Επίθετο'
            required={true}
            handleChange={handleChange}
          />

          <Input
            name='firstName'
            formInput={formElems.firstName}
            clientValue={client.firstName}
            label='Όνομα'
            required={true}
            handleChange={handleChange}
          />

          <Input
            name='companyName'
            formInput={true}
            clientValue={client.companyName}
            label='Εταιρεία'
            required={false}
            handleChange={handleChange}
          />
        </div>

        <div className='ecc-input__group'>
          <Input
            name='address'
            formInput={formElems.address}
            clientValue={client.address}
            label='Διεύθυνση'
            required={true}
            handleChange={handleChange}
          />

          <Input
            name='zip'
            formInput={formElems.zip}
            clientValue={client.zip}
            label='Τ.Κ.'
            required={true}
            handleChange={handleChange}
          />

          <Input
            name='city'
            formInput={formElems.city}
            clientValue={client.city}
            label='Πόλη'
            required={true}
            handleChange={handleChange}
          />

          <Input
            name='state'
            formInput={formElems.state}
            clientValue={client.state}
            label='Νομός'
            required={true}
            handleChange={handleChange}
          />
        </div>

        <div className='ecc-input__group'>
          <Input
            name='phone'
            formInput={true}
            clientValue={client.phone}
            label='Τηλέφωνο'
            required={false}
            handleChange={handleChange}
          />

          <Input
            name='mobile'
            formInput={formElems.mobile}
            clientValue={client.mobile}
            label='Κινητό'
            required={true}
            handleChange={handleChange}
          />

          <Input
            name='email'
            formInput={formElems.email}
            clientValue={client.email}
            label='Email'
            required={true}
            handleChange={handleChange}
          />
        </div>

        <div className='ecc-input__group'>
          <Input
            name='vat'
            formInput={true}
            clientValue={client.vat}
            label='Α.Φ.Μ'
            required={false}
            handleChange={handleChange}
          />

          <Input
            name='ira'
            formInput={true}
            clientValue={client.ira}
            label='Δ.Ο.Υ'
            required={false}
            handleChange={handleChange}
          />

          <Input
            name='profession'
            formInput={true}
            clientValue={client.profession}
            label='Επάγγελμα'
            required={false}
            handleChange={handleChange}
          />
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
