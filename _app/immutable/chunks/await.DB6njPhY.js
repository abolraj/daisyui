import{A as I,c as T,B as w,n as v,f as c,q as B,C as F,s as h,m as q,D as y,F as A,G as D,d,h as m,H as P,I as j}from"./runtime.Bfoy81my.js";import{e as z}from"./disclose-version.CEbLymSa.js";const p=0,o=1,b=2;function L(n,E,a,x,k){var C=I(),G=j,r,s,f,u,l=C?h(void 0):q(void 0),H=C?h(void 0):q(void 0),_=!1;function i(e,t){_=!0,t&&(y(N),A(N),D(G)),e===p&&a&&(s?d(s):s=c(()=>a(n))),e===o&&x&&(f?d(f):f=c(()=>x(n,l))),e===b&&k&&(u?d(u):u=c(()=>k(n,H))),e!==p&&s&&m(s,()=>s=null),e!==o&&f&&m(f,()=>f=null),e!==b&&u&&m(u,()=>u=null),t&&(D(null),A(null),y(null),P())}var N=T(()=>{if(r!==(r=E())){if(w(r)){var e=r;_=!1,e.then(t=>{e===r&&(v(l,t),i(o,!0))},t=>{e===r&&(v(H,t),i(b,!0))}),z?a&&(s=c(()=>a(n))):B(()=>{_||i(p,!0)})}else v(l,r),i(o,!1);return F}})}export{L as a};