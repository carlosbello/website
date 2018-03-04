import React from 'react';

import Header from './shell/header';
import Footer from './shell/footer';
import Support from './components/support';
import Contact from './components/contact';

import Router from './router';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />

        <div className="App-content">
          <Router />

          <Support />

          <Contact />
        </div>

        <Footer />
      </div>
    );
  }
};

App.displayName = 'App';

export default App;