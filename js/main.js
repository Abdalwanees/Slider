// // DOM EVENTS 

// // mouse event 
// /**
//  * click ----> (mousedown  ,  mouseup)
//  * mousedown
//  * mouseup
//  * mousemove
//  * mouseenter
//  * mouseleave
//  * contextmenu
//  * 
//  * keyboared
//  * keydown
//  * keyup
//  * keypress
//  * 
//  * forms
//  * input
//  * focus
//  * blur
//  * submit
//  */

// // DOM 
// /*
//    1-element
//    2-event
//    3-action
// */




// // ES5(2009)  - ES6


// // querySelector #ES5
// // querySelectorAll  #ES5
// // getElementByName  ES5


// // strict mode  ----->  Sloppy Mode ;


// // ES6 
// /*
// * let , const 
// *  var(global -  function local  (function scope) );
// *  var , let ,const  ( let - const ----> local  - global (block scope))
// *  scope 

// *  hoisting (var , let , const)

// *  re dec(var) -  re assign (var , let ) ---> not (const)
// */


// // console.log(hamada)
// // const hamada =10; // TDZ


// // default paramters 

// // template literal ` ${}`

// // Ts 




// // ES6   (destructing)
// // let user = {
// //    name:'ahmed',
// //    age:30,
// //    salary:3000,
// //    wife:{
// //       name:'aya',
// //       age:20,
// //       son:{
// //          name:'ali'
// //       }
// //    }
// // }
// // let {name ,age , wife:{  } } = user;






// // console.log(wife)


// // let userName = user.name;
// // let userAge = user.age;
// // let userWife = user.wife;

// // console.log(userName )
// // console.log(userAge)
// // console.log(userWife)



// // keyword  This 
// // global object (window)

// // console.log( this );

// // global object (window);


// // function test(){
// //    console.log(this)//window
// // }

// // test()

// // 'use strict'
// // function test(){
// //    console.log(this)//undefined
// // }

// // test()
// // const myelement = document.getElementById('demo');


// // h2  object
// // myelement.addEventListener('click' ,function(){
// //          console.log(this)
// // })


// // function test(){
// //    console.log(this)
// // }



// let user = {
//    name:'ahmed',
//    age:30,
//    salary:3000,
//   wife:{
//    name:'aya',
//    hello:function(){
//       console.log(this)
//    }
//   }
// }
// // user.wife.hello();


// // this  ----> direct parent object 


const images =  Array.from(  document.querySelectorAll('.item img')  );

const lightContainer  = document.querySelector('.light-container');
const lightBox = document.querySelector('.light-box')

const closeItem  = document.getElementById('close');//icon 
const prevItem  = document.getElementById('prev');//icon 
const nextItem  = document.getElementById('next');//icon 
// 0       1     2     3    4 
//[img  , img , img , img , img , img];

let curentIndex = 0;

for( let i =0;  i < images.length ; i++ ){
         images[i].addEventListener('click'  , function(e){
                  //e.targer ===> click --->img 
                 curentIndex =  images.indexOf(  e.target  ) ;// index element 


               //e.target ---> element kolo  ---> src
                  //   let curentSrc =    e.target.getAttribute('src'); //src image
                     // this === e.target
                    let curentSrc =    this.getAttribute('src'); //src image

                   lightBox.style.backgroundImage  = `url( ${curentSrc} )`; //
                 

                     // lightBox.style.backgroundImage  = `url( ${curentSrc} )`; //

               lightContainer.classList.remove('d-none');//show light container
         })
}



closeItem.addEventListener('click' ,closeSlide )

function closeSlide(){
   lightContainer.classList.add('d-none');// d-none   hidd
}


nextItem.addEventListener('click' , nextSlide  )

function nextSlide(){
   curentIndex++;// next img ---> index   6

   if( curentIndex == images.length){// 0
      curentIndex = 0;
   }


     let curentSrc=   images[curentIndex].getAttribute('src');

     lightBox.style.backgroundImage  = `url( ${curentSrc} )`; //
}


prevItem.addEventListener('click'  , prevSlide )


function prevSlide(){
   curentIndex--;// next img ---> index  -1

   if( curentIndex < 0 ){
            curentIndex = images.length - 1
   }
   

     let curentSrc=   images[curentIndex].getAttribute('src');

     lightBox.style.backgroundImage  = `url( ${curentSrc} )`; //
}


document.addEventListener('keydown' , function(e){
         if(e.key  == 'ArrowRight'){
               nextSlide()
         }
         else if(e.key  == 'ArrowLeft') {
               prevSlide()
         }
         else if (e.key  == 'Escape'){
               closeSlide()
         }
})
