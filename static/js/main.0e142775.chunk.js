(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o,r=n(1),a=n.n(r),l=n(12),c=n.n(l),i=(n(21),n(4)),s=n(5),d=n(8),b=n(7),u=n(13),f=n(2),j=n(3),p=n(0),x=function(e){var t=e.children,n=e.flex,o=e.vertical;return Object(p.jsx)(g,{flex:n,vertical:o,children:t})};x.defaultProps={flex:!1,vertical:!1};var v,h,g=j.a.section(o||(o=Object(f.a)(["\n  ",";\n\n  ",";\n\n  padding: 0 25px;\n  margin: 0;\n"])),(function(e){return e.flex?"display: flex; align-items: center; justify-content: center; flex-direction: row;":"display: block;"}),(function(e){return e.vertical?"flex-direction: column;":""})),y=x;var O={redColor:"#ef2f3c",whiteColor:"#f6f4f3",blueColor:"#276fbf",darkColor:"#183059",yellowColor:"#f0a202",greenColor:"#27991a"},m=function(e){var t=e.good,n=e.neutral,o=e.bad,r=e.total,a=e.percent;return Object(p.jsxs)(P,{children:[Object(p.jsxs)(T,{listItemStyles:"green",children:["Good: ",t]}),Object(p.jsxs)(T,{listItemStyles:"yellow",children:["Neutral: ",n]}),Object(p.jsxs)(T,{listItemStyles:"red",children:["Bad: ",o]}),Object(p.jsxs)(T,{listItemStyles:"white",children:["Total: ",r]}),Object(p.jsxs)(T,{listItemStyles:"blue",children:["Positive feedback: ",a,"%"]})]})};m.defaultProps={good:0,neutral:0,bad:0,total:0,percent:0};var k,w,C,S,F={green:{color:"".concat(O.greenColor)},yellow:{color:"".concat(O.yellowColor)},red:{color:"".concat(O.redColor)},blue:{color:"".concat(O.blueColor)},white:{color:"".concat(O.whiteColor)}},P=j.a.ul(v||(v=Object(f.a)(["\n  list-style: none;\n  padding: 0;\n"]))),T=j.a.li(h||(h=Object(f.a)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 2px;\n  color: ",";\n"])),(function(e){var t=e.listItemStyles;return F[t].color})),I=m,R=j.a.div(k||(k=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n"]))),z=j.a.button(w||(w=Object(f.a)(["\n  padding: 10px 20px;\n  font-family: var(--big);\n  font-weight: 700;\n  text-transform: capitalize;\n  color: var(--yellow);\n  border: 1px solid gray;\n  border-radius: 6px;\n  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;\n  transition: all 250ms ease-in;\n  :first-of-type {\n    color: var(--green);\n  }\n  :last-of-type {\n    color: var(--red);\n  }\n  :hover {\n    color: var(--white);\n    background-color: var(--yellow);\n  }\n  :first-of-type:hover {\n    background-color: var(--green);\n  }\n  :last-of-type:hover {\n    background-color: var(--red);\n  }\n"]))),B=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(p.jsx)(R,{children:t.map((function(e){return Object(p.jsx)(z,{type:"button",title:"Leave a ".concat(e," response"),onClick:function(){n(e)},children:e},e)}))})},L=function(e){var t=e.message;return Object(p.jsx)(J,{children:Object(p.jsx)(A,{children:t})})};L.defaultProps={message:"It's empty here"};var M,V,E,J=j.a.div(C||(C=Object(f.a)(["\n  padding: 5px;\n"]))),A=j.a.p(S||(S=Object(f.a)(["\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"]))),D=L,G=j.a.button(M||(M=Object(f.a)(["\n  padding: 10px 20px;\n  font-family: var(--big);\n  font-weight: 700;\n  text-transform: capitalize;\n  color: var(--dark);\n  background-color: var(--white);\n  border: 1px solid gray;\n  border-radius: 6px;\n  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;\n  transition: all 250ms ease-in;\n  :hover {\n    color: var(--white);\n    background-color: var(--dark);\n  }\n"]))),N=function(e){var t=e.onResetButton;return Object(p.jsx)(G,{title:"Reset values",onClick:t,children:"Reset"})},q={redColor:"#ef2f3c",whiteColor:"#f6f4f3",blueColor:"#276fbf",darkColor:"#183059",yellowColor:"#f0a202",greenColor:"#27991a"},H=function(e){var t=e.title,n=e.titleType,o=e.titleStyles;return Object(p.jsx)(r.Fragment,{children:!0===n?Object(p.jsx)(Q,{titleStyles:o,children:t}):Object(p.jsx)(U,{titleStyles:o,children:t})})};H.defaultProps={title:"Title",titleType:!1,titleStyles:"normal"};var K={accented:{color:"".concat(q.yellowColor)},normal:{color:"".concat(q.blueColor)}},Q=j.a.h1(V||(V=Object(f.a)(["\n  text-align: center;\n  font-size: 32px;\n  font-family: var(--big);\n  color: ",";\n"])),(function(e){var t=e.titleStyles;return K[t].color})),U=j.a.h2(E||(E=Object(f.a)(["\n  text-align: center;\n  font-size: 28px;\n  font-family: var(--font);\n  color: ",";\n"])),(function(e){var t=e.titleStyles;return K[t].color})),W=H,X=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e.onResetButton=function(){e.setState({good:0,neutral:0,bad:0})},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.floor(t/n*100):0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({good:this.props.initialValue})}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,o=e.bad,a=this.countTotalFeedback(),l=this.countPositiveFeedbackPercentage(),c=Object.keys(this.state);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(y,{flex:!1,vertical:!1,children:[Object(p.jsx)(W,{title:"Cafe Expresso",titleType:!0,titleStyles:"accented"}),Object(p.jsx)(W,{title:"Please leave feedback",titleType:!1,titleStyles:"normal"}),Object(p.jsx)(B,{options:c,onLeaveFeedback:this.onLeaveFeedback})]}),Object(p.jsxs)(y,{flex:!0,vertical:!0,children:[Object(p.jsx)(W,{title:"Statistics",titleType:!1,titleStyles:"accented"}),0!==a?Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(I,{good:t,neutral:n,bad:o,total:a,percent:l,listItemStyles:"green"}),Object(p.jsx)(N,{onResetButton:this.onResetButton})]}):Object(p.jsx)(D,{message:"There is no feedback"})]})]})}}]),n}(r.Component);X.deafaultProps={initialValue:0};var Y=X,Z=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)(Y,{initialValue:0})}}]),n}(r.Component),$=Z;c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0e142775.chunk.js.map