---
layout: page
title: "Portfolio"
cssclass: lab-wrapper
due: Feb 1st
---

Create a webpage that has your name and a little info about yourself. You will use this page throughout the semester to link to your assignments. Over time, as you learn more about HTML and CSS, you can improve the design of this page. 

To start, here is a template. This example uses an unordered list of links, but there are many other approaches you can take. 

{% highlight html %}
<!DOCTYPE html>
<html>
 <head>
  <title>Your name</title>
 </head>
 <body>
  <h1>Your name</h2>
  <p>About yourself...</p>
  <ul>
   <li><a href="/path/to/assignment">Homework</a></li>
  </ul>
 </body>
</html>
{% endhighlight %}

Try adding some CSS to style the color and text. Reference the [class notes](/lab/2015/01/28/getting-started.html) for commands you can use, and instructions on where to insert the CSS. 

<hr />
<h2>Resources</h2>
<a href="/lab/2015/01/28/getting-started.html" class="btn btn-default">class notes</a> 
<a href="http://www.w3schools.com/tags/default.asp" class="btn btn-default"><i class="glyphicon glyphicon-new-window"></i> HTML tag reference</a> 
<a href="http://www.w3schools.com/cssref/default.asp" class="btn btn-default"><i class="glyphicon glyphicon-new-window"></i> CSS property reference</a>