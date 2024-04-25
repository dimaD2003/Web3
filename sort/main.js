  /// трнасп безоп числ тур
  
  countries =[
    {
    "Страна":'Албания',
    "Численность туристов":123000,
    "Безопасность": 15,
    "Транспорт": 8, 
    "Доступность цен" : 2.35,
    "Уровень сервиса" : 6.36,
},
    {
        "Страна":'Иран',
        "Численность туристов":113000,
        "Безопасность": 15,
        "Транспорт": 8, 
        "Доступность цен" : 2.34,
        "Уровень сервиса" : 6.36,
    },
    {
      "Страна":'Россия',
      "Численность туристов":200000,
      "Безопасность": 12,
      "Транспорт": 1, 
      "Доступность цен" : 2.33,
      "Уровень сервиса" : 6.36,
  },
  {
    "Страна":'Белоруссия',
    "Численность туристов":123000,
    "Безопасность": 17,
    "Транспорт": 8, 
    "Доступность цен" : 2.02,
    "Уровень сервиса" : 6.36,
},
{
  "Страна":'Турция',
  "Численность туристов":123000,
  "Безопасность": 17,
  "Транспорт": 3, 
  "Доступность цен" : 2.01,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Египет',
  "Численность туристов":100000,
  "Безопасность": 20,
  "Транспорт": 3, 
  "Доступность цен" : 2.35,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Ирак',
  "Численность туристов":123000,
  "Безопасность": 15,
  "Транспорт": 8, 
  "Доступность цен" : 2.35,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Нигерия',
  "Численность туристов":223000,
  "Безопасность": 5,
  "Транспорт": 7, 
  "Доступность цен" : 1.35,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Индия',
  "Численность туристов":103000,
  "Безопасность": 15,
  "Транспорт": 8, 
  "Доступность цен" : 2.35,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Корея',
  "Численность туристов":122000,
  "Безопасность": 5,
  "Транспорт": 6, 
  "Доступность цен" : 2.35,
  "Уровень сервиса" : 6.36,
},

    
    ]


    let correspond = {
        "Страна": "country",
        "Численность туристов": ["touristsFrom", "touristsTo"],
        "Безопасность":["safetyFrom", "safetyTo"],
        "Транспорт": ["drivetyFrom", "driveTo"],
        "Доступность цен":["PriceFrom", "PriceTo"],
        "Уровень сервиса": ["ServiceFrom", "ServiceTo"],
        
        
      };


let createTable = (data, idTable) => {
    let table = document.getElementById(idTable);
    var tr = document.createElement("tr");
  
    for (key in data[0]) {
      let th = document.createElement("th");
      th.innerHTML = key;
      tr.append(th);
    }
    table.append(tr);
  
    data.forEach((item) => {
      tr = document.createElement("tr");
  
      for (value in item) {
        let td = document.createElement("td");
        td.innerHTML = item[value];
        tr.append(td);
      }
  
      table.append(tr);
    });
  };





  document.addEventListener("DOMContentLoaded", function () {
    createTable(countries, "list");
    setSortSelects(countries[0], document.getElementById("sort"));
  
    let searchButton = document.getElementById("search");
    searchButton.addEventListener("click", function () {
      let dataForm = document.getElementById("filter");
      filterTable(countries, "list", dataForm);
      resetSort("list")
    });
    let clearfilter = document.getElementById("clearfilter");
    clearfilter.addEventListener("click", function (){
      clearFilter()
      resetSort("list")
    })
  
  
    let SortButton = document.getElementById("btnSort");
  SortButton.addEventListener("click", function () {
    let dataForm = document.getElementById("sort");
    sortTable("list",dataForm)
  });


  let First_Set = document.getElementById("fieldFirst");
  First_Set.addEventListener("change", function () {
    changeNextSelect("fieldSecond", First_Set);
  });

  let Sec_Set = document.getElementById("fieldSecond");
  Sec_Set.addEventListener("change", function () {
    changeNextSelect("fieldThird", Sec_Set);
  });

  let clearsort = document.getElementById("Clear_Sort_btnf")
  clearsort.addEventListener("click", function(){
    resetSort("list")
    clearTable("list");
    createTable(countries, "list");
  })
  
  }) 
    




 


    let dataFilter = (dataForm) => {
 
      let dictFilter = {};
      // перебираем все элементы формы с фильтрами
      
      for(let j = 0; j < dataForm.elements.length; j++) {
      // выделяем очередной элемент формы
      let item = dataForm.elements[j];
      
      // получаем значение элемента
      let valInput = item.value;
      // если поле типа text - приводим его значение к нижнему регистру
      if (item.type == "text") {
      valInput = valInput.toLowerCase();
      }else if(item.type == "number"){
        if (valInput !== "") {
          valInput = parseFloat(valInput);
        } else {
          if (item.id.includes("From")) {
            valInput = Number.NEGATIVE_INFINITY;
          } else if (item.id.includes("To")) {
            valInput = Number.POSITIVE_INFINITY;
          }
        }
      }
     dictFilter[item.id] = valInput;
 } 
 return dictFilter;
}

// фильтрация таблицы
let filterTable = (data, idTable, dataForm) =>{
 
  // получаем данные из полей формы
  let datafilter = dataFilter(dataForm);
  
  // выбираем данные соответствующие фильтру и формируем таблицу из них
  let tableFilter = data.filter(item => {
  
  let result = true;
  
  
  for(let key in item) {
  
  let val = item[key];
  
  // текстовые поля проверяем на вхождение
  if (typeof val == 'string') {
    console.log('string');
    
  val = item[key].toLowerCase()
  result &&= val.indexOf(datafilter[correspond[key]]) !== -1
  }
  else if(typeof val == 'number'){
     // Получаем интервал для текущего числового поля
     result &&=
          datafilter[correspond[key][0]] <= val &&
          val <= datafilter[correspond[key][1]];
}
}
return result;
}); 
clearTable(idTable);
createTable(tableFilter, idTable); 
}
  
let clearFilter = () => {
  document.getElementById("filter").reset();
  clearTable("list");
  createTable(countries, "list");
};

function clearTable(idTable) {
  let table = document.getElementById(idTable);
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

let createOption = (str, val) => {
  let item = document.createElement("option");
  item.text = str;
  item.value = val;
  return item;
};


let setSortSelect = (head, sortSelect) => {
  sortSelect.append(createOption("Нет", 0));
  for (let i in head) {
    sortSelect.append(createOption(head[i], Number(i) + 1));
  }
}



let setSortSelects = (data, dataForm) => {
  let head = Object.keys(data);
  //document.write()
  let allSelect = dataForm.getElementsByTagName("select");
  
  for (let j = 0; j < allSelect.length; j++) {
    console.log(allSelect.length);
    
    setSortSelect(head, allSelect[j]);
    if (j != 0) {
      console.log(j);
      
      // Если это не первый select, делаем его неизменяемым
      allSelect[j].setAttribute("disabled", "disabled");
      //allSelect[allSelect.length-1].setAttribute("disabled", "disabled");
    }
  }
};


let changeNextSelect = (nextSelectId, curSelect) => {
 
  let nextSelect = document.getElementById(nextSelectId);
  
  nextSelect.disabled = false;
  
  // в следующем SELECT выводим те же option, что и в текущем
  nextSelect.innerHTML = curSelect.innerHTML;
  
  // удаляем в следующем SELECT уже выбранную в текущем опцию
  // если это не первая опция - отсутствие сортировки
  if (curSelect.value != 0) {
  nextSelect.remove(curSelect.value);
  console.log(nextSelect);
  
  } else {
  nextSelect.disabled = true;
  document.getElementById('fieldThird').disabled = true
  }
 }

  



let createSortArr = (data) => {
  let sortArr = [];
  let sortSelects = data.getElementsByTagName("select");
  for (let i = 0; i < sortSelects.length; i++) {
    // получаем номер выбранной опции
    let keySort = sortSelects[i].value;
    // в случае, если выбрана опция Нет, заканчиваем формировать массив
    if (keySort == 0) {
      break;
    }
    // получаем номер значение флажка для порядка сортировки
    // имя флажка сформировано как имя поля SELECT и слова Desc
    let desc = document.getElementById(sortSelects[i].id + "Desc").checked;
    sortArr.push({ column: keySort - 1, order: desc });
  }
  
  return sortArr;

}

let sortTable = (idTable, data) => {
  // формируем управляющий массив для сортировки
  let sortArr = createSortArr(data);
  // сортировать таблицу не нужно, во всех полях выбрана опция Нет
  if (sortArr.length === 0) {
    return false;
  }
  let table = document.getElementById(idTable);
  // преобразуем строки таблицы в массив
  let rowData = Array.from(table.rows);
  // удаляем элемент с заголовками таблицы
  rowData.shift();

  rowData.sort((first, second) => {
    let First_Checkbox = (document.getElementById('fieldFirstDesc').checked)? -1 : 1
    let Second_Checkbox =(document.getElementById('fieldSecondDesc').checked)? -1 : 1
    let Third_Checkbox =(document.getElementById('fieldThirdDesc').checked)? -1 : 1

    for (let i in sortArr) {
      let key = sortArr[i].column; 
      if(i == 0){
        if (first.cells[key].innerHTML > second.cells[key].innerHTML) return 1 * First_Checkbox
        else if (first.cells[key].innerHTML < second.cells[key].innerHTML) return -1 * First_Checkbox
      }
      else if (i == 1){
        if (first.cells[key].innerHTML > second.cells[key].innerHTML) return 1 * Second_Checkbox
        else if (first.cells[key].innerHTML < second.cells[key].innerHTML) return -1 * Second_Checkbox
      }
      else if (i == 2){
        if (first.cells[key].innerHTML > second.cells[key].innerHTML) return 1 * Third_Checkbox
        else if (first.cells[key].innerHTML < second.cells[key].innerHTML) return -1 * Third_Checkbox
      }
    }//for
  

return 0;
  });
  table.innerHTML = table.rows[0].innerHTML;
  rowData.forEach((item) => {
    
    table.append(item);
  });
};

let resetSort = (tableid) => {
  //document.write(`<h3>${tableid}</h3>`)
  let table = document.getElementById(tableid)
  document.getElementById("sort").reset();
  
  
  //setSortSelects(buildings[0], document.getElementById("sort"));
}




  
//     // let SortButton = document.getElementById("Sort_btn");
//     // SortButton.addEventListener("click", function () {
//     //   let dataForm = document.getElementById("sort");
//     //   sortTable("list",dataForm)
//     // });
  
//     // let First_Set = document.getElementById("fieldsFirst");
//     // First_Set.addEventListener("change", function () {
//     //   changeNextSelect("fieldsSecond", First_Set);
//     // });
  
//     // let clearsort = document.getElementById("Clear_Sort_btnf")
//     // clearsort.addEventListener("click", function(){
//     //   resetSort("list")
//     //   clearTable(tableid);
//     //   createTable(countries, tableid);
//     // })
//   });
  
//   function clearTable(idTable) {
//     let table = document.getElementById(idTable);
//     while (table.rows.length > 0) {
//       table.deleteRow(0);
//     }
//   }

//   let clearFilter = () => {
//     document.getElementById("filter").reset();
//     clearTable("list");
//     createTable(countries, "list");
//   };


// let dataFilter = (dataForm) => {
//         let dictFilter = {};
//         for (let j = 0; j < dataForm.elements.length; j++) {
//           let item = dataForm.elements[j];
//           let valInput = item.value;
//       console.log(item);
//       console.log(valInput);
      
      
//           if (item.type == "text") {
//             valInput = valInput.toLowerCase();
//           } else if (item.type == "number") {
//             if (valInput !== "") {
//               valInput = parseFloat(valInput);
//             } else {
//               if (item.id.includes("From")) {
//                 valInput = Number.NEGATIVE_INFINITY;
//               } else if (item.id.includes("To")) {
//                 valInput = Number.POSITIVE_INFINITY;
//               }
//             }
//           }
//           // alert(`${valInput} || ${typeof valInput}`)
//           dictFilter[item.id] = valInput;
//         }console.log(dictFilter);
//         // for (let key in dictFilter)
//           //document.write(`<h3>${key}|||${dictFilter[key]}</h3>`);
//         return dictFilter;
        
        
//       };


//     let filterTable = (data, idTable, dataForm) => {
//         let datafilter = dataFilter(dataForm);
//         let tableFilter = data.filter((item) => {
//           let result = true;
//           for (let key in item) {
//             let val = item[key];
//             if (typeof val == "string") {
//               val = item[key].toLowerCase();
//               result &&= val.indexOf(datafilter[correspond[key]]) !== -1;
//             } else if (typeof val == "number") {
//               result &&= datafilter[correspond[key][0]] <= val && val <= datafilter[correspond[key][1]];
//             }
//           } 
           
//           return result;
        
//         });
        
        
//         clearTable(idTable);
//         console.log(tableFilter);
        
//         createTable(tableFilter, idTable);

//       };



    

      


