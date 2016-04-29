/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "http://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Mozilla Linear Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-linear-gradient"
  },{
    "name": "Mozilla Radial Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-radial-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "dev.w3.org/csswg/css3-images/#gradients-"
  }]
}
!*/
define(["Modernizr","prefixes","createElement"],function(e,t,n){e.addTest("cssgradients",function(){var i="background-image:",s="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="linear-gradient(left top,#9f9, white);",o=i+t.join(r+i).slice(0,-i.length);e._config.usePrefixes&&(o+=i+"-webkit-"+s);var d=n("a"),a=d.style;return a.cssText=o,(""+a.backgroundImage).indexOf("gradient")>-1})});