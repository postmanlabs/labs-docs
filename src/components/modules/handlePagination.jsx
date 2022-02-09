/* Use <- and -> keys to navigate between docs on web */
export const handleKeyboard = () => {
  const togglePrevLink = document.querySelector('.prevDoc');
  const toggleNextLink = document.querySelector('.nextDoc');
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      togglePrevLink.click();
    }
    if (e.key === 'ArrowRight') {
      toggleNextLink.click();
    }
  })
}
