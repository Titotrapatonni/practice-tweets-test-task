"use strict";(self.webpackChunkpractice_tweets_test_task=self.webpackChunkpractice_tweets_test_task||[]).push([[739],{143:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,i,o,a,l,s,c=e(439),u=e(791),p=e(168),g=e(87),x=e(313),f=(0,x.ZP)(g.OL)(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  color: black;\n  width: 196px;\n  text-decoration: none;\n"]))),d=e(184),A=function(){return(0,d.jsx)(f,{to:"/",children:"Back"})},h=e(165),m=e(861),w=function(){var n=(0,m.Z)((0,h.Z)().mark((function n(){var t;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://64452ce5914c816083c7d6bd.mockapi.io/User").then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=x.ZP.div(i||(i=(0,p.Z)(["\n  background-color: #5736a3;\n  width: 380px;\n  height: 460px;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px\n    #0000003b;\n  text-align: center;\n"]))),b=x.ZP.img(o||(o=(0,p.Z)(["\n  /* display: block; */\n  border-radius: 50%;\n  /* margin-left: auto;\n  margin-right: auto; */\n"]))),E=x.ZP.p(a||(a=(0,p.Z)(["\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0em;\n  color: #ebd8ff;\n"]))),S=e.p+"static/media/picture2.032662a2a907475127d7.png",v=x.ZP.button(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  margin-left: auto;\n  margin-right: auto;\n  gap: 6px;\n  width: 196px;\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  cursor: pointer;\n  transition: border 100ms linear;\n  &:hover {\n    border: outset;\n  }\n"]))),Z=function(n){var t=n.onClick,e=n.following;return(0,d.jsx)(v,{type:"button",onClick:t,style:{backgroundColor:e||"#EBD8FF"},children:e?"FOLLOWING":"FOLLOW"})},k=function(n){var t=n.profile,e=t.avatar,r=t.id,i=t.tweets,o=t.followers,a=(0,u.useState)(JSON.parse(localStorage.getItem("myFollowings ".concat(r)))||!1),l=(0,c.Z)(a,2),p=l[0],g=l[1];s=p?o+1:o,localStorage.setItem("myFollowings ".concat(r),JSON.stringify(p));return(0,d.jsxs)(j,{children:[(0,d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"logo"}),(0,d.jsx)("img",{src:S,alt:"pic"}),(0,d.jsx)("div",{children:(0,d.jsx)(b,{src:e,alt:"",width:"60",height:"60"})}),(0,d.jsxs)(E,{children:[i," TWEETS"]}),(0,d.jsxs)(E,{children:[" ",+s," FOLLOWERS"]}),(0,d.jsx)(Z,{onClick:function(){g((function(n){return!n}))},following:p})]})},Y=function(n){n.filter;var t=(0,u.useState)([]),e=(0,c.Z)(t,2),r=e[0],i=e[1];return(0,u.useEffect)((function(){w().then((function(n){return i(n)}))}),[]),(0,d.jsx)("ul",{children:r.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(k,{profile:n})},n.id)}))})},O=e(350),F=[{value:"all",label:"All"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}],B=function(n){var t=n.setFilter;return(0,d.jsx)(O.ZP,{options:F,onChange:function(n){t(n.value)}})};function C(){var n=(0,u.useState)("all"),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,u.useEffect)((function(){document.title="Tweets"}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(A,{}),(0,d.jsx)(B,{setFilter:r}),(0,d.jsx)(Y,{filter:e})]})}}}]);
//# sourceMappingURL=739.fe2508d0.chunk.js.map