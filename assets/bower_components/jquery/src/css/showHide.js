define(["../data/var/dataPriv"],function(t){function e(e,n){for(var i,r,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(i=r.style.display,n?"none"===i&&(o[s]=t.get(r,"display")||""):"none"!==i&&(o[s]="none",t.set(r,"display",i)));for(s=0;a>s;s++)null!=o[s]&&(e[s].style.display=o[s]);return e}return e});