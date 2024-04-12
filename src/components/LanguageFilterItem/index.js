// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {item, activeId, func1} = props
  const {id, language} = item
  const activeButtonClassName = activeId === id ? 'active-button' : ''
  const callFunc1 = () => {
    func1(id)
  }
  return (
    <li>
      <button
        type="button"
        className={`filter-item-button ${activeButtonClassName}`}
        onClick={callFunc1}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
