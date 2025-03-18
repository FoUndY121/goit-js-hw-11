// import renderFunctions from './js/render-functions.js';
// import apiPixabay from './js/pixabay-api.js';
//
// apiPixabay(renderFunctions);
import { getPictures } from "./js/pixabay-api.js";
import { renderGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const searchText = document.querySelector('input[name="search-text"]');
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
let lightbox = new SimpleLightbox(".gallery a");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const query = searchText.value.trim();
  if (!query) return;

  gallery.innerHTML = ""; // Очищаем галерею перед новым поиском
  showLoader();

  try {
    const { hits } = await getPictures(query);
    if (hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
    } else {
      renderGallery(hits);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({ title: "Error", message: error.message });
  } finally {
    hideLoader();
  }
});