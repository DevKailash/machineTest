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
  console.log(expectedData);
  var formatingValue;
  inputData.metadata[0].forEach((element, index) => {
    formatingValue.push({
        name: element.name,
        values: inputData
    });
    //   expectedData.push({
    //     "Region": element.dimensions.,
    //     "County": "London",
    //     "Sales": 100,
    //     "Quantity": 85,
    //     "Profit": 123
    //   });
    getData(element.id);
  });
  function getData(){

    }