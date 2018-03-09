import React from 'react';

class BookDetailsItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shortDetails:'book-details__visible',
      longDetails: 'book-details__hidden',
    };
  }

  swapContent(){
    const {shortDetails, longDetails} = this.state;
    return e => this.setState({shortDetails:longDetails, longDetails:shortDetails});
  }

  render(){
    const { published, edition, language, isbn, length, format, originalTitle, publisher } =this.props;
    const {shortDetails, longDetails} = this.state;
      return(
        <div className='book-details-container'>
          <div className='book-details__row'>
            <span>{format}, </span>
            <span>{length} pages</span>
          </div>
          <div className='book-details__row'>
            <span>Published {published} </span>
            <span>by {publisher}</span>
          </div>
          <div className={`${shortDetails} book-details__row`}>
            <p onClick={this.swapContent()} className='book-details__swap-content'> More Details...</p>
          </div>
          <div className={longDetails}>
            <div className='book-details-long__row'>
              <p className='book-details-long__row__header'>Original Title</p>
              <p>{originalTitle}</p>
            </div>
            <div className='book-details-long__row'>
              <p className='book-details-long__row__header'>ISBN</p>
              <p>{isbn}</p>
            </div>
            <div className='book-details-long__row'>
              <p className='book-details-long__row__header'>Edition Language</p>
              <p>{language}</p>
            </div>
            <div className='book-details-long__row'>
              <p onClick={this.swapContent()} className='book-details__swap-content'> ...Less Details</p>
            </div>
          </div>

        </div>
      );
  }
}
export default BookDetailsItem;
