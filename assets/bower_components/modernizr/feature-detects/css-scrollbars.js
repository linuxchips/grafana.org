Modernizr.addTest("cssscrollbar",function(){var e,t="#modernizr{overflow: scroll; width: 40px }#"+Modernizr._prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}";return Modernizr.testStyles(t,function(t){e="scrollWidth"in t&&40==t.scrollWidth}),e});