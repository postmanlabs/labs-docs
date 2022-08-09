import styled from 'styled-components';

const ModalWrapper = styled.div`
.modal-link {
  cursor: pointer;
}  
div.modal {
  z-index: 214748;
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: none; 
  position: fixed; 
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%; 
  height: 100%;
  &.show {
    cursor: pointer;
  }
}

div.modal-dialog {
  max-width: 90%;
  justify-content: center;
  @media screen and (max-width: 576px){
    max-width: 100%;
  }
}

div.modal-content {
  background: none;
  border: none;
  width: auto;
  @media screen and (min-width: 576px){
    margin-top: 40px;
  }
}

img.modal-responsive {
  @media screen and (min-width: 576px){
    max-height: 75vh;
  }
}

.modal-close-button {
  button {
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
  }
}

button.close {
  opacity: 1;
  margin-bottom: 0px;
  padding: 0;
  &:hover {
    background: transparent;
    transition: none;
  }
  &:focus {
    outline: none
  }
}
button.close:not(:disabled):not(.disabled):hover {
  opacity: 1;
}
`

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
const Modal = (create_id, images, i) => {
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
