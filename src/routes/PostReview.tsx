import React, { FunctionComponent } from 'react';
import { storeDataJSON } from '../../public/json/storeDataJSON';

type PostReviewProps = {};

const PostReview: FunctionComponent<PostReviewProps> = () => {
  return (
    <div className="flex flex-col justify-between min-h-[60vh] h-full">
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="제목"
            className="w-full text-[20px] sm:text-[50px] border-b-[1px] border-divider mb-[20px] bg-inherit"
          />
          <div className="w-[50%] sm:w-[40%] absolute top-0 right-0 flex justify-between sm:max-w-[13rem] sm:h-[75%] items-center">
            <div className="dropdown dropdown-hover dropdown-end w-[63%]">
              <div className="w-full  h-[30px] border-primary border-[1px] text-primary rounded flex justify-center items-center">
                가게 검색
              </div>
              <div className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[16rem] sm:w-[460px] flex flex-col items-center">
                <div className="w-[90%]">
                  <input type="text" placeholder="가게 검색하기" className="input w-full" />
                </div>
                <ul tabIndex={0} className="w-full">
                  {storeDataJSON.map(({ storeName, address }) => {
                    return (
                      <li className="w-full">
                        <a className="w-full">
                          <div className="w-full bg-zinc-300 rounded p-2 text-black">
                            <p>{storeName}</p>
                            <p>{address}</p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="w-[33%] h-[30px] bg-primary text-white rounded flex justify-center items-center">
              등록
            </div>
          </div>
        </div>
      </div>
      <textarea
        className="textarea bg-textarea placeholder:text-placeholder resize-none w-full h-80"
        placeholder="20자 이상 입력하세요."
      ></textarea>
      <div>
        <div>사진 추가</div>
        <div className="flex justify-end">
          <button className="btn btn-success">추가</button>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
