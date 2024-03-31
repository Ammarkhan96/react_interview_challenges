import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhoneOtpForm from './components/phone-login'

function App() {
  const [count, setCount] = useState(0)

  return <div className='App'>
    <h1>Login with Phone</h1>
    <PhoneOtpForm />
    </div>
}

export default App
