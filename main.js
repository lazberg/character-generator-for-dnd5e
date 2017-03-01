// NAMES
var firstName = "No";
var lastName = "Face";
var sex = 0;
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

// CORE RULEBOOK RACES - - ABILITIES: STR, DEX, CON, INT, WIS, CHA
var race = 0;
var raceBonus = [0, 0, 0, 0, 0, 0];
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
var racials = [human, highElf, rockGnome, halfOrc, mountainDwarf, hillDwarf, darkElf, woodElf, lightfootHalfling, stoutHalfling, dragonborn, forestGnome, halfElf, tiefling];

// CORE RULEBOOK CLASSES
var barbarian = {role:"Barbarian", primaryStat:"STR", secondaryStat:"CON", hitDice:12};
var bard = {role:"Bard", primaryStat:"CHA", secondaryStat:"DEX", hitDice:8};
var cleric = {role:"Cleric", primaryStat:"WIS", secondaryStat:RandomStatPriority("STR", "CON"), hitDice:8};
var druid = {role:"Druid", primaryStat:"WIS", secondaryStat:"CON", hitDice:8};
var fighter = {role:"Fighter", primaryStat:RandomStatPriority("STR", "DEX"), secondaryStat:"CON", hitDice:10};
var monk = {role:"Monk", primaryStat:"DEX", secondaryStat:"WIS", hitDice:8};
var paladin = {role:"Paladin", primaryStat:RandomStatPriority("STR", "CHA"), secondaryStat:"CON", hitDice:10};
var ranger = {role:"Ranger", primaryStat:"DEX", secondaryStat:"CON", hitDice:10};
var rogue = {role:"Rogue", primaryStat:"DEX", secondaryStat:"CON", hitDice:8};
var sorcerer = {role:"Sorcerer", primaryStat:"CHA", secondaryStat:"CON", hitDice:8};
var warlock = {role:"Warlock", primaryStat:"CHA", secondaryStat:"CON", hitDice:8};
var wizard = {role:"Wizard", primaryStat:"INT", secondaryStat:"WIS", hitDice:8};
var classes = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard];
var classRoll = undefined;

// Variables used for ability scores.
var abilityScores = [];
var abilityModifier = [];
var primary = 0;
var secondary = 0;

function ResetStats() {
	cleric.secondaryStat = RandomStatPriority("STR", "CON");
	fighter.primaryStat = RandomStatPriority("STR", "DEX");
	paladin.primaryStat = RandomStatPriority("STR", "CHA");
}

function RandomStatPriority(stat1, stat2){
	var result = Dice(2);
	if (result == 1) {
		return stat1;
	}
	if (result == 2) {
		return stat2;
	}
}

function RollClass() {
	// Rolls Classes
	
	classRoll = classes[Math.floor((Math.random() *classes.length))];
	//classRoll = classes[2];
}

function DiceRoll() {
	// Rolls the range between 1 and the number that is put into the prompt window.
	var dice = prompt("What dice do you want to roll?");
	var diceRoll = Dice(dice);
	console.log( diceRoll );
}

function RollGender(){
	// Rolls Gender
	sex = Math.floor((Math.random() *2));
}
function RollName(gender){
	// Rolls the name of the character depending on race and gender.
	var maleOrFemale = race.namepool[gender];
	var surname = race.namepool[2];
	firstName = maleOrFemale[Math.floor((Math.random() *maleOrFemale.length))];
	lastName = surname[[Math.floor((Math.random() *surname.length))]];
	console.log(firstName + " " + lastName);
}

function Dice(d) {
	// Simple code for rolling the number between 1 and number(d).
	return Math.floor(Math.random() * (d-1 + 1)) + 1;
}

function RollRace() {
	// Rolls race, gender and name, as well as making the variable of racebonus set to specific race.
	race = racials[Math.floor((Math.random() *racials.length))];
	console.log(race);
	RollGender();
	RollName(sex);
	document.getElementById('Race').innerHTML="A "+race.race+" "+classRoll.role;
	document.getElementById('Name').innerHTML=firstName+" "+lastName;
	raceBonus = race.ability;
}

function RollAbility(){
	// For now rolls entire character.
	// code mostly rolls ability scores and determines ability modifiers.
	ResetStats();
	RollClass();
	RollRace();
	abilityScores = [];
	abilityModifier = [];
	primary = 0;
	secondary = 0;
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
	}
	
	primary = Math.max(abilityScores[0], abilityScores[1], abilityScores[2], abilityScores[3], abilityScores[4], abilityScores[5] );
	abilityScores.splice(abilityScores.indexOf(primary), 1);

	secondary = Math.max(abilityScores[0], abilityScores[1], abilityScores[2], abilityScores[3], abilityScores[4] );
	abilityScores.splice(abilityScores.indexOf(secondary), 1);
	getPrimary();
	
	document.getElementById('Str').innerHTML = abilityScores[0];
	document.getElementById('Dex').innerHTML = abilityScores[1];
	document.getElementById('Con').innerHTML = abilityScores[2];
	document.getElementById('Int').innerHTML = abilityScores[3];
	document.getElementById('Wis').innerHTML = abilityScores[4];
	document.getElementById('Cha').innerHTML = abilityScores[5];
	
	for (var i = 0;i<abilityScores.length;i++){
		abilityModifier.push(GetModifier(abilityScores[i]));
	}
	document.getElementById('StrMod').innerHTML = abilityModifier[0];
	document.getElementById('DexMod').innerHTML = abilityModifier[1];
	document.getElementById('ConMod').innerHTML = abilityModifier[2];
	document.getElementById('IntMod').innerHTML = abilityModifier[3];
	document.getElementById('WisMod').innerHTML = abilityModifier[4];
	document.getElementById('ChaMod').innerHTML = abilityModifier[5];
}
function findStatNumber(ability) {
	if (ability=="STR"){
		return 0;
	}
	else if (ability=="DEX"){
		return 1;
	}
	else if (ability=="CON"){
		return 2;
	}
	else if (ability=="INT"){
		return 3;
	}
	else if (ability=="WIS"){
		return 4;
	}
	else if (ability=="CHA"){
		return 5;
	}
}
function getPrimary() {
	var primaryNum = findStatNumber(classRoll.primaryStat);
	var secondaryNum = findStatNumber(classRoll.secondaryStat);
	
	if (primaryNum < secondaryNum){
		abilityScores.splice(primaryNum, 0, primary);
		abilityScores.splice(secondaryNum, 0, secondary);
	}
	else if (primaryNum > secondaryNum){
		abilityScores.splice(secondaryNum, 0, secondary);
		abilityScores.splice(primaryNum, 0, primary);
	}
	
}

function GetModifier(score) {
	// Determines ability modifier depending on ability score.
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
