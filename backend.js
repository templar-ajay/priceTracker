async function fetchData() {
  const response = await fetch('https://bear-flannel-shirt.cyclic.app/info', {
    method: "post",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(arr),

  });
  
  const res = await response.json();

  res.forEach((element, i) => {
    // console.log(element);
    if (
      element.currentPrice &&
      element.yourPrice &&
      element.currentPrice <= element.yourPrice
    ) {
      chrome.runtime.sendMessage({ hello: element });
      // console.log("message sent", element.currentPrice, element.yourPrice);
    }
  });
}

setTimeout(() => {
  arr.length !== 0 ? fetchData() : "";
}, 3600000/2 );
