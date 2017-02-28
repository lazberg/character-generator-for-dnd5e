

function DiceRoll() {
	var dice = prompt("What dice do you want to roll?");
	var diceRoll = Dice(dice);
	console.log( diceRoll );
}

function Dice(d) {
	return Math.floor(Math.random() * (d-1 + 1)) + 1;
}

function RollAbility(){
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
		rollTotal = roll1+roll2+roll3+roll4-Math.min(roll1,roll2,roll3,roll4);
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