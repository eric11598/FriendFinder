// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("./../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    let arrSum = (array) => {
        return array.reduce(( x, y ) => parseInt(x) + parseInt(y), 0);
    }

    let findFriend = () => {
        var userSum = arrSum(req.body.scores);
        var friend = friendsData[0]
        var current

        for (let i = 1; i < friendsData.length; i++) {
            current = friendsData[i]
                var friendDiff = Math.abs(userSum - arrSum(friend.scores))
                var currentDiff = Math.abs(userSum - arrSum(current.scores))
                console.log(`friend is: ${friend.name} and diff is: ${friendDiff}`);
                console.log(`current is: ${current.name} and diff is: ${currentDiff}`);
                if (friendDiff > currentDiff) {
                    friend = current
                    console.log("new friend " + friend.name + "\n");
                } else {
                    console.log("same friend\n");
                }
        }

        return friend
    }

    res.json(findFriend());
    friendsData .push(req.body);
    console.log("JSON Sent and user pushed to array");
})
}
