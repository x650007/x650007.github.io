<!-- script language="javascript" type="text/javascript">
 setTimeout("javascript:location.href='http://baidu.com'",5000);
</script -->
<style type="text/css">
h1 {display: none;}
/* It should work nicely on Firefox, Chrome, and Edge */

/* to contain the eyes */
section{
	position: relative;
	display: flex;
	font-size: 1.8vmin;
	margin-bottom: 11vmin;
	transform: rotate(30deg) scale(0);
	animation: bounce cubic-bezier(.18, .89, .32, 1.28) 0.4s forwards;
	animation-play-state: var(--play-state, running);
	pointer-events: none;

	--color-sclera: #fff;
	--color-eyes: #5e9cff;
	--color-eyebrows: #5e9cff;
	--color-eye-border: rgba(8, 33, 133, 0.16);
	--color-blush: rgb(255, 194, 212);
	--color-blush-border: rgba(0, 0, 0, 0);
}

section[data-green]{
	--color-eyes: rgb(158, 221, 109);
	--color-eyebrows: rgb(158, 221, 109);
	--color-eye-border: rgb(67, 46, 27);
	--color-blush: rgb(255, 194, 212);
	--color-blush-border: rgb(223, 149, 169);
}

@keyframes bounce{
	to{
		transform: rotate(0deg) scale(1);
	}
}

/* blush spots */
section::before,
section::after{
	content: "";
	position: absolute;
	bottom: 0;
	width: 6em;
	height: 6em;
	background-color: var(--color-blush);
	box-shadow: 0 0 0 0.5em var(--color-blush-border);
	border-radius: 54% 46% 53% 47% / 52% 36% 64% 48%;
	animation: blush ease-out 9s 0.4s forwards;
	animation-play-state: var(--play-state, running);
	opacity: 0;
}

@keyframes blush{
	10%, 35%{
		opacity: 1;
	}
	40%, 65%{
		opacity: 0;
	}
	70%, 100%{
		opacity: 1;
	}
}

section::before{
	transform: translate(-100%, 160%);
	left: 0;
}

section::after{
	transform: translate(100%, 160%) scaleX(-1);
	right: 0;
}

.eye{
	position: relative;
	width: 11em;
	height: 20em;
	border-radius: 10em;
	margin: 1.8em;
	background-color: var(--color-sclera);
	flex: 1;
	overflow: hidden;
	box-shadow: 0 0 0 0.5em var(--color-eye-border);
	box-sizing: border-box;
}

/* pupil */
.eye::before{
	content: "";
	position: absolute;
	left: 50%;
	top: 50%;
	font-size: 50%;
	width: 11em;
	height: 24em;
	background-color: var(--color-eyes);
	background-repeat: no-repeat;
	transform: translate(-50%, -50%) translate(0, 0);
	border-radius: inherit;
	display: block;

	-webkit-mask: linear-gradient(#fff, #fff);
	-webkit-mask-composite: source-in;
	-webkit-mask-size: 100% 100%;
	-webkit-mask-position: left 0px bottom 50%;
	-webkit-mask-repeat: no-repeat;

	mask: linear-gradient(#fff, #fff);
	mask-composite: add;
	mask-size: 100% 100%;
	mask-position: left 0px bottom 50%;
	mask-repeat: no-repeat;

	animation: 
		blink ease 2.4s forwards 2, 
		lookaround cubic-bezier(.79,.14,.15,.86) 4s forwards 1,
		suspect cubic-bezier(.19,1,.22,1) 0.8s 3.1s forwards 1,
		shocked cubic-bezier(.19,1,.22,1) 0.8s 4.3s forwards 1,
		lookup cubic-bezier(.79,.14,.15,.86) 1s 5.1s forwards 1,
		eyetear steps(5) 200ms 6.1s forwards 1,
		tearflowstart steps(2) 200ms 6.2s forwards infinite;

	animation-play-state: var(--play-state, running);

	background-image: linear-gradient(transparent, transparent);

	background-size: 
		7.5em 7.5em,
		3.5em 3.5em,
		3.5em 3.5em;

	background-position: 
		-1em -1em,
		5.5em 4em,
		4em 4.8em;

	background-repeat: no-repeat;
}

@keyframes blink{
	10%{
		-webkit-mask-size: 100% 0%;		
		mask-size: 100% 0%;
	}
	22%, 100%{
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
}

@keyframes lookaround{
	20%{
		transform: translate(-50%, -50%) translate(-4em, 5em);
	}
	40%{
		transform: translate(-50%, -50%) translate(4em, 5em);
	}
	60%{
		transform: translate(-50%, -50%) translate(4em, -1em);
	}
	80%, to{
		transform: translate(-50%, -50%) translate(-4em, 4em);
	}
}

@keyframes suspect{
	from{
		-webkit-mask-position: left 0 bottom 0;
		mask-position: left 0 bottom 0;
	}
	to{
		-webkit-mask-position: left 0 bottom 0;
		mask-position: left 0 bottom 0;
		-webkit-mask-size: 100% 72%;
		mask-size: 100% 72%;
	}
}

@keyframes shocked{
	from{
		-webkit-mask-position: left 0 bottom 0;
		mask-position: left 0 bottom 0;
		-webkit-mask-size: 100% 72%;
		mask-size: 100% 72%;
	}
	to{
		-webkit-mask-position: left 0 bottom 0;
		mask-position: left 0 bottom 0;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
}

@keyframes lookup{
	from{
		transform: translate(-50%, -50%) translate(-4em, 4em);
	}
	50%, 80%{
		transform: translate(-50%, -50%) translate(-4em, -3em);
	}
	to{
		transform: translate(-50%, -50%) translate(0, 0);
	}
}

@keyframes eyetear{
	0%{
		--circle-1: 0%;
		--circle-2: 0%;
		--circle-3: 0%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
	20%{
		--circle-1: 12.5%;
		--circle-2: 12.5%;
		--circle-3: 12.5%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
	40%{
		--circle-1: 25%;
		--circle-2: 25%;
		--circle-3: 25%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
	60%{
		--circle-1: 37.5%;
		--circle-2: 37.5%;
		--circle-3: 37.5%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
	80%, to{
		--circle-1: 50%;
		--circle-2: 50%;
		--circle-3: 50%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
}

@keyframes tearflowstart{
	from{
		--circle-1: 50%;
		--circle-2: 50%;
		--circle-3: 50%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
	to{
		--circle-1: 46%;
		--circle-2: 46%;
		--circle-3: 46%;

		background-image: 
		radial-gradient(circle at center, white var(--circle-1), transparent calc(var(--circle-1) + 1px)),
		radial-gradient(circle at center, white var(--circle-2), transparent calc(var(--circle-2) + 1px)),
		radial-gradient(circle at center, rgba(255,255,255,0.3) var(--circle-3), transparent calc(var(--circle-3) + 1px));
	}
}

/* eyelids to express surprise and joy */
.eye::after{
	--lid-height: 40%;
	--lid-subtract: calc(100% - var(--lid-height));
	content: "";
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 100%;
	padding: 50% 0;
	height: auto;
	background: var(--color-sclera);
	display: block;
	transform: translate(-50%, 100%);
	transform-origin: 50% 100%;
	border-radius: 50% 50% 50% 50% / var(--lid-height) var(--lid-height) var(--lid-subtract) var(--lid-subtract);
	animation: eyelid cubic-bezier(.68,-0.55,.27,1.55) 0.8s 6s forwards;
	animation-play-state: var(--play-state, running);
}

@keyframes eyelid{
	to{
		transform: translate(-50%, 30%);		
	}
}

/* parent object to control both eyebrows */
svg{
	overflow: visible;
	width: 15em;
	position: absolute;
	left: 50%;
	top: 0;
	transform: translateX(-50%) translate(0, 0);
	background-color: rgba(0, 0, 0, 0);
	animation:
		show-eyebrows ease 100ms 300ms forwards,
		eyebrows-move cubic-bezier(.79,.14,.15,.86) 4s forwards 1,
		eyebrows-rig-shocked cubic-bezier(.18,.89,.32,1.28) 0.4s 4s forwards 1;
	animation-play-state: var(--play-state, running);
	opacity: 0;
}

@keyframes show-eyebrows{
	to{
		opacity: 1;
	}
}

/* eyebrow curve and symbol */
symbol{
	overflow: visible;
}

.eyebrow-path{
	fill: none;
	stroke: var(--color-eyebrows);
	stroke-width: 4.5;
	stroke-linecap: round;
	stroke-dasharray: 19, 42;
	stroke-dashoffset: -0.2em;
	animation: 
		eyebrows-focus linear 3s forwards,
		eyebrows-disappear cubic-bezier(.19,1,.22,1) 0.8s 3.3s forwards 1,
		eyebrows-shocked cubic-bezier(.18,.89,.32,1.28) 0.4s 4.3s forwards 1,
		eyebrows-happy cubic-bezier(.68,-0.55,.27,1.55) 0.8s 6s forwards;
	animation-play-state: var(--play-state, running);
}

@keyframes eyebrows{
	to{
		stroke-dashoffset: -1.91em;
	}
}

@keyframes eyebrows-move{
	20%{
		transform: translateX(-50%) translate(-2em, 3.5em);
	}
	40%{
		transform: translateX(-50%) translate(2em, 3.5em);
	}
	60%{
		transform: translateX(-50%) translate(2em, -1.5em);
	}
	80%, to{
		transform: translateX(-50%) translate(-2em, 3em);
	}
}

@keyframes eyebrows-focus{
	20%{
		stroke-dashoffset: -0.3em;
	}
	40%{
		stroke-dashoffset: -0.6em;
	}
	60%{
		stroke-dashoffset: -0.2em;
	}
	80%, to{
		stroke-dashoffset: -0.4em;
	}
}

@keyframes eyebrows-disappear{
	to{
		stroke-width: 0;
	}
}

@keyframes eyebrows-shocked{
	to{
		stroke-width: 4.5;
		stroke-dashoffset: -2em;
		stroke-dasharray: 21, 40;
	}
}

@keyframes eyebrows-rig-shocked{
	from{
		transform: translateX(-50%) translate(-2em, 3em) scale(1.2);
	}
	to{
		transform: translateX(-50%) translate(0, 0) scale(1);
	}
}

@keyframes eyebrows-happy{
	to{
		stroke-dashoffset: -1.2em;
	}
}

/* clone the eyebrow curve for both eyes */
use{
	--r: 50deg;
	--y: -15px;
	x: 14px;
	y: -10px;
	transform-origin: 50% 50%;
	transform: rotate(var(--r)) translateY(var(--y));
}

use.eyebrow-inverted{
	transform: scaleX(-1) rotate(var(--r)) translateY(var(--y));
}

/* pause animation when the page (primary user input or button) loses focus */
/* button{
	appearance: none;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: block;
	background: rgba(0, 0, 0, 0);
	border: none;
	outline: none;
}

button:not(:focus) + section{
	--play-state: paused;
} */

/* layout and decoration */
html, body{
	position: relative;
	inset: 0;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}

html{
	display: block;
	background-image: radial-gradient(circle at 50%, #fff, rgb(250, 247, 240));
	background-size: 100% 100%;
	background-attachment: fixed;
}

body{
	display: grid;
	place-items: center;
	background-color: transparent;
}

/* Made with Coffee, Care, and Curiosity by Shadow Scientist */

</style>
<section>
<div class="eye"></div>
<div class="eye"></div>
<svg viewbox="0 0 43.89 22.511">
<symbol id="eyebrow">
<g transform="translate(-33.467 -103.92)">
<path class="eyebrow-path" d="m34.869 125.03c3.3478-3.9226 6.6992-7.8494 9.4385-10.849s4.878-5.0848 7.9014-6.6225 6.9333-2.53 11.039-2.1572c4.1057 0.37276 8.4068 2.1104 12.708 3.8479"></path>
</g>
</symbol>
<use xlink:href="#eyebrow" href="#eyebrow"></use>
<use xlink:href="#eyebrow" href="#eyebrow" class="eyebrow-inverted"></use>
</svg>
</section>
