import { calculateInvestmentResults } from "../util/investment"

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input)

  return(
    <section id="result">
      {console.log(resultData)}
      <div>Results...</div>
    </section>
  )
}