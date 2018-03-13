import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';


class MiniReview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      review: this.props.review,
      stars: {
        1: window.hollowStar,
        2: window.hollowStar,
        3: window.hollowStar,
        4: window.hollowStar,
        5: window.hollowStar,
      }
    };
    this.adjustRating = this.adjustRating.bind(this);
    this.dynamicStars = this.dynamicStars.bind(this);
    this.dynamicStarsReset = this.dynamicStarsReset.bind(this);
    this.dynamicStarsReset();
  }

  adjustRating(rating){
    return e => {

      let review = Object.assign({}, this.state.review);
      review.rating = rating;
      this.setState({review});
      review.bookId = this.props.match.params.id;
      this.props.submitAction(review);
    };
  }

  dynamicStars(star){
    return e => {

      const ratingKeys = Object.keys(this.state.stars);
      const newState = Object.assign({}, this.state);
      ratingKeys.forEach(key => {
        if (key <= star){
          newState.stars[key]= window.yellowStar;
        } else{
          newState.stars[key]= window.hollowStar;
        }
        console.log(this.state);
      });
      this.setState(newState);
    };
  }

  dynamicStarsReset(){
      const star = this.state.review.rating;
      const ratingKeys = Object.keys(this.state.stars);
      const newState = Object.assign({}, this.state);
      ratingKeys.forEach(key => {
        if (key <= star){
          newState.stars[key]= window.yellowStar;
        } else{
          newState.stars[key]= window.hollowStar;
        }
        console.log(this.state);
      });
      this.setState(newState);
  }

  render(){
    return(
        <ul className='review-form__rating'
          onMouseLeave={this.dynamicStarsReset}>
          <li onMouseEnter={this.dynamicStars(1)}
            onClick={this.adjustRating(1)}>
            <img src={this.state.stars[1]} />
          </li>
          <li onMouseEnter={this.dynamicStars(2)}
            onClick={this.adjustRating(2)}>
            <img src={this.state.stars[2]} />
          </li>
          <li onMouseEnter={this.dynamicStars(3)}
            onClick={this.adjustRating(3)}>
            <img src={this.state.stars[3]} />
          </li>
          <li onMouseEnter={this.dynamicStars(4)}
            onClick={this.adjustRating(4)}>
            <img src={this.state.stars[4]} />
          </li>
          <li onMouseEnter={this.dynamicStars(5)}
            onClick={this.adjustRating(5)}>
            <img src={this.state.stars[5]} />
          </li>
        </ul>
    );
  }


}


export default withRouter(MiniReview);
