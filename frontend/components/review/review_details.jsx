import React from 'react';

class ReviewDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={dropDown:'review-details__hidden'};
    this.showBox = this.showBox.bind(this);
    this.hideBox = this.hideBox.bind(this);

  }

  showBox(){
    this.setState({dropDown:'review-details__shown'});
  }

  hideBox(){
    this.setState({dropDown:'review-details__hidden'});
  }

  render(){
    const { reviews } = this.props;
    let reviewCount, ratings, textReviews, oneStar, twoStar, threeStar, fourStar, fiveStar;
    reviewCount = ratings = textReviews = oneStar = twoStar = threeStar = fourStar = fiveStar = 0;

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

    const oneStarPct = (oneStar /reviewCount).toFixed(2) * 100;
    const twoStarPct = (twoStar /reviewCount).toFixed(2) * 100;
    const threeStarPct = (threeStar /reviewCount).toFixed(2) * 100;
    const fourStarPct = (fourStar /reviewCount).toFixed(2) * 100;
    const fiveStarPct = (fiveStar /reviewCount).toFixed(2) * 100;

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
            <span onClick={this.showBox}>Rating Details</span>
        </div>
        <div className={this.state.dropDown}>
          <div>
            <span>Rating Details</span>
            <span onClick={this.hideBox}>X</span>
          </div>
          <div className='review-details__graph'>
            <div className='review-details__graph__labels'>
              <span>5</span>
              <span>4</span>
              <span>3</span>
              <span>2</span>
              <span>1</span>
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
            <div className='review-details__graph__pct'>
              <span>{`${fiveStarPct}% (${fiveStar})`}</span>
              <span>{`${fourStarPct}% (${fourStar})`}</span>
              <span>{`${threeStarPct}% (${threeStar})`}</span>
              <span>{`${twoStarPct}% (${twoStar})`}</span>
              <span>{`${oneStarPct}% (${oneStar})`}</span>
            </div>
          </div>

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
