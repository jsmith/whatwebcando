import{a as r,b as e,c as t,d as a,i as s,e as i,S as c,s as n,v as l,w as o,x as f,A as u,B as h,C as v,g,f as m,t as p,m as d,h as $,j as A,k as E,l as w,o as b,q as j,r as x,D as L,L as I,O as z,Q as M,K as H}from"./index.9a31b5d4.js";import{_ as S}from"./index.5f0b016c.js";import{M as D}from"./Meta.2d394d92.js";import{A as T}from"./Article.c8ef1de6.js";import{A as k}from"./Advertisement.21faca5f.js";import{P as V}from"./prism.fc24acab.js";function y(r,e,t){var a=Object.create(r);return a.article=e[t],a}function P(r){var e,t=new T({props:{article:r.article}});return{c:function(){l(t.$$.fragment)},l:function(r){o(t.$$.fragment,r)},m:function(r,a){f(t,r,a),e=!0},p:function(r,e){var a={};r.otherArticles&&(a.article=e.article),t.$set(a)},i:function(r){e||(u(t.$$.fragment,r),e=!0)},o:function(r){h(t.$$.fragment,r),e=!1},d:function(r){v(t,r)}}}function q(r){for(var e,t,a,s,i,c,n,M,S,T,V,q,B,F,N,O,U,C,K,Q,Y,_,G,J,R,W,X,Z,rr,er,tr,ar,sr,ir,cr,nr=r.article.title+"",lr=r.article.title+"",or=r.article.html+"",fr=r.article.author+"",ur=new D({props:{title:r.article.title,url:"/articles/"+r.article.slug+"/",description:r.article.description,image:r.article.image}}),hr=new k({}),vr=r.otherArticles,gr=[],mr=0;mr<vr.length;mr+=1)gr[mr]=P(y(r,vr,mr));var pr=function(r){return h(gr[r],1,1,(function(){gr[r]=null}))};return{c:function(){l(ur.$$.fragment),e=g(),t=m("div"),a=m("main"),s=m("nav"),i=m("ul"),c=m("li"),n=m("a"),M=p("Features"),S=g(),T=m("li"),V=m("a"),q=p("Articles"),B=g(),F=m("li"),N=m("a"),O=p(nr),C=g(),K=m("h1"),Q=p(lr),Y=g(),_=m("div"),G=g(),J=m("div"),R=g(),W=m("aside"),l(hr.$$.fragment),X=g(),Z=m("h2"),rr=p("See also"),er=g();for(var r=0;r<gr.length;r+=1)gr[r].c();tr=g(),ar=m("p"),sr=m("a"),ir=p("See all"),this.h()},l:function(r){o(ur.$$.fragment,r),e=d(r),t=$(r,"DIV",{class:!0});var l=A(t);a=$(l,"MAIN",{class:!0});var f=A(a);s=$(f,"NAV",{class:!0,"aria-label":!0});var u=A(s);i=$(u,"UL",{});var h=A(i);c=$(h,"LI",{});var v=A(c);n=$(v,"A",{href:!0});var g=A(n);M=E(g,"Features"),g.forEach(w),v.forEach(w),S=d(h),T=$(h,"LI",{});var m=A(T);V=$(m,"A",{href:!0});var p=A(V);q=E(p,"Articles"),p.forEach(w),m.forEach(w),B=d(h),F=$(h,"LI",{class:!0});var b=A(F);N=$(b,"A",{href:!0,"aria-current":!0});var j=A(N);O=E(j,nr),j.forEach(w),b.forEach(w),h.forEach(w),u.forEach(w),C=d(f),K=$(f,"H1",{});var x=A(K);Q=E(x,lr),x.forEach(w),Y=d(f),_=$(f,"DIV",{class:!0}),A(_).forEach(w),G=d(f),J=$(f,"DIV",{class:!0}),A(J).forEach(w),f.forEach(w),R=d(l),W=$(l,"ASIDE",{class:!0});var L=A(W);o(hr.$$.fragment,L),X=d(L),Z=$(L,"H2",{class:!0});var I=A(Z);rr=E(I,"See also"),I.forEach(w),er=d(L);for(var z=0;z<gr.length;z+=1)gr[z].l(L);tr=d(L),ar=$(L,"P",{class:!0});var H=A(ar);sr=$(H,"A",{href:!0,class:!0});var D=A(sr);ir=E(D,"See all"),D.forEach(w),H.forEach(w),L.forEach(w),l.forEach(w),this.h()},h:function(){b(n,"href","/"),b(V,"href","/articles/"),b(N,"href",U="/articles/"+r.article.slug+"/"),b(N,"aria-current","page"),b(F,"class","is-active"),b(s,"class","breadcrumb"),b(s,"aria-label","breadcrumbs"),b(_,"class","content language-javascript svelte-nzu3si"),b(J,"class","author svelte-nzu3si"),b(a,"class","svelte-nzu3si"),b(Z,"class","svelte-nzu3si"),b(sr,"href","/articles/"),b(sr,"class","button"),b(ar,"class","text-center see-all svelte-nzu3si"),b(W,"class","svelte-nzu3si"),b(t,"class","container svelte-nzu3si")},m:function(r,l){f(ur,document.head,null),j(r,e,l),j(r,t,l),x(t,a),x(a,s),x(s,i),x(i,c),x(c,n),x(n,M),x(i,S),x(i,T),x(T,V),x(V,q),x(i,B),x(i,F),x(F,N),x(N,O),x(a,C),x(a,K),x(K,Q),x(a,Y),x(a,_),_.innerHTML=or,x(a,G),x(a,J),J.innerHTML=fr,x(t,R),x(t,W),f(hr,W,null),x(W,X),x(W,Z),x(Z,rr),x(W,er);for(var o=0;o<gr.length;o+=1)gr[o].m(W,null);x(W,tr),x(W,ar),x(ar,sr),x(sr,ir),cr=!0},p:function(r,e){var t={};if(r.article&&(t.title=e.article.title),r.article&&(t.url="/articles/"+e.article.slug+"/"),r.article&&(t.description=e.article.description),r.article&&(t.image=e.article.image),ur.$set(t),cr&&!r.article||nr===(nr=e.article.title+"")||L(O,nr),(!cr||r.article&&U!==(U="/articles/"+e.article.slug+"/"))&&b(N,"href",U),cr&&!r.article||lr===(lr=e.article.title+"")||L(Q,lr),cr&&!r.article||or===(or=e.article.html+"")||(_.innerHTML=or),cr&&!r.article||fr===(fr=e.article.author+"")||(J.innerHTML=fr),r.otherArticles){var a;for(vr=e.otherArticles,a=0;a<vr.length;a+=1){var s=y(e,vr,a);gr[a]?(gr[a].p(r,s),u(gr[a],1)):(gr[a]=P(s),gr[a].c(),u(gr[a],1),gr[a].m(W,tr))}for(H(),a=vr.length;a<gr.length;a+=1)pr(a);I()}},i:function(r){if(!cr){u(ur.$$.fragment,r),u(hr.$$.fragment,r);for(var e=0;e<vr.length;e+=1)u(gr[e]);cr=!0}},o:function(r){h(ur.$$.fragment,r),h(hr.$$.fragment,r),gr=gr.filter(Boolean);for(var e=0;e<gr.length;e+=1)h(gr[e]);cr=!1},d:function(r){v(ur),r&&w(e),r&&w(t),v(hr),z(gr,r)}}}var B=function(r){return function(e){return r.tags.filter((function(r){return e.tags.includes(r)})).length}};function F(r){var e,t,a,s,i,c,n;return S.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=r.params,r.query,l.prev=1,l.next=4,S.awrap(this.fetch("/articles/".concat(e.slug,".json")));case 4:if((t=l.sent).ok){l.next=7;break}throw t;case 7:return l.next=9,S.awrap(t.json());case 9:return a=l.sent,l.next=12,S.awrap(this.fetch("/articles.json"));case 12:return s=l.sent,l.next=15,S.awrap(s.json());case 15:return i=l.sent,c=B(a),n=i.filter((function(r){return r.slug!==a.slug})).sort((function(r,e){var t=c(r),a=c(e);return t>a?-1:t<a?1:r.weight>e.weight?-1:r.weight<e.weight?1:0})),l.abrupt("return",{article:a,otherArticles:n.slice(0,3)});case 21:l.prev=21,l.t0=l.catch(1),499===l.t0.status?this.error("You're offline","This content was not cached for offline use. Please return while connected to the network."):this.error(l.t0.status||"500",l.t0.message||"Unexpected error");case 24:case"end":return l.stop()}}),null,this,[[1,21]])}function N(r,e,t){var a=e.article,s=e.otherArticles;return M((function(){V.highlightAll({async:!0})})),r.$set=function(r){"article"in r&&t("article",a=r.article),"otherArticles"in r&&t("otherArticles",s=r.otherArticles)},{article:a,otherArticles:s}}var O=function(l){function o(r){var c;return e(this,o),c=t(this,a(o).call(this)),s(i(c),r,N,q,n,{article:0,otherArticles:0}),c}return r(o,c),o}();export default O;export{F as preload};