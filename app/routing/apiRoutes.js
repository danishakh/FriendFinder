var friendsData = require('../data/friends.js');

module.exports = (app) => {
	app.get("/api/friends", (req, res) => {
		res.json(friendsData);
	});

	app.post("/api/friends", (req, res) => {
		// Get request body and assign it to an object
		var newFriend = req.body;

		console.log('Received new friend');
		console.log(newFriend);

		// New Friend scores
		var scoresToCompare = newFriend.scores;

		// Set default difference 
		var minDiff = 100;

		// Array to hold matches
		var matchArr = [];

		//================== Determine Compatibility ===================
		for (var i = 0; i < friendsData.length; i++) {
			var currentDiff = 0;

			for (var j = 0; j < scoresToCompare.length; j++) {
				currentDiff = currentDiff + (Math.abs(scoresToCompare[j] - friendsData[i].scores[j]));
			}

			if (currentDiff < minDiff) {
				// Clear the array and push this friend into matchArr
				matchArr = [];
				matchArr.push(friendsData[i]);

				minDiff = currentDiff;

				// console.log(minDiff);
				// console.log(friendsData[i]);
			}
			else if (currentDiff === minDiff) {
				// Only show top 3 friends with same 'minDiff' values
				if (matchArr.length < 4) {
					matchArr.push(friendsData[i]);
				}
			}
		}

		// Add new friend into our list of friends
		//friendsData.push(newFriend);

		// Respond back with json data of matching friend info
		res.send(matchArr);
	});
}

//=================== Compatibility Logic Pseudocode ====================
//loop through friendsData array

//for each object
	// get difference between scoresToCompare[x] and friendsData[i].scores[x]
	// get sum of the differences
	// compare sum with minimumTotalDiff

// if sum < minimumTotalDiff
	// clear 'matched' array
	// add to 'matched' array
// if sum = minimumTotalDiff
	// add to 'matched' array


