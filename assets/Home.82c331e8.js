import{g as e,d as a,E as t,o as s,c as l,b as o,e as i,p as c,A as n,B as r,C as v,F as u,q as d,j as f,k as m}from"./framework.4303a7d1.js";import{u as p,a as k,_ as h}from"./app.1512bd3c.js";function x(){const a=p();return e((()=>a.value.frontmatter))}const y=n("data-v-65d1e6c0");r("data-v-65d1e6c0");const g={key:0,class:"home-hero"},$={key:0,class:"figure"},_={key:1,id:"main-title",class:"title"},b={key:2,class:"description"};v();var I=a({expose:[],setup(a){const n=k(),r=x(),v=e((()=>r.value.heroImage||u.value||f.value||p.value)),u=e((()=>null!==r.value.heroText)),d=e((()=>r.value.heroText||n.value.title)),f=e((()=>null!==r.value.tagline)),m=e((()=>r.value.tagline||n.value.description)),p=e((()=>r.value.actionLink&&r.value.actionText)),I=e((()=>r.value.altActionLink&&r.value.altActionText));return y(((e,a)=>t(v)?(s(),l("header",g,[e.$frontmatter.heroImage?(s(),l("figure",$,[o("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):i("v-if",!0),t(u)?(s(),l("h1",_,c(t(d)),1)):i("v-if",!0),t(f)?(s(),l("p",b,c(t(m)),1)):i("v-if",!0),t(p)?(s(),l(h,{key:3,item:{link:t(r).actionLink,text:t(r).actionText},class:"action"},null,8,["item"])):i("v-if",!0),t(I)?(s(),l(h,{key:4,item:{link:t(r).altActionLink,text:t(r).altActionText},class:"action alt"},null,8,["item"])):i("v-if",!0)])):i("v-if",!0)))}});I.__scopeId="data-v-65d1e6c0";const A=n("data-v-69367d02");r("data-v-69367d02");const T={key:0,class:"home-features"},L={class:"wrapper"},j={class:"container"},w={class:"features"},B={key:0,class:"title"},C={key:1,class:"details"};v();var q=a({expose:[],setup(a){const n=x(),r=e((()=>n.value.features&&n.value.features.length>0)),v=e((()=>n.value.features?n.value.features:[]));return A(((e,a)=>t(r)?(s(),l("div",T,[o("div",L,[o("div",j,[o("div",w,[(s(!0),l(u,null,d(t(v),((e,a)=>(s(),l("section",{key:a,class:"feature"},[e.title?(s(),l("h2",B,c(e.title),1)):i("v-if",!0),e.details?(s(),l("p",C,c(e.details),1)):i("v-if",!0)])))),128))])])])])):i("v-if",!0)))}});q.__scopeId="data-v-69367d02";const E={},F=n("data-v-512c92e5");r("data-v-512c92e5");const z={key:0,class:"footer"},D={class:"container"},G={class:"text"};v();const H=F(((e,a)=>e.$frontmatter.footer?(s(),l("footer",z,[o("div",D,[o("p",G,c(e.$frontmatter.footer),1)])])):i("v-if",!0)));E.render=H,E.__scopeId="data-v-512c92e5";const J=n("data-v-3c8b059d");r("data-v-3c8b059d");const K={class:"home","aria-labelledby":"main-title"},M={class:"home-content"};v();var N=a({expose:[],setup:e=>J(((e,a)=>{const t=f("Content");return s(),l("main",K,[o(I),m(e.$slots,"hero"),o(q),o("div",M,[o(t)]),m(e.$slots,"features"),o(E),m(e.$slots,"footer")])}))});N.__scopeId="data-v-3c8b059d";export default N;
