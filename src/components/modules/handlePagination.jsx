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
/* Swipe left or right to navigate between docs on mobile */
export const handleSwipe = () => {
  const togglePrevLink = document.querySelector('.prevDoc');
  const toggleNextLink = document.querySelector('.nextDoc');
  const swipeDocument = document.querySelector('main');
  let touchstartX;
  let touchendX;
  /* Touch Start */
  swipeDocument.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
  }, false);
  /* Touch End */
  swipeDocument.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  }, false);

  function handleGesture() {
    const setRange = touchstartX - touchendX;
    if (touchendX > touchstartX && setRange < -200) {
      togglePrevLink.click();
    } else if (touchendX < touchstartX && setRange > 200) {
      toggleNextLink.click();
    }
  }
}
