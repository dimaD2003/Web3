const showInputFields = () =>{
    let inputSelect=document.getElementById("inputType").value
    let imageTr = document.querySelectorAll(".imgTriangle")
    let InputData = document.querySelectorAll(".inputFields")
 
    InputData.forEach(function(InputData) {
        InputData.classList.toggle("hidden");
    });
    imageTr.forEach(function(imageTr) {
        imageTr.classList.toggle("hidden");
    });
   selectedTriangleImage.classList.toggle("hidden");
}

// какой тип
function TypeImage() {
    let triangleImages = document.querySelectorAll('.imgTriangle');

    for (let i = 0; i < triangleImages.length; i++) {
        let triangleImage = triangleImages[i];
        if (!triangleImage.classList.contains('hidden')) {
            if (triangleImage.classList.contains('threeSides')) {
                return 'threeSides';
            } else if (triangleImage.classList.contains('sideCorner')) {
                return 'sideAngleSide';
            }
        }
    }        return ''; // Если не удается определить тип входных данных, возвращаем пустую строку
}
        
//        вычисления для 3сторон
        // function AreaBySides(side1, side2, side3) {
        //     let s = (side1 + side2 + side3) / 2;
        //     let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

        //     return area;
        // }
        // function CirclebySides(side1, side2, side3) {
        //     let area = AreaBySides(side1, side2, side3);
        //     let s = (side1 + side2 + side3) / 2;
        //     let radius = area / s;
        //     return radius;
        // }
        // function HeightBySides(side1, side2, side3) {
        //     let area = AreaBySides(side1, side2, side3);
        //     let height = 2 * area / side1;
        //     return height;
        // }
        // function BisectorBySides(side1, side2, side3) {
        //     let s = (side1 + side2 + side3) / 2;
        //     let bisector = 2 * Math.sqrt(side1 * side2 * s * (s - side3)) / (side1 + side2);
        //     return bisector;
        // }
            
        
// // для улгла
        // function AreaByAngle(angle1, angle2, side) {
        //     let radian1 = angle1 * Math.PI / 180;
        //     let radian2 = angle2 * Math.PI / 180;
        //     let sinC = Math.sin(Math.PI - radian1 - radian2);
        //     let area = 0.5 * side * side * sinC;
        //     return area;
        // }
        // function CirclebyAngle(angle1, angle2, side) {
        //     let area = AreaByAngle(angle1, angle2, side);
        //     let radian1 = angle1 * Math.PI / 180;
        //     let radian2 = angle2 * Math.PI / 180;
        //     let sinC = Math.sin(Math.PI - radian1 - radian2);
        //     let radius = side * sinC / (2 * area);
        //     return radius;
        // }
        // function HeightByAngle(angle1, angle2, side) {
        // let radian1 = angle1 * Math.PI / 180;
        // let sinA = Math.sin(radian1);
        // let height = side * sinA;
        // return height;
        // }
        // const BisectorByAngles = (side, angle1, angle2) => {
        //     let rad1 = angle1 * Math.PI / 180;
        //     let rad2 = angle2 * Math.PI / 180;
        
        //     let cosHalf1 = Math.cos(rad1 / 2);
        //     let cosHalf2 = Math.cos(rad2 / 2);
        
        //     let bis = (2 * side * cosHalf1 * cosHalf2) / (cosHalf1 + cosHalf2);
        
        //     return bis;
        // }
        // const displayResults = (...results) => {
        //      let resultCont = document.querySelector('.results');
        //      resultCont.innerHTML=''
        //      results.forEach(item =>{
        //         if (item !== undefined) {
        //         resultCont.insertAdjacentHTML('beforeend', `<div class=""> ${item}</div>`);
        //  } })
            

             
//             // for (let key in results) {
//             //     let result = results[key];
        
//             //     // Создаем HTML-разметку для каждого результата
//             //     let resultHTML = `<div>${key}: ${result}</div>`;
        
//                 // Добавляем разметку в конец контейнера
    
//             // }
//         }
//         const removeRedClass = (inputId) => {
//             document.getElementById(inputId).classList.remove('Red');
//         }
        
//         const addRedClass = (inputId) => {
//             document.getElementById(inputId).classList.add('Red');
//         }
        
//         const inputType = TypeImage();
        
//         const setInputListeners = () => {
//             if (inputType === 'sideAngleSide') {
//                 // Для стороны и углов
//                 setInputListener('side', 'side');
//                 setInputListener('angle1', 'angle1');
//                 setInputListener('angle2', 'angle2');
//             } else if (inputType === 'threeSides') {
//                 // Для трех сторон
//                 setInputListener('side1', 'side1');
//                 setInputListener('side2', 'side2');
//                 setInputListener('side3', 'side3');
//             }
//         }
        
//         const setInputListener = (inputId, fieldName) => {
//             const input = document.getElementById(inputId);
//             input.addEventListener('input', () => {
//                 if (input.value.trim() !== '') {
//                     removeRedClass(fieldName);
//                 }
//             });
//         }
        
     
        
        
        

// const calculate = ( ) =>{
  


// //1/0  true/falcse
//     let calculateArea = document.getElementById('area').checked;
//     let calculateCircle = document.getElementById('inRadius').checked;
//     let calculateHeights = document.getElementById('height').checked;
//     let calculateBisectors = document.getElementById('bisector').checked;
//     if(!calculateArea && !calculateCircle && !calculateHeights && !calculateBisectors){
//         document.getElementsByTagName('fieldset')[0].classList.add("error");
//         return false
//     }else{
//         document.getElementsByTagName('fieldset')[0].classList.remove("error");
//     }
//    // what type inp
//     let inputType = TypeImage();

//     //result
//   let   ResArea
//   let   ResCircle
//   let   ResHeigh
//   let   ResBisec

//     let side1
//     let side2
//     let side3

//     let angle1
//     let angle2
//     let side
    
    

  

//     if (inputType === 'sideAngleSide') {
//          angle1 = parseFloat(document.getElementById('angle1').value);
//          angle2 = parseFloat(document.getElementById('angle2').value);
//          side = parseFloat(document.getElementById('side').value);
//          if ((angle1) <= 0 || isNaN(angle1)) {
//             document.getElementById('angle1').classList.add("error");
//             return false;
//             }
//             console.log(  document.getElementById('angle1'));
            
//                 // Если угол 1 введен корректно, убираем класс "error" при получении фокуса на поле ввода угла 1
                 
                
                
            


           


//         }else if(inputType === 'threeSides'){
//              side1 = parseFloat(document.getElementById('side1').value);
//              side2 = parseFloat(document.getElementById('side2').value);
//              side3 = parseFloat(document.getElementById('side3').value);
//         }
//         if(side1<side2+side3 || side2<side1+side3 || side3<side1+side2){
           
//             let resultCont = document.querySelector('.results');
//             resultCont.innerHTML=''
//             resultCont.insertAdjacentHTML('beforeend', `<div class=""> wrong</div>`);
//         }

//         if(calculateArea && !isNaN(angle1) && !isNaN(angle2)&& !isNaN(side)){
          
//              ResArea = AreaByAngle(angle1, angle2, side)   
//         }else if(calculateArea && !isNaN(side1) && !isNaN(side1)&& !isNaN(side1)){
//                ResArea = AreaBySides(side1, side2, side3)
               
              
//       }



//         if(calculateCircle && !isNaN(angle1) && !isNaN(angle2)&& !isNaN(side)){
//             ResCircle=CirclebyAngle(angle1, angle2, side)
//         }else if(calculateCircle && !isNaN(side1) && !isNaN(side1)&& !isNaN(side1)){
//             ResCircle= CirclebySides(side1, side2, side3)
//         }


//         if(calculateHeights && !isNaN(angle1) && !isNaN(angle2)&& !isNaN(side)){
//             ResHeigh =  HeightByAngle(angle1, angle2, side) 
//         }else if(calculateHeights && !isNaN(side1) && !isNaN(side1)&& !isNaN(side1)){
//            ResHeigh = HeightBySides(side1, side2, side3)
//         }

//         if(calculateBisectors && !isNaN(angle1) && !isNaN(angle2)&& !isNaN(side)){
//             ResBisec= BisectorByAngles  (side, angle1, angle2)
//         }else if(calculateBisectors && !isNaN(side1) && !isNaN(side1)&& !isNaN(side1)){
//             ResBisec= BisectorBySides(side1, side2, side3)
//         }

        
// displayResults(ResArea,ResCircle,ResHeigh,ResBisec);

// }
      

const clearFields = () => {
    // Очистка полей ввода для стороны и углов
    document.getElementById('side').value = '';
    document.getElementById('angle1').value = '';
    document.getElementById('angle2').value = '';

    // Очистка полей ввода для трех сторон
    document.getElementById('side1').value = '';
    document.getElementById('side2').value = '';
    document.getElementById('side3').value = '';
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    document.getElementById("area").checked = false;
    document.getElementById("inRadius").checked = false;
    document.getElementById("height").checked = false;
    document.getElementById("bisector").checked = false;
}

const displayResults = (...results) => {
    let resultCont = document.getElementById('results');
    resultCont.innerHTML=''
    results.forEach(item =>{
       if (item !== undefined) {
       resultCont.insertAdjacentHTML('beforeend', `<div class=""> ${item}</div>`);
} }) }




function calculate() {
    let area
    let radius
    let h
    let bisector
    /* читаем входные данные */
    side1 = parseFloat(document.getElementById('side1').value);
    side2 = parseFloat(document.getElementById('side2').value);
    side3 = parseFloat(document.getElementById('side3').value);

    
    let inputType = TypeImage();

    if(inputType === 'threeSides') {
        console.log(inputType);
        

    

    if ((side1) <= 0 || isNaN(side1)) {
        console.log('fefefefef');
        
        document.getElementById('side1').classList.add("error");
        return false;
    }else if((side2) <= 0 || isNaN(side2)){
        document.getElementById('side2').classList.add("error");
        return false;

    }else if((side3) <= 0 || isNaN(side3)){
        document.getElementById('side3').classList.add("error");
        return false;

    }else{
    
// ПРАВИЛО ТТРЕУГОЛЬНИКА
        if(side1>side2+side3 || side2>side1+side3 || side3>side1+side2){
            let resultCont = document.getElementById('results');
            resultCont.innerHTML='';
            resultCont.insertAdjacentHTML('beforeend', `<div class=""> Нарушено неравенство треугольника</div>`);
            return false
         }

    let calculateArea = document.getElementById('area').checked;
    let calculateCircle = document.getElementById('inRadius').checked;
    let calculateHeights = document.getElementById('height').checked;
    let calculateBisectors = document.getElementById('bisector').checked;
    if(!calculateArea && !calculateCircle && !calculateHeights && !calculateBisectors){
     document.getElementsByTagName('fieldset')[0].classList.add("error");
     return false}

    /* находим на странице элемент для вывода данных */
    let output = document.getElementById('results');
    /* заносим в него абзац с подписью */
    output.innerHTML = "<p>Результат:</p>";
    

   

                            //3 SIDES
    if (calculateArea) {
        let s = (side1 + side2 + side3) / 2;
      area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

        }

    if (calculateCircle) { 
        let s = (side1 + side2 + side3) / 2;
         radius = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))/s;


        }

    if (calculateHeights) { 
        let s = (side1 + side2 + side3) / 2;
         h= ( 2*Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)) ) / side1;
  
    
            }
            

    if (calculateBisectors) { 
        let s = (side1 + side2 + side3) / 2;
         bisector = 2 * Math.sqrt(side1 * side2 * s * (s - side3)) / (side1 + side2);
                       
             }
                    
                    
displayResults(area,radius,h, bisector)
 
   }
}else if(inputType === 'sideAngleSide'){
    console.log(inputType);

    angle1 = parseFloat(document.getElementById('angle1').value);
    angle2 = parseFloat(document.getElementById('angle2').value);
    side = parseFloat(document.getElementById('side').value);   

    if(angle1 > 180 || angle2>180){
        let resultCont = document.getElementById('results');
        resultCont.innerHTML='';
        resultCont.insertAdjacentHTML('beforeend', `<div class=""> Неверные углы</div>`);
        return false
     }



   if ((angle1) <= 0 || isNaN(angle1)) {
    console.log('fefefefef');
    
    document.getElementById('angle1').classList.add("error");
    return false;
}else if((angle2) <= 0 || isNaN(angle2)){
    document.getElementById('angle2').classList.add("error");
    return false;

}else if((side) <= 0 || isNaN(side)){
    document.getElementById('side').classList.add("error");
    return false;

}else{
    let calculateArea = document.getElementById('area').checked;
    let calculateCircle = document.getElementById('inRadius').checked;
    let calculateHeights = document.getElementById('height').checked;
    let calculateBisectors = document.getElementById('bisector').checked;
   
    if(!calculateArea && !calculateCircle && !calculateHeights && !calculateBisectors){
     document.getElementsByTagName('fieldset')[0].classList.add("error");
     return false}

     let output = document.getElementById('results');
     /* заносим в него абзац с подписью */
     output.innerHTML = "<p>Результат:</p>";


     if (calculateArea) {
        let s =  Math.sin(Math.PI -(angle1 * Math.PI / 180)-(angle2 * Math.PI / 180) )
        area = 0.5 * side * side *s;
        

        }
    if (calculateCircle) { 
        let s = Math.sin(Math.PI -(angle1 * Math.PI / 180)-(angle2 * Math.PI / 180) )
        radius =  0.5 * side  * s;
    
    
        }

    if (calculateHeights) { 
        let s = Math.sin (angle1 * Math.PI / 180);
         h= side *s;
      
        
    }  
    
    if (calculateBisectors) { 
        let rad1 = angle1 * Math.PI / 180;
        let rad2 = angle2 * Math.PI / 180;
        let cosHalf1 = Math.cos(rad1 / 2);
        let cosHalf2 = Math.cos(rad2 / 2);
        bisector = (2 * side * cosHalf1 * cosHalf2) / (cosHalf1 + cosHalf2);
                       
    }

    displayResults(area,radius,h, bisector)

}
}





}
   let input1 = document.getElementById('side1');
/* обрабатываем событие получение фокуса */
input1.onfocus = function() {
 this.classList.remove('error') }

 let input2 = document.getElementById('side2');
/* обрабатываем событие получение фокуса */
input2.onfocus = function() {
 this.classList.remove('error') }

 let input3 = document.getElementById('side3');
/* обрабатываем событие получение фокуса */
input3.onfocus = function() {
 this.classList.remove('error') }
//===============================================
//==============================================
 let input11 = document.getElementById('angle1');
 /* обрабатываем событие получение фокуса */
 input11.onfocus = function() {
  this.classList.remove('error') }
 
  let input21 = document.getElementById('angle2');
 /* обрабатываем событие получение фокуса */
 input21.onfocus = function() {
  this.classList.remove('error') }
 
  let input31 = document.getElementById('side');
 /* обрабатываем событие получение фокуса */
 input31.onfocus = function() {
  this.classList.remove('error') }
  //============================================
//============================================
 let checkbox1= document.getElementById('area');
 checkbox1.onfocus= function() {
    document.getElementsByTagName('fieldset')[0].classList.remove("error"); }
    
    let checkbox2= document.getElementById('inRadius');
    checkbox2.onfocus= function() {
       document.getElementsByTagName('fieldset')[0].classList.remove("error"); }
       
       let checkbox3= document.getElementById('height');
       checkbox3.onfocus= function() {
          document.getElementsByTagName('fieldset')[0].classList.remove("error"); }

          let checkbox4= document.getElementById('bisector');
          checkbox4.onfocus= function() {
             document.getElementsByTagName('fieldset')[0].classList.remove("error"); }