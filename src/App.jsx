import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      <Result input={userInput} />
    </>
  )
}

export default App
