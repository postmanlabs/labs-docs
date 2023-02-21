import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { BaseButton } from 'aether-marketing';
import styled from 'styled-components';

const SvgWrapper = styled.i`
  // ICONS
  // class starting with "pm-icon-" get styled by _pm-icons.scss file.
  // class .glyphicon gets styled by bootstrap.css file.


  // gets rid of weird background bug with our icons. We need to redo these.
  background: 0 0;
  
  svg.button-icon--left {
    margin-right: 7px;
    overflow: hidden;
    vertical-align: middle;
  }
`


const EditbuttonStyle = styled.span`
  font-family: inter;
  font-size: 14px;
`
class EditDocComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathRoute: '',
      pathPrefix: props.pathPrefix
    };
  }

  componentDidMount() {
    const { pathRoute, pathPrefix } = this.state;
    // Gatsby path prefixing includes /labs/ at build.
    // This is a case where we do not want the pathRoute prefixed, as it is used inside a github URL
    // So we remove it 
    if (pathRoute.includes(`${pathPrefix}/`)) {
      pathRoute = pathRoute.replace(`${pathPrefix}/`, "/");
    }
    this.setState({
      pathRoute: window.location.pathname.slice(0, -1),
    });
  }


  render() {
    const { pathRoute } = this.state;

    

    return (
      <BaseButton 
        buttonType="secondary"
        as="a"
        id="GTM-LC-id" 
        href={`https://github.com/postmanlabs/labs-docs/blob/develop/src/pages${pathRoute}.md`} 
        target="new-tab-external-nofollow"
        >
        <SvgWrapper >
          <svg className="button-icon--left" transform="translate(0, -1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <title>logo-github</title>
            <g fill="#212121"><path fillRule="evenodd" clipRule="evenodd" fill="#212121" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" /></g>
          </svg>

        </SvgWrapper>
        <EditbuttonStyle>
          Edit this Doc
        </EditbuttonStyle>
      </BaseButton>
    );
  }
}

// To use a static query for the pathPreix, we need to wrap the class based component in an arrow function component
function EditDoc() {
  const data = useStaticQuery(graphql`
    query EditDocQuery {
      site {
        pathPrefix
      }
    }
  `)

  return (
    <EditDocComponent pathPrefix={data.site.pathPrefix} />
  )
}

export default EditDoc;
