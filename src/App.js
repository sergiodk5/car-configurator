import StepProvider from './context/formContext'
import CarProvider from './context/carContext'
import './css/App.css'
import Header from './components/Header'
import ClientProvider from './context/clientContext'
import Content from './components/Content'
import StepZero from './components/Content/StepZero'
import StepOne from './components/Content/StepOne'
import StepTwo from './components/Content/StepTwo'
import StepThree from './components/Content/StepThree'
import StepFour from './components/Content/StepFour'
import StepFive from './components/Content/StepFive'
import StepSix from './components/Content/StepSix'
import StepSeven from './components/Content/StepSeven'
import StepEight from './components/Content/StepEight'
import Footer from './components/Footer'

function App() {
  return (
    <div id='eccForm'>
      <div className='ecc-form'>
        <StepProvider>
          <CarProvider>
            <Header />
            <ClientProvider>
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
              </Content>
            </ClientProvider>
            <Footer />
          </CarProvider>
        </StepProvider>
      </div>
    </div>
  )
}

export default App
