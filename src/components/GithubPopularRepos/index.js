import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    repositoryItemsList: [],
    isLoading: false,
    isSuccess: true,
  }

  componentDidMount() {
    this.fetchItems()
  }

  fetchItems = async () => {
    this.setState({isLoading: true})
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const jsonData = await response.json()
      const updatedData = jsonData.popular_repos.map(item => ({
        avatarUrl: item.avatar_url,
        forksCount: item.forksCount,
        id: item.id,
        issuesCount: item.issuesCount,
        name: item.name,
        starsCount: item.stars_count,
      }))

      this.setState({repositoryItemsList: updatedData, isLoading: false})
    } else {
      this.setState({isSuccess: false})
    }
  }

  changeActiveId = id => {
    this.setState({activeId: id}, this.fetchItems)
  }

  renderLoader = () => (
    <div data-testid="loader" className="align-to-center">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderProductItems = () => {
    const {repositoryItemsList, isSuccess} = this.state
    return isSuccess ? (
      <ul className="popular-repo-ul">
        {repositoryItemsList.map(item => (
          <RepositoryItem key={item.id} item={item} />
        ))}
      </ul>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
    )
  }

  render() {
    const {isLoading, activeId} = this.state
    return (
      <div className="page-bg">
        <h1 className="page-heading">Popular</h1>
        <ul className="language-filter-ul">
          {languageFiltersData.map(item => (
            <LanguageFilterItem
              key={item.id}
              item={item}
              activeId={activeId}
              func1={this.changeActiveId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderProductItems()}
      </div>
    )
  }
}
export default GithubPopularRepos
