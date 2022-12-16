let on=true;

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
   //add event listner is working
btns.addEventListener('click',()=>{
      console.log( window.location.href);
    
      
   const body=document.querySelector('div._2c7YLP.UtUXW0._6t1WkM._3HqJxg')
      body.style.position='relative';
      body.insertAdjacentHTML('afterbegin',parseExtension(getProductInfo()))

   })
}



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


    window.location.host ==='www.flipkart.com' ? flipkart():window.location.host==='www.amazon.in' ?amazon():''


//// 



     

})();




function getProductInfo(val){
    const obj={
        imageLink:'',
        title:'',
        finalPrice:''
    }
     obj.imageLink=document.querySelector('div._3kidJX > div.CXW8mj._3nMexc > img').src;
    const title=document.querySelector('div:nth-child(1) > h1 > span').innerText.split(' ')
    obj.title=`${title[0]} ${title[1]} ${title[2]}`;
    obj.finalPrice=document.querySelector('div._30jeq3._16Jk6d').innerText.replace(/[₹]/g, '');
    return obj
}


























function parseExtension(val){

    return  ` 
    <div class='extesnion'>
    <h1 class="h1-center">Price Tracker</h1>
    
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
            <input class="client-input" type="number" placeholder="Enter Price">
            <a class="submit" href="#">SUBMIT</a>
        </div>
    
    </div>
    </div>
    `
    }
    