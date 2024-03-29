import styles from './nav-bar.module.css';

export default () => `<!doctype html>
<!DOCTYPE html>
<html lang="en"> 
	<head>
		<meta charset="UTF-8">
		<title>fireAnt Sass Project</title>
		<link rel="stylesheet" href="./css/cssSass.css">
		<link href='http://fonts.googleapis.com/css?family=Antic' rel='stylesheet' type='text/css'/>
	</head>
<body>
	<div id="wrapper">
	<nav>
		<h1>Photo Art</h1>
			<ul>
				<li>Home</li>
				<li><a href="">About</a></li>
				<li><a href="">Privacy</a></li>
				<li><a href="">Gallery</a></li>
	   			<li><a href="">Contact</a></li>
				<li><a href="">Sitemap</a></li>
			</ul>	
				<div class="clear"></div>
	</nav>
	<main id="main">
		<article>
		<div id="column1">
			<ul>
				<li><span>pink flower</span></li>
				<li><span>white flower</span></li>
				<li><span>orange flower</span></li>
			</ul>
		</div>
		<div id="subnav">
			<ul>
				<li><a href="">Category 1</a></li>
				<li><a href="">Category 2</a></li>
				<li><a href="">Category 3</a></li>
				<li><a href="">Category 4</a></li>
				<li><a href="">Category 5</a></li>
			</ul>
			<div class="clear"></div>
			<p><span>flowers</span></p>
		</div>
	</article>
	<article>
		<div id="client">
			<h2>My Clients</h2>
		<ul>
			<li><a href="">Sed ut perspiciatis</a></li>
			<li><a href="">Unde omnis iste</a></li>
			<li><a href="">Natus error sit volup</a></li>
			<li><a href="">Tatem accusantium</a></li>
			<li><span>camera</span></li>
		</ul>
		</div>
		<div id="welcome">
			<h2>Welcome!</h2>
			<ul>
				<li><span>White Flower</span></li>
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
			</ul>
		</div>
<div id="fresh">
	<h2>Fresh News</h2>
<ul>
	<li><a href="">Nam libero tempore</a></li>
	<li>Cum soluta nobis est eligendi optio cumque.</li>
	<li><a href="">Ut enim ad minima veniam</a></li>
	<li>Quis autem vel eum iure reprehenderit qui.</li>
	<li><a href="">Sed perspiciatis unde</a></li>
	<li>Nemo enim ipsam voluptatem quia voluptas aspernatur.</li>
</ul>
</div>
	</article>
	</main>
	</div>
<!--wrapper-->

</body>
</html>`;
