import React, { FunctionComponent } from 'react';

type ReviewBoardProps = {};

const ReviewBoard: FunctionComponent<ReviewBoardProps> = () => {
  return (
    <div className='h-fit'>
      <div className='card sm:card-side bg-base-100 shadow-xl h-full'>
        <div className='card-body'>
          <h2 className='card-title border-y-2 border-black p-1 w-full flex justify-center'>
            후기 게시판
          </h2>
          <p className='border-b-2 border-black flex-grow-0'>제로웨이스트샵 주방세제 정말 좋아요~!</p>
          <p className='border-b-2 border-black flex-grow-0'>제로웨이스트샵 주방세제 정말 좋아요~!</p>
          <p className='border-b-2 border-black flex-grow-0'>제로웨이스트샵 주방세제 정말 좋아요~!</p>
          <p className='border-b-2 border-black flex-grow-0'>제로웨이스트샵 주방세제 정말 좋아요~!</p>          
        </div>
      </div>
    </div>
  );
};

export default ReviewBoard;
