import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Nav: FunctionComponent<Props> = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onLoginHandler = () => {
    setIsLogin(true);
  };

  const onLogoutHandler = () => {
    setIsLogin(false);    
  };

  return (
    <nav className='sticky top-0 bg-white z-10 w-full m-auto'>
      <div className='navbar relative m-auto text-neutral border-b-2 border-[#DEDEDE] w-[95%] sm:w-4/5'>
        {/* 좌 햄버거 아이콘 */}
        <div className='absolute'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'                
                viewBox='0 0 24 24'
                stroke='#67C347'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='3'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            {/* 드롭다운 메뉴 */}
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a>매장운영(Seller)</a>
              </li>
              <li>
                <a>그린카드</a>
              </li>
              <li>
                <a>이용안내</a>
              </li>
            </ul>
          </div>
        </div>
        {/* GreenSumer 로고 */}
        <div className='flex-1 justify-center'>
          <Link className='btn btn-ghost normal-case text-xl text-primary' to={'/'}>
            GreenSumer!
          </Link>
        </div>
        <div className='absolute right-0 gap-2'>
          {/* 사용자 ID */}
          <div className='text-primary flex-none hidden sm:flex'>
            USER ID
          </div>
          {/* 사용자 프로필 */}
          <div className='dropdown dropdown-end'>
            {/* 로그인 했으면 사용자 프로필 사진, 안했으면 익명 프로필 사진 */}
            {isLogin ? (
              <>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img src='https://placeimg.com/80/80/people' />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
                  <li>
                    <a className='justify-between'>
                      MyPage
                      <span className='badge'>New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={onLogoutHandler}>Logout</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img src='/img/anonymousProfile.svg' />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
                  <li>
                    <a className='justify-between'>
                      MyPage
                      <span className='badge'>New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;