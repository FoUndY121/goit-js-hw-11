
export function renderGallery(images) {
  const gallery = document.querySelector(".gallery");
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
}

export function showLoader() {
  document.querySelector(".loader").style.display = "block";
}

export function hideLoader() {
  document.querySelector(".loader").style.display = "none";
}
