// Get buttons
var enterButton = document.getElementById("enterButton");
var playButton = document.getElementById("play");
var forwardButton = document.getElementById("forward");
var pauseButton = document.getElementById("pause");

var globalPlayer;

enterButton.onclick = function() {
    var trackID = document.getElementById("textField")["value"] // get user input from text field
    var pathString = '/tracks/' + trackID // 

    // Initialize SoundCloud
     SC.initialize({
        client_id: 'fd4e76fc67798bfa742089ed619084a6'
    });

    // Get Song object
    SC.get(pathString).then(function(response){
        document.getElementById("imgTag")["src"] = response.artwork_url; // change src attribute on <img>
        document.getElementById("artistinfo")["innerHTML"] = "Profile page:  " + response.user.permalink_url;
        document.getElementById("songinfo")["innerHTML"] = "Song title:  " + response.title + "<br>" + "Song page: " + response.permalink_url;
        console.log(response);
    });

    // Get player object
    SC.stream(pathString).then(function(player){
        globalPlayer = player;
	});
}

playButton.onclick = function() {
    globalPlayer.play();
}
pauseButton.onclick = function() {
    globalPlayer.pause()
}
// 175727625 - test track id