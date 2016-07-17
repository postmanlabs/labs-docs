<!DOCTYPE html>
<html lang="en">
{% include _meta.html %}
<body class="<%= current.source %> regular">
    {% include _google_tag_manager.html %}
    {% include _header.html %}

    <div class="page-wrapper">
      <!-- <% if (locals.warning) { %>
        <div class="doc-warning">
          <div class="container">
            <%- public.docs._data.available_warnings[warning] %>
          </div>
        </div>
      <% } %> -->
      <div class="container">
         <div class="row">
            <div class="content documentation col-md-7">
                <div class="doc-search visible-xs visible-sm">
                    <input type="text" class="st-default-search-input pm-form-control pm-white-control" name="search" placeholder="Search documentation" autocomplete="off" autocorrect="off" autocapitalize="off" required="required" />
                    <div class="clear-text"></div>
                </div>
                <h2  class="documentation-header" data-swiftype-name="title" data-swiftype-type="string"><%= locals.title %></h2>

                <!-- Article tags -->
                <!-- <% if (locals.tags && locals.tags.length) { %>
                <ul class="doc-tags">
                  <% tags.forEach(function(thisTag) { %>
                    <li><%= public.docs._data.available_tags[thisTag] %></li>
                  <% }) %>
                </ul>
                <% } %> -->

                <!-- Documentation article body -->
                {{content}}

                <!-- Populate the next and previous links based on _data.doc_map -->
                <!-- <%
                public.docs._data.doc_map.forEach(function (thisCategory, catIndex, categories) {
                  thisCategory.children.forEach(function (thisArticle, articleIndex, articles) {
                    if (thisArticle.href && thisArticle.href.split('/').pop() === locals.page_id) {
                      var prevArticleIndex = articleIndex, nextArticleIndex = articleIndex,
                        nextCategory = categories[catIndex + 1],
                        prevCategory = categories[catIndex - 1],
                        prevArticle, nextArticle;

                      do {
                        prevArticle = articles[--prevArticleIndex];
                      } while (prevArticle && !prevArticle.href);

                      do {
                        nextArticle = articles[++nextArticleIndex];
                      } while (nextArticle && !nextArticle.href);

                      if(!prevArticle && prevCategory && prevCategory.children && prevCategory.children.length) {
                        prevArticle = prevCategory.children[prevCategory.children.length - 1];
                      }

                      if(!nextArticle && nextCategory && nextCategory.children && nextCategory.children.length) {
                        nextArticle = nextCategory.children[0];
                      }
                %>
                <div class="doc-next-link clearfix">
                  <% if (prevArticle) { %>
                  <a href="<%= prevArticle.href %>" <%= prevArticle.external ? "target=\"_blank\"" : "" %> class="col-sm-6 col-xs-12 prev-article"><%= prevArticle.title %></a>
                  <% }
                  if (nextArticle) { %>
                  <a href="<%= nextArticle.href %>" <%= nextArticle.external ? "target=\"_blank\"" : "" %> class="col-xs-6 hidden-xs next-article pull-right"><%= nextArticle.title %></a>
                  <% } %>
                </div>

                <% if (nextArticle) { %>
                <div class="doc-next-link clearfix visible-xs">
                  <a href="<%= nextArticle.href %>" <%= nextArticle.external ? "target=\"_blank\"" : "" %> class="col-xs-12 next-article pull-right"><%= nextArticle.title %></a>
                </div>
                <% } %>
                <%
                    }
                  });
                });
                %> -->
            </div>

            <div class="pm-accordion col-md-4 col-md-offset-1 hidden-sm hidden-xs">
                <div class="doc-search">
                    <input type="text" class="st-default-search-input pm-form-control pm-white-control" name="search" placeholder="Search documentation" autocomplete="off" autocorrect="off" autocapitalize="off" required="required" />
                    <div class="clear-text"></div>
                </div>

                <div class="pm-accordion-links" id="accordion">
                    <!-- <% public.docs._data.doc_map.forEach(function(thisCategory, i) { %>
                    <%  var openIndex; %>
                    <div class="pm-accordion-category panel">
                        <%
                          thisCategory.children.forEach(function(thisArticle, j) {
                            if (thisArticle.href && thisArticle.href.split('/').pop() === locals.page_id) {
                              openIndex = i;
                            }
                          });
                        %>
                        <a href="#collapse-<%= i %>" class="category-title <%- i === openIndex ? '' : 'collapsed' %>" data-toggle="collapse"><%= thisCategory.title %></a>
                        <ul id="collapse-<%= i %>" class="category-links collapse <%- i === openIndex ? 'in' : '' %>">
                            <% thisCategory.children.forEach(function(thisLink, i) { %>
                                <% if(thisLink.href && thisLink.href.length) { %>
                                <li><a href="<%= thisLink.href %>" <%= thisLink.external ? "target=\"_blank\"" : "" %> <%- '/'+current.path.join('/') === thisLink.href ? "class=\"active\"" : "" %>>
                                    <%= thisLink.title %>
                                </a></li>
                                <% } %>
                            <% }) %>
                        </ul>
                    </div>
                    <% }) %> -->
                </div>
            </div>
          </div>
      </div>
    </div>

    {% include _footer.html %}
    {% include _navigation.html %}
    {% include _footer_scripts.html %}
    <script type="text/javascript" src="{{site.pm.root}}/js/swiftype.pm.js"></script>
  </body>
</html>
