<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
	<meta name="robots" content="index"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Florian Mauberger">
	<meta name="copyright" content="Florian Mauberger">
	<meta name="description" content="Fire Monitor permettra aux grandes infrastructures comme les entreprises, les hôpitaux, les ehpads d’être mieux protéger des incendies grâce aux fonctionnalités ajoutées.">
	<link rel="shortcut icon" href="./resources/pictures/icon/icon.ico" type="image/x-icon">
	<meta name="keywords" content="Fire Monitor, Fire, Monitor, Monitoring, Innovative project"/>
    <link rel="stylesheet" href="./styles/panel.css">
	<title>FireMonitor | PanelAdmin</title>
</head>
<body>
	
	<div class="burger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>

	<div class="topbar">
		
		<img src="./resources/pictures/logo.svg" alt="">
		
		<ul>
		<a href="./index.php"><li>accueil</li></a>
		<a href="./further.php"><li>en savoir plus</li></a>
		<a href="./panel.php"><li>panel admin</li></a>
		<a href="./contact.php"><li>contact</li></a>
			<button>Logout</button>
		</ul>
	
	</div>

	<div class="container">
		<h1>Bienvenue sur le Panel Admin !</h1>
		<canvas id="myChart"></canvas>
		<div class="contralBar">
			<button>Start</button>
			<button>Pause</button>
			<button>Stop</button>
			<button>Info</button>
		</div>
		<div class="infoBar">
			<p class="infoP"></p>
		</div>



	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
	<script src="./scripts/panel.js"></script>


</body>
</html>