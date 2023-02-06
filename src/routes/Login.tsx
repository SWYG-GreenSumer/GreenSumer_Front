import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [userID, setUserID] = React.useState<string>('');
  const [userPW, setUserPW] = React.useState<string>('');

  const onLoginHandler = () => {
    const fetchLogin = async () => {
      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userID,
          password: userPW,
        }),
      };

      try {
        const fetchResponse = await fetch(`/api/login`, settings);
        const data = await fetchResponse.json();
        return data;
      } catch (e) {
        alert('로그인 에러가 발생하였습니다. ' + e);
        return e;
      }
    };

    fetchLogin();
  };

  return (
    <div className='LoginContainer h-fit'>
      <div className='Logo flex justify-center'>
        <p className='font-bold italic text-primary text-4xl'>
          Welcome to <br /> GreenSumer!
        </p>
      </div>

      <form method='post' className='flex flex-col items-center'>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='userID'>
            <span className='label-text'>ID</span>
          </label>
          <input
            id='userID'
            type='text'
            placeholder='아이디를 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='userPW'>
            <span className='label-text'>Password</span>
          </label>
          <input
            id='userPW'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userPW}
            onChange={(e) => setUserPW(e.target.value)}
          />
        </div>
        <div className='mt-8 w-full max-w-xl'>
          <button className='btn btn-block bg-primary border-primary text-white max-w-xl' onClick={onLoginHandler}>
            Enter!
          </button>
        </div>
      </form>

      <div className='findIDandSignupContainer'>
        <div className='flex flex-col w-full'>
          <Link to='/findIDandPW' className='mt-4 text-neutral m-auto text-sm'>
            아이디/비밀번호 찾기
          </Link>
          <Link to='/signup' className='mt-4 text-neutral m-auto text-sm'>
            회원가입이 아직이라면 클릭하세요!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
