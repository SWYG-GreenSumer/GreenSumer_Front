import React from 'react';
import { FunctionComponent } from 'react';

interface FindIPandPWProps {}

const FindIPandPW: FunctionComponent<FindIPandPWProps> = () => {
  return (
    <div className="m-auto w-[100%] max-w-xl">
      <h2 className="text-3xl font-bold flex justify-center">아이디 찾기</h2>
      {/* 이메일 인증 요청 */}
      <div className="form-control w-full max-w-xl">
        <label className="label" htmlFor="userEmail">
          <span className="label-text">이메일</span>
        </label>
        <div className="flex justify-between">
          <input
            id="userEmail"
            type="text"
            placeholder="이메일을 입력해주세요"
            className="input input-bordered w-[80%] max-w-xl"
            required
          />
          <button className="btn btn-primary">인증 요청</button>
        </div>
        <label></label>
      </div>

      <button className="btn btn-block btn-success mt-8">회원가입</button>
    </div>
  );
};

export default FindIPandPW;
