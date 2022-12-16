(()=>{
    const createButton=function(){
    const TrackBtn=document.createElement('button')
    TrackBtn.style.fontFamily='Roboto,Arial,sans-serif'
    TrackBtn.style.color='#ffffff'
    TrackBtn.style.background='#ff6161'
    TrackBtn.style.fontSize='16px'
    TrackBtn.style.textAlign='center'
    TrackBtn.style.borderRadius='2px'
    TrackBtn.style.paddingTop='5px'
    TrackBtn.style.paddingBottom='5px'
    TrackBtn.style.height='20%'
    TrackBtn.style.width='100%'
    TrackBtn.classList.add('_2KpZ6l')
    TrackBtn.innerHTML='Track Price'
    
    return TrackBtn
}

//! flipkart
function flipkart(){
    const buyNowBtn=document.querySelector('.ihZ75k')
    
    if(!buyNowBtn) return
    const appendTheir=document.querySelector('._2p6lqe');
    appendTheir.innerHTML=''
    appendTheir.appendChild(createButton());
    
   const btns= document.querySelector('div._3I9_wc._2p6lqe')
   btns.addEventListener('click',()=>{
      console.log( window.location.href);
      const html=` 
      <div class='extesnion'>
      <h1 class="h1-center">Price Tracker</h1>

      <div class="main">
          <div class="scrape flex">
              <img class="product-img" src="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/2/v/7/-original-imagh7nnb7ssj3xq.jpeg?q=70"
                  alt="">
              <div class="main-title-price flex">
                  <h2 class="price-title">APPLE Airpods Pro </h2>
                  <div class="special-price flex">
                      <h2 class="price-title">₹19,990</h2>
                  </div>
              </div>
          </div>
  
          <!-- client input -->
          <div class="client-info flex">
              <input class="client-input" type="number" placeholder="Enter Price">
              <a class="submit" href="#">SUBMIT</a>
          </div>
  
      </div>
      </div>
`
const body=document.querySelector('div._2c7YLP.UtUXW0._6t1WkM._3HqJxg')
body.style.position='relative'
      body.insertAdjacentHTML('beforebegin',html)
   })
}
// flipkart()

function amazon(){
    // to check if this button exist then run this below code or return here
 const buyNowBtn=document.querySelector('#buy-now-button');
    if(!buyNowBtn) return
   const appendTheir=document.querySelector('div.a-section.a-spacing-small.aok-align-center')
   appendTheir.innerHTML=''
    appendTheir.appendChild(createButton())
    const btns=document.querySelector('button._2KpZ6l')
    btns.addEventListener('click',(e)=>{
        console.log(window.location.href);
    })
}
// amazon()
    window.location.host ==='www.flipkart.com' ? flipkart():window.location.host==='www.amazon.in' ?amazon():''




})();