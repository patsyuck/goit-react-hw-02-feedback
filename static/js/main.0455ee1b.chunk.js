(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),r=n.n(o),i=(n(13),n(4)),s=n(5),d=n(6),b=n(8),j=n(7),l=(n(14),n(0)),u=function(e){e.options;var t=e.onLeaveFeedback;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:t("good"),children:"Good"}),Object(l.jsx)("button",{onClick:t("neutral"),children:"Neutral"}),Object(l.jsx)("button",{onClick:t("bad"),children:"Bad"})]})},h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",Math.round(o),"%"]})]})},O=function(e){var t=e.message;return Object(l.jsx)("div",{children:t})},v=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),n]})},k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementFeedback=function(t){return function(){e.setState(Object(i.a)({},t,e.state[t]+1))}},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return 100*e.state.good/e.countTotalFeedback()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(v,{title:"Please leave feedback",children:Object(l.jsx)(u,{options:this.state,onLeaveFeedback:this.incrementFeedback})}),Object(l.jsx)(v,{title:"Statistics",children:this.countTotalFeedback()>0?Object(l.jsx)(h,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(l.jsx)(O,{message:"No feedback given"})})]})}}]),n}(c.Component);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0455ee1b.chunk.js.map