import{a as d,S as f,i as a}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49393685-3ee93529131780612454ef79e",y="https://pixabay.com/api/";async function p(s){return(await d.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function g(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:l,comments:c,downloads:u})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${i}" alt="${r}" class="gallery-image"/>
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${n}</p>
          <p><strong>Views:</strong> ${l}</p>
          <p><strong>Comments:</strong> ${c}</p>
          <p><strong>Downloads:</strong> ${u}</p>
        </div>
      </li>
    `).join("");t.innerHTML=o}function h(){document.querySelector(".loader").style.display="block"}function L(){document.querySelector(".loader").style.display="none"}const S=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]'),b=document.querySelector(".gallery");document.querySelector(".loader");let v=new f(".gallery a");S.addEventListener("submit",async function(s){s.preventDefault();const t=q.value.trim();if(t){b.innerHTML="",h();try{const{hits:o}=await p(t);o.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(g(o),v.refresh())}catch(o){a.error({title:"Error",message:o.message})}finally{L()}}});
//# sourceMappingURL=index.js.map
