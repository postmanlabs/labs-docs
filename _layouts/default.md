<!DOCTYPE html>
<html lang="en">
{% include _meta.html %}
<body class="<%= current.source %> regular">
    {% include _google_tag_manager.html %}
    {% include _header.html %}

    <div class="page-wrapper">
      {% if page.warning %}
        <div class="doc-warning">
          <div class="container">
            {{site.data.warnings[page.warning]}}
          </div>
        </div>
      {% endif %}

      <div class="container">
         <div class="row">
            <div class="content documentation col-md-7">
                <div class="doc-search visible-xs visible-sm">
                    <input type="text" id="search-input" class="st-default-search-input pm-form-control pm-white-control" name="search" placeholder="Search documentation" autocomplete="off" autocorrect="off" autocapitalize="off" required="required" />
                    <div id="search-box-1">
                      <!-- SearchBox widget will appear here -->
                    </div>
                    <div id="hits-1">
                      <!-- Hits widget will appear here -->
                      <div><span>{{objectID}}</span></div>
                    </div>

                </div>
                <h2  class="documentation-header" data-swiftype-name="title" data-swiftype-type="string">{{page.title}}</h2>

                <!-- Article tags -->
                {% include _article_tags.html %}

                <!-- Documentation article body -->
                {{content}}

                <!-- Populate the next and previous links based on site.data.doc_map -->
                {% include _related_links.html %}

            </div>
            {% include _side_accordion.html %}
         </div>
      </div>
    </div>
   
    {% include _footer.html %}
    {% include _navigation.html %}
    {% include _footer_scripts.html %}
    <!-- <script type="text/javascript" src="{{site.pm.root}}/js/swiftype.pm.js?v={{site.time | date: '%s%N'}}"></script> -->
    {% include search.html %}
  </body>
</html>
