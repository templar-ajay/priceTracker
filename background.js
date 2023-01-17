chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.hello) {
    // console.log(request?.hello);
    chrome.notifications.create(
      {
        type: "basic",
        iconUrl: request.hello.imageLink,
        title: `${request.hello.webiste}`.toUpperCase(),
        message: `Price is down to ${request.hello.currentPrice}`,
        silent:false
      },
      () => {}
    );
    chrome.notifications.onClicked.addListener(() =>
      chrome.tabs.create({
        url: request.hello.buyLink,
      })
    );
  }
});
