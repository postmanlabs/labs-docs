import { useStaticQuery, graphql } from "gatsby";

const removePrefixFromCurrentPath = () => {
    const queryData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    pathPrefix
                }
            }
        }
    `)
    
    const { pathPrefix } = queryData.site.siteMetadata;
    if (typeof document !== 'undefined') {
        let location = document.location.pathname;

    // The logic below is to make leftNavItems and breadcrumbs work
    // Because the pathPrefix ( ex "/template/") gets prefixed AT BUILD TIME, in the LeftNavItems array.
    // So the array of objects in leftNavItems, DO NOT HAVE THE PATH PREFIX.
    // Since they do not, when the app is in production, the breadcrumbs / lav nav break (ex. /template/route/ is not equal to /route/)
    // In other words, our codebase below isn't aware of pathPrefix (ex "/template/") being in the location bar of the browser
    // The prefixPath at build breaks the comparisons further down in this componentDidMount block., 
    //  so we .replace it from the strings we are comparing against LeftNavItems.

    location = location.replace(`${pathPrefix}/`, "/");
    // Notice we are not setting location to any href value, we are only using it for the sake of comparing
    return location;
    }
}

export default removePrefixFromCurrentPath;
