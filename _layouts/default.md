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
            {{site.data.warnings[warning]}}
          </div>
        </div>
      {% endif %}

      <div class="container">
         <div class="row">
            <div class="content documentation col-md-7">
                <div class="doc-search visible-xs visible-sm">
                    <input type="text" class="st-default-search-input pm-form-control pm-white-control" name="search" placeholder="Search documentation" autocomplete="off" autocorrect="off" autocapitalize="off" required="required" />
                    <div class="clear-text"></div>
                </div>
                <h2  class="documentation-header" data-swiftype-name="title" data-swiftype-type="string">{{page.title}}</h2>

                <!-- Article tags -->
                {% if page.tags.size > 0 %}
                  <ul class="doc-tags">
                    {% for tag in page.tags %}
                      <li>{{site.data.tags[tag]}}</li>
                    {% endfor %}
                  </ul>
                {% endif %}

                <!-- Documentation article body -->
                {{content}}

                <!-- Populate the next and previous links based on site.data.doc_map -->
                {% assign categories = site.data.doc_map %}
                {% for category in categories %}
                  {% assign catIndex = forloop.index0 %}
                  {% for article in category.children %}
                    {% if article.href == page.url %}
                      {% assign articleIndex = forloop.index0 %}

                      {% assign nextArticleIndex = articleIndex | plus: 1 %}
                      {% assign nextCatIndex = catIndex | plus: 1 %}
                      {% assign nextCategory = categories[nextCatIndex] %}

                      {% if category.children[nextArticleIndex] %}
                        {% assign next = category.children[nextArticleIndex] %}
                      {% elsif nextCategory.children.first %}
                        {% assign next = nextCategory.children.first %}
                      {% endif %}

                      {% assign prevArticleIndex = articleIndex | minus: 1 %}
                      {% assign prevCatIndex = catIndex | minus: 1 %}
                      {% assign prevCategory = categories[prevCatIndex] %}

                      {% if prevArticleIndex >= 0 and category.children[prevArticleIndex] %}
                        {% assign prev = category.children[prevArticleIndex] %}
                      {% elsif prevCategory.children.last %}
                        {% assign prev = prevCategory.children.last %}
                      {% endif %}

                      <div class="doc-next-link clearfix">
                        {% if prev.title %}
                        <a href="{{prev.href}}" {% if prev.external == true %}target="_blank"{% endif %} class="col-sm-6 col-xs-12 prev-article">
                          {{prev.title}}
                        </a>
                        {% endif %}

                        {% if next.title %}
                        <a href="{{next.href}}" {% if next.external == true %}target="_blank"{% endif %} class="col-xs-6 hidden-xs next-article pull-right">
                          {{next.title}}
                        </a>
                        {% endif %}
                      </div>

                      {% if next.title %}
                      <div class="doc-next-link clearfix visible-xs">
                        <a href="{{next.href}}" {% if next.external == true %}target="_blank"{% endif %} class="col-xs-12 next-article pull-right">
                          {{next.title}}
                        </a>
                      </div>
                      {% endif %}
                    {% endif %}
                  {% endfor %}
                {% endfor %}
            </div>

            <div class="pm-accordion col-md-4 col-md-offset-1 hidden-sm hidden-xs">
                <div class="doc-search">
                    <input type="text" class="st-default-search-input pm-form-control pm-white-control" name="search" placeholder="Search documentation" autocomplete="off" autocorrect="off" autocapitalize="off" required="required" />
                    <div class="clear-text"></div>
                </div>

                <div class="pm-accordion-links" id="accordion">
                  {% for category in site.data.doc_map %}
                    {% assign i = forloop.index0 %}
                    {% for link in category.children %}
                      {% if link.href == page.url %}
                        {% assign openPanel = i %}
                      {% endif %}
                    {% endfor %}
                    <div class="pm-accordion-category panel">
                      <a href="#collapse-{{i}}" class="category-title {% unless i == openPanel %}collapsed{% endunless %}" data-toggle="collapse">
                        {{category.title}}
                      </a>

                      <ul id="collapse-{{i}}" class="category-links collapse {% if i == openPanel %}in{% endif %}">
                        {% for link in category.children %}
                          {% if link.href.size > 0 %}
                            <li>
                              <a href="{{link.href}}"
                                {% if link.external  == true %}target="_blank"{% endif %}
                                {% if page.url == link.href %}class="active"{% endif %}
                              >
                                {{link.title}}
                              </a>
                            </li>
                          {% endif %}
                        {% endfor %}
                      </ul>
                    </div>
                  {% endfor %}
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
