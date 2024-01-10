
// 

/*js practice on local storage*/
//   sessionStorage.setItem('Gender', 'DANIEL Ndukwo')
//   sessionStorage.setItem('Name', 'DANIEL Ndukwo')
//   sessionStorage.setItem('Age', 12)
//   sessionStorage.setItem('data', JSON.stringify({base:1}))

//   console.log(sessionStorage.getItem('Name')); 



//    /*promises*/
// let name = false
//    const post = ()=>{
//     return new Promise((res, rej)=>{
// setTimeout(()=>{
// if(name){
//     console.log('is good');
// }else{
//     return  "is not good"
// }
    
// },5000)
// })

// }
   

// post()

// let p = new Promise((resolve, reject)=>{
    
//     let a =1+1
//     if(a==2){
//         resolve({
//             name:'not available',
//             msg:"no"
//         })

//     }else{
//         reject({
// msg:'removw',
// name :'dann'
//         })
//     }
// })

// p.then((value)=>console.log( value)).catch((msg)=>console.log(msg))


    
//     view.addEventListener('click', ()=>{
     


//       if(view.innerText === 'MORE'){
//         view.innerText ='CLOSE'
//       }else{
//     view.innerText = 'MORE'
//       }
//   content.forEach((value , index)=>{
//   value.classList.toggle('excess')

//  items=+2
    
    
//   })
  
      
//       }
     
//     )
  

// let view = document.querySelector('.viewAll')
// let image = document.getElementById('show1')

// let content = document.querySelectorAll('.slide-content')
// let items = 2


    const post =[
      {
      name :'Daniel woods', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },

    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },
  
    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },
    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },
    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },
    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },
    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    },
    {
      name :'Daniel Ndukwo', 
      img: './img/img (1).jpeg',
      text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus explicabo quae cumque itaque consequatur sit, ipsum sint fuga aspernatur quos ut deleniti qui? Suscipit reprehenderit consequatur voluptatibus dolor',
      btn : 'view more',
    }
    
    
    
    
    
    
  
  ]

 

  const cardContainer= document.getElementById('cardContainer');
  
  const LoadBtn = document.querySelector('.view');

  let visibleCount = 2;

  function generateaCardHtml(cardData){
   
    return`
    <div class="slide-container">

<div class="slide-content"  id="cardContainer"> 
    <div class="slide-img">
    <div class="slide-details">
    <img src="${cardData.img}">
        <h2 class="name">${cardData.name}</h2>
        <p class="description">${cardData.text}</p>
        <button class="more">${cardData.btn}</button>
     
    </div>
    </div>

    </div>
    </div>
`
  }

  

  function toggleCard(){
    const cards = cardContainer.querySelectorAll('.slide-content');
 
   
    cards.forEach((card, index)=>{
      card.classList.toggle('hidden', index >= visibleCount)
    });

  

  }

  //  post.slice(0, visibleCount).forEach((cardData)=>{
  //    cardContainer.innerHTML+= generateaCardHtml(cardData)
  // })
 let click =  document.querySelector('.view')
 
 click.addEventListener('click', ()=>{

     visibleCount+=2
     if(visibleCount>post.length){
      visibleCount= 2
    }
    else{
      cardContainer.innerHTML = ''
    } 

    post.slice(0, visibleCount).forEach((cardData)=>{
      cardContainer.innerHTML+=generateaCardHtml(cardData)
    })
  click.textContent=(visibleCount<post.length)?'LoadMore':'Load Less'
  
  })



    //  value.classList.remove('excess')
//         value.classList.add('on')
              
              
//         if (view.textContent === "Text 1") {
//             view.textContent = "Text 2";
//           } else if (view.textContent === "Text 2") {
//             view.textContent = "Text 1";
//           }else{
//             view.textContent === "Text 2"
//           }
 
      
//         }
//     items+=2
//     
// })