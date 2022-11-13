import React from 'react';

const Nav = () => {
  return (
    <div className='bg-[#1C541B] text-white flex justify-between'>
      <div className='flex items-center ml-10'>
        <p className='text-3xl'>GreenSumer!</p>
      </div>
      <div className='mr-10 mt-6'>        
        <div className='flex justify-end mb-3'>
          <button className='bg-white text-black w-40 h-9 rounded-md'>로그인</button>
        </div>
        <div className='flex mb-3'>
          <div className='ml-4'>매장운영(Seller)</div>
          <div className='ml-4'>제품 검색</div>
          <div className='ml-4'>그린카드</div>
          <div className='ml-4'>이용안내</div>
          <div className='ml-4'>마이페이지</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
