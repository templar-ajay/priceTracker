const overTop = document.querySelector(".over-top");

function popup() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];

    (async () => {
      chrome.tabs.sendMessage(
        activeTab.id,
        {
          message: "start",
        },
        async (response) => {
          await response?.send.forEach((element, i) => {
            html = ` <div id='info-${i}' class="info flex">
            <img src="${element.otherInfo.imageLink}" alt="img-1">
            <div class="title-desc">
                <h2>${element.otherInfo.title}</h2>
                <h3>₹${element.otherInfo.finalPrice}</h3>
                <div class="buttons flex hidden">
                  <a class="button-57" href="#" role="button"><span class="text">Delete</span><span>Confirm</span></a>
                  <a class="button-87" href="${element.url}" role="button">Buy Now</a>
                </div>
            </div>
        </div>`;
            overTop.insertAdjacentHTML("beforeend", html);
          });

          const infoo = document.querySelectorAll(".info"); // from here buttons toggle class start which hides and show the button in view
          infoo.forEach((val, i) => {
            val.addEventListener("click", () => {
              val.querySelector(".buttons").classList.toggle("hidden");
              console.log("info event listner");
            });
          }); //here button toggle calss ends

          const btn87 = document.querySelectorAll(".button-87"); // From here buy now button code starts
          btn87.forEach((element) => {
            element.addEventListener("click", (e) => {
              console.log("button clicked buy now", e.target.href);
              chrome.tabs.sendMessage(activeTab.id, {
                openPage: e.target.href,
              });
            });
          }); //here Buy now button code ends
        }
      );
    })(); //here the async function for sending message code ends
  });
}
popup();
