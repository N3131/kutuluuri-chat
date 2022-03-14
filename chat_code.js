 $(document).ready(function() {
     //luodaan pelin alkuun elementtejä
    var love = document.createElement("DIV"); 
            love.setAttribute("id", "love");
            $("main").append(love);
    
            var loveBar = document.createElement("DIV"); 
            loveBar.setAttribute("class", "loveBar");
            $("#love").append(loveBar);
    
            var chatSection = document.createElement("DIV");
            chatSection.setAttribute("id", "chatSection");
            $("main").append(chatSection);
    
            var hand = document.createElement("DIV");
            hand.setAttribute("id", "hand");
            $("#chatSection").append(hand);
            
             var phone = document.createElement("DIV");
            phone.setAttribute("id", "phone");
            $("#hand").append(phone);
            
            var chat = document.createElement("DIV");
            chat.setAttribute("id", "chat");
            $("#phone").append(chat);
    
            var noScreenClicks = document.createElement("DIV");
            noScreenClicks.setAttribute("id", "noScreenClicks");
            $("#chat").append(noScreenClicks);
    
            var hi = document.createElement("DIV");
            hi.setAttribute("id", "hi");
            hi.className = "dateAnswer";
            hi.textContent ="hi";
            $("#chat").append(hi);
    
            var hi2 = document.createElement("DIV");
            hi2.setAttribute("id", "hi2");
            hi2.className = "chatBubble";
            hi2.textContent ="hello";
            $("#chat").append(hi2);
    
            var firstTalk = document.createElement("DIV");
            firstTalk.setAttribute("id", "firstTalk");
            firstTalk.className = "dateAnswer";
            firstTalk.textContent = "Beautiful weather today";
            $("#chat").append(firstTalk);
    
            var playerCards = document.createElement("DIV");
            playerCards.setAttribute("id", "playerCards");
            $("#hand").append(playerCards);
    
            var noClicks = document.createElement("DIV");
            noClicks.setAttribute("id", "noClicks");
            $("#playerCards").append(noClicks); 
        
        
     //audio
     function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 

     var goodSound = new sound("audio/magic-idea-02.mp3");
     var badSound = new sound("audio/cartoon-bing-low.wav");
        
        //ensimmäisten viestien ajastus
    $("#hi").hide();
    setTimeout(function(){
    	$("#hi").show();
    },1000);
        
    $("#hi2").hide();
    setTimeout(function(){
    	$("#hi2").show();
    },2000);
        
    $("#firstTalk").hide();
    setTimeout(function(){
    	$("#firstTalk").show();
    },3000);  
        //tyyli korttialueelle alussa
    $("#noClicks").show();
                setTimeout(function(){
                    $("#noClicks").hide();
                },4000);
    
//kaikki kortit
        var yesAnswer = ["Yes", "Yeah", "Yup", "I agree", "sure", "absolutely!", "most of the time", "usually", "oh yes, always!", "Every now and then", "I guess so","I think so", "OMG yes!"];
        var noAnswer = ["No", "Not really", "nope", "Nah", "Waste of time", "over my dead body", "Sounds boring", "quite rarely","no, never", "Wouldn't say so", "I don't think so", "Not today","Not my cup of tea", "I disagree"];
        var maybeAnswer = ["Maybe", "Not sure", "Sometimes", "No opinion", "Dunno", "Yes and no", "Maybe once in a month", "maybe someday", "Only a few times in a year"];
        
        //deitti vastaa kysymyksellä
        var bCardsQ = ["I feel like nobody understands me:(", "What is your horoscope?", "Have you ever dated before?", "I hate my life"]
        //deitti ei vastaa kysymyksellä
        var bCards = ["Do you have any sisters?","What are you interested in?", "What kind of books you read?", "What do you do for living?", "What is your favorite drink?", "What kind of music do you listen to?", "How old are you?", "I have a crippling depression", "I wanna commit suicide", "I like your style, it suits you", "You are so funny", "You are a bit weird", "I really like you", "What is your biggest dream?", "Do you have any brothers?"];
        var allbCards = bCards.concat(bCardsQ);
        var cards = allbCards.concat(yesAnswer, noAnswer, maybeAnswer); //kaikki kortit
        var divCards = []; //kaikki kortit id:llä ja tyylillä
        //annetaan jokaiselle id ja tyyli
        for (var i = 0; i < cards.length; i++)
            {
        var card = document.createElement("DIV");
        card.textContent = cards[i];
        card.setAttribute("id", i);
         if (allbCards.includes(cards[i]))
                {
                card.className = "cardStyle card2Style";
                }
            else {
                card.className = "cardStyle";
            }  
                divCards.push(card);
            }
        
//randomisoi järjestys
     for (var i = divCards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = divCards[i];
        divCards[i] = divCards[j];
        divCards[j] = temp;
    }
        
        var container_div = document.getElementById("playerCards");
        var i = 0;   //index
        //kortit jaetaan 
        function giveCards() {
        //kortit pelaajan näkyvillä
        var currentAmount = container_div.getElementsByTagName("div").length;
            
        while (currentAmount < 7)
        {
        card2 = divCards[i];
        card2.style.display = "inline-block";
        document.getElementById("playerCards").appendChild(card2);
            card2.addEventListener("click", function(){
                this.className = "chatBubble"; 
                $(this).appendTo("#chat");
            })
           i++;
           currentAmount++;
        };
        };
        //kortti lisätää sekunnin kuluttua kun yksi käytetty
        setInterval(giveCards,1000);        
    
    //jos kortti on taulukossa, saa pisteitä, muuten neutraali tai miinus
    
    var plus = 4;
    var minus = 0;
     
     var total2 = plus - minus;
        //deitin kysymykset
    var starterTalk = ["", "Have you had a good day?","I’m only interested in one-night stands tbh, are you into that?","I could try dating if I found my soulmate tho :)","Maybe you could be the one for me"];
    var bookTalk = ["I like to read books, do you?","I think reading is a good hobby"];
    var familyTalk = ["Do you have any siblings?","To be honest I’m not very close with my family... are you?","My parents just don’t understand my passions, they are so unaccepting"];
    var musicTalk = ["Do you listen to music?", "Ambient music is very beautiful"];
    var justiceTalk = ["I enjoy murder.. series! What about you?", "I think this world needs more justice", "Could you sacrifice yourself for greater good?", "I respect unselfish people and altruism means a lot to me"];
    var beliefTalk = ["Are you an atheist?", "Do you believe in a God or Gods?","I believe in greater powers... you should too"];
    var seaTalk = ["I love ocean, it's so mysterious and beautiful", "Taking a long walk on a beach always gives me good vibes", "Sooo... I'd like to know, are you interested in me?:)", "Do you like seafood?", ""];
        
    //samat kysymykset ryhmiteltyinä sen mukaan, miten antavat vastausten perusteella pisteitä
    var yesPlusTalk = ["Have you had a good day?", "I’m only interested in one-night stands tbh, are you into that?", "Maybe you could be the one for me", "I like to read books, do you?", "I think reading is a good hobby", "My parents just don’t understand my passions, they are so unaccepting", "Do you listen to music?", "Ambient music is very beautiful", "I enjoy murder.. series! What about you?", "I think this world needs more justice", "Could you sacrifice yourself for greater good?", "I respect unselfish people and altruism means a lot to me", "Do you believe in a God or Gods?", "I believe in greater powers... you should too", "I love ocean, it's so mysterious and beautiful", "Taking a long walk on the beach always gives me a good feeling", "Do you like seafood?", "Sooo... I'd like to know, are you interested in me?:)"];
    var yesMinusTalk = ["Do you have any siblings?", "To be honest I’m not very close with my family... are you?", "Are you an atheist?"];
    var noPlusTalk = ["Maybe you could be the one for me", "Do you have any siblings?","To be honest I’m not very close with my family... are you?", "Are you an atheist?"];
    var noMinusTalk = ["Have you had a good day?", "I’m only interested in one-night stands tbh, are you into that?", "I like to read books, do you?", "I think reading is a good hobby", "My parents just don’t understand my passions, they are so unaccepting", "Do you listen to music?", "Ambient music is very beautiful", "I enjoy murder.. series! What about you?", "I think this world needs more justice", "I respect unselfish people and altruism means a lot to me", "I believe in greater powers... you should too", "I love ocean, it's so mysterious and beautiful", "Taking a long walk on the beach always gives me a good feeling", "Do you like seafood?", "Sooo... I'd like to know, are you interested in me?:)"];
    var maybePlusTalk = ["I’m only interested in one-night stands tbh, are you into that?", "Maybe you could be the one for me", "I like to read books, do you?", "I think reading is a good hobby", "Do you listen to music?", "I enjoy murder.. series! What about you?", "I think this world needs more justice", "Could you sacrifice yourself for greater good?", "Do you believe in a God or Gods?", "I believe in greater powers... you should too", "Taking a long walk on the beach always gives me a good feeling", "Do you like seafood?", "Sooo... I'd like to know, are you interested in me?:)"];
    var maybeMinusTalk = ["Do you have any siblings?"];
        
    var dateTalk = starterTalk.concat(bookTalk, musicTalk, familyTalk, justiceTalk, beliefTalk, seaTalk);

    var cardId; //klikatun kortin id
        
    document.addEventListener("click", function(e) {
        
        var container = document.getElementById("chat");
        var count = container.getElementsByTagName('div').length;
        console.log(count);
        
        if (count > 8) {
        var queue = document.getElementById("chat");
        var elements = queue.getElementsByTagName("div"); 
        queue.removeChild(elements[2]);
        queue.removeChild(elements[2]);
       }
        
        cardId = e.target.id;
        var a = document.getElementById(cardId).textContent; //teksti klikatussa kortissa
        //estää tyhjät viestit jos klikkaa muuta kuin korttia
        createAnswers: {
        if(!cards.includes(a))
            {
                break createAnswers;
            }
            
        //pelaaja esittää kysymyksen tai kommentin eli käyttää tumman kortin
        if(allbCards.includes(a)) 
    {
        //deitin vastaus luodaan
        var answerD = document.createElement("DIV");
        answerD.className = "dateAnswer";
        //deitin vastaukseen teksti ja pisteet riippuen kysymyksestä
            switch(a) {
                case "Do you have any sisters?":
                minus++;
                answerD.textContent = "Why are you asking about other women?? That’s suspicious >:c";  
                break;
                case "I like your style, it suits you":
                plus++;
                answerD.textContent = "Thank you :3";
                break;
                case "What are you interested in?":
                plus++;
                answerD.textContent = "There's a lot";
                break;
                case "What kind of music do you listen to?":
                plus++;
                answerD.textContent = "I love ambient the most";
                break;  
                case "What kind of books you read?":
                plus++;
                answerD.textContent = "I like all genres but I collect old books. Very old books. About mythology";
                break; 
                case "I wanna commit suicide":
                minus++;
                answerD.textContent = "Don't do it! You shouldn’t let your life go to waste";
                break; 
                case "How old are you?":
                answerD.textContent = "Enough to date you but not too much to be your mother :)";
                break;
                case "What is your favorite drink?":
                plus++;
                answerD.textContent = "bloody mary :)";
                break;
                case "I have a crippling depression":
                answerD.textContent = "That’s rough, I've been there too :(";
                break;
                case "What do you do for living?":
                answerD.textContent = "I work in customer service";
                break;
                case "You are so funny":
                plus++;
                answerD.textContent = "You too";
                break;
                case "You are a bit weird":
                answerD.textContent = "Well who wants to be a normie?:)";
                break;
                case "I really like you":
                plus++;
                answerD.textContent = "Aww thank you:)";
                break;
                case "What is your biggest dream?":
                plus++;
                answerD.textContent = "Hmm it's a secret:)";
                break;
                case "Do you have any brothers?":
                answerD.textContent = "Oh so you're into men too?";
                break; //kysymys-vastaukset
                case "Have you ever dated before?":
                minus++;
                answerD.textContent = "You need to know that?";
                break;
                case "What is your horoscope?":
                minus++;
                answerD.textContent = "Lol do you believe in horoscopes :D";
                break;
                case "I feel like nobody understands me:(":
                answerD.textContent = "Maybe I can understand you? :)";
                break;
                case "I hate my life":
                minus++;
                answerD.textContent = "Maybe I can make it better?:)";
                break; 
            }
    }
//pelaaja vastaa eli käyttää vaalean kortin
        else {
            if(yesAnswer.includes(a)) {
                if (yesPlusTalk.includes(dateTalk[0]))
                    {
                        plus++;
                    }
                else if (yesMinusTalk.includes(dateTalk[0]))
                    {
                        minus++;
                    }
                else {
                    plus = plus;
                }
            }
            else if(noAnswer.includes(a)) {
                if (noPlusTalk.includes(dateTalk[0]))
                    {
                        plus++;
                    }
                else if (noMinusTalk.includes(dateTalk[0]))
                    {
                        minus++;
                    }
                else {
                    plus = plus;
                }
            }
            else {  //maybeAnswer
                if (maybePlusTalk.includes(dateTalk[0]))
                    {
                        plus++;
                    }
                else if (maybeMinusTalk.includes(dateTalk[0]))
                    {
                        minus++;
                    }
                else {
                    plus = plus;
                }
            }
        }
            var total = plus - minus;
            
            //peli loppuu, pisteet menevät nollaan tai deitin viestit loppuvat
        if (total==0 || dateTalk.length==1)
        {
            //deitin lopetusviesti
            var answer = document.createElement("DIV");
            answer.className = "dateAnswer";
            answer.textContent = "I don't think this is going to work";
            $(answer).appendTo("#chat");
            //lopetusnäyttö
            var endChat = document.createElement("DIV");
            endChat.setAttribute("id", "endChat");
            endChat.textContent = "Octavia has left the chat";
            var endButton = document.createElement("BUTTON");
            endButton.setAttribute("id", "endButton");
            endButton.textContent = "You failed";
            endButton.onclick = 
                function nextPart() {
                //poista aiempi js
                $("#chatSection").remove();
                //poista elementit mainin sisältä
                $("#love").remove();
                document.getElementById("chatScript").remove();
                //tuo uusi script
                var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "testi.js"; 
            document.getElementsByTagName("head")[0].appendChild(script);
            return false;
        };
            
            endChat.appendChild(endButton);
            $(endChat).insertBefore("#noScreenClicks");
            $(endChat).hide();
                setTimeout(function(){
                    $(endChat).show();
                },1000);
            //esto korttien klikkaamiselle
            document.getElementById("noClicks").style.display = "inline-block";
        }
        
            function barRise() {
                var bar = document.querySelector(".loveBar:first-child");
                var bgcount = 0;
                var newT = total * 10;
                var oldT = total - 1;
                var oldH = oldT * 10;
                var id = setInterval(frame, 5);
                function frame() {
                        if (oldH == newT) {
                                clearInterval(id);
                        } else {
                            oldH++; 
                            bar.style.height = oldH + "%";
                        }
                    }
            }
            
            function barDrop() {
                var bar = document.querySelector(".loveBar:first-child");
                var bgcount = 0;
                var newT = total * 10;
                var oldT = total + 1;
                var oldH = oldT * 10;
                var id = setInterval(frame, 5);
                function frame() {
                        if (oldH == newT) {
                                clearInterval(id);
                        } else {
                            oldH--; 
                            bar.style.height = oldH + "%";
                    }
                }
            }

            if (total<total2)
                {
                    badSound.play();
                    barDrop();
                }
            else if (total>total2)
                {
                    goodSound.play();
                    barRise();
                }
            else {
                    total = total;
            }
            total2 = total;
            
        if (total==10)
            {
                //tapaamisehdotus
            var answerD = document.createElement("DIV");
            answerD.className = "dateAnswer";
            answerD.textContent = "I wanna meet u!";
            $(answerD).appendTo("#chat");
            var answerD = document.createElement("DIV");
            answerD.className = "dateAnswer";
            answerD.textContent = "Let's meets in Octobar";
            $(answerD).appendTo("#chat");
            //esto korttien klikkaamiselle
            document.getElementById("noClicks").style.display = "inline-block";
                //linkki sueraavaan osaan
                var endChat = document.createElement("DIV");
            endChat.setAttribute("id", "endChat");
            var endButton = document.createElement("BUTTON");
            endButton.setAttribute("id", "endButton");
            endButton.textContent = "Go to Octobar";
            endButton.onclick =
                function nextPart() {
                //poista aiempi js
                $("#chatSection").remove();
                //poista elementit mainin sisältä
                $("#love").remove();
                document.getElementById("chatScript").remove();
                //tuo uusi script
                var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "testi.js"; 
            document.getElementsByTagName("head")[0].appendChild(script);
            return false;
        };
            endChat.appendChild(endButton);
            $(endChat).insertBefore("#noScreenClicks");
            $(endChat).hide();
                setTimeout(function(){
                    $(endChat).show();
                },2000);
                break createAnswers;
            }
            
            //deitin vastaus pistetään näkyviin
        $(answerD).appendTo("#chat");
        //deitin kysymys
            
        var answer = document.createElement("DIV");
        answer.className = "dateAnswer";
        dateTalk.shift();
            console.log(dateTalk.length);
            if (dateTalk.length==1) {
                
                answer.textContent = "...";
        $(answer).appendTo("#chat");
                }
            else {
                  answer.textContent = dateTalk[0];
        $(answer).appendTo("#chat");
            }
        
        } //createAnswers päättyy
        
        var noClicksD = document.getElementById("noClicks");
        
        //ajastus viestien tulemiselle
        if(allbCards.includes(a))
            {
                $(answerD).hide();
                setTimeout(function(){
                    $(answerD).show();
                },1000);
                $(answer).hide();
                setTimeout(function(){
                    $(answer).show();
                },2000);
                $(noClicksD).show();
                setTimeout(function(){
                    $(noClicksD).hide();
                },2000);
            }
        else if (cards.includes(a))
            {
                $(answer).hide();
                setTimeout(function(){
                    $(answer).show();
                },1000);
                $(noClicksD).show();
                setTimeout(function(){
                    $(noClicksD).hide();
                },1000);
            }
        else {
                $(answer).hide();
                setTimeout(function(){
                    $(answer).show();
                },1000);
             }
        
    });
//scroll pysyy alhaalla
function scrollDown()
        {
    $("#chat").animate({ scrollTop: $(document).height() },'slow');
        }
setInterval(scrollDown,1000);  
        });