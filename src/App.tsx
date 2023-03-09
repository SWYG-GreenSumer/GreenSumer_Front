import AppRouter from './components/AppRouter';
import { GlobalStyle } from './global-style';
import { FunctionComponent } from 'react';
import axios from 'axios';

declare global {
  interface Window {
    kakao: any;
  }
}

type AppProps = {};

axios.defaults.baseURL = 'https://port-0-greensumer-back-3xcah2glbj4mak4.gksl2.cloudtype.app';

axios.defaults.withCredentials = true;

const App: FunctionComponent<AppProps> = () => {  
  return (
    <div className='h-full bg-[#FDFDFD] text-black'>
      {/* 여기에 글로벌-스타일-컴포넌트 위치 */}
      <GlobalStyle />
      <AppRouter />
    </div>
  );
};

export default App;
