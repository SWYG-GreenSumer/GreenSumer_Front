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

axios.defaults.baseURL = 'http://localhost:8080';

axios.defaults.withCredentials = true;

const App: FunctionComponent<AppProps> = () => {  
  return (
    <div className='h-full bg-[#FDFDFD]'>
      {/* 여기에 글로벌-스타일-컴포넌트 위치 */}
      <GlobalStyle />
      <AppRouter />
    </div>
  );
};

export default App;
