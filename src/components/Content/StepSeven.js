import '../../css/StepSeven.css'
import ContactForm from '../partials/ContactForm'
import Overview from '../partials/Overview'

const StepSeven = () => {
  return (
    <div className='ecc-form__step ecc-form__step--seven'>
      <div className='ecc-sidebar ecc-step__overview'>
        <ContactForm />
        <Overview />
      </div>
    </div>
  )
}

export default StepSeven
