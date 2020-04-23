var inputData = {
    "dimensions": [{
      "id": "dimension_re",
      "values": ["East", "East", "West", "SouthWest", "South","NorthEast"]
    }, {
      "id": "dimension_cnt",
      "values": ["London", "Italy", "Germany", "US", "Russia","India"]
    }],
    "meaures": [{
      "id": "measure_sales",
      "values": [100, 156, 432, 462, 25,100]
    }, {
      "id": "measure_qty",
      "values": [85, 34, 153, 434, 52, 43]
    }, {
      "id": "measure_profit",
      "values": [123, 45, 421, 465, 451, 56]
    }],
    "metadata": [ {
      "id": "measure_sales",
      "label": "Sales",
      "type":"number"
    }, {
      "id": "measure_qty",
      "label": "Quantity",
       "type":"number"
    }, {
      "id": "measure_profit",
      "label": "Profit",
       "type":"number"
    },{
      "id": "dimension_re",
      "label": "Region",
      "type":"string"
    }, {
      "id": "dimension_cnt",
      "label": "County",
      "type":"string"
    }]
  }
  
  var expectedData = [];
  var formatingValue = [];
  var lengthOftheValue = inputData.dimensions[0].values.length;
  for(i=0; i< lengthOftheValue; i++){
      expectedData.push({
        "Region": inputData.dimensions[0].values[i],
        "County": inputData.dimensions[1].values[i],
        "Sales": inputData.meaures[0].values[i],
        "Quantity": inputData.meaures[1].values[i],
        "Profit": inputData.meaures[2].values[i]
      });
  }


  
  // console.log("expectedData", expectedData);
  console.log("inputData", inputData);

  Object.entries(inputData).forEach(([key1, value1]) => {
    if(key1 == "metadata"){
      Object.entries(value1).forEach(([key2, value2]) => {
        // console.log(key2, value2);
        formatingValue.push({
            name: value2.label,
            values: getData(value2.id)
        });
      })
    }
    
  });
  // console.log("formatingValue",formatingValue);
  function getData(filterName){
    var data;
    Object.entries(inputData).forEach(([key1, value1]) => {
      if(key1 != "metadata"){
        Object.entries(value1).forEach(([key2, value2]) => {
          
          if(filterName == value2.id){
            // console.log("filtered:",filterName, value2.values);
            data = value2.values;
            return;
          }
        })
      }
    });
    return data;
  }
  expectedDataFormating();
 function expectedDataFormating(){
   var data = []; 
   var datalength = formatingValue[0].values.length;
   var keyValue = [];
   Object.entries(formatingValue).forEach(([key, value]) => {
    keyValue.push(value.name);    
  })
  for(i=0; i< lengthOftheValue; i++){
    Object.entries(keyValue).forEach(([key2, keyValue]) => {
      Object.assign(expectedData[i], {[keyValue]: formatingValue[key2].values[i]});
    })
    
}
  console.log("expectedData", expectedData);
  
  }