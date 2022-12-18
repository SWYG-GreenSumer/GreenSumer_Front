import AppRouter from './components/AppRouter';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { GlobalStyle } from './global-style';
import { FunctionComponent } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

type AppProps = {};

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className='h-full'>
      <Nav />
      {/* 여기에 글로벌-스타일-컴포넌트 위치 */}
      <GlobalStyle />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
