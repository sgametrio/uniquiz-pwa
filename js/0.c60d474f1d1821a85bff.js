webpackJsonp([0],{103:function(t,e,s){function n(t){s(114)}var i=s(34)(s(116),s(121),n,null,null);t.exports=i.exports},105:function(t,e,s){"use strict";e.__esModule=!0;var n=s(106),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}},106:function(t,e,s){t.exports={default:s(107),__esModule:!0}},107:function(t,e,s){s(108),t.exports=s(8).Object.assign},108:function(t,e,s){var n=s(35);n(n.S+n.F,"Object",{assign:s(109)})},109:function(t,e,s){"use strict";var n=s(36),i=s(110),o=s(111),r=s(37),a=s(38),u=Object.assign;t.exports=!u||s(17)(function(){var t={},e={},s=Symbol(),n="abcdefghijklmnopqrst";return t[s]=7,n.split("").forEach(function(t){e[t]=t}),7!=u({},t)[s]||Object.keys(u({},e)).join("")!=n})?function(t,e){for(var s=r(t),u=arguments.length,c=1,l=i.f,d=o.f;u>c;)for(var f,p=a(arguments[c++]),m=l?n(p).concat(l(p)):n(p),h=m.length,b=0;h>b;)d.call(p,f=m[b++])&&(s[f]=p[f]);return s}:u},110:function(t,e){e.f=Object.getOwnPropertySymbols},111:function(t,e){e.f={}.propertyIsEnumerable},114:function(t,e,s){var n=s(115);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(101)("2864f025",n,!0)},115:function(t,e,s){e=t.exports=s(100)(void 0),e.push([t.i,".q-pagination>.q-input input::-webkit-input-placeholder{color:#000}",""])},116:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(105),i=s.n(n),o=s(117),r=s.n(o),a=s(39),u=s(18);e.default={components:{QCard:u.d,QCardTitle:u.h,QCardMain:u.f,QCardSeparator:u.g,QPagination:u.s,QRadio:u.t,QCheckbox:u.i,QInput:u.m,QFixedPosition:u.k,QBtn:u.c,QTabs:u.y,QTab:u.w,QTabPane:u.x},data:function(){return{maxScore:0,currentScore:0,showScore:!1,selected:1,answerId:null,answersIds:[],openAnswerText:null,quizId:this.$route.params.id}},created:function(){var t=this;0===r()(this.quiz).length&&this.$http.get(this.$store.state.hostname+"quizzes/"+this.quizId).then(function(e){t.$store.commit("updateCurrentQuiz",{quiz:e.data.data}),t.$store.commit("prepareQuizSubmission",{quiz:e.data.data})}).catch(function(e){console.log(e),t.$router.push("/quiz")})},computed:i()({},Object(a.b)({quiz:function(t){return t.currentQuiz}})),watch:{answerId:function(t){this.$store.commit("updateAnswerId",{index:this.selected-1,answerId:t})},answersIds:function(t){this.$store.commit("updateAnswersIds",{index:this.selected-1,answersIds:t})},openAnswerText:function(t){this.$store.commit("updateOpenAnswerText",{index:this.selected-1,openAnswerText:t})},selected:function(t){this.answerId=this.$store.state.quizSubmission.questions[this.selected-1].answerId,this.answersIds=this.$store.state.quizSubmission.questions[this.selected-1].answersIds,this.openAnswerText=this.$store.state.quizSubmission.questions[this.selected-1].openAnswerText}},methods:{submitQuizDialog:function(){u.a.create({title:"Submit your answers",message:"You are going to end the quiz by submitting your answers. Are you sure?",buttons:["No",{label:"yes",handler:this.submitQuiz}]})},submitQuiz:function(){var t=this;this.$http.post(this.$store.state.hostname+"quizzes/score",{submission:this.$store.state.quizSubmission}).then(function(e){t.currentScore=e.data.score,t.maxScore=e.data.maxScore,t.showScore=!0}).catch(function(t){console.log(t)})}}}},117:function(t,e,s){t.exports={default:s(118),__esModule:!0}},118:function(t,e,s){s(119),t.exports=s(8).Object.keys},119:function(t,e,s){var n=s(37),i=s(36);s(120)("keys",function(){return function(t){return i(n(t))}})},120:function(t,e,s){var n=s(35),i=s(8),o=s(17);t.exports=function(t,e){var s=(i.Object||{})[t]||Object[t],r={};r[t]=e(s),n(n.S+n.F*o(function(){s(1)}),"Object",r)}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-tabs",{attrs:{slot:"navigation"},slot:"navigation"},[t.showScore?t._e():s("q-tab",{attrs:{slot:"title",default:"",name:"fill-in",icon:"edit"},slot:"title"},[t._v("Fill in")]),t._v(" "),s("q-tab",{attrs:{slot:"title",name:"summary",icon:"assignment"},slot:"title"},[t._v("Summary")]),t._v(" "),t.showScore?t._e():s("q-tab-pane",{staticStyle:{"padding-bottom":"70px"},attrs:{name:"fill-in"}},[Object.keys(t.quiz).length>0?s("div",{staticClass:"layout-padding"},[s("q-card",[s("q-card-title",[t._v("\n            "+t._s(t.quiz.questions[t.selected-1].text)+"\n          ")]),t._v(" "),s("q-card-main",["single"===t.quiz.questions[t.selected-1].solutionType?s("div",t._l(t.quiz.questions[t.selected-1].answers,function(e){return s("div",{key:e.id},[s("q-card-separator",{staticStyle:{"margin-top":"5px","margin-bottom":"5px"}}),t._v(" "),s("q-radio",{attrs:{val:e.id,label:e.text},model:{value:t.answerId,callback:function(e){t.answerId=e},expression:"answerId"}})],1)})):"multiple"===t.quiz.questions[t.selected-1].solutionType?s("div",t._l(t.quiz.questions[t.selected-1].answers,function(e){return s("div",{key:e.id},[s("q-card-separator",{staticStyle:{"margin-top":"5px","margin-bottom":"5px"}}),t._v(" "),s("q-checkbox",{attrs:{val:e.id,label:e.text},model:{value:t.answersIds,callback:function(e){t.answersIds=e},expression:"answersIds"}})],1)})):s("div",[s("q-input",{model:{value:t.openAnswerText,callback:function(e){t.openAnswerText=e},expression:"openAnswerText"}})],1)])],1),t._v(" "),s("q-fixed-position",{staticClass:"fixed-bottom",attrs:{offset:[10,10]}},[s("q-card",{staticClass:"bg-white"},[s("q-pagination",{staticClass:"justify-center",staticStyle:{display:"flex"},attrs:{color:"primary",max:t.quiz.questions.length},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1):t._e()]),t._v(" "),s("q-tab-pane",{attrs:{name:"summary"}},[t.showScore?s("div",[t._v("\n        Your score: "+t._s(t.currentScore)+" / "+t._s(t.maxScore)+"\n        "),s("br"),t._v(" "),s("router-link",{attrs:{to:"/"}},[t._v("Return to home")])],1):void 0!==t.quiz.questions?s("div",[t._v("\n        Total questions: "+t._s(t.quiz.questions.length)+"\n        "),s("br"),t._v("\n        Questions without an answer: TODO\n        "),s("br"),t._v("\n        Questions summary: TODO\n        "),s("q-fixed-position",{attrs:{corner:"bottom-right",offset:[20,20]}},[s("q-btn",{attrs:{color:"red","icon-right":"send"},on:{click:t.submitQuizDialog}},[t._v("Submit answers")])],1)],1):t._e()])],1)],1)},staticRenderFns:[]}}});