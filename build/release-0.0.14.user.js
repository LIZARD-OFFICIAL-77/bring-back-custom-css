// ==UserScript==
// @name         Bring back readme css
// @namespace    http://tampermonkey.net/
// @version      0.0.14
// @author       LIZARD-OFFICIAL-77
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
(()=>{"use strict";async function t(t){await new Promise(e=>setTimeout(e,t))}async function e(){let e=document.querySelector("*.markdown-body.entry-content.container-lg"),o=0;for(;!e&&o++<10;)e=document.querySelector("*.markdown-body.entry-content.container-lg"),await t(500);if(!(o>9))throw console.log(e),"FUCK";const n=document.URL.split("/").length-3,s=document.URL.split("/")[3];let c=document.createElement("style");if(c.id="custom-readme-style-css",console.log(n),1==n)c.textContent=await(await fetch(`https://github.com/${s}/${s}/raw/HEAD/README.css`)).text(),console.log("balls 1");else if(2==n||3==n||4==n){const t=document.URL.split("/")[4];c.textContent=await(await fetch(`https://github.com/${s}/${t}/raw/HEAD/README.css`)).text(),console.log("balls 2")}else if(n>=5){const t=document.URL.split("/")[4],e=document.URL.split("/").splice(7).join("/");c.textContent=await(await fetch(`https://github.com/${s}/${t}/raw/HEAD/${e}/README.css`)).text(),console.log("balls 3")}document.querySelector("#custom-readme-style-css")?.remove(),document.head.appendChild(c),console.log("fuck this")}e(),window.addEventListener("hashchange",e),window.addEventListener("popstate",e)})();