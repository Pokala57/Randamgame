import {Route, Switch} from 'react-router-dom'
import RandomPicker from './components/randGame'
import SignupForm from './components/signupPage'
import LoginPage from './components/loginPage'
import './App.css'

const App = () => {
  const details = localStorage.getItem('user_details')
  if (details === null) {
    const detailsList = []
    localStorage.setItem('user_details', JSON.stringify(detailsList))
  }
  return (
    <Switch>
      <Route exact path="/sign-up" component={SignupForm} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={RandomPicker} />
    </Switch>
  )
}

export default App
