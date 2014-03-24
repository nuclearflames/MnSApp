var 
	//vector holder class
	Vec = function (x, y) {
		this.x = x;
		this.y = y;
	},
	//pointer defaults to looking upwards
	pointer = 1,
	//empty array init
	values = new Array(),
	//inital position of ship
	shipPos = new Vec(0, 0),
	//init function
	initalizeAjaxCall = function (callback) {
		$.ajax({
			url: "home/getData",
			success: function(response) {
				findPath(response.Directions);
			},
			failure: function(response) {
				console.log(response);
			}
		});
	},
	//does the path 
	findPath = function (directions) {
		for (var i = 0; i < directions.length; i++) {
			switch (directions[i]) {
				case "LEFT":
					movePointer(1);
					break;
				case "RIGHT":
					movePointer(-1);
					break;
				case "FORWARD":
					goFoward();
					break;
				default:
					break;
			}
		}
	},

	movePointer = function (val) {
		pointer += val;
		//if statement to set the circlar pointer
		//just security if the values later have more points
		if (pointer < 0) {
			//below 0 set the pointer to top of array
			pointer = values.length - 1;
		} else if (pointer >= values.length) {
			//above array length set to bottom most pointer
			pointer = 0;
		}
	},

	goFoward = function () {
		shipPos.x += values[pointer].x;
		shipPos.y += values[pointer].y;
		console.log(shipPos);
	}

	responseResult = function () {

	},

	init = function () {
		//left
		values[0] = new Vec(-1, 0);
		//up
		values[1] = new Vec(0, 1);
		//right
		values[2] = new Vec(1, 0);
		//down
		values[3] = new Vec(0, -1);

		//initialize
		initalizeAjaxCall(function () {
			responseResult();
		});
	};
init: init();