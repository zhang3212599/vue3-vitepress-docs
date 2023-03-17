import{v as a,_ as b,c as v,a as _,w as f,b as s,d as l,r as B,o as A}from"./app.b38d7885.js";const{defineComponent:h}=a,k=h({name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:n,createElementVNode:t,Fragment:E,openBlock:y,createElementBlock:i}=a,d={style:{color:"#f00","line-height":"1.8"}},c={style:{color:"#00f"}};function r(p,u){return y(),i(E,null,[t("div",d,"原始值："+n(JSON.stringify(p.state.oldData)),1),t("div",c,"格式化后："+n(JSON.stringify(p.state.newData)),1)],64)}const{defineComponent:g}=a,{reactive:F}=a;return{render:r,...g({setup(p,{expose:u}){u();const m=F({oldData:{id:1,sex:"",age:"21"},newData:{id:1,sex:"",age:"21"}}),C=o=>{for(let e in o)o[e]===""?delete o[e]:o[e]=Number(o[e])};C(m.newData);const D={state:m,delObj:C,reactive:F};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}})}}()}}),V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"itempublic/Method/global.md","lastUpdated":1678973342000}'),O=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"文件路径：project/src/utils/delObj.js")],-1),j=s("h3",{id:"对象序列-proxy-obj-delobj",tabindex:"-1"},[l("对象序列(proxy.$obj.delObj) "),s("a",{class:"header-anchor",href:"#对象序列-proxy-obj-delobj","aria-hidden":"true"},"#")],-1),x=s("blockquote",null,[s("p",null,"移除对象空值，并把值转 Number 类型")],-1),N=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"color:#f00; line-height: 1.8;"'),s("span",{style:{color:"#E1E4E8"}},">原始值：{{ JSON.stringify(state.oldData) }}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"color:#00f;"'),s("span",{style:{color:"#E1E4E8"}},">格式化后：{{ JSON.stringify(state.newData) }}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { reactive } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"state"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"reactive"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  oldData: { id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", sex: "),s("span",{style:{color:"#9ECBFF"}},'""'),s("span",{style:{color:"#E1E4E8"}},", age: "),s("span",{style:{color:"#9ECBFF"}},'"21"'),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  newData: { id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", sex: "),s("span",{style:{color:"#9ECBFF"}},'""'),s("span",{style:{color:"#E1E4E8"}},", age: "),s("span",{style:{color:"#9ECBFF"}},'"21"'),s("span",{style:{color:"#E1E4E8"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"delObj"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Object"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," key "),s("span",{style:{color:"#F97583"}},"in"),s("span",{style:{color:"#E1E4E8"}}," data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (data[key] "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'""'),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"delete"),s("span",{style:{color:"#E1E4E8"}}," data[key]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data[key] "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Number"),s("span",{style:{color:"#E1E4E8"}},"(data[key])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"delObj"),s("span",{style:{color:"#E1E4E8"}},"(state.newData)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"color:#f00; line-height: 1.8;"'),s("span",{style:{color:"#24292E"}},">原始值：{{ JSON.stringify(state.oldData) }}</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"color:#00f;"'),s("span",{style:{color:"#24292E"}},">格式化后：{{ JSON.stringify(state.newData) }}</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { reactive } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"state"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"reactive"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  oldData: { id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", sex: "),s("span",{style:{color:"#032F62"}},'""'),s("span",{style:{color:"#24292E"}},", age: "),s("span",{style:{color:"#032F62"}},'"21"'),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  newData: { id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", sex: "),s("span",{style:{color:"#032F62"}},'""'),s("span",{style:{color:"#24292E"}},", age: "),s("span",{style:{color:"#032F62"}},'"21"'),s("span",{style:{color:"#24292E"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"delObj"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"data"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Object"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," key "),s("span",{style:{color:"#D73A49"}},"in"),s("span",{style:{color:"#24292E"}}," data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (data[key] "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'""'),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"delete"),s("span",{style:{color:"#24292E"}}," data[key]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data[key] "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Number"),s("span",{style:{color:"#24292E"}},"(data[key])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"delObj"),s("span",{style:{color:"#24292E"}},"(state.newData)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"})])])],-1);function w(n,t,E,y,i,d){const c=B("render-demo-0"),r=B("demo");return A(),v("div",null,[O,j,x,_(r,{customClass:"demoblock-custom",sourceCode:`<template>
  <div style="color:#f00; line-height: 1.8;">原始值：{{ JSON.stringify(state.oldData) }}</div>
  <div style="color:#00f;">格式化后：{{ JSON.stringify(state.newData) }}</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  oldData: { id: 1, sex: "", age: "21" },
  newData: { id: 1, sex: "", age: "21" }
})
const delObj = (data: Object) => {
  for (let key in data) {
    if (data[key] === "") {
      delete data[key]
    } else {
      data[key] = Number(data[key])
    }
  }
}
delObj(state.newData)
<\/script>
`},{highlight:f(()=>[N]),default:f(()=>[_(c)]),_:1})])}const $=b(k,[["render",w]]);export{V as __pageData,$ as default};
