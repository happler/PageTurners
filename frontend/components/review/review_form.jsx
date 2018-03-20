import React from 'react';
import ReviewFormBook from './review_form_book';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating:this.props.review.rating,
      shelf:this.props.review.shelf,
      body:this.props.review.body,
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
  }
  componentDidMount(){
    this.dynamicStarsReset();
  }

  adjustRating(rating){
    return e => {
      this.setState({rating});
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
      });
      this.setState(newState);
    };
  }

  dynamicStarsReset(){
      const star = this.state.rating;
      const ratingKeys = Object.keys(this.state.stars);
      const newState = Object.assign({}, this.state);
      ratingKeys.forEach(key => {
        if (key <= star){
          newState.stars[key]= window.yellowStar;
        } else{
          newState.stars[key]= window.hollowStar;
        }
      });
      this.setState(newState);
  }


  componentDidMount(){
    window.scroll(0, 0);
    if (!this.props.book || !this.props.book.coverImage){
      this.props.fetchBook(this.props.match.params.id);
    }
  }

  update(){
    return e => this.setState({body:e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const review = merge({}, this.state, {book_id:this.props.match.params.id, id:this.props.match.params.reviewId});
    this.props.submitAction(review)
    .then(() => this.props.history.push(`/books/${this.props.match.params.id}`));
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render(){
    if (!this.props.book || !this.props.book.coverImage){
      return(
        <div className='review-form-loading-container'>
          <h2 className='review-form-loading'>Loading...</h2>
            {this.props.errors.map((error, idx) => <li
              className='review-form-error'
              key={ idx }>{error}</li>) }
        </div>
      );
    }
    const {coverImage, title, author} = this.props.book;

    return(
      <form onSubmit={e => this.handleSubmit(e)} className='review-form-container'>
        {this.props.errors.map((error, idx) => <li
          className='review-form__error'
          key={ idx }>{error}</li>) }
        <header className='review-form__book'>
          <ReviewFormBook
            title={title}
            author={author}
            coverImage={coverImage}/>
        </header>
        <section className='review-form__attributes'>
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
          <section className='review-form__shelf'>
          </section>
        </section>
        <article>
          What did you think?
          <textarea  className='review-form__body' onChange={this.update()}value={this.state.body}></textarea>
        </article>
        <input className='review-form__submit' type="submit" value={this.props.formType}></input>
      </form>

    );
  }
}
export default withRouter(ReviewForm);
