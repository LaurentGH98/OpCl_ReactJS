import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

// IMPORTANT : en React on doit donner une KEY à chaque élément de la liste
// "Les key (clés) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. 
// Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable."

// Pour cela on peut faire une combinaison entre l'index et le nom de la plante qui est une string :

function ShoppingList() {
	// Ici on crée un tableau ne contenant que les catégories des plantes, à partir du tableau d'objets plantList.js
	// On utilise la méthode reduce qui parcourt le tableau spécifié, qui permet ensuite de créer un tableau "réduit" avec uniquement les catégories
	// "acc" pour accumulateur est un tableau initialement vide, "plant" est l'élément du tableau 
	// Lorsque l'on parcourt le tableau plantList, l'accumulateur est d'abord vide. Si la catégorie de plante ne s'y trouve pas, 
	// on l'inclut dans l'accumulateur avec "acc.concat(plant.category)".
	// Si la catégorie se trouve déjà dans le tableau (accumulateur), le tableau reste inchangé avec "acc"
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList