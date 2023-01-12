let on = true;
var arr = [];
let obj = {
  url: "",
  finalprice: "",
  site: "",
  otherInfo: "",
};

chrome.storage.local.get("produtInfo").then((obj) => {
  obj.produtInfo ? (arr = obj.produtInfo) : [];
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.location.host === "www.flipkart.com"
  ? flipkart()
  : window.location.host === "www.amazon.in"
  ? amazon()
  : "";
function createButton() {
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
  TrackBtn.classList.add("_2KpZ6l");
  TrackBtn.innerHTML = "Track Price";

  return TrackBtn;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! flipkart
function flipkart() {
  const buyNowBtn = document.querySelector(".ihZ75k");

  if (!buyNowBtn) return;

  const priceTag = document.querySelector("._30jeq3");

  priceTag.insertAdjacentElement("afterend", createButton());

  const btns = document.querySelector("._25b18c ._2KpZ6l");
  //add event listner is working
  btns.addEventListener("click", () => {
    if (on !== true) return;
    on = false;
    const body = document.querySelector("div._2c7YLP.UtUXW0._6t1WkM._3HqJxg");
    body.style.position = "relative";
    body.insertAdjacentHTML("afterbegin", parseExtension(getProductInfo()));

    //Event listener on submit button to do some validation and send data to database
    document.querySelector("#submit").addEventListener("click", (e) => {
      e.preventDefault();
      const inputValue = document.querySelector(".client-input");
      //little validation for input tag
      if (inputValue.value === "" || inputValue.value === undefined)
        return inputValue.classList.add("invalid");
      if (inputValue.value !== "") {
        inputValue.classList.remove("invalid");
        inputValue.classList.add("correct");
      }
      // set values to extension storage
      obj["url"] = window.location.href;
      obj["finalprice"] = inputValue.value;
      obj["site"] = "flipkart";
      obj["otherInfo"] = getProductInfo();
      arr.push(obj);
      // console.log(arr)
      chrome.storage.local.set({ produtInfo: arr });
      document.querySelector(".extesnion").remove();
      on = true;
    });

    //close button logic
    document.querySelector("#close").addEventListener("click", (e) => {
      document.querySelector(".extesnion").remove();
      on = true;
    });
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function amazon() {
  // to check if this button exist then run this below code or return here
  const buyNowBtn = document.querySelector("#buy-now-button");

  if (!buyNowBtn) return;

  const appendTheir = document.querySelector(
    "div.a-section.a-spacing-small.aok-align-center"
  );
  appendTheir.innerHTML = "";
  appendTheir.appendChild(createButton());

  const btns = document.querySelector("button._2KpZ6l");
  btns.addEventListener("click", (e) => {
    if (on !== true) return;
    on = false;
    const body = document.querySelector("#dp");
    body.style.position = "relative";
    body.insertAdjacentHTML(
      "afterbegin",
      parseExtension(getProductInfoAmazon())
    );
    document.querySelector("#submit").addEventListener("click", (e) => {
      const inputValue = document.querySelector(".client-input");
      if (inputValue.value === "") return inputValue.classList.add("invalid");
      if (inputValue.value !== "") {
        inputValue.classList.remove("invalid");
        inputValue.classList.add("correct");
      }

      // set values to extension storage
      obj["url"] = window.location.href;
      obj["finalprice"] = inputValue.value;
      obj["site"] = "amazon";
      obj["otherInfo"] = getProductInfoAmazon();

      arr.push(obj);
      // console.log(arr)
      chrome.storage.local.set({ produtInfo: arr });
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //close button logic
    document.querySelector("#close").addEventListener("click", (e) => {
      document.querySelector(".extesnion").remove();
      on = true;
    });
  });
}
////

function getProductInfo() {
  const obj = {
    imageLink: "",
    title: "",
    finalPrice: "",
  };
  obj.imageLink = document.querySelector("div._3kidJX img").src;
  const title = document
    .querySelector("div:nth-child(1) > h1 > span")
    .innerText.split(" ");

  obj.title = `${title[0]} ${title[1] !== undefined ? title[1] : ""} ${
    title[2] !== undefined ? title[2] : ""
  }`;
  obj.finalPrice = document
    .querySelector("div._30jeq3._16Jk6d")
    .innerText.replace(/[₹]/g, "");
  return obj;
}

function getProductInfoAmazon() {
  const obj = {
    imageLink: "",
    title: "",
    finalPrice: "",
  };
  obj.imageLink = document.querySelector("#landingImage").src;
  const title = document.querySelector("#productTitle").innerText.split(" ");
  obj.title = `${title[0]} ${title[1]} ${title[2]}`;
  obj.finalPrice = document
    .querySelector("span.a-price-whole")
    .innerText.replace(/[₹,.]/g, "");
  return obj;
}

function parseExtension(val) {
  return ` 
    <div class='extesnion'>

            <h1 class="h1-center h1-title">Price Tracker</h1>
    
    <div class="main">
        <div class="scrape flex">
            <img class="product-img" src="${val.imageLink}"
                alt="">
            <div class="main-title-price flex">
                <h2 class="price-title">${val.title}</h2>
                <div class="special-price flex">
                    <h2 class="price-title">₹${val.finalPrice}</h2>
                </div>
            </div>
        </div>
    
        <!-- client input -->
        <div class="client-info flex">
            <label class="input-label " for="track-price">Notify me when price drops below</label>
            <input id="track-price" name="track-price" class="client-input" type="number" placeholder="Your Price">
            <div class="close-submit">
                <a id="submit" class="submit" href="#">SUBMIT</a>
                <a id="close"  class="submit" href="#">CLOSE</a>
            </div>
        </div>
    
    </div>
    </div>
    `;
}
