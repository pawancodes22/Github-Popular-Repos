// Write your code here
import './index.css'

const CountComponent = props => {
  const {imageUrl, count, name} = props
  return (
    <li className="count-div">
      <img src={imageUrl} alt={name} className="count-image-class" />
      <p className="count-text">
        {count} {name}
      </p>
    </li>
  )
}

const RepositoryItem = props => {
  const {item} = props
  const {avatarUrl, forksCount, id, issuesCount, name, starsCount} = item
  return (
    <div className="card-bg">
      <img src={avatarUrl} alt={name} className="card-image-sizer" />
      <h1 className="card-name-style">{name}</h1>
      <CountComponent
        imageUrl="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        count={starsCount}
        name="stars"
      />
      <CountComponent
        imageUrl="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        count={forksCount}
        name="forks"
      />
      <CountComponent
        imageUrl="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        count={issuesCount}
        name="open issues"
      />
    </div>
  )
}
export default RepositoryItem
