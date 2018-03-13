import React from 'react';

class ReviewDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={dropDown:'review-details__hidden'};
    this.swapBox = this.swapBox.bind(this);

  }

  swapBox(){
    if (this.state.dropDown === 'review-details__hidden' ){
      this.setState({dropDown:'review-details__shown'});
    } else{
      this.setState({dropDown:'review-details__hidden'});

    }
  }

  render(){
    const { reviews } = this.props;
    let reviewCount, ratings, textReviews, oneStar, twoStar, threeStar, fourStar, fiveStar;
    ratings = textReviews = oneStar = twoStar = threeStar = fourStar = fiveStar = 0;
    reviewCount = .0001;

    reviews.forEach(review =>{
      reviewCount++;
      switch (review.rating) {
        case 1:
          oneStar++;
          break;
        case 2:
          twoStar++;
          break;
        case 3:
          threeStar++;
          break;
        case 4:
          fourStar++;
          break;
        case 5:
          fiveStar++;
          break;
      }
      if (review.body ===''){
        ratings++;
      } else{
        textReviews++;
      }
    });

    const total = (oneStar * 1) + (twoStar * 2) + (threeStar * 3) + (fourStar * 4) + (fiveStar * 5);
    const average = (total/reviewCount).toFixed(2);

    const ratingStars = [];

    const oneStarPct = ((oneStar /reviewCount) * 100).toFixed(2);
    const twoStarPct = ((twoStar /reviewCount) * 100).toFixed(2);
    const threeStarPct = ((threeStar /reviewCount) * 100).toFixed(2);
    const fourStarPct = ((fourStar /reviewCount) * 100).toFixed(2);
    const fiveStarPct = ((fiveStar /reviewCount)* 100).toFixed(2);

    for (let i = 0; i < 5; i++) {
      ratingStars.push(i < Math.round(average)
        ? <img key={i} src={window.yellowStar} alt='Yellow Text' />
      : <img key={i} src={window.hollowStar} alt='Empty Text' />);
    }
    const fiveStyle = {width:fiveStarPct +'%'};
    const fourStyle = {width:fourStarPct +'%'};
    const threeStyle = {width:threeStarPct +'%'};
    const twoStyle = {width:twoStarPct +'%'};
    const oneStyle = {width:oneStarPct +'%'};
    return(
      <div className='review-details-container'>
        <div className='review-details__average'>
          {ratingStars}
          <span className='review-details__average__number'>{average}</span>
        </div>
        <div className='review-details__mini-graph-container'>
          <img className='review-details__mini-graph' src={window.graph} />
            <span className='review-details__graph__toggle' onClick={this.swapBox}>Rating Details</span>
        </div>
        <div className={this.state.dropDown}>
          <nav className='review-details__graph__nav'>
            <span className='review-details__graph__nav__title'>Rating Details</span>
            <span className='review-details__graph__nav__exit' onClick={this.swapBox}>x</span>
          </nav>
          <div className='review-details__graph'>
            <div className='review-details__graph__labels'>
              <span className='review-details__graph__label' >5</span>
              <span className='review-details__graph__label' >4</span>
              <span className='review-details__graph__label' >3</span>
              <span className='review-details__graph__label' >2</span>
              <span className='review-details__graph__label' >1</span>
            </div>
            <div className='review-details__graph__stars__col'>
              <img className='review-details__graph__stars' src={window.yellowStar} alt='Yellow Text' />
              <img className='review-details__graph__stars' src={window.yellowStar} alt='Yellow Text' />
              <img className='review-details__graph__stars' src={window.yellowStar} alt='Yellow Text' />
              <img className='review-details__graph__stars' src={window.yellowStar} alt='Yellow Text' />
              <img className='review-details__graph__stars' src={window.yellowStar} alt='Yellow Text' />
            </div>
            <div className='review-details__graph__bars'>
              <div className='review-details__graph__bars__five' style={fiveStyle}></div>
              <div className='review-details__graph__bars__four' style={fourStyle}></div>
              <div className='review-details__graph__bars__three' style={threeStyle}></div>
              <div className='review-details__graph__bars__two' style={twoStyle}></div>
              <div className='review-details__graph__bars__one' style={oneStyle}></div>
            </div>
            <div className='review-details__graph__pcts'>
              <span className='review-details__graph__pct' >{`${fiveStarPct}% (${fiveStar})`}</span>
              <span className='review-details__graph__pct' >{`${fourStarPct}% (${fourStar})`}</span>
              <span className='review-details__graph__pct' >{`${threeStarPct}% (${threeStar})`}</span>
              <span className='review-details__graph__pct' >{`${twoStarPct}% (${twoStar})`}</span>
              <span className='review-details__graph__pct' >{`${oneStarPct}% (${oneStar})`}</span>
            </div>
          </div>
          <p>{`${fiveStarPct + fourStarPct + threeStarPct}% of people liked it`}</p>

        </div>
        <span className='review-details__numbers'>{ratings} Ratings</span>
        <span className='review-details__numbers'>{textReviews} Reviews</span>
      </div>
    );
  }
}

export default ReviewDetails;


// <div style={width:`${fourStarPct}%`}></div>
// <div style={width:`${threeStarPct}%`}></div>
// <div style={width:`${twoStarPct}%`}></div>
// <div style={width:`${oneStarPct}%`}></div>
