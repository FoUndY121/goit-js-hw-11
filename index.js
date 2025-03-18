import{a as y,S as c,i}from"./assets/vendor-DXaqCXe3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="49393685-3ee93529131780612454ef79e",g="https://pixabay.com/api/";async function p(t){return(await y.get(g,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let a=null;function h(t){const o=document.querySelector(".gallery");if(!o){console.error("Элемент .gallery не найден в DOM");return}o.innerHTML="";const s=t.map(({webformatURL:l,largeImageURL:e,tags:r,likes:n,views:u,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${l}" alt="${r}" class="gallery-image"/>
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${n}</p>
          <p><strong>Views:</strong> ${u}</p>
          <p><strong>Comments:</strong> ${d}</p>
          <p><strong>Downloads:</strong> ${f}</p>
        </div>
      </li>
    `).join("");o.innerHTML=s,a?a.refresh():a=new c(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){const t=document.querySelector(".loader");t?t.style.display="block":console.error("Элемент .loader не найден в DOM")}function S(){const t=document.querySelector(".loader");t?t.style.display="none":console.error("Элемент .loader не найден в DOM")}const q=document.querySelector(".form"),b=document.querySelector('input[name="search-text"]'),O=document.querySelector(".gallery");document.querySelector(".loader");let w=new c(".gallery a");q.addEventListener("submit",async function(t){t.preventDefault();const o=b.value.trim();if(o){O.innerHTML="",L();try{const{hits:s}=await p(o);s.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(h(s),w.refresh())}catch(s){i.error({title:"Error",message:s.message})}finally{S()}}});
//# sourceMappingURL=index.js.map
