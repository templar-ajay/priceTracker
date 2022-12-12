(() => {
  const MAIN = {
    AMAZON: () => {
      console.log("hi world");
      const trackButton = MAIN.TRACKBUTTON();

      const buyNow = document.querySelector("#buyNow");
      if (buyNow) {
        document.body.appendChild(trackButton);
      }
      trackButton.onclick = () =>
        console.log(
          "price",
          document.querySelector(".a-price-whole").innerHTML
        );
    },
    FLIPKART: () => {
      const trackButton = MAIN.TRACKBUTTON();
      const buyNow = document.querySelector("._3iRXzi");
      if (buyNow) {
        document.body.appendChild(trackButton);
      }
      trackButton.onclick = () =>
        console.log("price", document.querySelector("._16Jk6d").innerHTML);
    },
    TRACKBUTTON: () => {
      const trackButton = document.createElement("button");
      trackButton.innerHTML = "Track Price Drop";
      trackButton.style.backgroundColor = "#B3FFAE";
      trackButton.style.width = "200px";
      trackButton.style.height = "50px";
      trackButton.style.fontSize = "medium";
      trackButton.style.borderRadius = "25px";
      trackButton.style.margin = "0 0 8px 0";
      trackButton.style.border = "0";
      trackButton.style.position = "fixed";
      trackButton.style.bottom = "20px";
      trackButton.style.right = "170px";
      return trackButton;
    },
  };

  // only work on flipkart and amazon stores
  const host = window.location.host;

  host == "www.amazon.in"
    ? MAIN.AMAZON()
    : host == "www.flipkart.com"
    ? MAIN.FLIPKART()
    : null;
})();
