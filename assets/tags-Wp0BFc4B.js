import{_ as A}from"./YunCard.vue_vue_type_script_setup_true_lang-DeZTLJNO.js";import{_ as F}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-BHZIp12e.js";import{d as b,o as t,e as _,g as c,t as p,ay as j,az as D,a as E,u as I,G,z as H,N as O,aR as W,j as $,C as J,k as K,aC as M,as as Q,v as U,c as a,w as s,r as X,m as r,aA as Z,f as e,F as S,q as ee,s as te,x as se,ax as ne}from"./app-9yiUtmRP.js";import{_ as oe}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BP8D0RjW.js";const ae={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},re={"inline-flex":""},le={"inline-flex":"",text:"xs"},ie=b({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(k){return(l,f)=>(t(),_("span",ae,[c("span",re,"#"+p(l.title),1),c("span",le,"["+p(l.count)+"]",1)]))}}),ce={class:"yun-text-light",text:"center",p:"2"},ue={class:"justify-center items-end",flex:"~ wrap",gap:"1"},de=b({__name:"tags",setup(k){j([D({"@type":"CollectionPage"})]);const l=E(),f=I(),w=G(),{t:g}=H(),u=O(),{tags:d,getTagStyle:T}=W({primary:w.value.colors.primary}),i=$(()=>l.query.tag||""),P=J(),Y=$(()=>P.postList.filter(o=>o.tags?typeof o.tags=="string"?o.tags===i.value:o.tags.includes(i.value):!1)),y=K(),{show:R}=M(y);function V(n){f.push({query:{tag:n}}),R()}const B=Q(u);return(n,o)=>{const h=ne,v=oe,L=ie,C=U("RouterView"),N=F,q=A;return t(),_(S,null,[n.$slots["sidebar-child"]?(t(),a(h,{key:0},{default:s(()=>[X(n.$slots,"sidebar-child")]),_:3})):(t(),a(h,{key:1})),r(C,null,{default:s(({Component:z})=>[(t(),a(Z(z),null,{"main-header":s(()=>[r(v,{title:e(B)||e(g)("menu.tags"),icon:e(u).icon||"i-ri-tag-line",color:e(u).color},null,8,["title","icon","color"])]),"main-content":s(()=>[c("div",ce,p(e(g)("counter.tags",Array.from(e(d)).length)),1),c("div",ue,[(t(!0),_(S,null,ee(Array.from(e(d)).sort(),([m,x])=>(t(),a(L,{key:m,title:m,count:x.count,style:te(e(T)(x.count)),onClick:me=>V(m.toString())},null,8,["title","count","style","onClick"]))),128))]),r(C)]),"main-nav-before":s(()=>[i.value?(t(),a(q,{key:0,ref_key:"collapse",ref:y,m:"t-4",w:"full"},{default:s(()=>[r(v,{title:i.value,icon:"i-ri-hashtag"},null,8,["title"]),r(N,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:Y.value},null,8,["posts"])]),_:1},512)):se("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{de as default};