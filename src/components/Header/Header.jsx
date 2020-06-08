import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import ReactModal from 'react-modal';
// import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import DynamicLink from '../Shared/DynamicLink';
import postmanLogo from '../../images/postman-logo-horizontal-orange.svg';
import './Header.scss';

// const algoliaClient = algoliasearch('4A5N71XYH0', 'bf5cf4783437b12c2dca33724c9c04b0');


// changes button in navbar based on cookie presence
const LoginCheck = (props) => {
  const { cookie } = props;
  if (cookie !== 'yes') {
    return (
      <a href="https://identity.getpostman.com/login" className="btn btn__primary">Sign In</a>
    );
  }
  return (
    <a href="https://app.getpostman.com" className="btn btn__primary">Dashboard</a>
  );
};

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.getCookie = this.getCookie.bind(this);
    const { data } = this.props;

    this.state = {
      data: JSON.parse(data),
      isToggledOn: 'unset',
      isModalOpen: false,
    };
  }

  componentDidMount() {
    // Unit test will complain if process is not checked
    if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#main');
  }

  /* Helper functions
  /******************************************************** */
  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  }

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  handleModalChange = (e) => {
    const updateSearch = e.target.value;
    this.setState({ searchTerm: updateSearch });
  }
  V

  getCookie = (a) => {
    if (typeof document !== 'undefined') {
      const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
      return b ? b.pop() : '';
    }
    return false;
  };

  // toggles the hamburger menu
  toggleMenu = () => {
    this.setState((state) => {
      if (state.isToggledOn === 'unset') {
        return ({
          isToggledOn: true,
        });
      }
      return ({
        isToggledOn: !state.isToggledOn,
      });
    });
  }

  render() {
    const {
      isToggledOn, data,
    } = this.state;
    return (
      <header className="header text-center navbar navbar-expand-xl navbar-light">
        <div className="navbar-brand header__brand">
          <Link
            className="header__homelink"
            to="/"
          >
            <img className="header__logo" src={postmanLogo} alt="postman logo" />
            <span className="header__title">{data.title}</span>
          </Link>
        </div>

        {/* hamburger toggle */}
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`header__right-links justify-content-end navbar-nav mr-auto navbar-collapse collapse show
            ${(isToggledOn === true) ? 'animate-open' : ''}
            ${(isToggledOn === false) ? 'animate-close' : ''}
            ${isToggledOn === 'unset' ? 'closed' : ''}
            `}
          id="navbarSupportedContent"
        >
       
          <div id="main" className="col">
            <button type="button" className="browse text-sm-left" onClick={this.handleModalOpen}>
              What are you looking for?
            </button>
          </div>

          <div className="modal">
            <ReactModal
              /* eslint-disable */
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModalClose}
              contentLabel="Search Modal"
              ariaHideApp={false}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-10">
                    <form action="/search?query=">
                      <input
                        ref={(input) => input && input.focus()}
                        type="text"
                        name="query"
                        placeholder="Search Postman"
                        value={this.state.searchTerm}
                        onChange={(event) => this.handleModalChange(event)}
                        /* eslint-ensable */
                      />
                    </form>
                    <div className="trending">
                      <p>Trending Searches on Postman Blog</p>
                      {/* <ul>
                        {  
                          trend.edges.map((trend) =>  (
                            <li key={Math.random()}>
                              <a 
                                href={`/search?query=${JSON.parse(trend.node.value).search}`}
                                onClick={ () => {
                                  trackCustomEvent({
                                    // string - required - The object that was interacted with
                                    category: "Learning Center Trending Searches",
                                    // string - required - Type of interaction
                                    action: "Click",
                                    // string - optional - Useful for categorizing events
                                    label: "Postman Blog",
                                })
                              }}
                              >
                                { JSON.parse(trend.node.value).search }
                              </a>
                            </li>
                          ))
                        }
                       </ul> */}
                    </div>
                  </div>
                  <div className="col-sm-2 text-right">
                    <button type="button" onClick={this.handleModalClose}>Close</button>
                  </div>
                </div>
              </div>

            </ReactModal>
          </div>

          {data.links.map((link) => (
            <div className="nav-item" key={link.name}>
              {link.cta ? <LoginCheck cookie={this.getCookie('getpostmanlogin')} /> : <DynamicLink className="nav-link" url={link.url} name={link.name} />}
            </div>
          ))}
        </div>
      </header>
    );
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerLinks {
        value
      }
    }`);
  return (
    <HeaderComponent data={data.headerLinks.value} />
  );
};

export default Header;
