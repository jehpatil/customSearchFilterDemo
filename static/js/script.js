var app = angular.module("myApp",[]);
	app.controller("mainController", function ($scope) {
	 $scope.products = [
    	    { 'name': 'pen', 'price': 10 },
        	{ 'name': 'pencil', 'price': 5 },
          	{ 'name': 'book', 'price': 25 },
           	{ 'name': 'ball', 'price': 30 },
           	{ 'name': 'eraser', 'price':5 },
           	{ 'name': 'pen1', 'price': 6 },
           	{ 'name': 'ball1', 'price':15 },
            { 'name': 'eraser1', 'price': 10 },
            { 'name': 'pen1', 'price': 20 },
            { 'name': 'book1', 'price': 40 },
            { 'name': 'eraser2', 'price': 8 },
            { 'name': 'pencil1', 'price': 4 },
            { 'name': 'pen2', 'price': 12 },
	    ];
	});

	app.filter("priceGreaterThan", function () {
		return function (input,price) 
		{
	//		console.log(price);
			var list = [];
			var res;
			var str;

		  	var s = document.getElementById("myprice").value;
			//console.log("Original String"+s);
			//console.log("result"+res);

			angular.forEach(input, function (item) {
				res = s.charAt(0); //return char at position 0
				console.log(res);
				if(res == ">")
				{
					str = s.substring(1); //return string after index 1
				//	console.log("price: "+str);
				//	console.log("Item P: "+item.price);

					if(item.price > str)
					{
					console.log("new: "+item.price);
						list.push(item);
					}
				}	
				else if(res == "<")
				{
					str = s.substring(1);
					if(item.price < str)
					{
					console.log("price: "+str);
						list.push(item);
					}
				}
				else
				{
					if(item.price > s )
					{
						list.push(item);
					}
					//return list;
				}
			})
			return list;
		}
	});