import React from 'react';
const qualtrics = require('../../../build/qualtrics')
class QualtricsScript extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      (() => {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.onload = qualtrics()
        document.getElementsByTagName('head')[0].appendChild(s);
      })();
    }
  }

  render() {
    return (
      <div className='pm-qualtrics-embedded'>
        <div id='ZN_cG6u1PkZV7TpCFo' />
      </div>
    )
  }
}

const LoadQualtrics = () => <QualtricsScript />;

export default LoadQualtrics;
