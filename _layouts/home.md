<!DOCTYPE html>
<html lang="en">
{% include _meta.html %}
<body class="<%= current.source %> regular">
    {% include _google_tag_manager.html %}
    {% include _header.html %}

    <div class="page-wrapper">
      <div class="container">
         <div class="row">
            <div class="content documentation col-md-7">
                {{content}}
            </div>

            <div class="doc-sidebar col-md-4 col-md-offset-1">
              <h3>Popular Topics</h3>
              <ul id="popular-topics">
                <li><a href="{{site.pm.root}}/docs/install_mac">Installing the Mac App</a></li>
                <li><a href="{{site.pm.root}}/docs/newman_intro">Newman - Running collections in the command line</a></li>
                <li><a href="{{site.pm.root}}http://blog.getpostman.com/2015/12/10/introducing-postman-cloud/">Introducing Postman Cloud</a></li>
                <li><a href="{{site.pm.root}}/docs/collections">Getting started with Collections</a></li>
                <li><a href="{{site.pm.root}}/docs/environments">Setting up an environment with variables</a></li>
                <li><a href="{{site.pm.root}}/docs/writing_tests">Writing Tests</a></li>
              </ul>

              <h3>Video Tutorials</h3>
              <ul class="pm-video-list">
                <!-- <% public.docs._data.video_tutorials.forEach(function(thisVideo) {%>
                <li>
                  <a href="<%= ['https://www.youtube.com/watch?v=', thisVideo.id, '&list=PLM-7VG-sgbtD8qBnGeQM5nvlpqB_ktaLZ', '&autoplay=1'].join('') %>" target="_blank"><%= thisVideo.title %></a>
                  <a class="pm-yt-thumbnail" href="<%= ['https://www.youtube.com/watch?v=', thisVideo.id, '&list=PLM-7VG-sgbtD8qBnGeQM5nvlpqB_ktaLZ', '&autoplay=1'].join('') %>" target="_blank">
                    <img src="http://img.youtube.com/vi/<%= thisVideo.id %>/mqdefault.jpg">
                  </a>
                </li>
                <% }) %> -->
                <li><a href="https://www.youtube.com/playlist?list=PLM-7VG-sgbtD8qBnGeQM5nvlpqB_ktaLZ">Watch Tutorial Playlist</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>

    {% include _footer.html %}
    {% include _navigation.html %}
    {% include _footer_scripts.html %}
    <script type="text/javascript" src="{{site.pm.root}}/js/swiftype.pm.js"></script>
    <script type="text/javascript" src="{{site.pm.root}}/js/popularArticles.js"></script>
  </body>
</html>
