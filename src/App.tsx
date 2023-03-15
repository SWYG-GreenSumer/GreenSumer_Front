import AppRouter from './components/AppRouter';
import { GlobalStyle } from './global-style';
import { FunctionComponent, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authState } from './atoms/AuthTokensAtoms';

declare global {
  interface Window {
    kakao: any;
  }
}

type AppProps = {};

const App: FunctionComponent<AppProps> = () => {
  useEffect(() => {
    const accessToken = sessionStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    axios.defaults.baseURL = 'https://port-0-greensumer-back-3xcah2glbj4mak4.gksl2.cloudtype.app';
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }, []);
  return (
    <div className="h-full bg-[#FDFDFD] text-black">
      {/* 여기에 글로벌-스타일-컴포넌트 위치 */}
      <GlobalStyle />
      <AppRouter />
    </div>
  );
};

export default App;
