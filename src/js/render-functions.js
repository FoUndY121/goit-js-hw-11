import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

export function renderGallery(images) {
  const gallery = document.querySelector(".gallery");
  if (!gallery) {
    console.error("Элемент .gallery не найден в DOM");
    return;
  }

  gallery.innerHTML = "";

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image"/>
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${likes}</p>
          <p><strong>Views:</strong> ${views}</p>
          <p><strong>Comments:</strong> ${comments}</p>
          <p><strong>Downloads:</strong> ${downloads}</p>
        </div>
      </li>
    `
    )
    .join("");

  gallery.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
  }
}

export function showLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "block";
  } else {
    console.error("Элемент .loader не найден в DOM");
  }
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  } else {
    console.error("Элемент .loader не найден в DOM");
  }
}