import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import ReviewForm from './review_form';
import { postReview } from '../../actions/review_actions';


const msp = (store, ownProps) =>{
  return({
    rating: 0,
    title: '',
    body:'',
  });
};

const mdp = dispatch =>{
  return({
    submitAction:
  });
};
