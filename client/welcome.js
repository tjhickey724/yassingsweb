var videoList = [
	{url:"https://www.youtube.com/embed/F19D1rE4iSo",title:"But, Beautiful"},
	{url:"https://www.youtube.com/watch?v=jcdxLEkCV98",title:"Have your self a merry little Xmas"},
	{url:"https://www.youtube.com/watch?v=Izh7TekZVok",title:"You go to my head"}
	
]

Template.welcome.helpers({
	videos:function(){return videoList}
})