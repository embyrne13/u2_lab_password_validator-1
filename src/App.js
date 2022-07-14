import { useState } from 'react'
import Validator from './components/Validator'
const App = () => {
  const [web, setWeb] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })
  const [finalWeb, setFinalWeb] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false
  })
  const [validity, setValidity] = useState('')
  const handleChange = (event) => {
    let newWeb = { ...web, [event.target.id]: event.target.value }
    setWeb(newWeb)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (web.password === web.passwordConfirm) {
      console.log('Passwords match')
      setFinalWeb(web)
      setValidity('valid')
    } else {
      console.log('Passwords do not match')
      setValidity('invalid')
    }
  }
  return (
    <Validator
      validity={validity}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default App
