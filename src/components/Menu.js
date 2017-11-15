import React from 'react';

const Menu = ({ props }) => {
  return (
    <nav className="nav-holder">
      {/* <Box center style={{ marginBottom: '20px' }}>
        <a
          style={{ color: '#ccc' }}
          href="https://github.com/tuchk4/css-in-js-app"
          target="blank"
        >
          tuchk4/css-in-js-app
        </a>
      </Box> */}
      <button className="header-btn" type="button">
        <span />
      </button>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-item-link" href="#/aphrodite">
            Aphrodite
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/emotion">
            Emotion
          </a>
        </li>
        <li className="nav-item">
          <span className="nav-item-link">Fela</span>

          <ul className="nav-inner">
            <li className="nav-item">
              <a className="nav-item-link" href="#/react-fela">
                React Fela
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#/react-fela-monolithic">
                React Fela Monolithic
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/glamor">
            Glamor
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/glamorous">
            Glamorous
          </a>
        </li>
        <li className="nav-item">
          <span className="nav-item-link">JSS</span>

          <ul className="nav-inner">
            <li className="nav-item">
              <a className="nav-item-link" href="#/react-jss">
                React Jss
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#/react-jss-wihtout-plugins">
                React Jss With Only Compose
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#/styled-js">
                Styled Js
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/rockey-react">
            Rockey
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/styletron">
            Styletron
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/styled-components">
            Styled Components
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/react-inline">
            React inline
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
