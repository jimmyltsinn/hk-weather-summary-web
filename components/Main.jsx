import React from 'react';

import Header from './Header';
import ControlBar from './ControlBar';
import ChartArea from './ChartArea';
import Footer from './Footer';

const style = {
  top: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  content: {
    flex: 1
  }
};

const Main = () => (
  <div style={style.top}>
    <header>
      <Header />
    </header>
    <div style={style.content}>
      <ControlBar />
      <ChartArea />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Main;
