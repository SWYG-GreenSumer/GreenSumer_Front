import React from 'react';

const Login = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <p className='font-bold italic text-[#18BC3C] mt-20 text-7xl'>
          Welcome to <br />
          GreenSumer!
        </p>
      </div>
      <div className='flex justify-center mt-20'>
        <form method='post'>
          <div className='mb-5 flex'>
            <label
              className='flex items-center font-semibold mr-3 text-3xl flex-1'
              htmlFor='userIDinput'>
              ID
            </label>
            <input
              className='text-2xl flex-1 h-14'
              id='userIDinput'
              type='text'
              placeholder='아이디를 입력하세요'
            />
          </div>
          <div></div>
          <div className='flex'>
            <label
              className='flex items-center font-semibold flex-1 mr-3 text-3xl'
              htmlFor='userPWinput'>
              PW
            </label>
            <input
              className='flex-1 text-2xl h-14'
              id='userPWinput'
              type='text'
              placeholder='비밀번호를 입력하세요'
            />
          </div>
          <button
            className='bg-[#0C3306] text-white w-full mt-8 h-12 text-2xl'
            type='submit'>
            Enter!
          </button>
        </form>
      </div>
      <div className='flex flex-col'>
        <button className='mt-4 text-[#0A0D0A] m-auto'>아이디/비밀번호 찾기</button>
        <button className='mt-10 mb-10 text-[#0A0D0A] m-auto'>회원가입이 아직이라면 클릭하세요!</button>
      </div>
    </div>
  );
};

export default Login;
