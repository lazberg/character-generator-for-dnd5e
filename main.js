<DOCTYPE! html>
<html>
<head>
	<script src="main.js"></script>
	<title>Edo's D&amp;D5e Character Randomizer</title>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<style>	
		@keyframes fadein{
			from {
				opacity:0;
			}
			to {
				opacity:1;
			}
		}
		body{
			animation: fadein 0.5s;
			background:#AB956C;
			background-image:url('http://orig06.deviantart.net/14f9/f/2007/177/a/8/seamless_parchment_texture_by_fantasystock.jpg');
			font-family: 'Open Sans', sans-serif;
		}
		h1,h2,p{
			animation: fadein 0.4s;
		}
		#wrapper{
			animation: fadein 0.5s;
			background:rgba(255,255,255,0.75);
			width:500px;
			min-height:0px;
			margin:0 auto 0 auto;
			padding:30px 20px 20px 20px;
			text-align:center;
			border-radius:10px;
		}
		th{
			width:100px;
			background:#eee;
			border-color:maroon;
			border-style:outset;
			border-width:2px;
		}
		tr:nth-child(even) {
			background-color: #eee;
		}
		table{
			animation: fadein 0.4s;
			border-collapse:collapse;
			border-color:maroon;
			border-style:inset;
			border-width:2px;
			background:white;
			margin:0 auto 0 auto;
		}
		button {
			background-color: maroon;
			border: none;
			color: white;
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			border-radius:5px;
		}
		button:active {
			background:#300000;
		}
	</style>
</head>
<body>
<div id="wrapper">
<!--<button value="Roll Dice" onclick="DiceRoll()">Roll Dice</button>-->
<button value="Roll Ability" onclick="RollCharacter()" style="vertical-align:middle;">Summon Character!</button><img style="vertical-align:middle;margin-left:10px;" src="aust.gif"/>
<h1 id="Name" style="display:none;"></h1>
<h2 id="Race" style="display:none;"></h1>
<table id="abiTable" style="display:none;">
	<tr>
	<th>Ability</th>
	<th>Score</th>
	<th>Modifier</th>
	</tr>
	<tr>
	<td>Strength</td>
	<td id="Str"></td>
	<td id="StrMod"></td>
	</tr>
	<tr>
	<td>Dexterity</td>
	<td id="Dex"></td>
	<td id="DexMod"></td>
	</tr>
	<tr>
	<td>Constitution</td>
	<td id="Con"></td>
	<td id="ConMod"></td>
	</tr>
	<tr>
	<td>Intelligence</td>
	<td id="Int"></td>
	<td id="IntMod"></td>
	</tr>
	<tr>
	<td>Wisdom</td>
	<td id="Wis"></td>
	<td id="WisMod"></td>
	</tr>
	<tr>
	<td>Charisma</td>
	<td id="Cha"></td>
	<td id="ChaMod"></td>
	</tr>
</table>
<p id="health" style="display:none;"></p>
</div>
</body>
</html>
