webpackJsonp([4],{41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=n(18),o=n(46),r=n(74),u=n.n(r),a=n(93),l=n(94);n.n(l);n(42),i.a.config.productionTip=!1,i.a.use(s.B),i.a.prototype.$http=u.a,new i.a({el:"#q-app",router:o.a,store:a.a,render:function(t){return t(n(96))}})},42:function(t,e){},46:function(t,e,n){"use strict";function i(t){return function(){return n(48)("./"+t+".vue")}}var s=n(9),o=n(47);s.a.use(o.a),e.a=new o.a({routes:[{path:"/",component:i("Home")},{path:"/quiz",component:i("quiz/Select")},{path:"/quiz/:id",component:i("quiz/Fill")}]})},48:function(t,e,n){function i(t){var e=s[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var s={"./Home.vue":[102,2],"./quiz/Fill.vue":[103,0],"./quiz/Select.vue":[104,1]};i.keys=function(){return Object.keys(s)},i.id=48,t.exports=i},93:function(t,e,n){"use strict";var i=n(40),s=n.n(i),o=n(9),r=n(39);o.a.use(r.a),e.a=new r.a.Store({state:{hostname_local:"http://uniquiz-laravel.dev/api/",hostname:"https://uniquiz-api.demetriocarrara.me/api/",courses:[],currentQuiz:{},premadeQuizzes:[],quizSubmission:{}},mutations:{updateCourses:function(t,e){t.courses=e.courses},updateCurrentQuiz:function(t,e){t.currentQuiz=e.quiz},updatePremadeQuizzes:function(t,e){t.premadeQuizzes=e.quizzes},updateSubmission:function(t,e){t.quizSubmission=e.submission},updateAnswersIds:function(t,e){t.quizSubmission.questions[e.index].answersIds=e.answersIds},updateAnswerId:function(t,e){t.quizSubmission.questions[e.index].answerId=e.answerId},updateOpenAnswerText:function(t,e){t.quizSubmission.questions[e.index].openAnswerText=e.openAnswerText},prepareQuizSubmission:function(t,e){t.quizSubmission.id=e.quiz.id,t.quizSubmission.questions=[];var n=!0,i=!1,o=void 0;try{for(var r,u=s()(e.quiz.questions);!(n=(r=u.next()).done);n=!0){var a=r.value;t.quizSubmission.questions.push({id:a.id,answersIds:[],openAnswerText:null,answerId:null})}}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}}}})},95:function(t,e){},96:function(t,e,n){function i(t){n(97)}var s=n(34)(n(98),n(99),i,null,null);t.exports=s.exports},97:function(t,e){},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(18);e.default={data:function(){return{toolbar:{title:"Uniquiz PWA",subtitle:""}}},components:{QLayout:i.p,QToolbar:i.z,QToolbarTitle:i.A,QBtn:i.c,QIcon:i.l,QList:i.q,QListHeader:i.r,QSideLink:i.u,QItemSide:i.o,QItemMain:i.n,QAjaxBar:i.b}}},99:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("q-layout",{ref:"layout",attrs:{view:"hhh lpr lFr"}},[n("q-toolbar",{attrs:{slot:"header"},slot:"header"},[n("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layout.toggleLeft()}}},[n("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),n("q-toolbar-title",[t._v("\n        "+t._s(t.toolbar.title)+"\n        "),t.toolbar.subtitle?n("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.toolbar.subtitle))]):t._e()])],1),t._v(" "),n("div",{attrs:{slot:"left"},slot:"left"},[n("q-list",{attrs:{"no-border":"",link:"","inset-separator":""}},[n("q-list-header",[t._v("Essential Links")]),t._v(" "),n("q-side-link",{attrs:{item:"",to:"/quiz"}},[n("q-item-side",{attrs:{icon:"school"}}),t._v(" "),n("q-item-main",{attrs:{label:"Start a new quiz"}})],1),t._v(" "),n("q-side-link",{attrs:{item:"",to:"/contribute"}},[n("q-item-side",{attrs:{icon:"record_voice_over"}}),t._v(" "),n("q-item-main",{attrs:{label:"Contribute",sublabel:"Add quiz and questions to db"}})],1)],1)],1),t._v(" "),n("router-view"),t._v(" "),n("q-ajax-bar",{attrs:{delay:20,speed:100,size:"6px",color:"red",position:"top"}})],1)],1)},staticRenderFns:[]}}},[41]);