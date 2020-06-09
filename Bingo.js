function GenerateBoard(arr)
{
	// Shuffle array & grab elements
	var items =  arr.sort(() => Math.random() - Math.random()).slice(0, 25)
	
	var str = "";
	
	for(i = 0; i < 25; i++)
	{
	
		
		// For new Lines
		if(i % 5 == 0) str += "<p>";
		
		// Add DIV
		str += '<div class="BingoBox">';
		
		if(i == 12)
		{
			str += "Free";
		}
		else
		{
			str += items[i];
		}
		
		str += '</div>';
		
		if(i % 5 == 4) str += "</p>";
		
	}
	
	$("#GameBody").html(str);
	
	$(".BingoBox").on("click", function() {
		$(this).toggleClass("BingoMark")
	})
}


function Games()
{
	var games = [
		"Old School IP",
		"Brand New IP",
		"Series Started on PS1",
		"Series Started on PS2",
		"Series Started on PS3",
		"Series Started on PS4",
		"Series Available on VITA",
		"Series Available on PSP",
		"2 In it's Name",
		"3 In it's Name",
		"Open World",
		"Online",
		"Couch Co-Op",
		"4K60",
		"4K30",
		"Free to Play",
		"Studio: Bend Studio",
		"Studio: Guerrilla Games",
		"Studio: Insomniac Games",
		"Studio: Japan Studio",
		"Studio: London Studio",
		"Studio: Media Molecule",
		"Studio: Naughty Dog",
		"Studio: Polyphony Digital",
		"Studio: San Diego Studio",
		"Studio: Santa Monica Studio",
		"Studio: Sucker Punch Studio",
		"Call of Duty",
		"VR Game",
		"Ubisoft Game",
		"Rockstar Game",
		"EA Game",
		"Activision Game",
		"Bandai Namco Game",
		"Square Enix Game",
		"Konami Game",
		"Capcom Game",
		"Indie Game",
		"Cross Play",
		"FPS Game",
		"RPG Game",
		"Racing Game",
		"Fighting Game",
		"Puzzle Game",
		"Card Game",
		"Action Game",
		"Sports Game",
		"Simulation Game",
		"Strategy Game",
		"Platformer",
		"A Game"
	];
		
	return games;
}


function System()
{
	var system = [
		"Console Price",
		"Console Design",
		"Launch Date",
		"Tempest Engine Demo",
		"SSD Speed Demo",
		"VR Demo",
		"UI Demo",
		"Pre-Order Now",
		"Delayed to 2021",
		"PS4 BC Demo",
		"PS+ Discussion",
		"PS Now Discussion",
		"Price over $450",
		"Price under $450",
		"PS2 BC",
		"PS1 BC",
		"PS3 BC",
		"Vita BC",
		"Teraflops Mentioned",
		"Ray Tracing Talk",
		"Updated Store",
		"X Time more Powerful",
		"...Fast...",
		"...Kraken...",
		"...Custom...",
		"...SSD...",
		"...Soon..."
		
	];
	
	return system;
}

function Event()
{
	var event = [
		"Moment of Silence",
		"Covering Public Details (Known)",
		"Mark Cerny",
		"Shuhei Yoshida",
		"Starts on Time",
		
		"Longer then 75 Minutes",
		"Shorter then 75 Minutes",
		"15+ Games Shown",
		"5+ Multiplatforms Shown",
		"5+ Exclusives Shown",
		
		"Brand New Studio",
		"Studio Aquired",
		"Cringy Moment",
		"Someone in a Mask",
		"Social Distancing",
		
		"AMD Mentioned",
		"...Best...",
		"New PSVR",
		"One More Thing",
		"Singers",
		"Celebrity",
		
		"More to Share Soon",
		"Upcoming Events",
		"On Schedule",
		"Executive No One has Heard Of",
		"One Person Indie Team",
		
	];
	
	return event;
}

function All()
{
	var games = Games();
	var system = System();
	var event = Event();
	
	var all = games.concat(system,event);
	
	return all;
}

$(document).ready(function(){

	// Games Link
	$("#games").on("click", function() {
		var games = Games();
		
		GenerateBoard(games)
	});
	
	// System Link
	$("#system").on("click", function() {
		var system = System();
		
		GenerateBoard(system)
	});
	
	// Event
	$("#event").on("click", function() {
		var event = Event();
		
		GenerateBoard(event)
	});
	
	// All
	$("#all").on("click", function() {
		var all = All();
		
		GenerateBoard(all)
	});
	
	// Initial State
	var games = Games();
	GenerateBoard(games)
	
});

