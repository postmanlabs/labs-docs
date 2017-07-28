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
                <!-- Search -->
                <h2 class="documentation-header">{{page.title}}</h2>
                
                {% include search.html %}

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
  </body>
</html>
