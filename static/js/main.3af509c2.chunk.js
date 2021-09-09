(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(4),a=c.n(l),r=c(2),o=c(0);function i(e){"dark"===e.mode?(document.body.style.backgroundColor="black",document.body.style.color="white"):(document.body.style.backgroundColor="white",document.body.style.color="black");var t=function(e){var t=e.target.innerText.toLowerCase();console.log(t),"reset"===t&&(document.body.style.backgroundColor="white"),document.body.style.backgroundColor=t,document.body.style.color="black"};return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",id:"homeAbout",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"About"})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{id:"blue",type:"button",onClick:t,className:"btn btn-outline-primary mx-1",children:"Blue"}),Object(o.jsx)("button",{id:"yellow",type:"button",className:"btn btn-outline-warning mx-1",onClick:t,children:"Yellow"}),Object(o.jsx)("button",{id:"green",type:"button",className:"btn btn-outline-success mx-1",onClick:t,children:"Green"}),Object(o.jsx)("button",{style:{margin:"0 30px 0 50px"},id:"reset",type:"button",className:"btn btn-outline-danger",onClick:t,children:"Reset"})]}),Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{style:{cursor:"pointer"},className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleState}),Object(o.jsx)("label",{className:"form-check-label text-light",htmlFor:"flexSwitchCheckDefault",children:"dark"===e.mode?"Disable Dark Mode":"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],l=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:s,placeholder:"Enter your text here...",onChange:function(e){l(e.target.value)}})]}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(t){if(0!==s.length){var c=s.toUpperCase();l(c),e.showAlert("Text Converted to Upper Case!","success")}},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-success mx-2",onClick:function(t){if(0!==s.length){var c=s.toLowerCase();l(c),e.showAlert("Text converted to lower case!","success")}},children:"Convert to Lowercase"}),Object(o.jsx)("button",{style:{position:"absolute",right:"120px"},className:"btn btn-primary mx-2",onClick:function(t){0!==s.length&&(l(""),e.showAlert("Text cleared!","success"))},children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(t){if(0!==s.length){var c=document.getElementById("myBox");c.select(),navigator.clipboard.writeText(c.value),e.showAlert("Text copied to clipboard!","success")}},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-warning mx-2",onClick:function(){if(0!==s.length){var t=s.split(/[ ]+/);l(t.join(" ")),e.showAlert("Extra spaces removed!","success")}},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{children:"Text Summary"}),Object(o.jsxs)("pre",{children:["Words : ",0===s.length?0:s.replaceAll(/\s\s+/g," ").trim().split(" ").length," Characters :"," ",s.replaceAll(/\s\s+/g," ").trim().length]}),Object(o.jsxs)("p",{children:[.008*s.replaceAll(/\s\s+/g," ").trim().split(" ").length," Minutes read"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:s})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show role=alert"),children:[Object(o.jsx)("strong",{children:e.alert.type.charAt(0).toUpperCase()+e.alert.type.slice(1)}),": ",e.alert.msg]})}i.defaultProps={title:"Set Your title here"};var j=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],l=function(e,t){s({msg:e,type:t}),setTimeout((function(){s(null)}),2e3)},a=Object(n.useState)("light"),j=Object(r.a)(a,2),u=j[0],h=j[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextMod",toggleState:function(){"light"===u?(h("dark"),l("Dark mode enabled","warning")):(h("light"),l("Dark mode disabled","success"))},mode:u,showAlert:l}),Object(o.jsx)(d,{alert:c}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter your text below to analyze",showAlert:l})})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3af509c2.chunk.js.map