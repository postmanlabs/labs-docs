import './useModal.scss'

/* Used on doc.jsx */

export function useModal(htmlDocument) {
  let links = htmlDocument.querySelectorAll('img');
  for (let i = 0; i < links.length; i++) {
    /* Assign a unique ID for each modal */
    const create_id = `docs-${Math.random().toString(36).slice(8)}`
    if (links[i].src === links[i].parentNode.href) {
      /* Disable <a> href functionality from markdown */
      links[i].parentNode.href = "javascript:void(0)";
      links[i].outerHTML = (
        `
        <a data-target=#${create_id} class="modal-image" data-toggle="modal">
          <img src=${links[i].src || null} alt=${links[i].alt || null} />
        </a>
        <div id=${create_id} class="modal" tabIndex="-1" role="dialog" aria-labelledby=${links[i].alt || null } aria-hidden="true">
          <div class="container modal-dialog modal-dialog-centered" role="document">
            <div class="modal-row row">
              <div class="col-12">
                <span class="modal-close-button">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      class='close-icon'
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <title>e-remove</title>
                        <g
                          strokeWidth="1"
                          fill="#212121"
                          stroke="#212121"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="13.5" y1="2.5" x2="2.5" y2="13.5" />
                          <line x1="2.5" y1="2.5" x2="13.5" y2="13.5" />
                        </g>
                      </svg>
                    </span>
                  </button>
                </span>
                <img src=${links[i].src || null}  alt=${links[i].alt || null}/>
              </div>
            </div>
          </div>
        </div>
        `
      )
    } 
  }
}