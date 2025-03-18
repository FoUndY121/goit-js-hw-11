import{a as d,S as f,i as a}from"./assets/vendor-DtRopbQG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="49393685-3ee93529131780612454ef79e",m="https://pixabay.com/api/";async function g(t){return(await d.get(m,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function p(t){const o=document.querySelector(".gallery");if(!o){console.error("Элемент .gallery не найден в DOM");return}const s=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:l,comments:c,downloads:u})=>`
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
    `).join("");o.innerHTML=s}function h(){const t=document.querySelector(".loader");t?t.style.display="block":console.error("Элемент .loader не найден в DOM")}function L(){const t=document.querySelector(".loader");t?t.style.display="none":console.error("Элемент .loader не найден в DOM")}const S=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]'),O=document.querySelector(".gallery");document.querySelector(".loader");let b=new f(".gallery a");S.addEventListener("submit",async function(t){t.preventDefault();const o=q.value.trim();if(o){O.innerHTML="",h();try{const{hits:s}=await g(o);s.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(p(s),b.refresh())}catch(s){a.error({title:"Error",message:s.message})}finally{L()}}});
//# sourceMappingURL=index.js.map
