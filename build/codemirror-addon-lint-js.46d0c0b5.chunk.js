(self.webpackChunksolid_cms=self.webpackChunksolid_cms||[]).push([[953],{96477:(w,r,o)=>{(function(s){s(o(4631))})(function(s){"use strict";function u(a,e){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];e.indent||(e.indent=1),JSHINT(a,e,e.globals);var i=JSHINT.data().errors,n=[];return i&&d(i,n),n}s.registerHelper("lint","javascript",u);function d(a,e){for(var i=0;i<a.length;i++){var n=a[i];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var c=n.character-1,t=c+1;if(n.evidence){var l=n.evidence.substring(c).search(/.\b/);l>-1&&(t+=l)}var f={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:s.Pos(n.line-1,c),to:s.Pos(n.line-1,t)};e.push(f)}}}})}}]);
