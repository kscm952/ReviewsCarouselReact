// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewIndex: 0,
  }

  onClickLeftArrow = () => {
    this.setState(prevState => {
      if (prevState.reviewIndex > 0) {
        return {reviewIndex: prevState.reviewIndex - 1}
      }
      return null
    })
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    this.setState(prevState => {
      if (prevState.reviewIndex < reviewsList.length - 1) {
        return {reviewIndex: prevState.reviewIndex + 1}
      }
      return null
    })
  }

  render() {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    const review = reviewsList[reviewIndex]

    return (
      <div className="app-container">
        <div className="review-container">
          <div className="left-arrow-container">
            <button
              type="button"
              className="arrow-button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="left-arrow"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="review-card">
            <h1 className="heading">Reviews</h1>
            <img
              src={review.imgUrl}
              alt={review.username}
              className="profile-img"
            />
            <p className="name">{review.username}</p>
            <p className="company-name">{review.companyName}</p>
            <p className="description">{review.description}</p>
          </div>
          <div className="right-arrow-container">
            <button
              type="button"
              className="arrow-button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="right-arrow"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
