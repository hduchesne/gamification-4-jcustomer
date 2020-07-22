(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(44),c=a.n(i),o=a(14),l=a(11),s=a(24),u=a(136),d=a(137),p=a(139),m=a(23),g=a(19),v=a.n(g),h=a(4),f=a.n(h),E=r.a.createContext(null),b=a(32),y=a(67),k=a(27),w=a(46),q=(a(76),a(77),a(78),a(25)),N=a(20);function S(){var e=Object(q.a)(['\n    query getQuiz($workspace: Workspace!, $id: String!, $language: String!) {\n        response: jcr(workspace: $workspace) {\n            quiz: nodeById(uuid: $id) {\n                id: uuid\n                type: primaryNodeType{\n                    value:name\n                }\n                key: property(name:"game4:quizKey"){\n                    value\n                }\n                title: displayName(language:$language)\n                subtitle: property(language:$language, name:"game4:subtitle"){\n                    value\n                }\n                description: property(language:$language,name:"game4:description"){\n                    value\n                }\n                duration: property(name:"game4:duration"){\n                    value\n                }\n                cover: property(name:"game4:cover"){\n                    node: refNode {\n                        path\n                    }\n                }\n                consents: property(name:"game4:consentType"){\n                    nodes: refNodes {\n                        id: uuid\n                        actived: property(language:$language,name:"wem:activated"){\n                            value\n                        }\n                    }\n                }\n                children{\n                    nodes {\n                        id: uuid\n                        type: primaryNodeType{\n                            value:name\n                        }\n                    }\n                }\n            }\n        }\n    }\n']);return S=function(){return e},e}var O=Object(N.b)(S()),j=a(38),_=a(45),x=a(26),z=a(138);function I(){var e=Object(q.a)(['\n    query getConsent($workspace: Workspace!, $id: String!, $language: String!) {\n        response: jcr(workspace: $workspace) {\n            consent: nodeById(uuid: $id) {\n                id: uuid\n                identifier:name\n                title:displayName(language:$language)\n                description: property(language:$language, name:"jcr:description"){\n                    value\n                }\n                actived: property(language:$language,name:"wem:activated"){\n                    value\n                }\n            }\n        }\n    }\n']);return I=function(){return e},e}var C=Object(N.b)(I()),$=function e(t){Object(s.a)(this,e),this.id=f()(t,"id"),this.identifier=f()(t,"identifier"),this.title=f()(t,"title"),this.description=f()(t,"description.value"),this.actived=JSON.parse(f()(t,"actived.value",!1))},D=function(e){var t=r.a.useContext(E),a=t.gql_variables,n=t.scope,i=t.consent_status,c=Object.assign(a,{id:e.id}),s=Object(m.a)(C,{variables:c}),u=s.loading,d=s.error,p=s.data,g=r.a.useState({}),v=Object(l.a)(g,2),h=v[0],b=v[1],y=r.a.useState(!1),k=Object(l.a)(y,2),w=k[0],q=k[1];if(r.a.useEffect((function(){if(!1===u&&p){var e=f()(p,"response.consent",{});b(new $(e))}}),[u,p]),r.a.useEffect((function(){var t='consents["'.concat(n,"/").concat(h.identifier,'"]'),a="".concat(t,".status"),r="".concat(t,".revokeDate"),c=f()(e.cxs,a),l=f()(e.cxs,r);i.GRANTED===c&&Date.now()<Date.parse(l)&&(q(!0),e.setGranted([].concat(Object(o.a)(e.granted),[h.id])))}),[h]),u)return r.a.createElement("p",null,"Loading...");if(d)return r.a.createElement("p",null,"Error :(");return r.a.createElement("li",null,h.actived&&!w&&r.a.createElement("div",{className:"consent-to-grant"},r.a.createElement(z.a.Check,{custom:!0,type:"checkbox",name:h.identifier,id:h.id,label:h.title,onChange:e.handleChange,checked:e.checked}),r.a.createElement("i",null,h.description)),h.actived&&w&&r.a.createElement("p",{className:"consent-granted"},r.a.createElement(x.a,{icon:["fas","check"]}),h.title,r.a.createElement(x.a,{className:"consent-denied",icon:["fas","ban"],onClick:function(){e.handleConsentStatus(h.identifier,i.DENIED),q(!1),e.setGranted(e.granted.filter((function(e){return e!==h.id})))}}),r.a.createElement("i",null,h.description)))},A=function(e){var t=r.a.useContext(E),a=t.files_endpoint,n=t.consent_status,i=t.scope,c=t.gql_variables,s=r.a.useState({}),u=Object(l.a)(s,2),d=u[0],m=u[1],g=r.a.useState([]),h=Object(l.a)(g,2),f=h[0],b=h[1],y=r.a.useState(!e.showNext&&"LIVE"===c.workspace),k=Object(l.a)(y,2),w=k[0],q=k[1];r.a.useEffect((function(){if(console.log(" ** gql_variables.workspace !== 'LIVE'  : ","LIVE"!==c.workspace),e.showNext&&"LIVE"===c.workspace){var t=!1;if(console.log(" ** granted  : ",f),e.quiz.consents){var a=Object.keys(d),n=[].concat(Object(o.a)(f),Object(o.a)(a)),r=e.quiz.consents.filter((function(e){return e.actived})).map((function(e){return e.id}));t=n.filter((function(e){return r.includes(e)})).length===r.length}console.log("*** allConsentChecked :",t),q(!t)}}),[d,f]);var N=function(e){-1===Object.keys(d).indexOf(e.target.id)?m(Object(_.a)({},d,Object(j.a)({},e.target.id,e.target.name))):(delete d[e.target.id],m(Object(_.a)({},d)))},S=function(e,t){var a=new Date,n=new Date(a);n.setFullYear(n.getFullYear()+2),console.log("handleConsentStatus status :",t),v.a.track("modifyConsent",{consent:{typeIdentifier:e,scope:i,status:t,statusDate:a.toISOString(),revokeDate:n.toISOString()}})};return r.a.createElement("div",{className:"game4-quiz__item show-overlay ".concat(e.show?"active":""," ")},r.a.createElement("img",{className:"d-block w-100",src:"".concat(a).concat(encodeURI(e.quiz.cover)),alt:e.quiz.title}),r.a.createElement("div",{className:"game4-quiz__caption"},r.a.createElement("h2",{className:"text-uppercase"},e.quiz.title,r.a.createElement("span",{className:"subtitle"},e.quiz.subtitle)),r.a.createElement("div",{className:"duration"},r.a.createElement(x.a,{icon:["far","clock"]}),e.quiz.duration),r.a.createElement("div",{className:"lead",dangerouslySetInnerHTML:{__html:e.quiz.description}}),r.a.createElement(p.a,{variant:"game4-quiz",onClick:function(t){Object.keys(d).forEach((function(e){S(d[e],n.GRANTED)})),e.onClickNext()},disabled:w},"Commencer")),e.quiz.consents.length>0&&e.cxs&&r.a.createElement("div",{className:"game4-quiz__consent"},r.a.createElement("h5",null,"consentement"),r.a.createElement("ul",null,e.quiz.consents.map((function(t){return t.actived?r.a.createElement(D,{key:t.id,id:t.id,checked:Object.keys(d).includes(t.id),setChecked:m,handleChange:N,cxs:e.cxs,setGranted:b,granted:f,handleConsentStatus:S}):r.a.createElement(r.a.Fragment,null)})))))},R=a(64);function P(){var e=Object(q.a)(['\n    query getQna($workspace: Workspace!, $id: String!, $language: String!) {\n        response: jcr(workspace: $workspace) {\n            qna: nodeById(uuid: $id) {\n                id: uuid\n                title:displayName(language:$language)\n                question: property(language:$language, name:"game4:question"){\n                    value\n                }\n                help: property(language:$language,name:"game4:help"){\n                    value\n                }\n                nbExpectedAnswer: property(name:"game4:nbExpectedAnswer"){\n                    value\n                }\n                answers: property(language:$language,name:"game4:answers"){\n                    values\n                }\n                randomSelection: property(name:"game4:randomSelection"){\n                    value\n                }\n                notUsedForScore: property(name:"game4:notUsedForScore"){\n                    value\n                }\n                cover: property(name:"game4:cover"){\n                    node: refNode {\n                        path\n                    }\n                }\n                jExpField2Map: property(name:"game4:jExpProperty"){\n                    value\n                }\n\n            }\n        }\n    }\n']);return P=function(){return e},e}var L=Object(N.b)(P()),U=function(e){var t=e.answer.valid||!!e.qna.notUsedForScore&&e.answer.checked;return r.a.createElement("li",{className:e.answer.checked?"checked":""},r.a.createElement("div",{className:"result ".concat(t?"valid":"")},t&&r.a.createElement(x.a,{icon:["fas","check"]}),!t&&r.a.createElement(x.a,{icon:["fas","times"]})),r.a.createElement(z.a.Check,{custom:!0,type:e.qna.computedNbExpectedAnswer>1?"checkbox":"radio",name:e.qna.id,id:e.answer.id,label:e.answer.label,onChange:e.handleChange,checked:e.checked}))};function F(e,t){var a="";t.indexOf("a")>-1&&(a+="abcdefghijklmnopqrstuvwxyz"),t.indexOf("A")>-1&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.indexOf("#")>-1&&(a+="0123456789"),t.indexOf("!")>-1&&(a+="~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\");for(var n="",r=e;r>0;--r)n+=a[Math.floor(Math.random()*a.length)];return n}var T=function(){function e(t,a){Object(s.a)(this,e),this.id=f()(t,"id"),this.title=f()(t,"title"),this.question=f()(t,"question.value",""),this.help=f()(t,"help.value",""),this.randomSelection=JSON.parse(f()(t,"randomSelection.value",!1)),this.notUsedForScore=JSON.parse(f()(t,"notUsedForScore.value",!1)),this.cover=f()(t,"cover.node.path",""),this.jExpField2Map=f()(t,"jExpField2Map.value",""),this.answers=f()(t,"answers.values",[]).map((function(e){var t=F(5,"#aA"),n=0===e.indexOf(a);return n&&(e=e.substring(a.length+1)),{id:t,label:e,checked:!1,valid:n}})),this.randomSelection&&this.answers.sort((function(e,t){return e.id>t.id})),this.computedNbExpectedAnswer=this.answers.filter((function(e){return e.valid})).length}return Object(R.a)(e,[{key:"valid",value:function(){if(console.log("qna isValid this.notUsedForScore : ",this.notUsedForScore),this.notUsedForScore)return!0;console.log("qna isValid start eval");var e=this.answers.reduce((function(e,t){return t.valid&&e.push(t.checked),e}),[]).reduce((function(e,t){return e&&t}),!0);return console.log("qna isValid : ",e),e}}]),e}(),M=function(e){var t=r.a.useContext(E),a=t.gql_variables,n=t.files_endpoint,i=t.quiz_validMark,c=Object.assign(a,{id:e.id}),s=Object(m.a)(L,{variables:c}),u=s.loading,d=s.error,g=s.data,h=r.a.useState({answers:[]}),b=Object(l.a)(h,2),y=b[0],k=b[1],w=r.a.useState(!0),q=Object(l.a)(w,2),N=q[0],S=q[1],O=r.a.useState([]),j=Object(l.a)(O,2),_=j[0],x=j[1];if(r.a.useEffect((function(){if(!1===u&&g){var e=f()(g,"response.qna",{});k(new T(e,i))}}),[u,g]),r.a.useEffect((function(){var e=!0;y.answers.forEach((function(t){t.checked=_.includes(t.id),t.checked&&(e=!1)})),S(e)}),[_]),u)return r.a.createElement("p",null,"Loading...");if(d)return r.a.createElement("p",null,"Error :(");var z=function(e){if(y.computedNbExpectedAnswer<=1)x(e.target.id);else{var t=_.indexOf(e.target.id);-1===t?x([].concat(Object(o.a)(_),[e.target.id])):(_.splice(t,1),x(Object(o.a)(_)))}};return r.a.createElement("div",{className:"game4-quiz__item show-overlay ".concat(e.show?"active":""," ")},r.a.createElement("img",{className:"d-block w-100",src:"".concat(n).concat(y.cover),alt:y.title}),r.a.createElement("div",{className:"game4-quiz__caption d-none d-md-block"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,y.question,r.a.createElement("i",null,y.help)),r.a.createElement("ol",{className:"game4-quiz__answer-list"},y.answers.map((function(e,t){return r.a.createElement(U,{key:t,qna:y,answer:e,checked:_.includes(e.id),handleChange:z})})))),r.a.createElement(p.a,{variant:"game4-quiz",onClick:function(){var t;if(console.log("[handleSubmit] props.resultSet => ",e.resultSet),(t=console).log.apply(t,["[handleSubmit] ...props.resultSet => "].concat(Object(o.a)(e.resultSet))),console.log("[handleSubmit] qna.valid() => ",y.valid()),e.setResultSet([].concat(Object(o.a)(e.resultSet),[y.valid()])),y.jExpField2Map){var a=y.answers.filter((function(e){return e.checked})).reduce((function(e,t){return t.label&&0<t.label.length?t.label:null}),null);v.a.track("updateVisitorData",{update:{propertyName:"properties.".concat(y.jExpField2Map),propertyValue:a}})}},disabled:N},"Submit")))};function V(){var e=Object(q.a)(['\n    query getWarmup($workspace: Workspace!, $id: String!, $language: String!) {\n        response: jcr(workspace: $workspace) {\n            warmup: nodeById(uuid: $id) {\n                id: uuid\n                title:displayName(language:$language)\n                subtitle: property(language:$language, name:"game4:subtitle"){\n                    value\n                }\n                content: property(language:$language,name:"game4:content"){\n                    value\n                }\n                duration: property(name:"game4:qnaDuration"){\n                    value\n                }\n                videoLink: property(name:"game4:videoLink"){\n                    value\n                }\n                videoExtPath: property(language:$language,name:"game4:videoExtPath"){\n                    value\n                }\n                videoIntPath: property(language:$language,name:"game4:videoIntPath"){\n                    node: refNode {\n                        path\n                    }\n                }\n                cover: property(name:"game4:masterQnaCover"){\n                    node: refNode {\n                        path\n                    }\n                }\n                children{\n                    nodes {\n                        id: uuid\n                        type: primaryNodeType{\n                            value:name\n                        }\n                    }\n                }\n    \n            }\n        }\n    }\n']);return V=function(){return e},e}var Q=Object(N.b)(V()),W=a(65),B=a.n(W),G=function(e){var t=e.videoURL,a=e.warmupID,i=Object(n.useContext)(E).content,c=Object(n.useRef)(null);function o(e){var t=e.status;console.log("collectEvent start uTracker: ",v.a),v.a.track("video",{id:i.id,type:i.type,game4Quiz:{id:i.id,type:i.type},game4Warmup:{id:a},game4Video:{duration:c.current.getDuration(),currentTime:c.current.getCurrentTime(),status:t}})}return r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(B.a,{ref:c,className:"react-player",url:t,controls:!0,width:"100%",height:"100%",onStart:function(){console.log("onStart seekTo 4.2s")},onPlay:function(){o({status:"started"}),console.log("onPlay called")},onPause:function(){o({status:"pause"})},onEnded:function(){o({status:"end"})}}))},J=function e(t,a){Object(s.a)(this,e),this.id=f()(t,"id",""),this.title=f()(t,"title",""),this.subtitle=f()(t,"subtitle.value",""),this.content=f()(t,"content.value",""),this.duration=f()(t,"duration.value",""),this.videoLink=f()(t,"videoLink.value",""),this.videoIntPath=f()(t,"videoIntPath.node.path"),this.cover=f()(t,"cover.node.path",""),this.childNodes=f()(t,"children.nodes",[]).map((function(e){return{id:f()(e,"id"),type:f()(e,"type.value")}})),this.videoLink&&(this.video=this.videoIntPath?"".concat(a).concat(encodeURI(this.videoIntPath)):f()(t,"videoExtPath.value"))},K=function(e){var t=Object(n.useContext)(E),a=t.gql_variables,i=t.files_endpoint,c=Object.assign(a,{id:e.id}),o=Object(m.a)(Q,{variables:c}),s=o.loading,u=o.error,d=o.data,g=r.a.useState({childNodes:[]}),v=Object(l.a)(g,2),h=v[0],b=v[1];return r.a.useEffect((function(){if(!1===s&&d){var t=new J(f()(d,"response.warmup",{}),i),a=[];t.childNodes.forEach((function(e){return a.push(e.id)})),e.addItem2Slides(a,t.id),b(t)}}),[s,d]),s?r.a.createElement("p",null,"Loading..."):u?r.a.createElement("p",null,"Error :("):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game4-quiz__item show-overlay ".concat(e.show?"active":""," ")},r.a.createElement("img",{className:"d-block w-100",src:"".concat(i).concat(h.cover),alt:h.title}),r.a.createElement("div",{className:"game4-quiz__caption d-none d-md-block"},r.a.createElement("h2",{className:"text-uppercase"},h.title,r.a.createElement("span",{className:"subtitle"},h.subtitle)),r.a.createElement("div",{className:"lead",dangerouslySetInnerHTML:{__html:h.content}}),null!=h.video&&r.a.createElement("div",null,r.a.createElement(G,{videoURL:h.video,warmupID:h.id})),r.a.createElement(p.a,{variant:"game4-quiz",onClick:e.onClickNext},"question"))),h.childNodes.map((function(t){return r.a.createElement(M,{key:t.id,id:t.id,show:e.index===t.id,resultSet:e.resultSet,setResultSet:e.setResultSet})})))},Z=a(66),H=function(e){var t=r.a.useContext(E).files_endpoint;return r.a.createElement("div",{className:"game4-quiz__item show-overlay ".concat(e.show?"active":""," ")},r.a.createElement("img",{className:"d-block w-100",src:"".concat(t).concat(encodeURI(e.quiz.cover)),alt:e.quiz.title}),r.a.createElement("div",{className:"game4-quiz__caption d-none d-md-block"},r.a.createElement("h2",{className:"text-uppercase"},e.quiz.title,r.a.createElement("span",{className:"subtitle"},e.quiz.subtitle)),r.a.createElement("div",{className:"game4-quiz__score-result col-6 offset-3 col-md-4 offset-md-4"},r.a.createElement(Z.a,{value:e.score(),text:"".concat(e.score(),"%")}))))};b.b.add(y.a,w.b,k.d,w.a,k.c,k.b,k.f,k.e,k.a);var Y=function(e){var t=e.active,a=e.handleSelect;return r.a.createElement("li",{className:"".concat(t?"active":""),onClick:a})},X=function e(t){Object(s.a)(this,e),this.id=f()(t,"id"),this.type=f()(t,"type.value"),this.key=f()(t,"key.value",{}),this.title=f()(t,"title",""),this.subtitle=f()(t,"subtitle.value",""),this.description=f()(t,"description.value",""),this.duration=f()(t,"duration.value",""),this.cover=f()(t,"cover.node.path",""),this.consents=f()(t,"consents.nodes",[]).map((function(e){return{id:f()(e,"id"),actived:JSON.parse(f()(e,"actived.value"))}})),this.childNodes=f()(t,"children.nodes",[]).map((function(e){return{id:f()(e,"id"),type:f()(e,"type.value")}})),this.scoreIndex=F(5,"#aA")},ee=function(e){var t=e.context,a=Object(m.a)(O,{variables:t.gql_variables}),n=a.loading,i=a.error,c=a.data,s=r.a.useState({consents:[],childNodes:[]}),g=Object(l.a)(s,2),h=g[0],b=g[1],y=r.a.useState(!1),k=Object(l.a)(y,2),w=k[0],q=k[1],N=r.a.useState(!1),S=Object(l.a)(N,2),j=S[0],_=S[1],x=r.a.useState([]),z=Object(l.a)(x,2),I=z[0],C=z[1],$=r.a.useState([]),D=Object(l.a)($,2),R=D[0],P=D[1],L=r.a.useState(),U=Object(l.a)(L,2),F=U[0],T=U[1],V=r.a.useState(null),Q=Object(l.a)(V,2),W=Q[0],B=Q[1],G=function(e,t){return P((function(a){if(console.debug("addItem2Slides__setSlideIndex; ids : ",e,", parentId : ",t,", slideIndex : ",a),t&&a.includes(t)){var n=a.indexOf(t)+1;return a.splice.apply(a,[n,0].concat(Object(o.a)(e))),Object(o.a)(a)}return[].concat(Object(o.a)(a),Object(o.a)(e))}))};if(r.a.useEffect((function(){if(console.debug("App Quiz init !"),!1===n&&c){console.debug("App Quiz init Set Data!");var e=f()(c,"response.quiz",{}),a=new X(e),r=[a.id];a.childNodes.forEach((function(e){return r.push(e.id)})),r.push(a.scoreIndex),G(r),T(a.id),b(a),console.debug("App Quiz init"),"LIVE"===t.gql_variables.workspace&&(v.a.initialize({"Apache Unomi":{scope:t.scope,url:t.cdp_endpoint,sessionId:"qZ-".concat(a.key,"-").concat(Date.now())}}),v.a.ready((function(){B(window.cxs)}))),t.content={id:a.id,type:f()(e,"type.value")}}}),[n,c]),r.a.useEffect((function(){if(console.debug("useEffect resultSet : ",I),Array.isArray(I)&&I.length>0){var e,t=I.slice(-1);console.debug("resultSet useEffect setResult result: ",t),(e=console).debug.apply(e,["resultSet useEffect setResult ...result: "].concat(Object(o.a)(t))),_.apply(void 0,Object(o.a)(t)),q(!0)}}),[I]),n)return r.a.createElement("p",null,"Loading...");if(i)return r.a.createElement("p",null,"Error :(");var J=R.length-1,Z=R.indexOf(F)<J,ee=R.indexOf(F)===J-1,te=function(){q(!1),console.log("index : ",F);var e=R.indexOf(F);console.log("current : ",e),e<J&&T(R[e+1]),e+1===J&&v.a.track("setQuizScore",{score:"".concat(h.key).concat(t.score_splitPattern).concat(ae())})},ae=function(){var e=I.filter((function(e){return e})).length,t=I.length;return Math.floor(e/t*100)};return r.a.createElement(E.Provider,{value:t},r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"game4-quiz slide ".concat(w?"show-result":"")},r.a.createElement("div",{className:"game4-quiz__header"},r.a.createElement("span",{className:"game4-quiz__header-result"},j&&"correct",!j&&"incorrect"),r.a.createElement(p.a,{variant:"game4-quiz-header",onClick:te,disabled:!Z},!ee&&"question suivante",ee&&"mon score")),r.a.createElement("ol",{className:"game4-quiz__indicators"},R.map((function(e){return r.a.createElement(Y,{key:e,active:F===e,handleSelect:function(){T(e)}})}))),r.a.createElement("div",{className:"game4-quiz__inner"},r.a.createElement(A,{key:h.id,quiz:h,show:F===h.id,onClickNext:te,showNext:Z,cxs:W}),h.childNodes.map((function(e,a){return e.type===t.cnd_type.QNA?r.a.createElement(M,{key:e.id,id:e.id,show:F===e.id,resultSet:I,setResultSet:C}):e.type===t.cnd_type.WARMUP?r.a.createElement(K,{key:e.id,id:e.id,show:F===e.id,resultSet:I,setResultSet:C,addItem2Slides:G,index:F,onClickNext:te}):r.a.createElement("p",{className:"text-danger"},"node type ",e.type," is not supported")})),r.a.createElement(H,{quiz:h,show:F===h.scoreIndex,score:ae}))))))},te=function(e){var t=e.item,a=e.errors;return r.a.createElement("div",null,r.a.createElement("h1",null,"Validation errors"),r.a.createElement("p",null,"An error occurred when validating ",r.a.createElement("b",null,t)),r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement("li",null,e.dataPath," : ",e.message)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(16),ne=a(68),re={QNA:"game4nt:qna",WARMUP:"game4nt:warmup"},ie={GRANTED:"GRANTED",DENIED:"DENIED",REVOKED:"REVOKED"},ce={context:{title:"context validation schema ",description:"context is an object provided by the page in charge to load the app",type:"object",properties:{host:{type:"string",format:"uri",default:"http://localhost:8080"},workspace:{type:"string",enum:["default","live"],default:"live"},scope:{type:"string",pattern:"[a-zA-Z0-9-_]+"},files_endpoint:{type:"string",format:"uri",default:"http://localhost:8080/files/live"},gql_endpoint:{type:"string",format:"uri",default:"http://localhost:8080/modules/graphql"},gql_authorization:{type:"string"},gql_variables:{type:"object",properties:{id:{type:"string"},language:{type:"string",pattern:"[a-z]{2}(?:_[A-Z]{2})?"}},required:["id","language"]},cdp_endpoint:{type:"string",format:"uri",default:"http://localhost:8181"}},required:["host","workspace","scope","files_endpoint","gql_endpoint","gql_variables","cdp_endpoint"],additionalProperties:!1}},oe=new ne({useDefaults:!0});a(133);window.quizUIApp=function(e,t){try{t=function(e){if(!oe.validate(ce.context,e))throw{item:"Context configuration object",errors:oe.errors};return e.gql_variables.workspace=function(e){return"default"===e?"EDIT":e.toUpperCase()}(e.workspace),e.cnd_type=re,e.consent_status=ie,e.quiz_validMark="[*]",e.score_splitPattern="::",e}(t);var a={};t.gql_authorization&&(a.Authorization=t.gql_authorization);var n=new N.a({uri:t.gql_endpoint,headers:a});c.a.render(r.a.createElement(ae.a,{client:n},r.a.createElement(ee,{context:t})),document.getElementById("root"))}catch(i){console.error("error : ",i),c.a.render(r.a.createElement(te,{item:i.item,errors:i.errors}),document.getElementById(e))}},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(134)},77:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.4d278a06.chunk.js.map