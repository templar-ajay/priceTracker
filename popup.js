const overTop = document.querySelector(".over-top");
let poupArr = [];
function popup() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];

    chrome.storage.local.get("produtInfo").then((obj) => {
      obj.produtInfo ? (poupArr = obj.produtInfo) : [];
      console.log(poupArr);
      obj?.produtInfo.forEach((element, i) => {
        html = ` <div id='${i}' class="info flex">
            <img src="${element.otherInfo.imageLink}" alt="img-1">
            <div class="title-desc">
                <h2>${element.otherInfo.title}</h2>
                <h3>₹${element.otherInfo.finalPrice}</h3>
                <div class="buttons flex hidden">
                  <a class="delete-btn" href="#" role="button"><span class="text">Delete</span><span>Confirm</span></a>
                  <a class="buy-now" href="${element.url}" role="button">Buy Now</a>
                </div>
            </div>
        </div>`;
        overTop.insertAdjacentHTML("beforeend", html);
      });

      const infoo = document.querySelectorAll(".info"); // from here buttons toggle class start which hides and show the button in view
      infoo.forEach((val, i) => {
        val.addEventListener("click", () => {
          val.querySelector(".buttons").classList.toggle("hidden");
        });
      }); //here button toggle calss ends

      const buyNow = document.querySelectorAll(".buy-now"); // From here buy now button code starts
      buyNow.forEach((element) => {
        element.addEventListener("click", (e) => {
          console.log("button clicked buy now", e.target.href);
          chrome.tabs.sendMessage(activeTab.id, {
            openPage: e.target.href,
          });
        });
      }); //here Buy now button code ends

      const deleteNow = document.querySelectorAll(".delete-btn");
      deleteNow.forEach((element, i) => {
        element.addEventListener("click", (e) => {
          element.closest(".info").remove();
          poupArr.splice(i, 1);
          chrome.storage.local.set({ produtInfo: poupArr });
        });
      });
    }); //here the chrome storage api code ends
  });
}
popup();
