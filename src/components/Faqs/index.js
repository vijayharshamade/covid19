import './index.css'

const Faqs = props => {
  const {question, answer} = props

  return (
    <li className="list-style-faqs">
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </li>
  )
}

export default Faqs
