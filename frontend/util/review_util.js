export const reviewStats = reviews => {
  let reviewCount,
    ratings,
    textReviews,
    oneStar,
    twoStar,
    threeStar,
    fourStar,
    fiveStar;
  ratings = textReviews = oneStar = twoStar = threeStar = fourStar = fiveStar = 0;
  reviewCount = 0.0001;

  reviews.forEach(review => {
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
    if (review.body === "") {
      ratings++;
    } else {
      textReviews++;
    }
  });

  const total =
    oneStar * 1 + twoStar * 2 + threeStar * 3 + fourStar * 4 + fiveStar * 5;
  const average = (total / reviewCount).toFixed(2);

  const oneStarPct = oneStar / reviewCount * 100;
  const twoStarPct = twoStar / reviewCount * 100;
  const threeStarPct = threeStar / reviewCount * 100;
  const fourStarPct = fourStar / reviewCount * 100;
  const fiveStarPct = fiveStar / reviewCount * 100;

  return {
    oneStarPct,
    twoStarPct,
    threeStarPct,
    fourStarPct,
    fiveStarPct,
    average
  };
};
