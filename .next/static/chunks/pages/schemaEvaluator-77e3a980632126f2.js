(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{8653:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schemaEvaluator",function(){return t(3842)}])},3842:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var s=t(5893),n=t(7294),i=t(1581),l=t.n(i),o=t(5670),c=t(2911),r=t(5643),d=t.n(r),h=()=>{let a=new(l()),[e,t]=(0,n.useState)("{}"),[i,r]=(0,n.useState)("{}"),[h,u]=(0,n.useState)(""),[m,S]=(0,n.useState)([]),[_,j]=(0,n.useState)(!1),[v,x]=(0,n.useState)([]),[N,b]=(0,n.useState)([]),p=async()=>{if(_)try{let t=JSON.parse(e),s=JSON.parse(i),n=a.compile(s),l=n(t);l&&(u("Valid"),S([])),l||(u("Invalid"),S(n.errors))}catch(a){console.log(a),alert("Sorry something went wrong with schema validation. Check console for error details.")}},V=()=>{try{let a=JSON.parse(e),t=JSON.parse(i);a&&t&&(null==v?void 0:v.length)===0&&(null==N?void 0:N.length)===0?j(!0):j(!1)}catch(a){j(!1)}};return(0,n.useEffect)(()=>{V()},[e,i]),(0,s.jsxs)("div",{className:"container-fluid ".concat(d().schemaValidatorContainer),children:[(0,s.jsx)("div",{className:"row ".concat(d().pathInput),children:(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{title:"Validate object against schema",children:(0,s.jsx)("button",{className:"btn btn-outline-primary",onClick:p,children:"Validate Schema"})})})}),(0,s.jsxs)("div",{className:"row ".concat(d().objectSchemaRow),children:[(0,s.jsxs)("div",{className:"col ".concat(d().objectCol),children:["JSON Object",(0,s.jsx)(c.Z,{editorValue:e,setEditorValue:t,setAnnotations:x})]}),(0,s.jsxs)("div",{className:"col ".concat(d().schemaCol),children:["JSON Schema",(0,s.jsx)(c.Z,{editorValue:i,setEditorValue:r,setAnnotations:b})]})]}),(0,s.jsxs)("div",{className:"row ".concat(d().validationResultsRow),children:[(0,s.jsxs)("div",{children:["Schema Validation Results: ",h,"Valid"===h?(0,s.jsx)("i",{className:"bi bi-check2-circle ".concat(d().validStatus)}):"","Invalid"===h?(0,s.jsx)("i",{className:"bi bi-exclamation-octagon ".concat(d().invalidStatus)}):""]}),m.length>0?(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:m.map(a=>(0,s.jsxs)("li",{children:[a.instancePath," - ",a.schemaPath," - ",a.message]},Math.random()))})}):""]})]})},u=t(9008),m=t.n(u),S=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(m(),{children:[(0,s.jsx)("title",{children:"JSON Tools Plus - JSON Schema Validator"}),(0,s.jsx)("meta",{name:"pagename",content:"JSON Tools Plus - JSON Schema Validator"}),(0,s.jsx)("meta",{name:"subject",content:"JSON Tools Plus - JSON Schema Validator"})]}),(0,s.jsx)(h,{})]})},2911:function(a,e,t){"use strict";var s=t(5893);t(3239);var n=t(5152),i=t.n(n);t(252),t(2028),t(2270),t(934),t(8134);let l=i()(()=>Promise.all([t.e(307),t.e(981)]).then(t.bind(t,4981)),{loadableGenerated:{webpack:()=>[4981]},ssr:!1});e.Z=a=>{let{editorValue:e,setEditorValue:t,setAnnotations:n,readOnlyMode:i}=a;return(0,s.jsx)(l,{setOptions:{useWorker:!1},mode:"json",theme:"solarized_light",onChange:a=>{t&&t(a)},onValidate:a=>{n&&n(a)},name:"aceEditor-".concat(Math.random()),width:"100%",height:"56vh",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,fontSize:"1rem",tabSize:2,value:e,readOnly:i})}},5643:function(a){a.exports={schemaValidatorContainer:"schemaValidator_schemaValidatorContainer__TVjtD",pathInput:"schemaValidator_pathInput__KLc06",objectSchemaRow:"schemaValidator_objectSchemaRow__l3HUK",objectCol:"schemaValidator_objectCol__G1FHD",schemaCol:"schemaValidator_schemaCol__jnRPS",validationResultsRow:"schemaValidator_validationResultsRow__PDuFM",validStatus:"schemaValidator_validStatus__xlkKG",invalidStatus:"schemaValidator_invalidStatus__aQNgx"}}},function(a){a.O(0,[281,169,581,774,888,179],function(){return a(a.s=8653)}),_N_E=a.O()}]);