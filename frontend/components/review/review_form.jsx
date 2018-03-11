import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {rating:'', shelf:'', body:''};
  }

  adjustRating(rating){
    return e => this.setState({rating});
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

  render(){
    const {coverImage, title, author} = this.props;
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
            <li className='review-form__1star' onCLick={this.adjustRating(1)}></li>
            <li className='review-form__2star' onCLick={this.adjustRating(2)}></li>
            <li className='review-form__3star' onCLick={this.adjustRating(3)}></li>
            <li className='review-form__4star' onCLick={this.adjustRating(4)}></li>
            <li className='review-form__5star' onCLick={this.adjustRating(5)}></li>
          </ul>
          <section className='review-form__shelf'>
          </section>
        </section>
        <article>
          <textarea onChange={this.update()}value={this.state.body}></textarea>
        </article>
        <input type="submit" value='Add Review'></input>
      </form>

    );
  }
}