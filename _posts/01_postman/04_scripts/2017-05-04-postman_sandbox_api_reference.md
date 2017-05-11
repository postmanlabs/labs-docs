---
categories:
  - "postman"
  - "scripts"
title: "Postman Sandbox API reference"
page_id: "postman_sandbox_api_reference"
warning: false
---

### Postman Sandbox API Reference (pm.*)

<div class="table-wrap">
    <table style="margin-left: 30.0px; table-layout: fixed;">
        <tbody style="margin-left: 30.0px;">
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2">Global</th>
            <th style="margin-left: 30.0px;" colspan="2">Type</th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>require</code></th>
            <th style="margin-left: 30.0px;" colspan="2">Function</th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;"><strong><code>require(moduleName:String)
                → *</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p>
                <p style="margin-left: 30.0px;">The require function allows you to use the sandbox built-in library
                    modules. The list of available libraries are listed below. The list links to their corresponding
                    documentation.</p>
                <ol>
                    <li style="list-style-type: none;background-image: none;">
                        <ol>
                            <li style="list-style-type: none;background-image: none;">
                                <ol>
                                    <li><a class="external-link" href="https://www.npmjs.com/package/atob"
                                           rel="nofollow">atob</a>→ v2.0.3
                                    </li>
                                    <li><a class="external-link" href="https://www.npmjs.com/package/btoa"
                                           rel="nofollow">btoa</a>→ v1.1.2
                                    </li>
                                    <li><a class="external-link" href="http://chaijs.com/" rel="nofollow">chai</a>→
                                        v3.5.0
                                    </li>
                                    <li><a class="external-link" href="https://cheerio.js.org/"
                                           rel="nofollow">cheerio</a>→ v0.22.0
                                    </li>
                                    <li><a class="external-link" href="https://www.npmjs.com/package/crypto-js"
                                           rel="nofollow">crypto-js</a>→ v3.1.9-1
                                    </li>
                                    <li><a class="external-link" href="https://lodash.com/" rel="nofollow">lodash</a>→
                                        v4.17.2
                                    </li>
                                    <li><a class="external-link" href="http://www.postmanlabs.com/postman-collection/"
                                           rel="nofollow">postman-collection</a>→ v1.2.0
                                    </li>
                                    <li><a class="external-link" href="https://github.com/geraintluff/tv4"
                                           rel="nofollow">tv4</a>→ v1.2.7
                                    </li>
                                    <li><a class="external-link" href="https://www.npmjs.com/package/uuid"
                                           rel="nofollow">uuid</a>→ (the module loaded is a shim for original module)
                                    </li>
                                    <li><a class="external-link" href="https://www.npmjs.com/package/xml2js"
                                           rel="nofollow">xml2js</a>→ 0.4.17
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
                <p style="margin-left: 30.0px;">A number of NodeJS modules are also available:</p>
                <ol>
                    <li style="list-style-type: none;background-image: none;">
                        <ol>
                            <li style="list-style-type: none;background-image: none;">
                                <ol>
                                    <li>path</li>
                                    <li>assert</li>
                                    <li>buffer</li>
                                    <li>util</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
            </td>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper"><p>In order to
                    use a library, you would need to simply call the require function and pass the module name as a
                    parameter and assign the return of the function to a variable.</p>
                    <div class="table-wrap">
                        <table style="margin-left: 30.0px;">
                            <tbody style="margin-left: 30.0px;">
                            <tr style="margin-left: 30.0px;">
                                <td style="margin-left: 30.0px;"><p style="margin-left: 30.0px;">
                                    <code class="java plain">var atob = require(</code><code
                                        class="java string">'atob'</code><code class="java plain">),</code><br/><code
                                        class="java spaces">    </code><code class="java plain">_ = require(</code><code
                                        class="java string">'lodash'</code><code class="java plain">),</code><br/> <br/> <br/><code
                                        class="java spaces">    </code><code
                                        class="java plain">arrayOfStrings,</code><br/><code
                                        class="java spaces">    </code><code
                                        class="java plain">base64Strings;</code><br/> <br/> <br/><code
                                        class="java plain">arrayOfStrings =  = [</code><code class="java string">'string1'</code><code
                                        class="java plain">, </code><code class="java string">'string2'</code><code
                                        class="java plain">];</code><br/> <br/> <br/><code class="java plain">base64Strings
                                    = _.map(arrayOfStrings, atob);</code><br/> <br/> <br/><code class="java plain">console.log(base64Strings);</code>
                                </p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th colspan="4"><br/></th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm</code></th>
            <th style="margin-left: 30.0px;" colspan="2">Object</th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm:Object</code></strong></p>
                <p style="margin-left: 30.0px;">The <strong><code>pm</code></strong> object encloses all information
                    pertaining to the script being executed and allows one to access a copy of the request being sent or
                    the response received. It also allows one to get and set environment and global variables.</p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code><a href="http://pm.info"
                                                                                       class="external-link"
                                                                                       rel="nofollow">pm.info</a></code>
            </th>
            <th style="margin-left: 30.0px;" colspan="2">Object</th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code><a href="http://pm.info" class="external-link"
                                 rel="nofollow">pm.info</a>:Object</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p>
                <p style="margin-left: 30.0px;">The <code><a href="http://pm.info" class="external-link" rel="nofollow">pm.info</a></code> object
                    contains information pertaining to the script being executed. Useful information such as the request
                    name, request Id, iteration count, etc are stored inside of this.</p>
                <ul>
                    <li style="list-style-type: none;background-image: none;">
                        <ul>
                            <li><code><a href="http://pm.info" class="external-link" rel="nofollow">pm.info</a>.eventName:String<br/></code>contains
                                information whether the script being executed is a &quot;prerequest&quot; or a &quot;test&quot;
                                script.<br/> 
                            </li>
                            <li><code><a href="http://pm.info" class="external-link" rel="nofollow">pm.info</a>.iteration:Number<br/></code>is
                                the value of the current iteration being run.<br/> 
                            </li>
                            <li><code><a href="http://pm.info" class="external-link" rel="nofollow">pm.info</a>.iterationCount:Number</code><br/>is
                                the total number of iterations that are scheduled to run.
                            </li>
                            <li><code><a href="http://pm.info" class="external-link" rel="nofollow">pm.info</a>.requestName:String</code>
                            </li>
                            <li><code><a href="http://pm.info" class="external-link" rel="nofollow">pm.info</a>.requestId
                                :String</code></li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th colspan="4"><br/></th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html"
                                                                                 rel="nofollow">VariableScope</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals:VariableScope</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals.has</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#has"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals.has(variableName:String) → Boolean</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals.get</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#get"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals.get(variableName:String) → *</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals.set</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#set"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals.set(variableName:String, variableValue:String)</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals.unset</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#unset"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals.unset(variableName:String)</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals.clear</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#clear"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals.clear()</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.globals.variables</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#variables"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.globals.variables() → Object</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th colspan="4"><br/></th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html"
                                                                                 rel="nofollow">VariableScope</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment:VariableScope</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment.has</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#has"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment.has(variableName:String) → Boolean</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment.get</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#get"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment.get(variableName:String) → *</code></strong></p>
                <p><br/></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment.set</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#set"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment.set(variableName:String, variableValue:String)</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment.unset</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#unset"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment.unset(variableName:String)</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment.clear</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#clear"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment.clear()</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.environment.variables</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/VariableScope.html#variables"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.environment.variables() → Object</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th colspan="4"><br/></th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.request</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/Request.html"
                                                                                 rel="nofollow">Request</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.request:Request</code></strong></p>
                <p style="margin-left: 30.0px;"><strong><br/></strong></p>
                <p style="margin-left: 30.0px;">The request object inside pm is a representation of the request for
                    which this script is being run. For a pre-request script, this is the request that is about to be
                    sent and when in test script, this is the representation of the request that was sent.</p>
                <p style="margin-left: 30.0px;">Request contains information stored in the following structure:</p>
                <ul>
                    <li style="list-style-type: none;background-image: none;">
                        <ul>
                            <li><code>pm.request.url:Url</code></li>
                            <li><code>pm.request.headers:HeaderList</code></li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p style="margin-left: 30.0px;"><strong><br/></strong>
                </p>
                    <p style="margin-left: 30.0px;"><strong><code><span
                            class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline">TESTONLY</span></code></strong>
                    </p></div>
            </th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.data</code></th>
            <th style="margin-left: 30.0px;" colspan="2">Object</th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.data</code>:Object</strong></p>
                <p><br/></p>
                <p style="margin-left: 30.0px;">The data object would contain data from the data file provided during a
                    collection run</p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p><code>pm.response</code></p></div>
            </th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/Response.html"
                                                                                 rel="nofollow">Response</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p style="margin-left: 30.0px;"><strong><code>pm.response:Response</code></strong>
                </p>
                    <p style="margin-left: 30.0px;"><strong><br/></strong></p>
                    <p style="margin-left: 30.0px;">Inside the test scripts, the <code>pm.response</code> object
                        contains all information pertaining to the response that was received.</p>
                    <p style="margin-left: 30.0px;">The response details are stored in the following format</p>
                    <ul>
                        <li style="list-style-type: none;background-image: none;">
                            <ul>
                                <li><code>pm.response.code:Number</code></li>
                                <li><code>pm.response.reason:Function → String</code></li>
                                <li><code>pm.response.headers:HeaderList</code></li>
                                <li><code>pm.response.responseTime:Number</code></li>
                                <li><code>pm.response.text:Function → String</code></li>
                                <li><code>pm.response.json:Function → Object</code></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th colspan="4"><br/></th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p style="text-align: left;">
                    <code>pm.cookies</code></p></div>
            </th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/CookieList.html"
                                                                                 rel="nofollow">CookieList</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p><strong><code>pm.cookies:CookieList</code></strong>
                </p>
                    <p><br/></p>
                    <p style="margin-left: 30.0px;">The cookies object contain a list of cookies that are associated
                        with the domain to which the request was made.</p></div>
            </td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.cookies.has</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/PropertyList.html#has"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.cookies.has(cookieName:String):Function → Boolean</code></strong></p>
                <p style="margin-left: 30.0px;">Check whether a particular cookie (addressed by it's name,) exists for
                    the requested domain or not.</p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.cookies.get</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/PropertyList.html#get"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.cookies.get(cookieName:String):Function → String</code></strong></p>
                <p style="margin-left: 30.0px;">Get the value of a particular cookie.</p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2"><code>pm.cookies.toObject</code></th>
            <th style="margin-left: 30.0px;" colspan="2"><a class="external-link"
                                                                                 href="http://www.postmanlabs.com/postman-collection/PropertyList.html#toObject"
                                                                                 rel="nofollow">Function</a></th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4"><p style="margin-left: 30.0px;">
                <strong><code>pm.cookies.toObject:Function → Object</code></strong></p>
                <p style="margin-left: 30.0px;">Get a copy of all cookies and their values in form of an object. The
                    cookies returned are the ones defined for the requested domain and path.</p></td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th colspan="4"><br/></th>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p><code>pm.test</code></p></div>
            </th>
            <th style="margin-left: 30.0px;" colspan="2">Function</th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p style="margin-left: 30.0px;"><strong><code>pm.test(testName:String,
                    specFunction:Function)</code></strong></p>
                    <p style="margin-left: 30.0px;"><strong><br/></strong></p>
                    <p style="margin-left: 30.0px;">This function is used to write test specifications inside the
                        sandbox. Writing tests inside this function allows one to name the test accurately as well as
                        ensure that in case of any error inside this function, the rest of the script is not
                        blocked.</p></div>
            </td>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p class="auto-cursor-target"
                                                                             style="margin-left: 30.0px;">The following
                    code block is a sample test where we are checking to ensure that everything about a fictitious
                    response is valid for us to proceed next.</p>
                    <div class="table-wrap">
                        <table style="margin-left: 30.0px;">
                            <tbody style="margin-left: 30.0px;">
                            <tr style="margin-left: 30.0px;">
                                <td style="margin-left: 30.0px;"><p style="margin-left: 30.0px;">
                                    <code class="java plain">pm.test(</code><code class="java string">&quot;response
                                    should be okay to process&quot;</code><code class="java plain">, function ()
                                    {</code><br/><code class="java spaces">    </code><code class="java plain"><a
                                        href="http://pm.response.to.not.be" class="external-link" rel="nofollow">pm.response.to.not.be</a>.error;</code><br/><code
                                        class="java spaces">    </code><code class="java plain"><a
                                        href="http://pm.response.to" class="external-link"
                                        rel="nofollow">pm.response.to</a>.have.jsonBody(</code><code
                                        class="java string">''</code><code class="java plain">);</code><br/><code
                                        class="java spaces">    </code><code class="java plain"><a
                                        href="http://pm.response.to" class="external-link"
                                        rel="nofollow">pm.response.to</a>.not.have.jsonBody(</code><code
                                        class="java string">'error'</code><code class="java plain">);</code><br/><code
                                        class="java plain">});</code></p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </td>
        </tr>
        <tr style="margin-left: 30.0px;">
            <th style="margin-left: 30.0px;" colspan="2">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p style="text-align: left;">
                    <code>pm.expect</code></p></div>
            </th>
            <th style="margin-left: 30.0px;" colspan="2">Function</th>
        </tr>
        <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper" style="margin-left: 30.0px;"><p style="margin-left: 30.0px;"><strong><code>pm.expect(assertion:*)
                    → Assertion</code></strong></p>
                    <p style="margin-left: 30.0px;"><strong><br/></strong></p>
                    <p style="margin-left: 30.0px;"><code>pm.expect</code> is a generic assertion function. Underlying
                        this is the <a class="external-link" href="http://chaijs.com/api/bdd/" rel="nofollow">ChaiJS
                            expect bdd library</a>. Using this, it is easy to write tests where the syntax becomes
                        readable and verbose.</p>
                    <p style="margin-left: 30.0px;">Read more on the usage of <code>pm.expect</code> at <a
                            class="external-link" href="http://chaijs.com/api/bdd/" rel="nofollow">http://chaijs.com/api/bdd/</a>
                    </p></div>
            </td>
        </tr>
    <tr>
            <td style="margin-left: 30.0px;" colspan="4">
                <div class="content-wrapper"><p style="margin-left: 30.0px;">This function
                    is useful to deal with assertions of data from response or variables.</p>
                    <div class="table-wrap">
                        <table>
                            <tbody>
                            <tr style="margin-left: 30.0px;">
                                <td style="margin-left: 30.0px;"><p>
                                    <code class="java plain">pm.test(</code><code class="java string">'environment to be
                                    production'</code><code class="java plain">, function () {</code><br/><code
                                        class="java spaces">    </code><code class="java plain">pm.expect(pm.environment.get(</code><code
                                        class="java string">'env'</code><code
                                        class="java plain">)).to.equal(</code><code
                                        class="java string">'production'</code><code
                                        class="java plain">);</code><br/><code class="java plain">});</code></p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
         
### Response Assertions API

<div class="table-wrap">
    <table style="margin-left: 30.0px;">
        <thead>
        <tr>
            <th><p>Assertion</p></th>
            <th colspan="1"><p>Type</p></th>
            <th><p>Description</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th valign="top"><code><a href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.status</code>
            </th>
            <th colspan="1" valign="top">Function</th>
            <td><p><code><strong><a href="http://pm.response.to" class="external-link"
                                                         rel="nofollow">pm.response.to</a>.have.status(code:Number)<br/><a
                    href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.status(reason:String)</strong></code>
            </p>
            </td>
        </tr>
        <tr>
            <th valign="top"><code><a href="http://pm.response.to" class="external-link"
                                                          rel="nofollow">pm.response.to</a>.have.header</code></th>
            <th colspan="1" valign="top">Function</th>
            <td valign="top" ><p><code><strong><a href="http://pm.response.to" class="external-link"
                                                                     rel="nofollow">pm.response.to</a>.have.header(key:String,
                optionalValue:String)</strong></code></p>
            </td>
        </tr>
        <tr>
            <th valign="top"><code><a href="http://pm.response.to" class="external-link"
                                                          rel="nofollow">pm.response.to</a>.have.body</code></th>
            <th colspan="1" valign="top">Function</th>
            <td cclass="confluenceTd"><p><code><strong><a href="http://pm.response.to" class="external-link"
                                                                     rel="nofollow">pm.response.to</a>.have.body()<br/><strong><a
                    href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.body(optionalValue:String)<br/><strong><a
                    href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.body(optionalValue:RegExp)</strong></strong></strong></code>
            </p>
            </td>
        </tr>
        <tr>
            <th valign="top"><code><a href="http://pm.response.to" class="external-link"
                                                          rel="nofollow">pm.response.to</a>.have.jsonBody</code></th>
            <th colspan="1" valign="top">Function</th>
            <td><p><code><strong><a href="http://pm.response.to" class="external-link"
                                                                     rel="nofollow">pm.response.to</a>.have.jsonBody()<br/><strong><a
                    href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.jsonBody(optionalExpectEqual:Object)<br/><strong><strong><a
                    href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.jsonBody(optionalExpectPath:String)</strong></strong></strong> <br/><strong><strong><strong><strong><a
                    href="http://pm.response.to" class="external-link" rel="nofollow">pm.response.to</a>.have.jsonBody(optionalExpectPath:String,
                optionalValue:*)</strong></strong></strong> </strong> </strong></code></p></td>
        </tr>
        <tr>
            <th valign="top"><code><a href="http://pm.response.to.be" class="external-link"
                                                          rel="nofollow">pm.response.to.be</a>.*</code></th>
            <th colspan="1" valign="top">Object</th>
            <td><p>The properties inside <code><a href="http://pm.response.to.be"
                                                                                   class="external-link" rel="nofollow">pm.response.to.be</a></code> object
                allows you to easily assert a set of pre-defined rules</p>
                <ul>
                    <li><code><a href="http://pm.response.to.be.info" class="external-link" rel="nofollow">pm.response.to.be.info</a><br/></code>Checks
                        1XX status code<br/> 
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.success<br/></code>Checks 2XX status code<br/> 
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.redirection<br/></code>Checks 3XX status code<br/> 
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.clientError<br/></code>Checks 4XX status code<br/><br/>
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.serverError</code> <br/>Checks 5XX<br/><br/></li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.error<br/></code>Checks 4XX or 5XX<br/><br/></li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.ok<br/></code>Status code must be 200<br/><br/>
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.accepted<br/></code>Status code must be
                        202<br/><br/></li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.badRequest<br/></code>Status code must be 400<br/><br/>
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.unauthorised<br/></code>Status code must be
                        401<br/><br/></li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.forbidden<br/></code>Status code 403<br/> 
                    </li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.notFound<br/></code>Status code of response is
                        checked to be 404<br/><br/></li>
                    <li><code><a href="http://pm.response.to.be" class="external-link"
                                 rel="nofollow">pm.response.to.be</a>.rateLimited</code><br/>Checks whether response
                        status code is 429
                    </li>
                </ul>
            </td>
        </tr>
        </tbody>
    </table>
</div>     