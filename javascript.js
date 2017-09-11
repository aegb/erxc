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
		reset ();
}
function nextQ (){
	var randomN = Math.floor(Math.random() * questions.length);
	document.getElementById('fastTalkGenerator').innerHTML = questions[randomN];
}
function countdown(){
	var timeleft = 5;
  var downloadTimer = setInterval(function timer(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000)}
function reset(){
	while(timeleft <= 0){
	var timeleft = 5;
  var downloadTimer = setInterval(timer(),1000);
}
