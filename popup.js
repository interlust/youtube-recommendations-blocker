document.getElementById('toggleBtn').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { type: 'toggleRecommendations' }, (response) => {
    if (response && response.success) {
      const btn = document.getElementById('toggleBtn');
      btn.textContent = btn.textContent === 'Toggle Recommendations' ? 'Restore Recommendations' : 'Toggle Recommendations';
    }
  });
});
