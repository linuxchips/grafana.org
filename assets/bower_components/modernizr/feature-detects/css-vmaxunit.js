Modernizr.addTest("cssvmaxunit",function(){var t;return Modernizr.testStyles("#modernizr { width: 50vmax; }",function(e,n){var o=window.innerWidth/100,i=window.innerHeight/100,r=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);t=parseInt(50*Math.max(o,i),10)==r}),t});