(() => {
  const MAIN = {
    selectors: {
      amazon: {
        buyNow: "#buy-now-button",
        buttonParent: "div.a-section.a-spacing-small.aok-align-center",
        buttons: "div._30jeq3._16Jk6d",
        createButton: "_2KpZ6l",
      },
      flipkart: {
        buyNow: ".ihZ75k",
        body: "body",
        createButton: "_2KpZ6l",
      },
    },
    INIT: (website) => {
      console.log("Welcome to price tracker for", website);

      document.body.appendChild(MAIN.createButton());
    },
    createButton: () => {
      const button = document.createElement("button");
      button.style.width = "7rem";
      button.style.height = "2rem";
      button.style.backgroundColor = "red";
      button.style.position = "fixed";
      button.style.bottom = "2rem";
      button.style.right = "3rem";
      button.style.fontSize = "medium";
      button.style.color = "white";
      button.style.fontWeight = "bold";
      button.innerText = "Track Price";
      button.className = "priceTracker";
      button.addEventListener("click", () => {});
      return button;
    },
  };
  if (window.location.host === "www.flipkart.com") MAIN.INIT("flipkart");
  if (window.location.host === "www.amazon.in") MAIN.INIT("amazon");
})();
