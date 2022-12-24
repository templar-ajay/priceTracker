let on=true;
let arr=[];
let obj={
     url:'',
     finalPrice:'',
     site:'',
};

chrome.storage.local.get('produtInfo').then((obj)=>{
    obj.produtInfo?arr=obj.produtInfo :[];
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.location.host ==='www.flipkart.com' ? flipkart():window.location.host==='www.amazon.in' ?amazon():''
function createButton(){
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




async function fetchData(){
    // getArr.forEach((val)=>{
    const response=   await fetch('https://bear-flannel-shirt.cyclic.app/info',{
            method:'post',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({
                url:'https://www.amazon.in/AmazonBasics-Extended-Gaming-Mouse-Black/dp/B06X19FLTC/?_encoding=UTF8&pd_rd_w=qxdnV&content-id=amzn1.sym.1f592895-6b7a-4b03-9d72-1a40ea8fbeca&pf_rd_p=1f592895-6b7a-4b03-9d72-1a40ea8fbeca&pf_rd_r=H3MV0SPYCFCF736A3M27&pd_rd_wg=8BMmD&pd_rd_r=ba3c73b1-e4e7-4478-8538-26d1fa3dc083&ref_=pd_gw_ci_mcx_mr_hp_atf_m',
                finalprice:'499',
                site:'amazon'
                })
        })

    const res=await response.json()
    console.log(res);
    // })
}

setTimeout(()=>{fetchData()},10000)





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

      if(on!==true)return;
      on=false;
      const body=document.querySelector('div._2c7YLP.UtUXW0._6t1WkM._3HqJxg')
      body.style.position='relative';
      body.insertAdjacentHTML('afterbegin',parseExtension(getProductInfo()))

    //Event listener on submit button to do some validation and send data to database 
            document.querySelector('#submit').addEventListener('click',(e)=>{
                
                e.preventDefault()
                const inputValue=document.querySelector('.client-input')
                //little validation for input tag
                    if(inputValue.value ==='')return inputValue.classList.add('invalid')
                    if(inputValue.value !==''){inputValue.classList.remove('invalid');inputValue.classList.add('correct')}

                    // set values to extension storage
                    obj['url']=window.location.href;
                    obj['finalPrice']=inputValue.value;
                    obj['site']='flipkart';
                arr.push(obj);
                // console.log(arr)
                    chrome.storage.local.set({produtInfo:arr})
                   
            })

      //close button logic 
            document.querySelector('#close').addEventListener('click',(e)=>{
                document.querySelector('.extesnion').remove()
                on=true
            })
   })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

    if(on!==true)return;
        on=false;
        const body=document.querySelector('#dp');
            body.style.position='relative';
            body.insertAdjacentHTML('afterbegin',parseExtension(getProductInfoAmazon()))

   
            document.querySelector('#submit').addEventListener('click',(e)=>{
                    console.log('its working')
                const inputValue=document.querySelector('.client-input')
                    if(inputValue.value ==='')return inputValue.classList.add('invalid')
                    if(inputValue.value !==''){inputValue.classList.remove('invalid');inputValue.classList.add('correct')}

                // set values to extension storage
                obj['url']=window.location.href;
                obj['finalPrice']=inputValue.value;
                obj['site']='amazon';
            arr.push(obj);
            // console.log(arr)
                chrome.storage.local.set({produtInfo:arr})

            })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//close button logic
        document.querySelector('#close').addEventListener('click',(e)=>{
            document.querySelector('.extesnion').remove()
                on=true
        })

    })
}
////





function getProductInfo(){
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







 function getProductInfoAmazon(){
    const obj={
        imageLink:'',
        title:'',
        finalPrice:''
    }
    obj.imageLink=document.querySelector('#landingImage').src
    const title=document.querySelector('#productTitle').innerText.split(' ')
    obj.title=`${title[0]} ${title[1]} ${title[2]}`
    obj.finalPrice=document.querySelector('span.a-price-whole').innerText.replace(/[₹,.]/g, '')
return obj
}

function parseExtension(val){

    return  ` 
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
            <label class="input-label" for="track-price">Enter Price below which you want message</label>
            <input id="track-price" name="track-price" class="client-input" type="number" placeholder="Enter Price">
            <div class="close-submit">
                <a id="submit" class="submit" href="#">SUBMIT</a>
                <a id="close"  class="submit" href="#">CLOSE</a>
            </div>
        </div>
    
    </div>
    </div>
    `
    }
    