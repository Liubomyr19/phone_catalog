import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GlobalContext } from './Context/GlobalContext';
import './App.scss';

const App = () => {
  const { isMobMenuVisible } = useContext(GlobalContext);

  return (
    <div className={cn('App', {
      'no-scroll': isMobMenuVisible,
    })}
    >
      <Header />
      <main className={cn('main', {
        'main--blur': isMobMenuVisible,
      })}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
