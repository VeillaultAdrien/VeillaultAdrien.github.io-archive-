$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current sur %total',
  questions: [
    {
      'q': 'Parmi ces trois exemple, lequel présente le plus d’affordance ?',
      'options': [
        '<img src="https://i.ibb.co/x2JCLjj/quest1-A.png">',
        '<img src="https://i.ibb.co/27SZdfK/quest1-B.png">',
		'<img src="https://i.ibb.co/p424rV2/quest1-C.png">'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était : <img src="https://i.ibb.co/27SZdfK/quest1-B.png">'
    },
    {
      'q': 'Quel(s) critère(s) permettent d’évaluer l’amélioration de l’exécution d’une tâche récemment apprise ?',
      'options': [
        'Le temps d’exécution et le nombre d’erreurs',
        'La qualité de la verbalisation de la tâche',
        'L\’effort ressenti',
		'La charge mentale'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était le temps d\'exécution et le nombre d\'erreurs'
    },
    {
      'q': 'A quelle composante de l’utilisabilité l’apprenabilité est-elle le plus liée ?',
      'options': [
        'L\’efficience',
        'L\’efficacité',
		'La satisfaction'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était l\'efficience.'
    },
    {
      'q': 'Quelle est la composante de l’utilisabilité principalement impliquée ici ? <br/><img src="https://i.ibb.co/7R3dH0g/onejob.png">',
      'options': [
        'L\’efficacité',
        'L\’efficience',
        'La satisfaction',
		'L\’apprenabilité'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était'
    },
	{
      'q': 'Dans quelle type de situation l’apprenabilité d’un dispositif est-elle la plus importante ?',
      'options': [
        'Une utilisation quotidienne et intensive',
        'Une utilisation régulière et fréquente ',
        'Une utilisation ponctuelle',
      ],
      'correctIndex': 2,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était'
    },
	{
      'q': 'Un dispositif efficace est en général également efficient.',
      'options': [
        'Vrai',
        'Faux'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était Faux'
    },
	{
      'q': 'Un dispositif efficient et facile à apprendre est forcément efficace.',
      'options': [
        'Vrai',
        'Faux'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était vrai.'
    },
	{
      'q': 'Quelles composantes de l’utilisabilité sont impliquées ici ?<br/> <img src="https://i.ibb.co/FxGs2C0/glasses.png">',
      'options': [
        'L\’efficience',
        'L\’efficacité',
		'La satisfaction',
		'Les trois'
      ],
      'correctIndex': 2,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était'
    },
	{
      'q': 'La satisfaction peut-être influencée par  : ',
      'options': [
        'La facilité d\'utilisation et l\'efficience',
        'Le contenu et les fonctionnalités',
		'La qualité de service',
		'L\'esthétique',
		'Tous ces éléments'
      ],
      'correctIndex': 4,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était tous ces éléments. '
    },
	{
      'q': 'Dans le domaine du travail, la satisfaction est souvent limité à  : ',
      'options': [
        'L\'efficacité et l\'efficience',
        'Le plaisir procuré',
		'L\'esthétique',
		'Les trois'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse ! RL\'utilisateur n\'a pas souvent pas le choix sur l\'utilisation de tel ou tel logiciels, tel ou tel machine. Ce qui rendre en alors compte est l\'efficacité et l\'efficience du produit.',
      'incorrectResponse': 'Mauvaise réponse ! L\'utilisateur n\'a pas souvent pas le choix sur l\'utilisation de tel ou tel logiciels, tel ou tel machine. Ce qui rendre en alors compte est l\'efficacité et l\'efficience du produit.'
    },
	{
      'q': 'Comment satisfaire les utilisateurs ? ',
      'options': [
        'Se baser sur son propre ressenti',
        'Satisfaire les besoins de son/ses persona(s)',
		'Se concentrer sur la fiabilité du produit',
		'Se concentrer sur l\'esthétique '
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était : Satisfaire les besoins de son/ses persona(s)'
    },
	{
      'q': 'Selon la norme ISO 9241, l\'utilisabilité regroupe : ',
      'options': [
        'L\'efficacité, l\'efficience et la satisfaction',
        'l\'efficacité, l\'efficience et la qualité de service',
		'La satisfaction, l\'efficience et l\'esthétique',
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était l\'efficacité, l\'efficience et la satisfaction.'
    },
	{
      'q': 'La satisfaction : ',
      'options': [
        'est une réaction affective concernant l\'usage d\'un produit',
        'est une évaluation subjective',
		'permet de rendre compte de l\'acceptation d\'un produit',
		'les trois'
      ],
      'correctIndex': 3,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était les trois.'
    },
	{
      'q': 'Sur quelle(s) mesure(s) porte l’efficacité d’un produit ? ',
      'options': [
        'La performance',
        'Le processus',
		'L\'activité'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était la performance.'
    },
	{
      'q': 'Dans la vie de tous les jours, la performance acceptable d’un produit est facilement objectivable :',
      'options': [
        'Vrai',
        'Faux'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse ! Elle dépend des connaissances préalables et des objectifs de l’utilisateur',
      'incorrectResponse': 'Mauvaise réponse ! Elle dépend des connaissances préalables et des objectifs de l’utilisateur'
    },
	{
      'q': 'Quelles sont les mesures associées à l’efficacité ?',
      'options': [
        'La réussite de la tâche et le temps pour l’exécuter.',
        'Le charge de travail et la performance.',
		'La réussite de la tâche et la performance.',
		'Le taux et la nature des erreurs d’utilisation.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était la réussite de la tâche et le temps pour l’exécuter.'
    },
	{
      'q': 'La charge de travail est un des indicateurs pouvant être pris en compte dans l’évaluation de l’efficience.',
      'options': [
        'Vrai',
        'Faux'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était Vrai.'
    },
	{
      'q': 'Laquelle de ces deux souris d’ordinateur vous paraît la plus efficiente ?',
      'options': [
        '<img src="https://i.ibb.co/xGj6ZNb/mouse1.png">',
        '<img src="https://i.ibb.co/0hwSjfz/mouse2.png">',
		'Ca dépend',
      ],
      'correctIndex': 2,
      'correctResponse': 'Bonne réponse ! Ca dépend de l’expérience de chacun. ',
      'incorrectResponse': 'Mauvaise réponse ! Ca dépend de l’expérience de chacun. '
    },
	{
      'q': 'Un environnement capacitant :',
      'options': [
        'préserve les capacités humaines',
        'est universel',
		'n’est pas forcément lié à l’efficacité du travail',
		'doit permettre d’apprendre',
		'préserve les capacités humaines, est universel, doit permettre d\'apprendre'
      ],
      'correctIndex': 4,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était préserve les capacités humaines, est universel, doit permettre d\'apprendre.'
    },
	{
      'q': 'La charge de travail peut être déduite uniquement grâce aux caractéristiques techniques  et physiques du produit.',
      'options': [
        'Vrai',
        'Faux'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse ! Elle dépend aussi des exigences liées à la réalisation de la tâche et au contexte d’exécution.',
      'incorrectResponse': 'Mauvaise réponse ! Elle dépend aussi des exigences liées à la réalisation de la tâche et au contexte d’exécution.'
    },
	{
      'q': 'Selon la norme ISO, quelles sont les différentes formes d’efficience ?',
      'options': [
        'L\’efficience humaine, l\’efficience productive, l\’efficience économique',
        'L\’efficience temporelle, l\’efficience productive, l\’efficience économique',
		'L\’efficience humaine, l\’efficience temporelle, l\’efficience économique',
      ],
      'correctIndex': 2,
      'correctResponse': 'Bonne réponse ! L\'efficience productive d\'un système productif complexe est le niveau d\'aptitude obtenue dans la capacité à mobiliser les ressources humaines et non-humaines pour produire des objets ou services dans des formes et des coûts requis par la demande.)',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était : L\’efficience humaine, l\’efficience temporelle, l\’efficience économique. <br/> L\'efficience productive d\'un système productif complexe est le niveau d\'aptitude obtenue dans la capacité à mobiliser les ressources humaines et non-humaines pour produire des objets ou services dans des formes et des coûts requis par la demande.)'
    },
	{
      'q': 'Quelle est la seule composante de l’utilisabilité respectée ici ? </br><img src="https://i.ibb.co/n84WFL6/assiette.png"/>',
      'options': [
        'L’efficience',
        'L’efficacité',
		'La satisfaction',
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était l\'efficacité.'
    },
	{
      'q': 'Quelle est la meilleure forme d’aide possible sur une interface ?',
      'options': [
        'Un manuel intégré',
        'Une fenêtre contextuelle en survolant les éléments d’interaction',
		'Des tutoriels en ligne',
		'Ne pas avoir besoin d’aide du tout'
      ],
      'correctIndex': 3,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était ne pas avoir besoin d\'aide du tout.'
    },
	{
      'q': 'L\'analyse des données subjectives relatives à la satisfaction pose des problèmes de relations complexes entre :',
      'options': [
        'L’efficacité, l’efficience',
        'La mémoire que l’utilisateur a de l’interaction, les besoins réels',
		'Les influences sociales relatives au groupe d\’appartenance de l\’utilisateur, l\’utilité, les motivations, les attitudes et les prix',
		'Tous'
      ],
      'correctIndex': 3,
      'correctResponse': 'Bonne réponse !',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était tous.'
    },
	{
      'q': 'Par définition, l\'efficience Représente ce qui produit l’effet attendu par l\’utilisateur',
      'options': [
        'Vrai',
        'Faux'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bonne réponse ! Il s\'agit de l\'efficacité.',
      'incorrectResponse': 'Mauvaise réponse ! La bonne réponse était faux. Il s\'agit de l\'efficacité.'
    }
  ]
});