Template.videos.events({
	"click button#lovely": function(event){
		console.log("clicked lovely!");
		var video = Popcorn.youtube('#videoPlayer', 'https://www.youtube.com/watch?v=wmG7W6W3gBg');
	},
	"click button#butb": function(event){
		console.log("clicked lovely!");
		var video = Popcorn.youtube('#videoPlayer', 'https://www.youtube.com/embed/F19D1rE4iSo');
	},
	"click button#baubles": function(event){
		console.log("clicked lovely!");
		var video = Popcorn.youtube('#videoPlayer', 'https://www.youtube.com/watch?v=ULxO7iDrxjk');
	},
	"click button#blueskies": function(event){
		console.log("clicked lovely!");
		var video = Popcorn.youtube('#videoPlayer', 'https://www.youtube.com/watch?v=77PQ8-gj4fI');
	}
})



function lovely() {
var video = Popcorn.youtube('#videoPlayer', 'https://www.youtube.com/watch?v=wmG7W6W3gBg');
}