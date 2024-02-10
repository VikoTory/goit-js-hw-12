import{i as d,a as L,S as w}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const i={searchForm:document.querySelector(".search-form"),wrapperPictures:document.querySelector(".pictures-list"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let s=1,p="",f=0;i.loadBtn.style.display="none";i.searchForm.addEventListener("submit",P);i.loadBtn.addEventListener("click",S);async function P(e){e.preventDefault();const r=e.target.elements.query.value.trim();if(!r){d.warning({message:"Field can not be empty",position:"topRight",backgroundColor:"#FFD700",messageColor:"#000000"});return}i.loader.style.display="inline-block";try{p=r,s=1;const{data:n}=await y(p,s);C(n.hits),n.totalHits===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"}),u()):(f=h(),l(),n.totalHits<=s*15?u():B())}catch(n){console.error(n)}finally{i.loader.style.display="none",l()}e.target.reset()}async function S(){s+=1,F();try{const{data:e}=await y(p,s);e.hits.length===0?m():(E(e.hits),f=h(),l(),e.totalHits<=s*15&&(u(),m()))}catch(e){console.error(e)}finally{$(),l()}}function B(){i.loadBtn.style.display="block",i.loadBtn.style.display="margin 0 auto"}function F(){i.loader.style.display="inline-block"}function $(){i.loader.style.display="none"}async function y(e,r){const n="42136767-fa6744b1a2510b3114c4aacf9",c="https://pixabay.com",t="/api/",o={key:n,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15},a=`${c}${t}?${new URLSearchParams(o)}`;return L.get(a)}function q({webformatURL:e,largeImageURL:r,tags:n,likes:c,views:t,comments:o,downloads:a}){return`<li class="gallery-card">
    <a class="gallary-card-link" href="${r}">
      <img src="${e}" alt="${n}" />
      <ul class="image-info">
        <li class="image-item-info">
          <p>Likes</p>
          <p>${c}</p>
        </li>
        <li class="image-item-info">
          <p>Views</p>
          <p>${t}</p>
        </li>
        <li class="image-item-info">
          <p>Comments</p>
          <p>${o}</p>
        </li>
        <li class="image-item-info">
          <p>Downloads</p>
          <p>${a}</p>
        </li>
      </ul>
    </a>
  </li>`}function g(e){return e.map(q).join("")}function C(e){i.wrapperPictures.innerHTML=g(e),b(),l()}function E(e){i.wrapperPictures.innerHTML+=g(e),b(),l()}function m(){d.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"}),u(),l()}function u(){i.loadBtn.style.display="none"}function h(){const e=document.querySelector(".gallery-card"),{height:r}=e.getBoundingClientRect();return r}function l(){const e=s*f;window.scrollBy({top:e,behavior:"smooth"})}function b(){new w(".gallery-card a.gallary-card-link",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
