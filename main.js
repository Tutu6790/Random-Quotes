
var name = prompt("You are off to great places, TODAY is your Day!!." + " " + "Hello dear, please kindly input your name");
//  alert("Hello" + "" + name + "," + "Today is " + "" + Date());

 if (name == "") {
     alert("Don't cry beacuse it's over, smile beacuse it happened!");
    var names = prompt("Please you'll have to fill your name");

     alert("Hello" + names +  " " + "Welcome to Debbie's Random Quotes App!" + " "+  "I hope you find what your'e looking for");
 } else {
    alert(name + "!"+ " "+ "You're braver than you belive, and stronger than you seem, and smarter than you think!");
    alert(name + " " + "Welcome to Debbie's Random Quotes App!" + " "+  "I hope you find what your'e looking for")
 }
document.getElementById("name").innerHTML = name;
var date = new Date();
document.getElementById("welcome").innerHTML = date.toDateString();

document.getElementById("time").innerHTML = date.toLocaleTimeString();

var quotes = [
'"If you so choose, each day can be filled with even more joy than the one before If you so choose, even the most seemingly random events can work in your favor."',
'"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."',
'"To suceed in your misson you must have single-mindede devotion to your goal"',
'"You have to dream before your dreams come true"',
'"We should not give up and we should not allow our problems defeat us"',
'"Great dreams of great dreamers are always transcended"',
'"We are what we pretend to be, so be careful about what we pretend to be"',
'"Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down"',
'"Dont waste your time with explanations, people only want to hear what they want to hear"',
'"If you look the right way, you can see that the whole world is a garden"',
'"Dont be pushed arround by the fears in your mind. Be led by the dreams in your heart"',
'"If you can\'t change your faith, Change your attitude"',
'"Love is a great beautifier"',
'"The way to love anything, is to realize that it can be lost"',
'"A real girl isn\'t perfect, and a perfect girl isnt real"',
'"If you love yourself first, you will find your valantine much quicker"',
'"The most important thing is to enjoy life - to be happy is all that matters"',
'"Life is not a problem to be solved but a reality to be experienced"',
'"Life is a dream for the wise, a game for the fool, a comedy for the rich, and a tragedy for the poor"',
'"Change your life today. Don\'t gamble on the future, act now without Delay"',
'"The decisons you make are a choice of value that reflect your life in every way"',
'"Dont cry because its over. Smile because it happened"',
'"Be the change you want to see in the world"',
'"A smile is a curve that sets everything straight"',
'"Life is not happening to you, life is responding to you"',
'"To conquer without risk is to triumph without glory"',
'"It is better to keep your mouth closed and let people think you\'re a fool than to open it and remove all doubt"',
'"Love the gift more than the giver"',
'"See the good in people and help them"',
'"Be congruent, be authentic, be your true self"',
'"Continue to grow and eveolve"',
'"Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness"',
'"The only way to have a friend is to be one"',
'"Why change? Everyone has its own style. When you have found yours, you should stick to it"',
'"Belive that life is worth living and your belief will help create the fact"',
'"I think everything is possible if you have the mindset and the will and desire to do it and put the time in"',
'"The difference between stumbling blocks and stepping stones is how you use them"',
'"Good friends, good books and a sleepy conscience : this is the ideal life"',
'"Go as far as you can see when you get there you will be able to see farther"',
'"Dont find fault, find a remedy"',
'"Don\'t be afraid. Be focused. Be determined. Be hopeful. Be empowered"',
'"When people are determined they can overcome anything"',
'"If you want to lift yourself up, lift up someone else"',
'"If your actions inspire other others to dream more, learn more, do more and become more,you are a leader"',
'"You miss 100% of the shots you dont take"',
'"Your time is linited, dont waste it living someone else\'s life"',
'"Failure is simple an opportunity to begin again, this time more intelligently"',
'"The only real mistake is the one from whuch we learn nothing"',
'"Vision without execution is just hallucination"',
'"In the joy of others, lies our own"',
'"Love all, hate none, trust few, follow one"',
'"The best dreams happen when you are awake"',
'"Somedays you just have to create your own sunshine"',
'"Character is hoew you treat those who can do nothing for you"',
'"Choose your friend with caution, plan your future with purpose, and frame your life with faith"',
'"Chnage your thoughts and you\'ll change the world"',
'"Your life is nan occasion, Rise to it!"',
'"Be yourself, everyone else is already taken"',
'"Furst they ignore you, then they ridicule you, the they fight you, and then you win!"',
'"Couarge is resistance to fear, mastery of fear, not absence of fear"',
'"What we think we become"',
'"We must accept infinite disappointment but never loose infinite hope"'

]; 

var motivateQuotes = [
'"Congratulations! today is your day. You\'re off to Great Places! You\'re off and away. "',
'"When things are a dissapointment, try not to be discouraged"',
'"If you cant stop thinking about it dont stop working for it"',
'"Without action you aren\'t going anywhere"',
'"Remember people, you are not plastic but you are fantastic! Never forget that"',
'"It always seems impossible until its done"',
'"Be the change you want to see in the world"',
'"Blessed is he that expects nothing, for he shall never be discouraged"',
'"Strength dose not come from physical capacity it comes from an indomitable will"',
'"Change yourself, you are in control"',
'"See the good in people and help them"',
'"Without action, you arent going anywhere"',
'"Take care of this moment"',
'"Glory lies in the attempt to reach ones goal and not in reaching it"',
'"Nobody can hurt me without my permission"',
'"Real leaders must be ready to sacrifice all for thr freedom of their people"',
'"Everyone can rise above their circumstances and achieve sucess if they are dedicated and passionate about what they do" ',
'"Money wont create sucess the free to amke it will"',
'"We must use time wisely and forever realize that the tiem is always ripe to do right"',
'"Man\'s goodness is a flame that can be hidden but never extinguished"',
'"Resentment is like drinking poison and hoping it will kill your enemies"',
'"When people are determined they can overcome anything"',
'"Whether you think you can or you think ou can\'t -- You are right!"',
'"Be happy for thus moment. This moment is your life"',
'"The only way to do great work is to love what you do"',
'"Remember that, not getting what you want is sometimes a wonderful stroke of luck"',
'"Everything has beauty, but not everyone can see"',
'"Nothing in this world is ever completly wrong. Even a stopped clock is right twice a day"',
'"When we are no longer able to change a situation, we are challenged to change ourselves"',
'"When all is said and done, more is said than done"',
'"You must give evrything to make yoour life as beautiful as the dreams that dance i  your imagination"',
'"Envy was just the task you paid on sucess"',
'"Motivation is the act of getting people to what you want them to do because they want to do it"',
'"The more things you do. The more you can do"',
'"Be somebody who makes everybody feel like somebody"',
'"The moment you want to quit,is the moment you need to keep pushing"',
'"You have to expect things of yourself before you can do them"',
'"The first step towards getting somewhere is the decide that you are not going to stay where you are"',
'"If you belive in yourself enough and know what you want, youre gonna make it happen"',
'"I dream my painting and i paint my dream"',
'"Love is the absence of judgement"',
'"You yourself, as much as anybody in the entire universe, deserve your love and affection"',
'"There are years that ask questions and years that answer"',
'"Ignore those that make you fearful and sad, that degrade you back towards disease and death"',
'"The price of greatness is responsibility"',
'"look at the sky we are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work"',
'"The secret of getting ahead is getting started"',
'"If you can dream it, you can do it"',
'"The way to get started is to quit talking and begin doing"',
'"When you are curious you find lots of intresting things to do"',
'"All our dreams can come true if we have the courage to pursure it"',
'"Aim for the moon if you miss it, you may hit the car"',
'"Try! Try! Try!, and keep trying, is the rule that must nbe followed to become an expert in anything"',
'"A creative man is motivated by the desire to achieve, not by the desire to beat others"',
'"We aim above the mark, to hit the mark"',
'"There is a way to do it better - Find it!"',
'"The best way to find yourself, is to loose yourself in the service of others"',
'"Our greatess weakness lies in giving up!. The most certain way to suceed is always to try just one more time"'
];

var funnyQuotes = [
'"Rainy days should be spent at home, with a cup of tea and a good book"',
'"A man is but a product of his thoughts. What he thinks is what he becomes."',
'"Never go to bed mad. Stay up and fight!"',
'"Accept who you are. Unless you are a serial killer"',
'"I hate houseworks! You make the beds, you do the dishes and six months later you have to start all over again"',
'"It is a scientific fact that your body will not absorb cholesterol if you take it from another persons plate"',
'"You can lead aman to congreaa, but yiou cant make hin think"',
'"Love is teeling someone thir hair extensions are showing"',
'"I love SpongeBob more than any woman i have ever known"',
'"Ability is what will get you to the top, if the boss has no daughter"',
'"I tried to be noemal once. Worst two minutes of my life"',
'"May your coffe be strong and your monday be short"',
'"People say nothing is impossible, but i do nothing everydat"',
'"Etc. End of thinking capacity"',
'"We live in the era of smart phones and stupid people"',
'"We kill people who kill people because killing people is wrong"',
'"Adolesecnce is just one big walking pimple"',
'"Comedy is tragedy - plus time"',
'"It is better to keep your mouth closed and let people think youre a fool than open it and remove all doubt"',
'"I\'m sick of following my dreams, man. i\'m just going to ask where they\'re going and hook up with \'em later"',
'"Before you judge a man, walk a mile in his shoes. After that who cares?... He\s a mile away and you\'ve got his shoes!"',
'"The best thing about the future is that it comes one day at a time"',
'"Light travel faster than sound. Thats why some people appear bright until you hear them speak"',
'"The differnce between stupidity and genuis is that genius has its limits"',
'"Trouble knocked at the door but hearing laughter, hurried away"',
'"Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind"',
'"If you are going to tell people the truth, be funny or they will kill you"',
'"He who laughs last didnt get the joke"',
'"A day without laughter is a day wasted"',
'"Everyone has a purpose in life. Perhaps yours is watching television"',
'"The cure fore boredom is curiosity. The is no cure for curiousity"',
'"Dont take life too seriously, you will never get out of it alive"',
'"A computer once beat me at chess, but it was no match fpr me at kick boxing"',
'"Leave something for someone but dont leave someone for something"',
'"Never have more children thatn you have car windows"',
'"Youre only as good as your last hair cur"',
'"People who think they know everything are a great annoyance to those of us who do"',
'"Money is not the most important thing in the world. Love is. Fortunatley, I love Money"',
'"I always wanted to be somebody, but now i realize i should have been more specific"',
'"The raod to sucess is always under construcstion"',
'"Always remember that you are actually unique just like anyone else"',
'"Dont keep a man guessing too long - He\'s sure to find the answer somewhere else"'
];

function generateQuote() {
   var randomNumber = Math.floor(Math.random() * (quotes.length));
   document.getElementById("quotes").innerHTML = quotes[randomNumber];
}

function motivateQuote() {
var randomNumber = Math.floor(Math.random() * (motivateQuotes.length));
document.getElementById("quotes").innerHTML = motivateQuotes[randomNumber];
}

function funnyQuote() {
var randomNumber = Math.floor(Math.random() * (funnyQuotes.length));
document.getElementById("quotes").innerHTML = funnyQuotes[randomNumber];
}