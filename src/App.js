import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import './css/App.css'
import StepProvider from './context/formContext'
import StepZero from './components/Content/StepZero'
import CarProvider from './context/carContext'
import StepOne from './components/Content/StepOne'
import StepTwo from './components/Content/StepTwo'
import StepThree from './components/Content/StepThree'

const StepFour = () => <h1>StepFour</h1>
const StepFive = () => <h1>StepFive</h1>
const StepSix = () => <h1>StepSix</h1>
const StepSeven = () => <h1>StepSeven</h1>
const StepEight = () => <h1>StepEight</h1>
const StepNine = () => <h1>StepNine</h1>

function App() {
  return (
    <div id='eccForm'>
      <div className='ecc-form'>
        <StepProvider>
          <CarProvider>
            <Header />
            <Content>
              <StepZero />
              <StepOne />
              <StepTwo />
              <StepThree />
              <StepFour />
              <StepFive />
              <StepSix />
              <StepSeven />
              <StepEight />
              <StepNine />
            </Content>
            <Footer />
          </CarProvider>
        </StepProvider>
      </div>
    </div>
  )
}

export default App
