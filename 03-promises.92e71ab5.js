var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const i={delayForm:document.querySelector('input[name="delay"]'),stepForm:document.querySelector('input[name="step"]'),amountForm:document.querySelector('input[name="amount"]'),btnCreate:document.querySelector("button"),form:document.querySelector(".form")};i.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(i.delayForm.value),t=Number(i.amountForm.value),n=Number(i.stepForm.value),u=0,l=0;for(let e=1;e<t;e+=1)setTimeout((()=>{l=e,u=o+n*e,console.log(u),a(l,u).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}),n);function a(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}}));
//# sourceMappingURL=03-promises.92e71ab5.js.map
