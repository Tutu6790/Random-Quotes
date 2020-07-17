
var name = prompt("Hello dear, please kindly input your name");
        //  alert("Hello" + "" + name + "," + "Today is " + "" + Date());

         if (name == "") {
             prompt("Please you'll have to fill your name");
         } else {
            alert("Hello" +  " " + name + "," + "Today is " + "" + Date());
         }
        document.getElementById("name").innerHTML = name;
        var date = new Date();
        document.getElementById("welcome").innerHTML = date.toDateString();
      
        document.getElementById("time").innerHTML = date.toLocaleTimeString();
       
       var quotes = [
       '"If you so choose, each day can be filled with even more joy than the one before If you so choose, even the most seemingly random events can work in your favor."',
       '"Congratulations! today is your day. You\'re off to Great Places! You\'re off and away. "',
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
        '"Rainy days should be spent at home, with a cup of tea and a good book"',
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
        '"It always seems impossible until its done"',
        '"Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness"',
        '"The only way to have a friend is to be one"',
        '"Why change? Everyone has its own style. When you have found yours, you should stick to it"',
        '"Remember people, you are not plastic but you are fantastic! Nevr forget that"',
        '"Belive that life is worth living and your belief will help create the fact"',
        '"I think everything is possible if you have the mindset and the will and desire to do it and put the time in"',
        '"The difference between stumbling blocks and stepping stones is how you use them"',
        '"Good friends, good books and a sleepy conscience : this is the ideal life"',
        '"Go as far as you can see when you get there you will be able to see farther"',
        '"Dont find fault, find a remedy"',
        '"Don\'t be afraid. Be focused. Be determined. Be hopeful. Be empowered"',
        '"Without action you aren\'t going anywhere"',
        '"When people are detrmined they can overcome anything"',
        '"If you want to lift yourself up, lift up someone else"',
        '"If your actions inspire other others to dream more, learn more, do more and become more,you are a leader"',
        '"If you cant stop thinking about it dont stop working for it"',
        '"You miss 100% of the shots you dont take"',
        '"When things are a dissapointment, try not to be discouraged"'
     ]; 

       function generateQuote() {
           var randomNumber = Math.floor(Math.random() * (quotes.length));
           document.getElementById("quotes").innerHTML = quotes[randomNumber];
       }