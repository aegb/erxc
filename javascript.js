var questions = [
	"Ice Cream or French Fries?",
	"Vans or Adidas?",
	"Milk tea or Milkshake?",
	"Coke or Pepsi?",
	"Pancakes or Waffles?",
	"Colored Pens or Colored Markers?",
	"Nike or Adidas?",
	"Sky Dive or Scuba Dive?",
	"Leggings or Jeans?",
	"Milk or Juice?",
	"Last thing you bought?",
	"Science or Math?",
	"Last time you got scared?",
	"Favorite ice cream flavor?",
	"Shoes or Sandals?",
	"Best food to eat when you're alone?",
	"Favorite month?",
	"Korea or Japan?",
	"One thing you always forget to do?",
	"Desert or Main Course?",
	"Breads or Cakes?",
	"Candies or Lollipops?",
	"What do you say when you're shocked?",
	"Good movie to watch with your crush?",
	"Last time you cried because of love?",
	"Do cheaters deserve a second chance?",
	"Your last big purchace?",
	"Starbucks or Infinitea?",
	"Last time you screamed?",
	"More food or more friends?",
	"Favorite school supply?",
	"Cartoon Network or Nickelodeon?",
	"Favorite brand of phone?",
	"Donuts or Cookies?",
	"Shopping or Adventure?",
	"Every morning or Every Evening?",
	"Roller Coaster or Ferris Wheel?",
	"Spongebob or Patrick?",
	"Last song you've played?",
	"What's worse, low battery or no wifi?",
	"Best time for crying?",
	"Slippers or shoes?",
	"Favorite time of year?",
	"Person you always say thank you?",
	"Yes or No, do you easily get jealous?",
	"Life Imprisonment or Death Penalty?",
	"Best time for sleeping?",
	"Last person you slapped?",
	"Casual or Formal?",
	"Dress or Gown?",
	"Bird or Fish?",
	"Shoes or Jacket?",
	"Do you like history?",
	"What is you favorite day of the week?",
	"What was your dream job as a kid?",
	"Spaghetti or Carbonara?",
	"Happy lies or Sad truths?",
	"Favorite month?",
	"Yes or No, do you believe in aliens?",
	"Puppies or Kittens?",
	"Toblerone or Hersheys?",
	"Yes or No, Is it wrong to love fully?",
	"Favorite expression?",
	"Tight or Loose?",
	"Pizza or Icecream?",
	"DSLR or Laptop?",
	"Giver or Reciever?",
	"Sit or Stand?",
	"What hurts more, injection or rejection?",
	"True love or World Peace?",
	"Favorite Pet?",
	"Favorite shoe brand?",
	"Coffee or Tea?",
	"Last time you went to the hospital?",
	"Favorite flower?",
	"Theme park or Mall?",
	"Summer Vacation or Christmas Vacation?",
	"Yes or No, Do you think you and your crush are a good match?",
	"Forever or Lifetime?",
	"What is one sentence that would be hard for you to believe if someone told it to you?",
	"Last person you forgave?",
	"What would you do if they don't love you back?",
	"Name one country you would love to visit someday.",
	"Favorite movie of all time?",
	
	];


/*I'm hella sleepy...test code of java by Eunice :D*/
function genQuestion() {
	var randomN = Math.floor(Math.random() * questions.length);
	document.getElementById('fastTalkGenerator').innerHTML = questions[randomN];
	}
function timeLimit() {
		var limit = setInterval(nextQ,5000);

}
function start(){
		genQuestion();
		timeLimit();
		
}
function nextQ (){
	var randomN = Math.floor(Math.random() * questions.length);
	document.getElementById('fastTalkGenerator').innerHTML = questions[randomN];
}
