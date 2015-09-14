var recentGigs =
[
{where:"The Jazz Lounge at Battery Wharf",  when:"11-12 September 2015", guests:"Yas Ishibashi and Ralph Pepe"},
{where:"The Jazz Lounge at Battery Wharf",  when:"4-5 September 2015", guests:"Yas Ishibashi and Ralph Pepe"},
 {where:"Thelonious Monkfish",  when:"22 March 2015", guests:"Yas, Ishibashi, Jon Baboian and Bruce Gertz"},
 {where:"Thelonious Monkfish",  when:"3 August 2014", guests:"Yas Ishibashi, Ralph Pepe, and Jon Wheatley"},
 {where:"Thelonious Monkfish",  when:"22 December 2013", guests:"Yas Ishibashi, Ralph Pepe, Michael Carey"},
 {where:"The Jazz Lounge at Battery Wharf",  when:"3 August 2013", guests:"Yas Ishibashi and Ralph Pepe"}


]

Template.calendar.helpers({
	gigs:function(){return recentGigs;}
})