(this["webpackJsonpbook-list"]=this["webpackJsonpbook-list"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),r=c(6),s=c.n(r),i=(c(12),c(3)),a=c(7),j=c(16),u=c(0),b=Object(o.createContext)(),l=function(e){var t=Object(o.useState)((function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),c=Object(i.a)(t,2),n=c[0],r=c[1];Object(o.useEffect)((function(){localStorage.setItem("books",JSON.stringify(n))}),[n]);return Object(u.jsx)(b.Provider,{value:{books:n,addBook:function(e,t){r([].concat(Object(a.a)(n),[{title:e,author:t,id:Object(j.a)()}]))},removeBook:function(e){r(n.filter((function(t){return t.id!==e})))}},children:e.children})},d=function(){var e=Object(o.useContext)(b).addBook,t=Object(o.useState)(""),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(o.useState)(""),a=Object(i.a)(s,2),j=a[0],l=a[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(n,j),r(""),l("")},children:[Object(u.jsx)("input",{type:"text",placeholder:"book title",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"text",placeholder:"author",value:j,onChange:function(e){return l(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"submit",value:"Add book"})]})},O=function(e){var t=e.book,c=Object(o.useContext)(b).removeBook;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"title",children:t.title}),Object(u.jsx)("div",{className:"author",children:t.author})]}),Object(u.jsx)("div",{className:"remove-book",onClick:function(){return c(t.id)},children:Object(u.jsx)("i",{className:"fas fa-trash-alt"})})]})},h=function(){var e=Object(o.useContext)(b).books;return e.length?Object(u.jsx)("div",{className:"book-list",children:Object(u.jsx)("ul",{children:e.map((function(e){return Object(u.jsx)(O,{book:e},e.id)}))})}):Object(u.jsx)("div",{className:"empty",children:" No books left to read"})},x=function(){var e=Object(o.useContext)(b).books;return console.log("books",e),Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("h1",{children:"Reading List"}),Object(u.jsxs)("p",{children:["You have ",e.length," books to read!"]})]})};var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]})})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9865cdb4.chunk.js.map