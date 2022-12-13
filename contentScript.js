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


function flipkart(){
    const buyNowBtn=document.querySelector('.ihZ75k')
    
    if(!buyNowBtn) return
    const appendTheir=document.querySelector('._2p6lqe');
    appendTheir.innerHTML=''
    appendTheir.appendChild(createButton())

    
   const btns= document.querySelector('div._3I9_wc._2p6lqe')
   btns.addEventListener('click',()=>{
    console.log('hi')
   })
}
flipkart()

function amazon(){
    // to check if this button exist then run this below code or return here
 const buyNowBtn=document.querySelector('#buy-now-button');
    if(!buyNowBtn) return
   const appendTheir=document.querySelector('div.a-section.a-spacing-small.aok-align-center')
   appendTheir.innerHTML=''
    appendTheir.appendChild(createButton())
    createButton().addEventListener("click",(e)=>{

        })
}
// amazon()

const btn=document.querySelector('div._30jeq3._16Jk6d')
btn.addEventListener('click',()=>{
    console.log('hi')
})


})();