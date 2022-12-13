chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url) {
    console.log(tabId);
    document.querySelector("div").setAttribute("tabID", tabId);
  }
});
