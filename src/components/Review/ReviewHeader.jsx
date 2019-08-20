import React, { Component } from "react";

import Carrousel from "../Carrousel/Carrousel";

export default class ReviewHeader extends Component {
	render() {
		return (
			<main>
				<p className='text-justify'>
					Je partais avec de très grandes ambitions et attentes pour ce stage, j’en ressors mitigé sur
					quelques points. Je m’attendais à avoir une super ambiance en cabinet de conseil, je me suis plus
					rendu compte que l’on est un pion parmi tant d’autres (du moins dans les grands groupes). À
					contrario, vraiment une super ambiance au sein d’IFS. Alpha, l’équipe était vraiment top et j’ai
					même pu faire une grande partie de mon stage en anglais puisque mon référent principal sur place
					était Uruguayen. Le fait que je n’avais personne pour vraiment m’encadrer ni à qui référer à
					onepoint a probablement joué sur le sentiment de “chacun pour soi”. En matière de conditions de
					travails, je n’avais dans tous les cas pas lieu de me plaindre, les locaux d'onepoint étant
					magnifiques et localisés à Trocadéro et ceux d’IFS qui louent 4 étages d’un espace de co-working du
					côté de Bourse. Les 2 entreprises m’ont fourni du matériel pour travailler.
				</p>

				<p className='text-justify mb-2'>
					D’un point de vue technique maintenant j’ai selon moi beaucoup plus appris au sein d’IFS.Alpha. Les
					profils techniques étaient meilleurs mais surtout bien plus ouverts à la communication et à
					l’entraide (un autre avantage à travailler en plus petite équipe?). À la BNP j’ai donc pu monter en
					compétences sur React (comme onepoint), mais j’ai également vu les ébauches de JAVA et SpringBoot,
					ainsi qu’AWS. C’est bien au-delà de ce que je visais en matière de niveau technique et je me suis
					immédiatement retrouvé dépassé et en dehors du coup vu que je n’en avais jamais fait... Encore une
					fois l’encadrement et la patience dont les différentes équipes ont fait preuve pour me solutionner
					m’ont vraiment aidé dans ma compréhension et m'ont donnés envie d'aller plus loin encore !
				</p>
				<Carrousel
					images={[
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.1.jpg?alt=media&token=81b26a1a-3300-4191-bdbc-d250c880caf8",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.3.jpg?alt=media&token=51bdd1a6-2b7a-4bb8-8fd1-815d718be857",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.4.jpg?alt=media&token=672a3946-e3ba-4084-a314-832be5d3621c",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.5.jpg?alt=media&token=7de6d7fc-38f7-4eb9-8069-88588222c1f3",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.6.jpg?alt=media&token=af418c5b-04d5-4ef2-9fc8-38cfa456fd7f",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.7.jpg?alt=media&token=9ee10e7e-f4b3-45d8-9905-c46bb1ae3506",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.8.jpg?alt=media&token=24712083-61ae-4121-8260-4d5e646a9aef",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/2.9.jpg?alt=media&token=9c87fd0d-d6d5-4436-9c38-b406b37a8e4e",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/9.1.jpeg?alt=media&token=8ad95365-d12f-4ea0-925f-cfbcc0e33660",
						"https://firebasestorage.googleapis.com/v0/b/react-rapport-stage.appspot.com/o/9.2.jpg?alt=media&token=067f84a7-d0ee-4eaf-a13a-18c6ce83e57e"
					]}
				/>
				<h6 className='mt-5 mb-3 text-left text-uppercase'>
					<strong>Témoignage du lien entre votre formation et les attendus de l’entreprise : </strong>
				</h6>
				<p className='text-justify'>
					Pour être tout à fait honnête, la formation ne prépare pas vraiment à ce qui était attendu par
					l’entreprise (que ce soit onepoint ou IFS). Le développement web que l’on apprend en cours
					correspond aux bases du développement (HTML/CSS/JS) mais ne représente pas un approfondissement
					poussé. Cependant je cherchais un stage sur un langage qui n’est pas étudié et que j’ai appris de
					mon cote. Il semble donc logique que la formation ne s’y prête pas tout à fait. Il est vrai que
					j’aurais aimé voir plus de choses sur cet aspect technique dans la formation, mais cela demande
					beaucoup de temps, que l’on ne peut accorder si l’on souhaite également être bien formé sur les
					autres points de la formation (création et vente). Cependant certains fondamentaux auraient pu et
					devraient dans le futur être abordé, notamment GIT, service primordial pour tout développeur qui
					travaille en équipe. Une meilleure explication des différents métiers technique pourrait être
					intéressant, même si, une nouvelle fois, très peu seraient concernés ...
				</p>
				<p className='text-justify'>
					Ce stage a vraiment été très instructif et je ne regrette absolument rien (à part peut-être ma
					passivité sur les 2/3 premières semaines ou je n’ai au final pas fait grand chose). Il m’a permis de
					me rendre compte de ce que je veux faire ou pas dans le futur et je pense qu’une entreprise plus
					petite, ou du moins le travail en petite équipe me convient beaucoup plus. Il m’a également permis
					de découvrir de nouveaux profils et une nouvelle équipe très compétente que j’espère pouvoir
					rejoindre pour mon alternance de l’an prochain !
				</p>
			</main>
		);
	}
}
