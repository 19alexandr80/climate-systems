"use strict";(self.webpackChunkclimate_systems=self.webpackChunkclimate_systems||[]).push([[3],{6003:(n,e,i)=>{i.r(e),i.d(e,{default:()=>f});var s,t,r,o,a,d=i(5475),c=i(5043),l=i(3003),h=i(4512),p=i(4072),x=i(7528),m=i(403);const u=m.Ay.div(s||(s=(0,x.A)(["\n  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));\n  background-size: cover;\n  width: 100%;\n  min-height: 630px;\n"]))),v=m.Ay.div(t||(t=(0,x.A)(["\n  position: relative;\n  display: inline-block;\n  &:hover ~ .content {\n    display: block;\n  }\n"]))),y=m.Ay.div(r||(r=(0,x.A)(["\n  padding: 8px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  &:hover ~ .content {\n    display: block;\n  }\n"]))),b=m.Ay.div(o||(o=(0,x.A)(["\n  display: none;\n  position: absolute;\n  right: 0;\n  border-radius: 5px;\n  background-color: gray;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  :hover {\n    display: block;\n  }\n  div {\n    padding: 4px 8px;\n    text-decoration: none;\n    display: block;\n    &:hover {\n      background-color: #f1f1f1;\n    }\n  }\n"]))),g=m.Ay.ul(a||(a=(0,x.A)(["\n  margin-bottom: 0px;\n  padding-left: 10px;\n  list-style: none;\n"])));var j=i(579);function f(){const[n,e]=(0,c.useState)([]),[i,s]=(0,c.useState)(!1),t=(0,l.d4)((n=>n.contacts.user.name)),r=(0,l.d4)((n=>n.contacts.token)),o=(0,l.d4)((n=>n.contacts.user.subscription)),a=(0,c.useMemo)((()=>({token:r,name:t})),[t,r]);return(0,c.useEffect)((()=>{(async()=>{try{switch(s(!0),o){case"superadmin":const n=await(0,h.ki)(a);return n?(e(n),void s(!1)):(alert("sorry no information yetNONE"),void s(!1));case"admin":const i=await(0,h.O2)(a);return i?(e(i),void s(!1)):(alert("sorry no information yetNONE"),void s(!1));case"client":const t=await(0,h.ez)(a);return t?(e(t),void s(!1)):(alert("sorry no information yetNONE"),void s(!1));default:alert("\u041d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439")}}catch(n){s(!1),console.error(n.messeng)}finally{return void s(!1)}})()}),[a,o]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(p.m,{children:(0,j.jsxs)(u,{children:[(0,j.jsxs)("h1",{children:["\u041f\u0440\u043e\u044d\u043a\u0442\u044b ",t]}),(0,j.jsx)(d.N_,{to:"/dmn",children:"DMN"}),i?(0,j.jsx)("div",{children:"loding data... please wait "}):(0,j.jsx)("div",{children:n.length>=1?(0,j.jsx)(g,{children:n.map((n=>(0,j.jsxs)("li",{children:[(0,j.jsx)("h3",{children:n.name}),(0,j.jsxs)("div",{children:["client: ",n.client]}),(0,j.jsxs)("div",{children:["tel: ",n.phone]}),(0,j.jsxs)("div",{children:["adress: ",n.adress]}),(0,j.jsxs)(v,{children:[(0,j.jsx)(y,{children:"adminName:"}),(0,j.jsx)(b,{style:{left:0},className:"content",children:n.adminName.map((n=>(0,j.jsx)("div",{children:n},n)))})]})]},"".concat(n._id))))}):(0,j.jsx)("p",{children:"NOT DATA"})})]})})})}}}]);
//# sourceMappingURL=3.6557c91b.chunk.js.map