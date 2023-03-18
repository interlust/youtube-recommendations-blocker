const styleElement = document.createElement('style');
styleElement.id = 'yt-recommendations-blocker-style';
document.head.appendChild(styleElement);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'toggleRecommendations') {
    toggleRecommendations();
    sendResponse({ success: true });
  }
});

function toggleRecommendations() {
  const styleElement = document.getElementById('yt-recommendations-blocker-style');
  const isHidden = styleElement.innerHTML.length > 0;

  if (isHidden) {
    styleElement.innerHTML = '';
  } else {
    styleElement.innerHTML = `
      ytd-browse:not([page-subtype='channels']) ytd-rich-grid-renderer,
      ytd-browse:not([page-subtype='channels']) ytd-rich-item-renderer,
      ytd-watch-next-secondary-results-renderer {
        display: none !important;
      }
    `;
  }
}
