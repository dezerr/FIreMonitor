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
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
	<link rel="stylesheet" href="./styles/signup.css">
	<title>FireMonitor | Signup</title>
</head>
<body>

	<div class="topbar">
		
		<img src="./resources/pictures/logo.svg" alt="">
		
		<ul>
		<a href="./index.php"><li>accueil</li></a>
		<a href="./further.php"><li>en savoir plus</li></a>
		<a href="./panel.php"><li>panel admin</li></a>
		<a href="./contact.php"><li>contact</li></a>
		<a href="./login.php"><button>Login</button></a>
		</ul>
	
	</div>

	<div class="container">
		<h1>Veuillez vous inscrire</h1>
		<form action="" method="get" class="form-example">
		
		<div class="block">
			  <input type="text" name="user" id="user" placeholder="Nom d'utilisateur" required>
			<input type="date" name="age" id="age" placeholder="Age" required>
		</div>
		
		  <input type="email" name="email" id="email" placeholder="Email" required>

		  <input type="password" name="password" id="password" placeholder="Mot de passe" required>
	  
		  <input type="submit" value="S'INSCRIRE" id="submit">

	  </form>

		<a href="./login.php"><p>Si vous avez déjà un compte</p></a>
	  
	</div>


	<div class="mobile">
		<a href="./index.php"><i class="fas fa-home"></i></a>
		<a href="./further.php"><i class="fas fa-plus-square"></i></a>
		<a href="./panel.php"><i class="fas fa-users-cog"></i></a>
		<a href="./contact.php"><i class="fas fa-id-card-alt"></i></a>
		<a href="./login.php"><i class="fas fa-sign-in-alt" id="onThePage"></i></a>
	</div>


</body>
</html>