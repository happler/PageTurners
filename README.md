# PageTurners

PageTurners is a single page app inspired by Goodreads that utilizes a Ruby on Rails backend and a react-redux frontend to create a streamlined and responsive experience.

## Features

*Books
  1. Books can be found through the book index, from a user's shelves, or any other user's shelves.
  2. Each book has a truncated synopsis, that is then expandable to the full text, as well as a subsection of visible additional info, which is also expandable for additional info

*Reviews
  1. Users can add full reviews with both numerical ratings and text from a link on the book's individual page.
  2. The logged-in user can edit or delete their long-form reviews from the book show page, with pre-filled forms for easy editing.
  3. Users can also instantly rate books with a numerical ratings from either the book show page, or a bookshelf,
  4. A breakdown of review details can be found on each book, including number of full reviews, ratings, and the percentage of each rating, which updates with each review

*Bookshelves
  1. All users start with 3 shelves that they cannot remove; Read, Reading, and Want to Read
  2. Users can add their own custom shelves, as long as they don't have two shelves named the same thing (this would just be confusing)
  3. Users can either look at all of their shelves at once, or just a specific shelf.

## Technologies Used

### Backend
  +Ruby on Rails (v5.1.4) for MVC Framework
  +PostgreSQL (v0.18) database
  +Custom authentication through BCrypt (v3.1.7)
  +Jbuilder (v2.5) for serving appropriately shaped JSON
  +Paperclip/AWS-SDK for storage of fetchable image assets

  ### Frontend
  +React (v16.2.0) following the redux implementation paradigm
  +Jquery & AJAX for all requests after initial page loader


## Significant Features

###In Place Rating
One of the pitfalls of online review validity is the bias of love-it or hate-it reviews.  because of the time investment of writing a review users will be motivated to review something only if they feel strongly about it, be that positive or negative. One solution is to make reviewing something easier for users, so that they'll be more likely to review due to the convenience and omnipresence of the feature.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
