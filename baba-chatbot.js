const botui = new BotUI('baba-chatbot');
let informationsTemplate = {}

function init() {
    botui.message.add({
            content: "Bonjour, je suis Baba, un robot juridique qui vous aide à faire jouer votre garantie légale de conformité. Comment vous appelez-vous ?"
        })
        .then(function() { // 
            botui.action.text({
                    action: {
                        delay: 1000,
                        placeholder: "Entrez votre prénom et votre nom de famille",
                        size: 100
                    }
                })
                .then(function(res) { // 
                    informationsTemplate.nom = res.value;
                    botui.message.add({
                            delay: 1000,
                            content: "Enchanté " + res.value + " !"

                        })
                        .then(function(res) { // 
                            informationsTemplate.nom = res.value;
                            botui.message.add({
                                    delay: 1000,
                                    content: "Dites-moi, avez-vous acheté votre bien neuf ou d'occasion ?"

                                })
                                .then(function() {
                                    botui.action.button({
                                            delay: 1000,
                                            action: [{
                                                    text: 'neuf',
                                                    value: 'neuf'
                                                },
                                                {
                                                    text: 'occasion',
                                                    value: 'occasion'
                                                }
                                            ]
                                        })
                                        .then(function(res) {

                                            informationsTemplate.etatBien = res.value;

                                            if (res.value == 'neuf') {
                                                siNeuf();
                                            } else {
                                                siOccasion();
                                            }
                                        })
                                })
                        })
                })
        })
}

function siNeuf() {
    botui.message.add({
            delay: 1000,
            content: "D'accord, depuis combien de temps avez-vous ce produit ?"
        })
        .then(function() {
            botui.action.button({
                    delay: 1000,
                    action: [{
                            text: 'plus de deux ans ',
                            value: 'plus-deux-ans'
                        },
                        {
                            text: 'moins de deux ans',
                            value: "moins-deux-ans"
                        }
                    ]
                })
                .then(function(res) {
                    if (res.value == "moins-deux-ans") {
                        nomProduit();
                    } else {
                        pasGarantie();
                    }
                })
        })
}


function siOccasion() {
    botui.message.add({
            delay: 1000,
            content: "D'accord, depuis combien de temps avez-vous ce produit ?"
        })
        .then(function() {
            botui.action.button({
                    delay: 1000,
                    action: [{
                            text: 'plus de deux ans ',
                            value: 'plus-deux-ans'
                        },
                        {
                            text: 'moins de deux ans',
                            value: "moins-deux-ans"
                        }
                    ]
                })
                .then(function(res) {
                    if (res.value == "moins-deux-ans") {
                        apparitionProblemeOccasion();
                    } else {
                        pasGarantie();
                    }
                })
        })
}

function apparitionProblemeOccasion() {

    botui.message.add({
            delay: 1000,
            content: "Quand avez-vous rencontré un problème avec votre produit ?"
        })
        .then(function() {
            botui.action.button({

                    delay: 1000,
                    action: [{
                            text: "dans les 6 mois après l'avoir eu",
                            value: 'dans-six-mois'
                        },
                        {
                            text: "plus de 6 mois après l'avoir eu",
                            value: "six-mois-apres"
                        }
                    ]
                })
                .then(function(res) {

                    if (res.value == "dans-six-mois") {
                        nomProduit();
                    } else {
                        pasGarantie();
                    }
                })
        })


}



function rembourserRemplacer() {
	

    botui.message.add({
            delay: 1000,
            content: "Souhaitez-vous qu'il soit réparé ou remplacé ?"
        })
        .then(function() {
            botui.action.button({
                    action: [{
                            text: 'réparé',
                            value: 'réparation'
                        },
                        {
                            text: 'remplacé',
                            value: "remplacement"
                        }
                    ]
                })
                .then(function(res) {
                    informationsTemplate.rembourserRemplacer = res.value;
                    votreAdresse();
                })

        })
}



function defautConformite() {
    InfoDefautConformite();


    botui.message.add({
            delay: 1000,
            content: "Qu'est-ce qui ne va pas avec votre produit ?"
        })


        .then(function() {

            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Décrivez précisément le défaut de conformité",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.anomalie = res.value;
                    rembourserRemplacer();

                })

        })




}


function nomProduit() {

    botui.message.add({
            delay: 1000,
            content: "Comment s'appelle ce produit ?"
        })
        .then(function() {
            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Décrivez précisément le nom du produit",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.nomProduit = res.value;
                    defautConformite();
                })

        })



}

function nomVendeur() {

    botui.message.add({
            delay: 1000,
            content: "Comment s'appelle l'entreprise qui vous a vendu le produit ?"
        })
        .then(function() {
            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Indiquez le nom de l'entreprise venderesse",
                        sub_type: 'textarea',
                        size: '50'
                    }
                })
                .then(function(res) {
                    informationsTemplate.nomVendeur = res.value;
                    adresseVendeur();

                })

        })
}


function votreAdresse() {

    botui.message.add({
            delay: 1000,
            content: "Quelle est votre adresse ?"
        })
        .then(function() {
            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Indiquez votre adresse complète : adresse, ville, code postal",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.votreAdresse = res.value;
                    nomVendeur();
                })


        })
}


function adresseVendeur() {

    botui.message.add({
            delay: 1000,
            content: "Quelle est l'adresse de l'entreprise ?"
        })
        .then(function() {
            botui.action.text({
                    action: {
                        placeholder: "Indiquez son adresse complète : adresse, ville, code postal",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.adresseVendeur = res.value;
                    lettrePdf();
					
                })


        })
}

function pasGarantie() {
	garantieCommerciale();
    botui.message.add({
        delay: 1000,
        type: "html",
        content: "Navré ! Vous ne pouvez pas faire jouer la garantie légale de conformité !"
    })
	.then (function() {
		botui.message.add({
        delay: 1000,
        type: "html",
        content: "Mais vous bénéficiez peut être d'une garantie commerciale. Pour plus de renseignements, rendez-vous  <a href ='https://www.service-public.fr/particuliers/vosdroits/F11093'> ici.</a>"
    });
	})
		
	}


init();
