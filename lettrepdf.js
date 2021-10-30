  function lettrePdf() {
	  
	let pronom;
	if(informationsTemplate.rembourserRemplacer =="remplacement") {
		pronom = "son";
	} else {
		pronom = "sa";
	}


	let docDefinition = {
		
		
		content: [					
		
		
		{
			text: [
				{ text: informationsTemplate.nom, alignment: 'left' },
				"\n",
				{ text: informationsTemplate.votreAdresse, alignment: 'left' },
				"\n",
				{ text: "Destinataire", alignment: 'right', bold: true },
				"\n",
				{ text: informationsTemplate.nomVendeur, alignment: 'right' },
				"\n",
				{ text: informationsTemplate.adresseVendeur, alignment: 'right' },
				"\n\n",
				{ text: "Objet : ", bold: true },
				{ text: "Garantie légale de défaut de conformité - demande de "},
				{
					text: [ informationsTemplate.rembourserRemplacer,
				"\n\n",
				"Madame, Monsieur \n\n",
				"J’ai acheté auprès de vos services le produit suivant : ",
				informationsTemplate.nomProduit,
				". Ce bien présente présente ces anomalies  : ",  
				informationsTemplate.anomalie,
				".",
				"\n\n",
				"En tant que vendeur professionnel, vous êtes tenu, aux termes des articles L. 217-4 et suivants du code de la consommation, de le garantir contre ses défauts de conformité. \n\n",
				" Ces derniers sont présumés être de votre fait lorsqu'ils apparaissent dans un délai de vingt-quatre mois à partir de la délivrance du bien. \n\n",
				"Ainsi que l'indique la facture ci-jointe à cette lettre, le bien m'a été délivré il y a moins de deux ans ; je vous mets ainsi en demeure de procéder à ",
				pronom,
				" ",
				informationsTemplate.rembourserRemplacer,
				" comme l'impose l'article L217-9 du code de la consommation.\n\n",
				"En l’absence de réponse positive à ma demande dans un délai d’un mois, l’article L. 217-10 du code de la consommation m'autorise à obtenir la réduction du prix du produit ou l'annulation complète de la vente, avec remboursement des sommes versées. \n\n",
				"Je vous remercie donc de procéder sans délai à ",
				pronom,
				" ",
				informationsTemplate.rembourserRemplacer,
				".",
				"\n\n",
				"Dans cette attente, je vous prie de croire, Madame, Monsieur, en l’expression de mes sentiments les meilleurs. \n\n"], styles : { text : {alignment : "justify"}}
				
				},
				{ text: informationsTemplate.nom, alignment: 'center' }
				
				
			
				
				
				

		
	],

	

}


	]
	
	};  
	  
	 	  
	
	
	const pdfDocGenerator = pdfMake.createPdf(docDefinition);
	pdfDocGenerator.getDataUrl((dataUrl) => {
	
	
	
	botui.message.add({
		loading : true,
		delay : 1000,
        content: "Vous remplissez toutes les conditions pour bénéficier de la garantie légale de conformité. " 
        }).then (function () {
			
			
			botui.message.add({
			delay :1000,
			content: "Vous pouvez vous munir de la facture et la photocopier." 
        }).then (function () {
			
			botui.message.add({
			delay : 1000,
			type : "html",
			content: "Et l'envoyer (en RAR) avec cette <a href = dataUrl>mise en demeure</a> à l'adresse de l'entreprise venderesse." 
        }).then (function () {
			apresLettre();
		})
		
		;
			
		
		})
		})
		
});

	  
	  
  }
  
