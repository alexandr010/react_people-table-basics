(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{61:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(45),a=n.n(r),j=n(23),i=n(7),o=n(92),s=n(91),l=n(93),b=n(94),h=(n(61),n(2)),d=function(){return Object(h.jsx)(s.a,{sx:{flexGrow:1},children:Object(h.jsx)(o.a,{position:"static",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},align:"center",children:Object(h.jsx)(j.b,{to:"/",className:"navbar-link",children:"Home Page"})}),Object(h.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},align:"center",children:Object(h.jsx)(j.b,{to:"/people",className:"navbar-link",children:"People Page"})})]})})})},p=function(){return Object(h.jsx)(b.a,{variant:"h2",component:"div",gutterBottom:!0,align:"center",children:"Home Page"})},x=n(40),u=n(32),O=n(41),m=n.n(O),f=n(47),v=function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(5),w=n(9),P=n(98),N=n(100),k=n(89),y=n(42),B=n(97),F=n(99),G=n(96),_=n(95),C=function(e){var t=e.people;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k.a,{children:t.name}),Object(h.jsx)(k.a,{children:t.sex}),Object(h.jsx)(k.a,{children:t.born}),Object(h.jsx)(k.a,{children:t.died}),Object(h.jsx)(k.a,{children:t.motherName}),Object(h.jsx)(k.a,{children:t.fatherName})]})};C.defaultProps={people:[]};var E=function(e){var t=e.peoples,n=Object(w.a)(k.a)((function(e){var t=e.theme;return Object(g.a)({},"&.".concat(y.a.head),{backgroundColor:t.palette.primary.main,color:t.palette.common.white})})),c=Object(w.a)(G.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(B.a,{component:_.a,children:Object(h.jsxs)(P.a,{sx:{minWidth:700},children:[Object(h.jsx)(F.a,{children:Object(h.jsxs)(G.a,{children:[Object(h.jsx)(n,{width:"250px",children:"Name"}),Object(h.jsx)(n,{children:"Sex"}),Object(h.jsx)(n,{children:"Born"}),Object(h.jsx)(n,{children:"Died"}),Object(h.jsx)(n,{children:"Mother"}),Object(h.jsx)(n,{children:"Father"})]})}),Object(h.jsx)(N.a,{children:t.map((function(e){return Object(h.jsx)(c,{children:Object(h.jsx)(C,{people:e})},e.slug)}))})]})})})};E.defaultProps={peoples:[]};var H=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v().then((function(e){var t=e.map((function(t){return Object(x.a)(Object(x.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}));r(t)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{variant:"h2",component:"div",gutterBottom:!0,align:"center",children:"People Page"}),Object(h.jsx)(E,{peoples:n})]})},J=function(){return Object(h.jsx)("h1",{children:"Page not found"})},S=(n(70),function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{}),Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/people",children:Object(h.jsx)(H,{})}),Object(h.jsx)(i.b,{path:"/",exact:!0,children:Object(h.jsx)(p,{})}),Object(h.jsx)(i.a,{path:"/home",to:"/"}),Object(h.jsx)(i.b,{children:Object(h.jsx)(J,{})})]})]})});a.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c7ac37be.chunk.js.map