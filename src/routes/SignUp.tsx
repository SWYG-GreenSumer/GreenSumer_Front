import React, { FunctionComponent, ReactEventHandler, useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import SearchAddress from '../components/SearchAddress';

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  // 판매자인지, 소비자인지 판별
  const [isSeller, setIsSeller] = React.useState<boolean>(false);
  // 주소 검색창이 열렸는지, 닫혔는지 판별
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  // 회원 정보
  const [userID, setUserID] = React.useState<string>("");
  const [userPW, setUserPW] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userNickname, setUserNickname] = React.useState<string>("");
  const [userAddress, setUserAddress] = React.useState<string>("");
  const [userZonecode, setUserZonecode] = React.useState<string>("");


  const onSellerClick = () => {
    setIsSeller(true);
  };

  const onConsumerClick = () => {
    setIsSeller(false);
  };

  const onIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value)
  }
   const onPWChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPW(event.target.value)
  }
   const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value)
  }
   const onNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(event.target.value)
  }

  const handle = {
    // 주소 검색 버튼 클릭 이벤트
    onAddressSearchClick: () => {
      setOpenPostcode(current => !current);
    },
    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`주소: ${data.address}, 우편번호: ${data.zonecode}`);
      setOpenPostcode(false);
      setUserAddress(data.address);
      setUserZonecode(data.zonecode);
    },    
  }

  return (
    <>
      {/* Seller Consumer 버튼 */}
      <div className='flex justify-between my-5'>
        <button
          className='btn btn-primary text-2xl font-bold text-white min-w-fit h-10'
          onClick={onSellerClick}>
          Seller
        </button>
        <button
          className='btn btn-secondary text-2xl font-bold text-white min-w-fit  h-10'
          onClick={onConsumerClick}>
          Consumer
        </button>
      </div>
      {/* 회원가입 input */}
      <div className='SignupInputContainer flex-col justify-center m-auto max-w-xl'>        
          <div className='form-control w-full'>
            <label className='label' htmlFor='userID'>
              <span className='label-text'>ID</span>
            </label>
            <input
              id='userID'
              type='text'
              placeholder='아이디를 입력해주세요'
              className='input input-bordered w-full max-w-xl'
              value={userID}
              onChange={onIDChange}
            />
          </div>
          <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='userPW'>
              <span className='label-text'>PW</span>
            </label>
            <input
              id='userPW'
              type='password'
              placeholder='비밀번호를 입력해주세요'
              className='input input-bordered w-full max-w-xl'
              value={userPW}
              onChange={onPWChange}
            />
          </div>
          <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='userEmail'>
              <span className='label-text'>이메일</span>
            </label>
            <input
              id='userEmail'
              type='text'
              placeholder='이메일을 입력해주세요'
              className='input input-bordered w-full max-w-xl'
              value={userEmail}
              onChange={onEmailChange}
            />
          </div>
          <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='userNickname'>
              <span className='label-text'>닉네임</span>
            </label>
            <input
              id='userNickname'
              type='text'
              placeholder='닉네임을 입력해주세요'
              className='input input-bordered w-full max-w-xl'
              value={userNickname}
              onChange={onNicknameChange}
            />
          </div>
          {/* Seller 일 때, 지점 등록 가능 */}
          {isSeller && (
            <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='userAddress'>
              <span className='label-text'>가게 주소</span>
            </label>
            <input
              id='userAddress'
              type='text'
              placeholder='가게 주소를 입력해주세요'
              className='input input-bordered w-full max-w-xl'
              value={userAddress}
              onClick={handle.onAddressSearchClick}
            />
          </div>
          )}
          {
            openPostcode &&           
            <DaumPostcodeEmbed 
             // 값을 선택할 경우 실행되는 이벤트
            onComplete={handle.selectAddress}
            // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘
            autoClose={false}
            // 팝업을 열 때 가본적으로 입력되는 검색어
            defaultQuery='판교역로 235'
            className='mt-2 border-4 ' />
          }
          <button className="btn btn-block btn-success mt-8">회원가입</button>
        
      </div>
    </>
  );
};

export default SignUp;
