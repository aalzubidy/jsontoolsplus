"use strict";exports.id=372,exports.ids=[372],exports.modules={6372:(t,e,o)=>{o.d(e,{J:()=>r,S:()=>n});let r=function(t){try{return navigator.clipboard.writeText(t),!0}catch(t){return console.log(t),alert("Sorry I could not copy text to clipboard, check console for error details."),!1}},n=function(t,e){let o=new Date,r=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}-${o.getHours()}-${o.getMinutes()}`,n="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),c=document.createElement("a");c.setAttribute("href",n),c.setAttribute("download",e+"-"+r+".json"),document.body.appendChild(c),c.click(),c.remove()}}};