(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8591)}])},8591:function(t,e,n){"use strict";n.r(e);var s=n(5893),a=n(3527);e.default=()=>(0,s.jsx)(a.Z,{})},2911:function(t,e,n){"use strict";var s=n(5893);n(3239);var a=n(5152),o=n.n(a);n(252),n(2028),n(2270),n(934),n(8134);let l=o()(()=>Promise.all([n.e(307),n.e(981)]).then(n.bind(n,4981)),{loadableGenerated:{webpack:()=>[4981]},ssr:!1});e.Z=t=>{let{editorValue:e,setEditorValue:n,setAnnotations:a,readOnlyMode:o}=t;return(0,s.jsx)(l,{setOptions:{useWorker:!1},mode:"json",theme:"solarized_light",onChange:t=>{n&&n(t)},onValidate:t=>{a&&a(t)},name:"aceEditor-".concat(Math.random()),width:"100%",height:"56vh",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,fontSize:"1rem",tabSize:2,value:e,readOnly:o})}},3527:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var s=n(5893),a=n(7294),o=n(5883),l=n(5670),i=n(6372),c=n(2911),r=n(880),u=n(5773),d=n.n(u),h=t=>{let{openDialog:e,setOpenDialog:n,savedResults:a,setInputPath:o,setInputObject:i,setOutputResults:c}=t;return(0,s.jsx)(r.Z,{open:e,onClose:()=>n(!1),disableEscapeKeyDown:!0,hideBackdrop:!0,children:(0,s.jsxs)("div",{className:"container-fluid ".concat(d().savedJSONPathsContainer),children:[(0,s.jsx)("div",{className:"row ".concat(d().savedResultsRow),children:(0,s.jsxs)("div",{children:["Temporarily Saved JSON Paths Results:",(0,s.jsx)("ul",{children:a.map(t=>(0,s.jsxs)("li",{children:[t.inputPath,(0,s.jsx)(l.Z,{title:"Reload saved item",children:(0,s.jsx)("i",{className:"btn btn-link bi bi-play-circle",onClick:()=>{o(t.inputPath),i(t.inputObject),c(t.outputResults)}})})]},Math.random()))})]})}),(0,s.jsx)("div",{className:"row ".concat(d().actions),children:(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"btn btn-outline-primary",onClick:()=>n(!1),children:"Close Window"})})})]})})},j=n(9498),p=n.n(j),b=()=>{let[t,e]=(0,a.useState)(""),[n,r]=(0,a.useState)("{}"),[u,d]=(0,a.useState)("{}"),[j,b]=(0,a.useState)(!1),[m,v]=(0,a.useState)([]),[x,_]=(0,a.useState)(!1),[N,f]=(0,a.useState)([]),[w,S]=(0,a.useState)(!1),C=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;if(e){let e=JSON.parse(n),s="";try{s=await (0,o.j)({path:t,json:e});let n=JSON.stringify(s,null,2);d(n)}catch(t){"string"==typeof s?d(s):d(t.message||"")}}},R=()=>{try{let e=JSON.parse(n);e&&t&&(null==m?void 0:m.length)===0?(b(!0),x&&C(!0)):b(!1)}catch(t){b(!1)}};return(0,a.useEffect)(()=>{R()},[t,n,x]),(0,s.jsxs)("div",{className:"container-fluid ".concat(p().jsonPathContainer),children:[(0,s.jsx)(h,{openDialog:w,setOpenDialog:S,savedResults:N,setInputPath:e,setInputObject:r,setOutputResults:d}),(0,s.jsxs)("div",{className:"row ".concat(p().pathInput),children:[(0,s.jsx)("div",{className:"col col-lg-10 col-md-8",children:(0,s.jsx)("input",{className:"form-control",type:"text",value:t,onChange:t=>e(t.target.value),placeholder:"Enter json path"})}),(0,s.jsxs)("div",{className:"col col-lg-2 col-md-4",children:[(0,s.jsx)("button",{className:"mx-1 btn btn-outline-primary",onClick:C,children:"Run"}),(0,s.jsxs)("button",{className:"mx-1 btn btn-outline-".concat(x?"success":"danger"),onClick:()=>_(!x),children:["Auto Run: ",x?"On":"Off"]})]})]}),(0,s.jsxs)("div",{className:"row ".concat(p().objectResultsRow),children:[(0,s.jsxs)("div",{className:"col ".concat(p().objectCol),children:["JSON Input",(0,s.jsx)(c.Z,{editorValue:n,setEditorValue:r,setAnnotations:v})]}),(0,s.jsxs)("div",{className:"col ".concat(p().resultsCol),children:["Results",(0,s.jsx)(c.Z,{editorValue:u,readOnlyMode:!0})]})]}),(0,s.jsx)("div",{className:"row ".concat(p().actionsRow),children:(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(l.Z,{title:"Copy results to clipboard",children:(0,s.jsx)("i",{className:"btn btn-link bi bi-clipboard",onClick:()=>(0,i.J)(u)})}),(0,s.jsx)(l.Z,{title:"Download results",children:(0,s.jsx)("i",{className:"btn btn-link bi bi-download",onClick:()=>(0,i.S)(JSON.parse(u),"jsontoolsplus-path")})}),(0,s.jsx)(l.Z,{title:"Use results as input",children:(0,s.jsx)("i",{className:"btn btn-link bi bi-arrow-repeat",onClick:()=>r(u)})}),(0,s.jsx)(l.Z,{title:"Save temporarily in memory (removed after refersh)",children:(0,s.jsx)("i",{className:"btn btn-link bi bi-memory",onClick:()=>f([...N,{inputPath:t,inputObject:n,outputResults:u}])})})]})}),(0,s.jsx)("div",{className:"row ".concat(p().savedResultsRow),children:N.length>0?(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"btn btn-outline-primary",onClick:()=>S(!0),children:"View Temporarily Stored JSON Paths"})}):""})]})}},6372:function(t,e,n){"use strict";n.d(e,{J:function(){return s},S:function(){return a}});let s=function(t){try{return navigator.clipboard.writeText(t),!0}catch(t){return console.log(t),alert("Sorry I could not copy text to clipboard, check console for error details."),!1}},a=function(t,e){let n=new Date,s="".concat(n.getMonth()+1,"-").concat(n.getDate(),"-").concat(n.getFullYear(),"-").concat(n.getHours(),"-").concat(n.getMinutes()),a="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),o=document.createElement("a");o.setAttribute("href",a),o.setAttribute("download",e+"-"+s+".json"),document.body.appendChild(o),o.click(),o.remove()}},9498:function(t){t.exports={jsonPathContainer:"jsonPath_jsonPathContainer__snS7E",pathInput:"jsonPath_pathInput__Igdbp",objectResultsRow:"jsonPath_objectResultsRow__4f8Kz",objectCol:"jsonPath_objectCol__q9eXP",resultsCol:"jsonPath_resultsCol__nB8ZO",actionsRow:"jsonPath_actionsRow__jnUvF",savedResultsRow:"jsonPath_savedResultsRow__jXpeP"}},5773:function(t){t.exports={savedJSONPathsContainer:"savedJSONPaths_savedJSONPathsContainer__ZZdzo",savedResultsRow:"savedJSONPaths_savedResultsRow__i7zOE",actions:"savedJSONPaths_actions__APqhQ"}}},function(t){t.O(0,[281,169,198,774,888,179],function(){return t(t.s=5557)}),_N_E=t.O()}]);