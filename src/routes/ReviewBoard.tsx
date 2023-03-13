import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewList from '../components/ReviewBoard/ReviewList';

type ReviewBoardProps = {};

const ReviewBoard: FunctionComponent<ReviewBoardProps> = () => {
  const navigate = useNavigate();
  const onPostClickHandle = () => {
    navigate('/postReview');
  };
  return (
    <div>
      <ReviewList />
      <div className="flex relative justify-center mt-10">
        <div className="btn-group m-x-auto">
          <button className="btn btn-success">«</button>
          <button className="btn btn-success">1</button>
          <button className="btn btn-primary">2</button>
          <button className="btn btn-success">3</button>
          <button className="btn btn-success">4</button>
          <button className="btn btn-success">»</button>
        </div>
        <button className="btn btn-success absolute right-0" onClick={onPostClickHandle}>
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default ReviewBoard;
