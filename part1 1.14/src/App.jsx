import { useState } from 'react'

const Stat = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.count}</td>
    </tr>
  )
}

const Statistics = (props) => {
  console.log(props)
  const good = props.stats.good
  const neutral = props.stats.neutral
  const bad = props.stats.bad
  return (
  <div>
    <Stat name="good" count={good}></Stat>
    <Stat name="neutral" count={neutral}></Stat>
    <Stat name="bad" count={bad}></Stat>
    <Stat name="average" count={(good-bad)/(good+bad+neutral)}></Stat>
    <Stat name="positive" count={(good*100)/(good+bad+neutral)}></Stat>
  </div>
  )
}

const Button = (props) => {
  return (
  <button onClick={props.handle}>good</button> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let stats = <p>No feedback given</p>
  if (good + neutral + bad > 0)
  {
    stats = <Statistics stats={{good:good, bad:bad, neutral:neutral}}/>
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handle={()=>setGood(good+1)}/>
      <Button handle={()=>setNeutral(neutral+1)}/>
      <Button handle={()=>setBad(bad+1)}/>
      <h1>statistics</h1>
      {stats}
    </div>
  )
}

export default App