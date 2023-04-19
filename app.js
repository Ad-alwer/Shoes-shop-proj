const shoes = [
  {
    id: 1,
    brand: "nike",
    name: "Nike Tempo",
    title2:"Men's Road Running Shoes",

    descrip: `While these speedsters could easily pass the test on race <br> day, they double as your go-to shoe for your training 
        <br> routine. The supportive fit and soft cushioning work together <br>to make them comfortable enough to withstand  <br>  those double-digit mileage days, and light enough to
        <br> help quicken your tempo when the time is right.`,
    img1: `http://imgstack.net/images/kjtAR.png`,
    img2: "http://imgstack.net/images/Cvthm.png",
    img3: "https://imgstack.net/images/wkADW.png",
    price: "$200",
  },

  {
    id: 2,
    brand: "nike",
    name: " Air Zoom G.T",
    title2:"Basketball Shoes",
    descrip: `The Nike Air Zoom G.T. Cut 2 helps you stop on <br> 
         a dime and accelerate back into the open lane in a <br> 
          low-to-the-ground design that helps increase court <br> contact while switching direction. Separate the  <br> 
           players from the playmakers in a model that’s built  <br> 
            on creating separation but supportive enough to help  <br>  you play all day.`,
    img1: `http://imgstack.net/images/7ZKPK.png`,
    img2: "http://imgstack.net/images/FPshD.png",
    img3: "http://imgstack.net/images/3329j.png",
    price: "$170",
  },
  {
    id: 3,
    brand: "addidas",
    name: " ADIOS PRO ",
    title2:" Running Shoes",
    descrip: `The Adizero Adios Pro 3 is the pinnacle of Adizero Racing   <br> products. It was built with and for athletes to achieve   <br> unbelievable feats. These adidas running shoes are made  <br>  to optimize running efficiency. Our carbon-infused   <br> ENERGYRODS provide lightweight stiffness for a snappy   <br> , efficient stride.  `,
    img1: `http://imgstack.net/images/3nhV4.png`,
    img2: "http://imgstack.net/images/vfKYX.png",
    img3: "http://imgstack.net/images/R9H4T.png",
    price: "$250",
  },
  {
    id: 4,
    brand: "addidas",
    name: " SOLARCONTROL",
    title2:" Running Shoes",
    descrip: `From training runs to race day, go the distance with   <br> confidence. These running shoes provide extra stability 
         <br>  with adidas LEP 2.0, designed to help guide each foot   <br> strike and propel you forward.`,
    img1: `http://imgstack.net/images/ffVY7.png`,
    img2: "http://imgstack.net/images/rTQsZ.png",
    img3: "http://imgstack.net/images/AXqrL.png",
    price: "$250",
  },
];
const $=document
const brandElem=$.querySelector("#brandicn")
const disElem=$.querySelector("#dis")
const btnElem=$.querySelector("#pricebtn")
const imgElem=$.querySelector("#mainimg")
const titleElem=$.querySelector("#title")
const title2Elem=$.querySelector("#title2")
const slide1Elem=$.querySelector('#slide1')
const slide2Elem=$.querySelector('#slide2')
const slide3Elem=$.querySelector('#slide3')
let idshoes=1;
const prevElem=$.querySelector("#prev")
const nextElem=$.querySelector("#next")
const iconElem=$.querySelector('#navicn')
const bodyElem=$.body

const toggleElem=$.querySelector('.navbar-toggler')


















function load(id) {
let shoesshow= shoes.find(function(shoes){
return shoes.id==id
 })

 if(shoesshow.brand=="nike"){
    brandElem.src="http://imgstack.net/images/xJyW3.png"
 }else if(shoesshow.brand=="addidas"){
    brandElem.src="http://imgstack.net/images/WJRqn.png"
 }
 disElem.innerHTML=shoesshow.descrip
 btnElem.innerHTML=shoesshow.price
 imgElem.src=shoesshow.img1
 titleElem.innerHTML=shoesshow.name
 title2Elem.innerHTML=shoesshow.title2
 slide2Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "white";
 slide1Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
 idshoes=id
 
 
}
function slide(page){
  
  let findimg= shoes.find(function(shoes){
    return shoes.id==idshoes
     })
     
     if(page==1){
      imgElem.src=findimg.img1
      
      slide2Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "white";
      slide1Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
     }else if(page==2){
      imgElem.src=findimg.img2
      slide1Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "white";
      slide2Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
     }else if(page==3){
      imgElem.src=findimg.img3
      
      slide2Elem.style.backgroundColor = "white";
      slide1Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
 
      
      
     }
    
}
function prev(){
  
  let findimg= shoes.find(function(shoes){
    return shoes.id==idshoes
     })
     if(imgElem.src==findimg.img2){
      imgElem.src=findimg.img1
      slide2Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "white";
      slide1Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
     }else if(imgElem.src==findimg.img3){
      imgElem.src=findimg.img2
      slide1Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "white";
      slide2Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
     }
    

}


function next(){
  
  let findimg= shoes.find(function(shoes){
    return shoes.id==idshoes
     })
     if(imgElem.src==findimg.img1){
      imgElem.src=findimg.img2
      slide1Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "white";
      slide2Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
     } else if(imgElem.src==findimg.img2){
      imgElem.src=findimg.img3
      slide1Elem.style.backgroundColor = "white";
      slide2Elem.style.backgroundColor = "white";
      slide3Elem.style.backgroundColor = "rgba(36, 35, 35, 0.898)";
     }

   
}
  
    


