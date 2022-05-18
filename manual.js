const MbtiModule = function() {
	let types = {
		ISTJ: {title: "The Traditionalist", percentage: "13.7%", description: "Dutiful, Practical, Logical, Methodical", site: "http://www.personalitypage.com/html/ISTJ.html"},
		ISFJ: {title: "The Protector", percentage: "12.7%", description: "Dutiful, Practical, Supportive, Meticulous", site: "http://www.personalitypage.com/html/ISFJ.html"},
		INFJ: {title: "The Guide", percentage: "1.7%", description: "Devoted, Innovative, Idealistic, Compassionate", site: "http://www.personalitypage.com/html/INFJ.html"},
		INTJ: {title: "The Visionary", percentage: "1.4%", description: "Independent, Innovative, Analytical, Purposeful", site: "http://www.personalitypage.com/html/INTJ.html"},
		ISTP: {title: "The Problem-Solver", percentage: "6.4%", description: "Expedient, Practical, Objective, Adaptable", site: "http://www.personalitypage.com/html/ISTP.html"},
		ISFP: {title: "The Harmonizer", percentage: "6.1%", description: "Tolerant, Realistic, Harmonious, Adaptable", site: "http://www.personalitypage.com/html/ISFP.html"},
		INFP: {title: "The Humanist", percentage: "3.2%", description: "Insightful, Innovative, Idealistic, Adaptable", site: "http://www.personalitypage.com/html/INFP.html"},
		INTP: {title: "The Conceptualizer", percentage: "2.4%", description: "Questioning, Innovative, Objective, Abstract", site: "http://www.personalitypage.com/html/INTP.html"},
		ESTP: {title: "The Activist", percentage: "5.8%", description: "Energetic, Practical, Pragmatic, Spontaneous", site: "http://www.personalitypage.com/html/ESTP.html"},
		ESFP: {title: "The Fun-Lover", percentage: "8.7%", description: "Spontaneous, Practical, Friendly, Harmonious", site: "http://www.personalitypage.com/html/ESFP.html"},
		ENFP: {title: "The Enthusiast", percentage: "6.3%", description: "Optimistic, Innovative, Compassionate, Versatile", site: "http://www.personalitypage.com/html/ENFP.html"},
		ENTP: {title: "The Entrepreneur", percentage: "2.8%", description: "Risk-Taking, Innovative, Outgoing, Adaptable", site: "http://www.personalitypage.com/html/ENTP.html"},
		ESTJ: {title: "The Coordinator", percentage: "10.4%", description: "Organized, Practical, Logical, Outgoing", site: "http://www.personalitypage.com/html/ESTJ.html"},
		ESFJ: {title: "The Supporter", percentage: "12.6%", description: "Friendly, Practical, Loyal, Organized", site: "http://www.personalitypage.com/html/ESFJ.html"},
		ENFJ: {title: "The Developer", percentage: "2.8%", description: "Friendly, Innovative, Supportive, Idealistic", site: "http://www.personalitypage.com/html/ENFJ.html"},
		ENTJ: {title: "The Reformer", percentage: "2.9%", description: "Determined, Innovative, Strategic, Outgoing", site: "http://www.personalitypage.com/html/ENTJ.html"}
	};
	let e, i, s, n, t, f, j, p;
	let type;
	
	function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
	}
	
	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
				}
			}
		});
	}
	
	function calculatePercentages() {
		e = Math.floor(e / 10 * 100);
		i = Math.floor(i / 10 * 100);
		s = Math.floor(s / 20 * 100);
		n = Math.floor(n / 20 * 100);
		t = Math.floor(t / 20 * 100);
		f = Math.floor(f / 20 * 100);
		j = Math.floor(j / 20 * 100);
		p = Math.floor(p / 20 * 100);
	}
	
	function createCharts() {
		document.querySelector("#eScore").innerHTML = e;
		document.querySelector("#iScore").innerHTML = i;
		document.querySelector("#sScore").innerHTML = s;
		document.querySelector("#nScore").innerHTML = n;
		document.querySelector("#tScore").innerHTML = t;
		document.querySelector("#fScore").innerHTML = f;
		document.querySelector("#jScore").innerHTML = j;
		document.querySelector("#pScore").innerHTML = p;
		
		document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
		document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
		document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
		document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
	}
	
	function showResults() {
		type += (e >= i) ? "E" : "I";
		type += (s >= n) ? "S" : "N";
		type += (t >= f) ? "T" : "F";
		type += (j >= p) ? "J" : "P";
		document.querySelector("#type").innerHTML = type;
		document.querySelector("#type-title").innerHTML = types[type].title;
		document.querySelector("#type-percentage").innerHTML = types[type].percentage;
		document.querySelector("#type-description").innerHTML = types[type].description;
		document.querySelector("#type-site").href = types[type].site;
		
		document.querySelector("#type-details").classList.remove("hidden");
		document.querySelector("#scroll-down").classList.remove("hidden");
		document.querySelector("#results").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			calculatePercentages();
			createCharts();
			showResults();
		}
	};
}();
document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });