var race = 0;
var raceBonus = [0, 0, 0, 0, 0, 0];
var firstName = "No";
var lastName = "Face";
var sex = 0;

// NAMES
var namePool = [elfNames, humanNames, dwarfNames]

var elfMale = ["Adran", "Aelar", "Aramil", "Arannis", "Aust"];
var elfFemale = ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua"];
var elfSurname = ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon"];
var elfNames = [elfMale, elfFemale, elfSurname];

var dwarfMale = [ "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal" ];
var dwarfFemale = [ "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra" ];
var dwarfSurname = [ "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart" ];
var dwarfNames = [dwarfMale, dwarfFemale, dwarfSurname];

var humanMale = [ "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor" ];
var humanFemale = [ "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora" ];
var humanSurname = [ "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag" ];
var humanNames = [humanMale, humanFemale, humanSurname];

// ABILITIES: STR, DEX, CON, INT, WIS, CHA
var hillDwarf = {race:"Hill Dwarf", ability:[0, 0, 2, 0, 1, 0], speed:25, namepool:dwarfNames};
var mountainDwarf = {race:"Mountain Dwarf", ability:[2, 0, 2, 0, 0, 0], speed:25, namepool:dwarfNames};
var highElf = {race:"High Elf", ability:[0, 2, 0, 1, 0, 0], speed:30, namepool:elfNames};
var woodElf = {race:"Wood Elf", ability:[0, 2, 0, 0, 1, 0], speed:35, namepool:elfNames};
var darkElf = {race:"Dark Elf (Drow)", ability:[0, 2, 0, 0, 0, 1], speed:30, namepool:elfNames};
var lightfootHalfling = {race:"Lightfoot Halfling", ability:[0, 2, 0, 0, 0, 1], speed:25, namepool:humanNames};
var stoutHalfling = {race:"Stout Halfling", ability:[0, 2, 1, 0, 0, 0], speed:25, namepool:humanNames};
var human = {race:"Human", ability:[1, 1, 1, 1, 1, 1], speed:30, namepool:humanNames};
var dragonborn = {race:"Dragonborn", ability:[2, 0, 0, 0, 0, 1], speed:30, namepool:humanNames};
var forestGnome = {race:"Forest Gnome", ability:[0, 1, 0, 2, 0, 0], speed:25, namepool:humanNames};
var rockGnome = {race:"Rock Gnome", ability:[0, 0, 1, 2, 0, 0], speed:25, namepool:humanNames};
var halfElf = {race:"Half-Elf", ability:[0, 1, 1, 0, 0, 2], speed:30, namepool:humanNames};
var halfOrc = {race:"Half-Orc", ability:[2, 0, 1, 0, 0, 0], speed:30, namepool:humanNames};
var tiefling = {race:"Tiefling", ability:[0, 0, 0, 1, 0, 2], speed:30, namepool:humanNames};
// var blank = {race:"Unknown Race", ability:[0, 0, 0, 0, 0, 0], speed:30};
var racials = [human, highElf, rockGnome, halfOrc, mountainDwarf, hillDwarf, darkElf, woodElf, lightfootHalfling, stoutHalfling, dragonborn, forestGnome, halfElf, tiefling];

var barbarian = {role:"Barbarian", primaryStat:"STR", secondaryStat:"CON", hitDice:12};
var bard = {role:"Bard", primaryStat:"CHA", secondaryStat:"DEX", hitDice:8};
var cleric1 = {role:"Cleric", primaryStat:"WIS", secondaryStat:"STR", hitDice:8};
var cleric2 = {role:"Cleric", primaryStat:"WIS", secondaryStat:"CON", hitDice:8};
var druid = {role:"Druid", primaryStat:"WIS", secondaryStat:"CON", hitDice:8};
// var blank = {role:"Blank", primaryStat:"STR", secondaryStat:"CON", hitDice:8};

var classes = [barbarian, bard, cleric1, cleric2, druid]
var classRoll = undefined;

function RollClass() {
	classRoll = classes[Math.floor((Math.random() *classes.length))];
}

function DiceRoll() {
	var dice = prompt("What dice do you want to roll?");
	var diceRoll = Dice(dice);
	console.log( diceRoll );
}

function RollGender(){
	sex = Math.floor((Math.random() *2));
}
function RollName(gender){
	var maleOrFemale = race.namepool[gender];
	var surname = race.namepool[2];
	firstName = maleOrFemale[Math.floor((Math.random() *maleOrFemale.length))];
	lastName = surname[[Math.floor((Math.random() *surname.length))]];
	console.log(firstName + " " + lastName);
}

function Dice(d) {
	return Math.floor(Math.random() * (d-1 + 1)) + 1;
}

function RollRace() {
	race = racials[Math.floor((Math.random() *racials.length))];
	console.log(race);
	RollGender();
	RollName(sex);
	document.getElementById('Race').innerHTML="A "+race.race+" "+classRoll.role;
	document.getElementById('Name').innerHTML=firstName+" "+lastName;
	raceBonus = race.ability;
}

function RollAbility(){
	RollClass();
	RollRace();
	var abilityScores = [];
	var abilityModifier = [];
	for(var i = 0;i<6;i++){
		var rollTotal = 0;
		var roll1 = 0;
		var roll2 = 0;
		var roll3 = 0;
		var roll4 = 0;
		roll1 = Dice(6);
		roll2 = Dice(6);
		roll3 = Dice(6);
		roll4 = Dice(6);
		rollTotal = roll1+roll2+roll3+roll4-Math.min(roll1,roll2,roll3,roll4)+raceBonus[i];
		abilityScores.push(rollTotal);
		abilityModifier.push(GetModifier(rollTotal));
	}
	document.getElementById('Str').innerHTML = abilityScores[0];
	document.getElementById('Dex').innerHTML = abilityScores[1];
	document.getElementById('Con').innerHTML = abilityScores[2];
	document.getElementById('Int').innerHTML = abilityScores[3];
	document.getElementById('Wis').innerHTML = abilityScores[4];
	document.getElementById('Cha').innerHTML = abilityScores[5];
	document.getElementById('StrMod').innerHTML = abilityModifier[0];
	document.getElementById('DexMod').innerHTML = abilityModifier[1];
	document.getElementById('ConMod').innerHTML = abilityModifier[2];
	document.getElementById('IntMod').innerHTML = abilityModifier[3];
	document.getElementById('WisMod').innerHTML = abilityModifier[4];
	document.getElementById('ChaMod').innerHTML = abilityModifier[5];
}

function GetModifier(score) {
	if (score == 0 || score == 1) {
		return -5;
	}
	else if (score == 2 || score == 3) {
		return -4;
	}
	else if (score == 4 || score == 5) {
		return -3;
	}
	else if (score == 6 || score == 7) {
		return -2;
	}
	else if (score == 8 || score == 9) {
		return -1;
	}
	else if (score == 10 || score == 11) {
		return 0;
	}
	else if (score == 12 || score == 13) {
		return 1;
	}
	else if (score == 14 || score == 15) {
		return 2;
	}
	else if (score == 16 || score == 17) {
		return 3;
	}
	else if (score == 18 || score == 19) {
		return 4;
	}
	else if (score == 20 || score == 21) {
		return 5;
	}
}
