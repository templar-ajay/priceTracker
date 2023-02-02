let on = true;
var arr = [];
let obj = {url: "",finalprice: "",site: "",otherInfo: "",};

chrome.storage.local.get("produtInfo").then((obj) => {
  obj.produtInfo ? (arr = obj.produtInfo) : [];
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.location.host === "www.flipkart.com" ? shopping(  "flipkart",  ".ihZ75k",  "._25b18c",  "._25b18c ._2KpZ6l",  "div._2c7YLP.UtUXW0._6t1WkM._3HqJxg"): window.location.host === "www.amazon.in" ? shopping(  "amazon",  "#buy-now-button",  "div.a-section.a-spacing-small.aok-align-center",  "button._2KpZ6l",  "#dp") : "";
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
function shopping(name, bnb, pTag, buttons, bdy) {
  const buyNowBtn = document.querySelector(bnb);

  if (!buyNowBtn) return;

  switch (name) {
    case "amazon": {
      const appendTheir = document.querySelector(pTag);
      appendTheir.innerHTML = "";
      appendTheir.appendChild(createButton());
      break;
    }
    case "flipkart": {
      const priceTag = document.querySelector(pTag);
      priceTag.appendChild(createButton());
      break;
    }
  }
  const btns = document.querySelector(buttons);
  //add event listner is working
  btns.addEventListener("click", () => {
    if (on !== true) return;
    on = false;
      const body = document.querySelector(bdy);
      body.style.position = "relative";
      body.insertAdjacentHTML("afterbegin",parseExtension(name == "flipkart" ? getProductInfo(  "div._3kidJX img",  "div:nth-child(1) > h1 > span",  "div._30jeq3._16Jk6d"): name == "amazon" ? getProductInfo( "#landingImage", "#productTitle", "span.a-price-whole") : ""));
    // console.log(name == "flipkart"? getProductInfo(  "div._3kidJX img",  "div:nth-child(1) > h1 > span",  "div._30jeq3._16Jk6d"): name == "amazon"? getProductInfo(  "#landingImage",  "#productTitle",  "span.a-price-whole"): "")
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
          obj["site"] = name;
          obj["otherInfo"] = name == "flipkart"? getProductInfo(  "div._3kidJX img",  "div:nth-child(1) > h1 > span",  "div._30jeq3._16Jk6d"): name == "amazon"? getProductInfo(  "#landingImage",  "#productTitle",  "span.a-price-whole"): "";
          arr.push(obj);
          // console.log(arr)
          chrome.storage.local.set({ produtInfo: arr });
          closeButton();
          
    });
    document.querySelector('#submit').addEventListener("keypress",(e)=>{
      console.log(e.target.key)
      
    })

    document.querySelector("#close").addEventListener("click", (e) => {
      closeButton();
    });
  });
}
//close button logic//
function closeButton() {
  document.querySelector(".extesnion").remove();
  on = true;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getProductInfo(imglink, headTitle, fPrice) {
  const obj = {  imageLink: "",  title: "",  finalPrice: "",};
  const title = document.querySelector(headTitle).innerText.substring(0,20).replace(/[()-.,]/g,'')
      obj.title=title;
      obj.imageLink = document.querySelector(imglink).src;
      obj.finalPrice = document.querySelector(fPrice).innerText.replace(/[₹.,]/g, "");
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
