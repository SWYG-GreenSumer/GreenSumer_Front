import React, { FunctionComponent } from 'react';

type PostReviewProps = {};

const PostReview: FunctionComponent<PostReviewProps> = () => {
  return (
    <div>
      <div>후기 등록</div>
      <div>
        <div className='dropdown dropdown-hover'>
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
          className='input input-bordered w-full max-w-xs'
        />
      </div>
      <textarea
        className='textarea textarea-bordered resize-none w-full'        
        placeholder='20자 이상 입력하세요.'></textarea>
      <div>
        <div>사진 추가</div>
        <button className='btn btn-success'>추가</button>
      </div>
    </div>
  );
};

export default PostReview;
