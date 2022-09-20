/* Used on doc.jsx */
export function useModal(parsedHtml, e) {
  let images = parsedHtml.querySelectorAll('img');
  for (let i = 0; i < images.length; i++) {
    /* Assign a unique ID for each modal */
    const create_id = `docs-${Math.random().toString(36).slice(8)}`
    /* Check if image has a parent element with href */
    const imgHasDefinedHref = images[i].src === images[i].parentNode.href
    /* Check if image does not have parent element with href  */
    const imgHasUndefinedHref  = images[i].parentNode.href === undefined;
    if (imgHasDefinedHref || imgHasUndefinedHref) {
      images[i].parentNode.href = images[i].parentNode.href;
      images[i].outerHTML = Modal(create_id, images, i);
      const parser = new DOMParser();
      parser.parseFromString(images[i].outerHTML, 'text/html');
    }
  }
}
function Modal (create_id, images, i) {
  return (
    `
    ${images[i].width === 0 ? (
      `<ModalWrapper>
      <a data-target=#${create_id} class="modal-link" data-toggle="modal">
      <img src=${images[i].src || ''} alt="${images[i].alt || ''}" width=${images[i].width || ''}></img>
    </a>
    <div id=${create_id} class="modal modal-link fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document" >
        <div class="modal-content">
          <div class="modal-close-button ml-auto mb-3">
            <button type="button" data-dismiss="modal" aria-label="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <title class="closed-label">Close</title>
                <g
                  stroke-width="1"
                  fill="#212121"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
                  <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
                </g>
              </svg>
            </button>
          </div>
          <img class="modal-responsive" src=${images[i].src || ''} alt="${images[i].alt || ''}" width=${images[i].width || ''}></img>
        </div>   
      </div>
    </div>
    </ModalWrapper>
    `
    )
      : (`
        <img src=${images[i].src || ''} alt="${images[i].alt || ''}" width=${images[i].width || ''}></img>`
      )}
    `
  )
}
