var userInput = document.getElementById("userInput");
var outputEl = document.getElementById("outputEl");
var counter = 0;

var people = [
	{
		name: "Michael Jordan",
		title: "Air Jordan", 
		bio: "Michael Jeffrey Jordan, also known by his initials, MJ, is an American retired professional basketball player, businessman, and principal owner and chairman of the Charlotte Hornets. Jordan played 15 seasons in the National Basketball Association (NBA) for the Chicago Bulls and Washington Wizards. His biography on the NBA website states: By acclamation, Michael Jordan is the greatest basketball player of all time. Jordan was one of the most effectively marketed athletes of his generation and was considered instrumental in popularizing the NBA around the world in the 1980s and 1990s.",
		image: "http://www.famoussportspeople.com/wp-content/uploads/2016/04/michael-jordan-basketball-sport-wallpapers-hd-wallpapers-hd-celebrities-sports-photo-michael-jordan-wallpaper.jpg",
		lifespan: {
			birth: "February 17, 1963",
			death: "N/A",
		}
	},
	{
		name: "Randy Moss",
		title: "Moss", 
		bio: "Randy Gene Moss is a former American football wide receiver who played 14 seasons in the National Football League (NFL). He holds the NFL single-season touchdown reception record (23 in 2007), the NFL single-season touchdown reception record for a rookie (17 in 1998), and is second on the NFL all-time regular season touchdown reception list with 156. He is widely considered to be among the greatest wide receivers of all-time.",
		image: "https://s-media-cache-ak0.pinimg.com/564x/e6/f6/7d/e6f67da119645910538452e019b85c2f.jpg",
		lifespan: {
			birth: "February 13, 1977",
			death: "N/A",
		}
	},	
	{
		name: "Michael Johnson",
		title: "Superman", 
		bio: "Michael Duane Johnson is a retired American sprinter. He won four Olympic gold medals and eight World Championships gold medals. He formerly held the world and Olympic records in the 200 m and 400 m as well as the world record in the indoor 400 m.He is the only male athlete in history to win both the 200 metres and 400 metres events at the same Olympics, a feat he accomplished at the 1996 Summer Olympics in Atlanta. Johnson is also the only man to successfully defend his Olympic title in the 400 m.",
		image: "http://media3.s-nbcnews.com/i/newscms/2016_27/1141336/michael-johnson-olympics-today-160706-tease_9cc50f4f84abe51822f591bed5695675.jpg",
		lifespan: {
			birth: "September 13, 1967",
			death: "N/A",
		}
	},
	{
		name: "name",
		title: "title", 
		bio: "Muhammad Ali was an American professional boxer and activist. He is widely regarded as one of the most significant and celebrated sports figures of the 20th century. From early in his career, Ali was known as an inspiring, controversial, and polarizing figure both inside and outside the ring.",
		image: "http://ndigo.com/wp-content/uploads/2016/06/Ali-boxing-ndigo-chicago.jpg",
		lifespan: {
			birth: "January 17, 1942",
			death: "June 3, 2016",
		}
	}];

for (var counter = 0; counter < 5; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += 
	`<div class="person__container" id="person--${counter}">
  		<person>
  			<header>
  				<h2>${people[counter].title}</h2>
  				<h3>${people[counter].name}</h3>
  			</header>
          	<section><img class="bioPic" src="${people[counter].image}">${people[counter].bio} </section>
  			<footer>Birth: ${people[counter].lifespan.birth} - Death: ${people[counter].lifespan.death}</footer>
  		</person>
	</div>`;
};

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

document.addEventListener("click", function (e) {
	var clickedBio = e.target;
	console.log("clickedBio", clickedBio);
	userInputText.focus();
	userInputText.addEventListener("keyup", function(){
	clickedBio.innerHTML = userInputText.value;
	});
});

// Event listeners are created
containerEl[i].addEventListener("click", function (e) {
	for (var i = 0; i < containerEl.length; i++) {
	// Logic to execute when the element is clicked
	containerEl[i].classList.value = "person__container";

	if (e.target.classList.value === "person__container") {
	  e.target.classList.add("clicked");
	}
		else if (e.target.parentNode.parentNode.classList.value === "person__container"){
		  e.target.parentNode.parentNode.classList.add("clicked");
		}
	}	
 });





