import React, { FunctionComponent } from 'react';

type PostReviewProps = {};

const PostReview: FunctionComponent<PostReviewProps> = () => {
  return (
    <div className='flex flex-col justify-between min-h-[60vh] h-full'>
      <div className='font-bold text-3xl flex justify-center'>후기 등록</div>
      <div>
        <div className='dropdown dropdown-hover mb-2 sm:mr-5 w-full sm:max-w-xs'>
          <input
            tabIndex={0}
            placeholder='카테고리'
            className='input input-bordered w-full max-w-xl cursor-pointer'
            readOnly
          />
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full'>
            <li>
              <a>주방 ex{')'} 천연수세미, 라텍스 고무장갑</a>
            </li>
            <li>
              <a>욕실 ex{')'} 스트롱 고체치약</a>
            </li>
            <li>
              <a>생활 ex{')'} 유기농 빨대 파우치</a>
            </li>
            <li>
              <a>식품 ex{')'} 비건 마시멜로우 메이플형</a>
            </li>
          </ul>
        </div>
        <input
          type='text'
          placeholder='제목'
          className='input input-bordered w-full sm:max-w-xl'
        />
      </div>
      <textarea
        className='textarea textarea-bordered resize-none w-full h-80'
        placeholder='20자 이상 입력하세요.'></textarea>
      <div>
        <div>사진 추가</div>
        <div className='flex justify-end'>
          <button className='btn btn-success'>추가</button>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
