const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),btn:document.querySelector("button")};let e=null;t.btnStart.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500),t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(()=>{clearInterval(e),console.log(`Interval with id ${e} has stopped!`),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.769541b8.js.map
