(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return k}));var a=n(0),i=n.n(a),c=n(7),o=n.n(c),r=(n(19),n(2)),l=n(3),u=n(6),s=n(5),d=(n(20),n(1)),h=(n(21),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={id:0,completed:!1,date:null},a.onsubmit=a.onsubmit.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onsubmit",value:function(){if(0===this.text.value.trim().length)alert("\ud560\uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694!");else{var e=(new Date).toLocaleDateString();e=e.substring(0,e.length-1),k.dispatch({type:"APPEND_TODO_LIST",list:[this.state.id,e,this.text.value,this.state.completed]}),this.text.value="",this.setState((function(e){return{id:e.id++}}))}}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=(new Date).toLocaleDateString();t=t.substring(0,t.length-1);var n=(new Date).toLocaleTimeString(),a=(new Date).getDay();e.setState({date:"".concat(t," / ").concat(n," (").concat(["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"][a],")")})}),10)}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.state.date?i.a.createElement("div",{id:"clockPart"},this.state.date):i.a.createElement("div",{id:"clockPart"},"Loading..."),i.a.createElement("div",{id:"inputArea"},i.a.createElement("input",{ref:function(t){e.text=t},placeholder:"\uc624\ub298\ub3c4 \ud30c\uc774\ud305!",type:"text"}),i.a.createElement("button",{onClick:this.onsubmit},"\ub4f1\ub85d")))}}]),n}(i.a.Component)),m=n(8),E=(n(28),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).checkComplete=a.checkComplete.bind(Object(d.a)(a)),a.deleteList=a.deleteList.bind(Object(d.a)(a)),a.state={button:"\ud3ec\uae30"},a.onMouseOver=a.onMouseOver.bind(Object(d.a)(a)),a.onMouseOut=a.onMouseOut.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"checkComplete",value:function(){k.dispatch({type:"COMPLETE_TODO_LIST",id:this.idValue.value})}},{key:"deleteList",value:function(){k.dispatch({type:"DELETE_TODO_LIST",id:this.idValue.value})}},{key:"onMouseOver",value:function(){this.setState({button:"\uc548\ub3fc!"})}},{key:"onMouseOut",value:function(){this.setState({button:"\ud3ec\uae30"})}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.date,c=t.text,o=t.completed;return i.a.createElement("tr",{style:o?{backgroundColor:"#87CEEB"}:{}},i.a.createElement("td",{id:"date"},a),i.a.createElement("td",{id:"text"},c.length<=15?c:"".concat(c.substring(0,16),"...")),i.a.createElement("td",null,i.a.createElement("input",{id:"checkbox",type:"checkbox",onChange:this.checkComplete}),i.a.createElement("input",{type:"hidden",value:n,ref:function(t){e.idValue=t}})),i.a.createElement("td",null,i.a.createElement("button",{onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onClick:this.deleteList},this.state.button)))}}]),n}(i.a.Component));n(29);var O=function(e){return i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{id:"dateTh"},"Date"),i.a.createElement("th",{id:"todo"},"ToDo"),i.a.createElement("th",{id:"completed"},"Completed"),i.a.createElement("th",{id:"giveup"},"Give up"))),i.a.createElement("tbody",null,e.lists.map((function(e){return i.a.createElement(E,{key:e[0],id:e[0],date:e[1],text:e[2],completed:e[3]})}))))},v=Object(m.b)((function(e){return{lists:e.appendList.list}}))(O),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Nav"},i.a.createElement(h,null)),i.a.createElement(v,null))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(4),f={list:[]},g=Object(p.b)({appendList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APPEND_TODO_LIST":return Object.assign({},{list:e.list.concat([t.list])});case"DELETE_TODO_LIST":var n=e.list;return n=n.filter((function(e){return e[0]!==parseInt(t.id)})),Object.assign({},e,{list:n});case"COMPLETE_TODO_LIST":var a=e.list;return a=a.map((function(e){return e[0]===parseInt(t.id)?(!1===e[3]?e.splice(3,1,!0):e.splice(3,1,!1),e):e})),Object.assign({},{list:a});default:return e}}}),k=Object(p.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m.a,{store:k},i.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.99e220f9.chunk.js.map