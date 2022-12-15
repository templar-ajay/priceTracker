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
        buttonParent: "._2p6lqe",
        buttons: "div._3I9_wc._2p6lqe",
        createButton: "_2KpZ6l",
      },
    },
    INIT: (website) => {
      const buyNowBtn = document.querySelector(MAIN.selectors[website].buyNow);

      if (!buyNowBtn) return;
      const appendTheir = document.querySelector(
        MAIN.selectors[website].buttonParent
      );
      appendTheir.innerHTML = "";
      appendTheir.appendChild(
        MAIN.createButton(MAIN.selectors[website].createButton)
      );

      const buttons = document.querySelector(MAIN.selectors[website].buttons);
      buttons.addEventListener("click", () => {
        console.log("hi");
      });
    },
    createButton: (clas) => {
      const TrackBtn = document.createElement("button");
      TrackBtn.style.fontFamily = "Roboto,Arial,sans-serif";
      TrackBtn.style.color = "#ffffff";
      TrackBtn.style.background = "#ff6161";
      TrackBtn.style.fontSize = "16px";
      TrackBtn.style.textAlign = "center";
      TrackBtn.style.borderRadius = "2px";
      TrackBtn.style.paddingTop = "5px";
      TrackBtn.style.paddingBottom = "5px";
      TrackBtn.style.height = "20%";
      TrackBtn.style.width = "100%";
      TrackBtn.classList.add(clas);
      TrackBtn.innerHTML = "Track Price";

      return TrackBtn;
    },
  };
  if (window.location.host === "www.flipkart.com") MAIN.INIT("flipkart");
  if (window.location.host === "www.amazon.in") MAIN.INIT("amazon");
})();
