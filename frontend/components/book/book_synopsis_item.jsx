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
    // const synopsis = this.props.synopsis.split('\n').join(<br/>);
    const { synopsis } = this.props;
    const {shortSynopsis, longSynopsis} = this.state;
    const splitSyn = synopsis.split("\n");
    let truncSyn;
    if(synopsis.length > 450){
      truncSyn = synopsis.slice(0, 375) + "..." ;
      if (truncSyn.slice(-5).includes('\\')){
        truncSyn = truncSyn.slice(0, -5) + "...";
      }
      truncSyn = truncSyn.split("\n");
      return(
        <div className='book-synopsis-container'>
          <div className={shortSynopsis}>
             {truncSyn.map((section, idx) => <div key={idx}><p className='book-synopsis__content' key={idx}>{section}</p><br/></div>)}
            <span
              onClick={this.swapContent()}
              className='book-synopsis__swap-content'>(More...)</span>
          </div>
          <div className={longSynopsis}>
              {splitSyn.map((section, idx) => <div key={idx}><p className='book-synopsis__content' key={idx}>{section}</p><br/></div>)}
             <span
               onClick={this.swapContent()}
               className='book-synopsis__swap-content'>(...Less)</span>
          </div>
        </div>
      );
    } else {
      return(
        <div className='book-synopsis-container'>
            {splitSyn.map((section, idx) =><div key={idx} ><p className='book-synopsis__content' >{section}</p><br/></div>)}
        </div>
      );
    }
  }
}
export default BookSynopsisItem;
