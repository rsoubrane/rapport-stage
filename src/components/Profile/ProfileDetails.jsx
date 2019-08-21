import React, { Component } from "react";

import { Jumbotron } from "reactstrap";

export default class ProfileDetails extends Component {
	render() {
		return (
			<Jumbotron className='bg-light mt-4 bs-callout bs-callout-danger text-justify'>
				<h4>Résumé</h4>
				<p className='my-4'>
					A la suite d’une classe préparatoire ingénieur, je me suis tourné vers une formation orientée sur un
					domaine en pleine expansion : le web. Ce domaine est en constante évolution et c'est une bonne chose
					pour quelqu'un qui cherche toujours à découvrir de nouvelles choses.
				</p>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>Degree</th>
							<th>School</th>
							<th>Graduation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CPGE MPSI</td>
							<td>ISEP Paris</td>
							<td>2017</td>
						</tr>
						<tr>
							<td>Bachelor de Chargé de projet digital</td>
							<td>ESD Paris</td>
							<td>2020</td>
						</tr>
					</tbody>
				</table>
				<p className='my-4'>
					A <strong>l’ESD</strong> j’ai appris 3 principes fondamentaux : La création, le business/marketing
					et le développement. Ces principes permettent à la fois de concevoir graphiquement, de savoir vendre
					mais également de savoir développer un produit ou une idée. J'ai un profil beaucoup plus technique,
					préférant le développement, mais j'apprécie également le marketing et je ne suis pas contre l'UI/UX
					Design. Cependant la création n'est pas forcément mon fort. Ce que j'affectione particulièrement
					dans le développement c'est le fait que chaque changement dans le code est visible à un simple
					rechargement de page : on est au cœur des modifications.
				</p>
				<p className='my-4'>
					En parallèle à mes études, j’ai pris en passion le monde du jeu vidéo. Plus particulièrement
					l’esport et tout le business qui l’entoure.
				</p>
			</Jumbotron>
		);
	}
}
