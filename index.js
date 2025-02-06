window.onload = function () {
  setTimeout(function () {
    document.querySelector('.loading').classList.add('fade-out');
  }, 2000);
};

document.addEventListener('DOMContentLoaded', () => {
  const contentContainer = document.querySelector('.window-element');

  // Function to handle iframe creation and loading
  function loadInIframe(href) {
    if (href) {
      // Create iframe and close button
      const iframeId = `iframe-${Date.now()}`;
      const iframe = `<div id="${iframeId}" style="position: relative; width: 100%; height: 100%;">
                                    <iframe src="${href}" style="width: 100%; height: 100%; border: none;"></iframe>
                                    <button style="position: absolute; top: 10px; right: 10px; z-index: 1000;" onclick="closeIFrame('${iframeId}')">X</button>
                                </div>`;
      contentContainer.innerHTML = iframe;
    }
  }

  // Add click event listeners to all elements with data-href attributes
  document.querySelectorAll('[data-href]').forEach(element => {
    element.addEventListener('click', () => {
      const href = element.getAttribute('data-href');
      loadInIframe(href);
    });
  });

  // Close iframe function
  window.closeIFrame = function (iframeId) {
    document.getElementById(iframeId).remove();
  };
});
