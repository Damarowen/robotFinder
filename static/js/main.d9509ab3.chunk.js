(this["webpackJsonpmobil-app"]=this["webpackJsonpmobil-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(4),i=n.n(o),s=(n(14),n(5)),l=n(6),h=n(8),u=n(7),b=(n(3),function(e){var t=Math.floor(1+4*Math.random());return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(e.mobil.id,"?set=set").concat(t,"&size=180x180"),alt:"ss"}),Object(c.jsx)("h1",{children:e.mobil.name}),Object(c.jsx)("p",{children:e.mobil.email})]})}),d=function(e){return Object(c.jsx)("div",{className:"card-list",children:e.fromApp.length>0?e.fromApp.map((function(e){return Object(c.jsx)(b,{mobil:e},e.id)})):" Sorry , cant find what you looking for"})};var j=function(e){var t=e.placeholder,n=e.berubah;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},p=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState({searchField:t.target.value})},e.state={mobil:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({mobil:t})}))}},{key:"render",value:function(){var e=this.state,t=e.mobil,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:" Robot Database "}),Object(c.jsx)(j,{placeholder:"cari apa",berubah:this.onChange}),Object(c.jsx)(d,{fromApp:a})]})}}]),n}(a.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()},3:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.d9509ab3.chunk.js.map