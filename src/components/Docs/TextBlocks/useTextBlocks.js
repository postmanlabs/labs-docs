/* Used on doc.jsx */
export function useTextBlocks(htmlDocument) {
  /* Paragraph Test */
  let cta = htmlDocument.querySelectorAll('p.hello');
  for (let i = 0; i < cta.length; i++) {
    cta[i].outerHTML = (
        `
        <p class="bold">Congratulations, this cta works.</p>
        `
      )
  }
  /* H2 Test */
  let h2Example = htmlDocument.querySelectorAll('h2.block');
  for (let i = 0; i < h2Example.length; i++) {
    h2Example[i].outerHTML = (
        `
        <h2 class="bold">Welcome to Postman</h2>
        `
      )
  }
}