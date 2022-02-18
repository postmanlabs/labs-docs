import './Modal.scss';

/* Used on doc.jsx */
export function useModal(parsedHtml, e) {
  let images = parsedHtml.querySelectorAll('img');
  for (let i = 0; i < images.length; i++) {
    /* Assign a unique ID for each modal */
    const create_id = `docs-${Math.random().toString(36).slice(8)}`
    const imgHasDefinedATag = images[i].src === images[i].parentNode.href
    const imgParentElementUndefined = images[i].parentNode.href === undefined;
    if (imgHasDefinedATag || imgParentElementUndefined) {
      images[i].parentNode.href = images[i].parentNode.href;
      images[i].outerHTML = Modal(create_id, images, i);
      const parser = new DOMParser();
      parser.parseFromString(images[i].outerHTML, 'text/html');
    }
  }
}
const Modal = (create_id, images, i) => {
  return (
    `
    <a data-target=#${create_id} class="modal-link" data-toggle="modal">
      <img src=${images[i].src || null} alt=${images[i].alt || null}></img>
    </a>
    <div id=${create_id} class="modal modal-link fade" tab-index="-1" role="dialog" aria-labelledby=${images[i].alt || null} aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-close-button">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="close"
          >
          <div class="modal-content">
            <img src=${images[i].src || null}  alt=${images[i].alt || null}></img>
          </div>
          </button>     
        </div>
      </div>
    </div>
    `
  )
}
