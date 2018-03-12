import React from 'react';
import ReviewFormBook from './review_form_book';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {rating:'', shelf:'', body:'', stars:{
      1: 'far',
      2: 'far',
      3: 'far',
      4: 'far',
      5: 'far',
    }};
    this.adjustRating = this.adjustRating.bind(this);
    this.dynamicStars = this.dynamicStars.bind(this);
  }

  adjustRating(rating){
    // debugger
    // return e => this.setState({rating});
    return e => {
      this.setState({rating});
    };
  }

  dynamicStars(star){
    return e => {

      const ratingKeys = Object.keys(this.state.stars);
      ratingKeys.forEach(key => {
        if (key <= star){
          this.setState({stars:{[key]:'fas'}});
        } else{
          this.setState({stars:{[key]:'far'}});
        }
        console.log(this.state);
      });
    };
  }

  //     for (let i = 0, i < star, i++){
  //       this.setState({stars:{[star]:'fas'}})
  //     }
  //   }
  // }

  componentDidMount(){
    if (!this.props.book || !this.props.book.coverImage){
      this.props.fetchBook(this.props.match.params.id);
    }
  }

  update(){
    return e => this.setState({body:e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    // if( this.state.username === '' || this.state.password === '') return
    this.props.submitAction(this.state)
    .then(() => this.props.history.push(`/books/${this.props.id}`));
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
    );}
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
          <ul className='review-form__rating'>
            <li onMouseEnter={this.dynamicStars(1)} onClick={this.adjustRating(1)}>
              <p className={`${this.state.stars[1]} fa-star`}></p>
            </li>
            <li onMouseEnter={this.dynamicStars(2)} onClick={this.adjustRating(2)}>
              <p className={`${this.state.stars[2]} fa-star`}></p>
            </li>
            <li onMouseEnter={this.dynamicStars(3)} onClick={this.adjustRating(3)}>
              <p className={`${this.state.stars[3]} fa-star`}></p>
            </li>
            <li onMouseEnter={this.dynamicStars(4)} onClick={this.adjustRating(4)}>
              <p className={`${this.state.stars[4]} fa-star`}></p>
            </li>
            <li onMouseEnter={this.dynamicStars(5)} onClick={this.adjustRating(5)}>
              <p className={`${this.state.stars[5]} fa-star`}></p>
            </li>
          </ul>
          <section className='review-form__shelf'>
          </section>
        </section>
        <article>
          What did you think?
          <textarea  className='review-form__body' onChange={this.update()}value={this.state.body}></textarea>
        </article>
        <input type="submit" value='Add Review'></input>
      </form>

    );
  }
}
export default ReviewForm;
