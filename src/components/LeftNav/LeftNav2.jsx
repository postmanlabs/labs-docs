import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';

const { useState, useEffect } = React;

function App(props) {
  // state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // takes in code that is normally in componentDidMount and componentDidUpdate and componentWillUnmount, basically use to change the state
  useEffect(() => {
    props.history.listen(() => {
      setIsMenuOpen(false);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <Header
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      {/* Other stuff */}
    </div>
  );
}
