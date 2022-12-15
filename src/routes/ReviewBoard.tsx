import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { dumpData } from '../dumpdata';

type ReviewBoardProps = {};

const ReviewBoard: FunctionComponent<ReviewBoardProps> = () => {
  const navigate = useNavigate();
  const onPostClickHandle = () => {
    navigate("/postReview");
  }
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className='bg-success'>번호</th>
              <th className='bg-success'></th>
              <th className='bg-success'>제목</th>
              <th className='bg-success'>글쓴이</th>
              <th className='bg-success'>날짜</th>
              <th className='bg-success'>조회수</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row --> */}
            {dumpData.map((e, i) => {
              if (i < 10) {
                return (
                  <tr key={e.product_id}>
                    <th>{e.product_id}</th>
                    <td>{e.hashtag}</td>
                    <td>{e.title}</td>
                    <td>{e.nickname}</td>
                    <td>{e.createdAt}</td>
                    <td>{e.views}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className='flex relative justify-center mt-10'>
        <div className='btn-group m-x-auto'>
          <button className='btn btn-success'>«</button>
          <button className='btn btn-success'>1</button>
          <button className='btn btn-primary'>2</button>
          <button className='btn btn-success'>3</button>
          <button className='btn btn-success'>4</button>
          <button className='btn btn-success'>»</button>
        </div>
        <button className='btn btn-success absolute right-0' onClick={onPostClickHandle}>글쓰기</button>
      </div>
      
    </div>
  );
};

export default ReviewBoard;
