/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';

// import { caret } from './caret.svg';


const { v4: uuidv4 } = require('uuid');
const replacements = require('./replacements.json');

let slugs;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { data, isRoot } = this.props;
    this.state = {
      data,
      isRoot,
      active: [],
      currentUrl: '',
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {
    this.setState({ currentUrl: window.location.pathname });
  }

  setActive = (name) => {
    const { active } = this.state;
    if (active.indexOf(name) === -1) {
      this.setState((prev) => ({ active: [...prev.active, name] }));
    }
  } // sets a given list item as active

  toggleActive = (e) => {
    let title;
    if (e.target.attributes.identifier) {
      title = e.target.attributes.identifier.value;
    } else {
      title = e.target.nextSibling.attributes.identifier.value;
    }
    const { active } = this.state;
    const titleIndex = active.indexOf(title);
    if (titleIndex !== -1) {
      active.splice(titleIndex, 1);
      this.setState({ active });
    } else {
      this.setActive(title);
    }
  } // toggles list item as active or inactive based on previous state. Triggered on click

  isActive = (name) => {
    const { active } = this.state;
    return active.includes(name);
  }

  inUrl = (url) => {
    const { currentUrl } = this.state;
    return currentUrl.includes(url);
  }
  // bool to return whether current list item appears in the url

  child = (url) => {
    const name = slugs.filter((val) => url === val.fields.slug);
    const { title } = name[0].frontmatter;
    return (
      <li key={`${title}-${uuidv4()}`} className={`child${this.inUrl(url) ? ' currentUrl' : ''}`}>
        <div className="activeIndicator" />
        <Link to={url}>{title}</Link>
      </li>
    );
  } // Renders child element. Gets name from slugs array

  parent = (data, name) => {
    const { active, isRoot } = this.state;
    if (this.inUrl(`/${name}/`)) {
      this.setActive(name);
    }

    return (
      <ul
        key={`${name}-${uuidv4()}`}
        className={`
        ${(active.indexOf(name) !== -1) ? 'active' : 'inactive'}
        ${isRoot ? ' root' : ''}
        `}
      >
        <li className={`parent${this.inUrl(`/${name}/`) ? ' currentUrl' : ''}`}>
          {/* Caret send by Design is wrong way up */}
          {/* <svg nClick={this.toggleActive} className={`caret${this.isActive(name) ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <title>arrow-sm-right</title>
            <g strokeWidth="1" fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round"><polyline points="6.5,3.5 11,8 6.5,12.5 " /></g>
          </svg> */}
          <svg onClick={this.toggleActive} className={`caret${this.isActive(name) ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#707070" fillRule="evenodd" /></svg>
          <button type="button" onClick={this.toggleActive} identifier={name}>
            {replacements[name] ? replacements[name] : name.replace(/-/g, ' ')}
          </button>
        </li>
        <ListItem data={JSON.stringify(data)} />
      </ul>
    );
  } // renders parent element that has children

  render() {
    const { data } = this.state;
    const parsedData = JSON.parse(data);
    const keys = Object.keys(JSON.parse(data)).map((val) => val);

    return (
      <>
        {keys.map((val) => {
          if (parsedData[val].url) {
            return this.child(parsedData[val].url);
          }
          return this.parent(parsedData[val], val);
        })}
      </>
    );
  }
}

const LeftNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: id, order: ASC}) {
        nodes {
          fields {
            slug 
          }
          frontmatter {
            title
          }
          id
        }
      },
      leftNavLinks {
        value
      }
    }`);
  slugs = data.allMarkdownRemark.nodes;

  return (
    <div className="leftNav">
      <ListItem data={data.leftNavLinks.value} isRoot />
    </div>
  );
};

export default LeftNav;
/* eslint-enable */
