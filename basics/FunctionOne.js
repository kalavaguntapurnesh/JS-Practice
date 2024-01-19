function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter user name");
    }
    else{
        return `${username} just logged in`;
    }
}



console.log(loginUserMessage("purnesh"));