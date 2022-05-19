function results(){
        var x1 = result[0]+result[4]+result[8]+result[12]+result[16];
        var x2 = result[1]+result[5]+result[9]+result[13]+result[17];
        var x3 = result[2]+result[6]+result[10]+result[14]+result[18];
        var x4 = result[3]+result[7]+result[11]+result[15]+result[19];
        if (x1>=3){
          var a1 = "Extrovert";
        } else{
          var a1 = "Introvert";
        }
        if (x2>=3){
          var a2 = "Sensing";
        } else{
          var a2 = "Intutive";
        }
        if (x3>=3){
          var a3 = "Thinking";
        }
        else{
          var a3 = "Feeling";
        }
        if (x4>=3){
          var a4 = "Judging";
        }else{
          var a4 = "Perceiving";
        }
        const para = document.createElement("p");
        const node = document.createTextNode(a1+", "+a2+", "+a3+", "+a4+".");
        para.appendChild(node);
        const element = document.getElementById("r");
        const child = document.getElementById("t");
        element.insertBefore(para, child);
      };
var questions = ["a..... expend energy, enjoy groups ............. b..... conserve energy, enjoy one-on-one","a..... interpret matters literally, rely on common sense ............. b.....  look for meaning and possibilities, rely on foresight", " a..... logical, thinking, questioning ............. b.....  empathetic, feeling, accommodating", "a..... organized, orderly ............. b.....  flexible, adaptable", "a..... more outgoing, think out loud ............. b.....   more reserved, think to yourself", "a..... practical, realistic, experiential ............. b.....   imaginative, innovative, theoretical"," a..... candid, straight forward, frank ............. b.....   tactful, kind, encouraging", " a..... plan, schedule ............. b.....   unplanned, spontaneous", " a..... seek many tasks, public activities, interaction with others ............. b.....   seek more private, solitary activities with quiet to concentrate", "a..... standard, usual, conventional ............. b.....   different, novel, unique"," a..... firm, tend to criticize, hold the line ............. b.....   gentle, tend to appreciate, conciliate"," a..... regulated, structured ............. b.....   easygoing, “live” and “let live”"," a..... external, communicative, express yourself ............. b.....   internal, reticent, keep to yourself"," a..... consider immediate issues, focus on the here-and-now ............. b.....   look to the future, global perspective, “big picture", "a..... tough-minded, just ............. b.....   tender-hearted, merciful "," a..... preparation, plan ahead ............. b.....   go with the flow, adapt as you go ","a..... active, initiate ............. b.....   reflective, deliberate ", " a..... facts, things, seeing “what is” ............. b.....   ideas, dreams, seeing “what could be, philosophical", " a..... matter of fact, issue-oriented, principled ............. b.....   sensitive, people-oriented, compassionate", "a..... control, govern ............. b.....   liberty, freedom "];
      var i = -1;
      var synthesis = window.speechSynthesis;
      var voice = synthesis.getVoices().filter(function (voice) {
    return voice.lang === 'en';
  })[0];
      var speech = new SpeechSynthesisUtterance('Hello World');
      speech.lang = "en";
      speech.voice = voice;
      speech.pitch = 1;
      speech.volume = 1;
      speech.rate = 1;
      document.querySelector("#pause").addEventListener("click", () => {
        i++;
      speech.text = questions[i];
      synthesis.speak(speech);
      if(i==20){ 
        const m = document.getElementById("m");
          m.removeAttribute("hidden");
          m.setAttribute("aria-hidden", "false");     
        results();
      }
});
      document.querySelector("#start").addEventListener("click", () => {
        i--;
        speech.text = questions[i];
        synthesis.speak(speech);
});
      window.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("button");
        const result = document.getElementById("result");
        const main = document.getElementsByTagName("main")[0];
        let listening = false;
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        if (typeof SpeechRecognition !== "undefined") {
          const recognition = new SpeechRecognition();

          const stop = () => {
            main.classList.remove("speaking");
            recognition.stop();
            button.textContent = "Start listening";
          };

          const start = () => {
            main.classList.add("speaking");
            recognition.start();
            button.textContent = "Stop listening";
          };

          const onResult = event => {
            result.innerHTML = "";
            for (const res of event.results) {
              const text = document.createTextNode(res[0].transcript);
              const p = document.createElement("p");
              if (res.isFinal) {
                p.classList.add("final");
              }
              p.appendChild(text);
              result.appendChild(p);
            }
          };
           recognition.addEventListener('result', function(event){
              s = event.results[0][0].transcript;
              if (s.includes('a')){
                result[i] = 1;
              } else if(s.includes('b')){
                result[i] = -1;
              };
              console.log(result[i])
            });
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.addEventListener("result", onResult);
          button.addEventListener("click", event => {
            listening ? stop() : start();
            listening = !listening;
          });
        } else {
          button.remove();
          const message = document.getElementById("message");
          message.removeAttribute("hidden");
          message.setAttribute("aria-hidden", "false");
        }
      });
