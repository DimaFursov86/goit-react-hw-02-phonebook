(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={section:"Section_section__9OYby"}},14:function(t,e,n){t.exports={filterBox:"Filter_filterBox__2TNEY"}},15:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},16:function(t,e,n){t.exports={box:"App_box__aD21G"}},2:function(t,e,n){t.exports={contactList:"ContactList_contactList__fFcCD",contactItem:"ContactList_contactItem__1uvYp",contactItemText:"ContactList_contactItemText__3NYJ-"}},22:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(22),n(17)),i=n(6),u=n(7),l=n(9),m=n(8),b=n(3),d=n.n(b),h=n(12),j=n.n(h),f=n(0);function p(t){var e=t.children;return Object(f.jsx)("div",{className:j.a.section,children:e})}var x=n(13),C=n(4),O=n.n(C),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.tagInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:O.a.formContact,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:O.a.contactFormItem,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{className:O.a.contactFormItem,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:O.a.formButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=v,g=n(2),I=n.n(g);function N(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:I.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:I.a.contactItem,children:[Object(f.jsx)("p",{className:I.a.contactItemText,children:a}),Object(f.jsx)("p",{className:I.a.contactItemText,children:c}),Object(f.jsx)("button",{type:"button",className:I.a.contactItemText,onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var S=n(14),y=n.n(S),F=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:y.a.filterBox,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})},A=n(15),k=n(16),w=n.n(k),B=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:A,filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsx)(p,{children:Object(f.jsxs)("div",{className:w.a.box,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(_,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(F,{value:t,onChange:this.changeFilter}),Object(f.jsx)(N,{contacts:e,onDeleteContact:this.deleteContact})]})})}}]),n}(a.Component),L=B;n(32);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={formContact:"ContactForm_formContact__2SQ1I",contactFormItem:"ContactForm_contactFormItem__2KDm5",formButton:"ContactForm_formButton__i5lkM"}}},[[33,1,2]]]);
//# sourceMappingURL=main.80ddb8d6.chunk.js.map