
AOS.init({
  duration: 1200,
})

const chat = document.getElementById("baba-chatbot");
const conteneur = document.getElementById("conteneur");
const filler = document.getElementById("filler");



function InfoDefautConformite () {
		
	let divInfos = document.createElement("div");
	divInfos.innerHTML ="<p>Exemples de défauts de conformité : bien en panne, défaut esthétique, bien ne correspondant pas à la description faite par le vendeur...</p>"
	divInfos.className = "infos-questions";
	divInfos.setAttribute("data-aos", "fade-left");

	conteneur.replaceChild(divInfos, filler);
	
}

function garantieCommerciale(){
		
	let divInfos = document.createElement("div");
	divInfos.innerHTML = "<p>La garantie légale de conformité et la garantie des vices cachés sont des garanties obligatoires pour le vendeur. Il ne peut pas vous la refuser si vous remplissez les conditions.</p><p>Si vous ne les remplissez pas, vous pouvez vous rabattre sur une éventuelle garantie commerciale. Elle est définie librement par le vendeur et s'ajoute aux garanties légales obligatoires.</p>"
	divInfos.setAttribute("data-aos", "fade-left");
	divInfos.className = "infos-questions";

	conteneur.replaceChild(divInfos, filler);
	
}

function apresLettre () {
	
	const divInfos = document.getElementsByClassName("infos-questions")[0];
	
	let derDiv = document.createElement("div");
	derDiv.innerHTML = "<p>Le vendeur a un mois pour satisfaire à votre demande, sauf s’il arrive à démontrer que le défaut de conformité est de votre fait. S’il ne s’exécute pas dans le délai imparti, vous pourrez alors demander le remboursement total ou partiel de votre achat.</p>"
	derDiv.setAttribute("data-aos", "fade-left");
	derDiv.className = "infos-questions";

	conteneur.replaceChild(derDiv, divInfos);
}