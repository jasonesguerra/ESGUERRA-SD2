let friends = [];

function showFriends() {
    if (friends.length <= 0) {
        console.log("Friendless HAHAHA.");
    } else {
        console.log(friends);
    }

}

function addFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());

    if(checkFriend == true){
        console.log(`${name} is already your friend.`);
    } else {
        friends.push(name.toUpperCase());
        console.log(`${name} is now your friend.`);
    }   
}

// remove specific friend -> using their name
function removeFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());

    if (checkFriend == true) {
        friends.splice(friends.indexOf(name.toUpperCase()), 1);
        console.log(`${name} is no longer your friend.`);
    } else {
        console.log(`${name} is not your friend.`);
    }
}

