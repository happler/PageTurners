[Link to the Live Version](https://pageturners.harryappler.com)

# PageTurners

PageTurners is a single page app inspired by Goodreads that utilizes a Ruby on Rails backend and a react-redux frontend to create a streamlined and responsive experience.

## Features

* Books

  1.  Books can be found through the book index, from a user's shelves, or any other user's shelves.
  2.  Each book has a truncated synopsis, that is then expandable to the full text, as well as a subsection of visible additional info, which is also expandable for additional info

* Reviews

  1.  Users can add full reviews with both numerical ratings and text from a link on the book's individual page.
  2.  The logged-in user can edit or delete their long-form reviews from the book show page, with pre-filled forms for easy editing.
  3.  Users can also instantly rate books with a numerical ratings from either the book show page, or a bookshelf,
  4.  A breakdown of review details can be found on each book, including number of full reviews, ratings, and the percentage of each rating, which updates with each review

* Bookshelves
  1.  All users start with 3 shelves that they cannot remove; Read, Reading, and Want to Read
  2.  Users can add their own custom shelves, as long as they don't have two shelves named the same thing (this would just be confusing)
  3.  Users can either look at all of their shelves at once, or just a specific shelf.
  4.  Users can add or remove books from their shelves.

## Technologies Used

### Backend

* Ruby on Rails (v5.1.4) for MVC Framework
* PostgreSQL (v0.18) database
* Custom authentication through BCrypt (v3.1.7)
* Jbuilder (v2.5) for serving appropriately shaped JSON
* Paperclip/AWS-SDK for storage of fetchable image assets

### Frontend

* React (v16.2.0) following the redux implementation paradigm
* Jquery & AJAX for all requests after initial page loader

## Significant Features & Implementation

### In Place Rating

One of the pitfalls of online review validity is the bias of love-it or hate-it reviews. Because of the time investment of writing a review users will be motivated to review something only if they feel strongly about it, be that positive or negative. One solution is to make reviewing something easier for users, so that they'll be more likely to review due to the convenience and omnipresence of the feature.
To accomplish this, I took a two-pronged approach to ratings. First, I created a long-form book review that let users write as much as they like, to be displayed at the bottom of each book's page. In addition, I also created a short-form that only lets users rate the book on a scale from 1-5. The long-form is available only on the book's page, but the short-form is available everywhere the book is displayed. The most challenging part of the mini-review was getting the hovered star, _and all lower stars_ to fill in as they are moused over, and to revert back to the user's set rating once either a new rating is submitted, or the stars are no longer moused over. I did this with a combination of mouse enter events on each star, and mouse leave event on the star container.

```javascript
dynamicStars(star) {
  return e => {
    const ratingKeys = Object.keys(this.state.stars);
    const newState = Object.assign({}, this.state);
    ratingKeys.forEach(key => {
      if (key <= star) {
        newState.stars[key] = window.yellowStar;
      } else {
        newState.stars[key] = window.hollowStar;
      }
    });
    this.setState(newState);
  };
}
```

```javascript
dynamicStarsReset() {
  const star = this.state.review.rating;
  this.dynamicStars(star)();
}
```

```javascript
adjustRating(rating) {
  return e => {
    let review = Object.assign({}, this.state.review);
    review.rating = rating;
    this.setState({ review });
    review.book_id = this.props.bookId;
    if (this.state.hasReview) {
      this.props.patchReview(review);
    } else {
      this.props.postReview(review);
      this.setState({ hasReview: true });
    }
  };
}
```

### Review Details Graph

Averages are a good metric for understanding how people feel about something on the whole, but they often don't tell the whole picture. To get a more holistic picture of readers' opinions on a given book, I created a breakdown by rating, and displayed it in a bar graph dropdown. I did this by utilizing in-line CSS to adjust the bars width to be the percentage of all ratings that the given rating has.

![Gif of rating](https://raw.githubusercontent.com/happler/pageturners/master/app/assets/images/pageturners.gif)

```javascript
reviews.forEach(review =>{
  reviewCount++;
  switch (review.rating) {
    case 1:
      oneStar++;
      break;
  .........

  const total = (oneStar * 1) + (twoStar * 2) + (threeStar * 3) + (fourStar * 4) + (fiveStar * 5);
  const average = (total/reviewCount).toFixed(2);
  .........
  const oneStarPct = ((oneStar /reviewCount) * 100);
  .........
  const oneStyle = {width:oneStarPct +'%'};
  .........
  <div className='review-details__graph__bars__one' style={oneStyle}></div>
```

## Future Updates

The most significant update I want to add is search, both of other users names, and book titles. In conjunction with search, I also want to add genre tags, and authors, with related shelves of their works.
