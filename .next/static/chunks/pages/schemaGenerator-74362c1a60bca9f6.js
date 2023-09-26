(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{5601:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schemaGenerator",function(){return n(1218)}])},1218:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var o=n(5893),a=n(7294),c=n(4038),r=n.n(c),s=n(5670),l=n(6372),i=n(2911),u=n(7934),h=n.n(u),d=()=>{let[e,t]=(0,a.useState)("{}"),[n,c]=(0,a.useState)("{}"),[u,d]=(0,a.useState)(!1),[m,b]=(0,a.useState)([]),j=async()=>{if(u)try{let t=JSON.parse(e),n=r()(t);c(JSON.stringify(n,null,2))}catch(e){console.log(e),alert("Sorry could not generate schema from object. Check console for error details.")}},p=()=>{try{let t=JSON.parse(e);t&&(null==m?void 0:m.length)===0?d(!0):d(!1)}catch(e){d(!1)}};return(0,a.useEffect)(()=>{p()},[e]),(0,o.jsxs)("div",{className:"container-fluid ".concat(h().schemaGeneratorContainer),children:[(0,o.jsx)("div",{className:"row ".concat(h().pathInput),children:(0,o.jsx)("div",{children:(0,o.jsx)(s.Z,{title:"Generate a JSON schema out of the input object",children:(0,o.jsx)("button",{className:"btn btn-outline-primary",onClick:j,children:"Generate Schema"})})})}),(0,o.jsxs)("div",{className:"row ".concat(h().objectSchemaRow),children:[(0,o.jsxs)("div",{className:"col ".concat(h().objectCol),children:["Input JSON Object",(0,o.jsx)(i.Z,{editorValue:e,setEditorValue:t,setAnnotations:b})]}),(0,o.jsxs)("div",{className:"col ".concat(h().schemaCol),children:["Output JSON Schema",(0,o.jsx)(i.Z,{editorValue:n,readOnlyMode:!0})]})]}),(0,o.jsx)("div",{className:"row ".concat(h().actionsRow),children:(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)(s.Z,{title:"Copy schema to clipboard",children:(0,o.jsx)("i",{className:"btn btn-link bi bi-clipboard",onClick:()=>(0,l.J)(n)})}),(0,o.jsx)(s.Z,{title:"Download schema",children:(0,o.jsx)("i",{className:"btn btn-link bi bi-download",onClick:()=>(0,l.S)(JSON.parse(n),"jsontoolsplus-schema")})})]})})]})},m=n(9008),b=n.n(m),j=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b(),{children:[(0,o.jsx)("title",{children:"JSON Tools Plus - JSON Schema Generator"}),(0,o.jsx)("meta",{name:"pagename",content:"JSON Tools Plus - JSON Schema Generator"}),(0,o.jsx)("meta",{name:"subject",content:"JSON Tools Plus - JSON Schema Generator"})]}),(0,o.jsx)(d,{})]})},2911:function(e,t,n){"use strict";var o=n(5893);n(3239);var a=n(5152),c=n.n(a);n(252),n(2028),n(2270),n(934),n(8134);let r=c()(()=>Promise.all([n.e(307),n.e(981)]).then(n.bind(n,4981)),{loadableGenerated:{webpack:()=>[4981]},ssr:!1});t.Z=e=>{let{editorValue:t,setEditorValue:n,setAnnotations:a,readOnlyMode:c}=e;return(0,o.jsx)(r,{setOptions:{useWorker:!1},mode:"json",theme:"solarized_light",onChange:e=>{n&&n(e)},onValidate:e=>{a&&a(e)},name:"aceEditor-".concat(Math.random()),width:"100%",height:"56vh",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,fontSize:"1rem",tabSize:2,value:t,readOnly:c})}},6372:function(e,t,n){"use strict";n.d(t,{J:function(){return o},S:function(){return a}});let o=function(e){try{return navigator.clipboard.writeText(e),!0}catch(e){return console.log(e),alert("Sorry I could not copy text to clipboard, check console for error details."),!1}},a=function(e,t){let n=new Date,o="".concat(n.getMonth()+1,"-").concat(n.getDate(),"-").concat(n.getFullYear(),"-").concat(n.getHours(),"-").concat(n.getMinutes()),a="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),c=document.createElement("a");c.setAttribute("href",a),c.setAttribute("download",t+"-"+o+".json"),document.body.appendChild(c),c.click(),c.remove()}},7934:function(e){e.exports={schemaGeneratorContainer:"schemaGenerator_schemaGeneratorContainer__ghSwq",pathInput:"schemaGenerator_pathInput___DkNI",objectSchemaRow:"schemaGenerator_objectSchemaRow___GA_n",objectCol:"schemaGenerator_objectCol__4w_MS",schemaCol:"schemaGenerator_schemaCol__WSwyS",actionsRow:"schemaGenerator_actionsRow__s_JFB"}}},function(e){e.O(0,[281,169,307,38,774,888,179],function(){return e(e.s=5601)}),_N_E=e.O()}]);