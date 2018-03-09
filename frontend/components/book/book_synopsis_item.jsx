import React from 'react';

class BookSynopsisItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shortSynopsis:'book-synopsis__visible',
      longSynopsis: 'book-synopsis__hidden',
    };
  }

  swapContent(){
    const {shortSynopsis, longSynopsis} = this.state;
    return e => this.setState({shortSynopsis:longSynopsis, longSynopsis:shortSynopsis});
  }

  render(){
    const { synopsis } =this.props;
    const {shortSynopsis, longSynopsis} = this.state;
    let truncSyn;
    if(synopsis.length > 450){
      truncSyn = synopsis.slice(0, 375) + " " ;
      return(
        <div className='book-synopsis-container'>
          <div className={shortSynopsis}>
            <p>
             {truncSyn}
             <span onClick={this.swapContent()} className='book-synopsis__swap-content'>  ...more</span>
            </p>
          </div>
          <div className={longSynopsis}>
            <p>
             {synopsis}
             <span onClick={this.swapContent()} className='book-synopsis__swap-content'> (less)</span>
            </p>
          </div>

        </div>
      );
    } else {
      return(
        <div className='book-synopsis-container'>
          <p>
            {synopsis}
          </p>
        </div>
      );
    }
  }
}
export default BookSynopsisItem;
