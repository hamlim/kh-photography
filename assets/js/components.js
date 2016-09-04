import React from 'react'


export class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header-block">
					<h1><span className="header-name" id="name">Kyle Hamlin</span></h1>
					<h2><span className="header-lead">Photographer</span></h2>
				</div>
				<div className="header-image-wrap">
					<picture aria-labelledby="name" className="header-image">
						<source className="header-image-pic" srcSet={"./assets/img/kyle.jpg"}  />
						<img className="header-image-pic" aria-labelledby="name" src={"./assets/img/kyle.jpg"} height={"300"} /> 
					</picture>
				</div>
			</header>
		);
	}
};

export class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<nav className="main-nav">
					<h3><a href="#" className="link">Home</a></h3>
					<h3><a href="#about" className="link">About Me</a></h3>
					<h3><a href="#resume" className="link">My Resume</a></h3>
					<h3><a href="#contact" className="link">Contact Me</a></h3>
				</nav>
				<article className="article">
					<section id="about">
						<h1>About Me</h1>
					</section>
					<section id="resume">
						<h1>My Resume</h1>
					</section>
					<section id="contact">
						<h1>Contact Me</h1>
					</section>
				</article>
			</main>
		);
	}
};

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<h4 className="">&copy; 2016 <a href="https://matthamlin.me" className="link">Matt Hamlin</a></h4>
			</footer>
		);
	}
};