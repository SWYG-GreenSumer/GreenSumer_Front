import React, { FunctionComponent, useState } from 'react';
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
    <nav>
      <div className='navbar bg-primary'>
        {/* 좌 햄버거 아이콘 */}
        <div className='flex-one'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'                
                viewBox='0 0 24 24'
                stroke='white'>
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
        <div className='flex-1'>
          <Link className='btn btn-ghost normal-case text-xl text-base-100' to={'/'}>
            GreenSumer!
          </Link>
        </div>
        <div className='flex-none gap-2'>
          {/* Search input */}
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered hidden sm:flex'
            />
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

<div className='bg-[#1C541B] text-white flex justify-between'>
  <div className='flex items-center ml-10'>
    <p className='text-3xl'>GreenSumer!</p>
  </div>
  <div className='mr-10 mt-6'>
    <div className='flex justify-end mb-3'>
      <button className='bg-white text-black w-40 h-9 rounded-md'>
        로그인
      </button>
    </div>
    <div className='flex mb-3'>
      <div className='ml-4'>매장운영(Seller)</div>
      <div className='ml-4'>제품 검색</div>
      <div className='ml-4'>그린카드</div>
      <div className='ml-4'>이용안내</div>
      <div className='ml-4'>마이페이지</div>
    </div>
  </div>
</div>;

<div className='navbar bg-base-100'>
  <div className='navbar-start'>
    <div className='dropdown'>
      <label tabIndex={0} className='btn btn-ghost lg:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
        <li>
          <a>Item 1</a>
        </li>
        <li tabIndex={0}>
          <a className='justify-between'>
            Parent
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
            </svg>
          </a>
          <ul className='p-2'>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
  </div>
  <div className='navbar-center hidden lg:flex'>
    <ul className='menu menu-horizontal p-0'>
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg
            className='fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'>
            <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
          </svg>
        </a>
        <ul className='p-2'>
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
  <div className='navbar-end'>
    <a className='btn'>Get started</a>
  </div>
</div>;
