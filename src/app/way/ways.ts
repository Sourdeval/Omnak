import { TypeSkill, Way } from "../../core/way.core";

export let ways: Way[] = [
    {
        id: "Soldat",
        name: "Soldat",
        description: ["Toute l'armée de la Nation Rouge commence par une formation de soldat. Les bases du combat et de la discipline y sont acquises."],
        asset: "Honorable",
        equipment: "Glaive, cotte de mailles",
        skills: [
            { name: "Estoc", type: TypeSkill.ArmeGladiateur, difficulty: 'C8', effects: ['1 blessure'] },
            { name: "Diagonale", type: TypeSkill.ArmeGladiateur, difficulty: 'C10', effects: ['1 blessure', 'ER4 : 1 blessure'] },
            { name: "Garde", type: TypeSkill.ArmeGladiateur, difficulty: 'R12', effects: ['bonus pour se défendre des attaques au corps à corps', 'Risque : malus à la place'] },
        ]
    },
    {
        id: "MageFeu",
        name: "Mage de Feu",
        description: ["La Nation Rouge est la seule à maîtriser la Magie du Feu. Puissante et destructrice, son apprentissage ne se fait pas sans brûlures."],
        asset: 'Représailles de Flammes : quand attaqué au corps à corps, votre ennemi reçoit : "E3 : vous êtes brûlé, vous subissez 1 blessure"',
        equipment: "",
        skills: [
            { name: "Boule de Feu", type: TypeSkill.MagieFeu, difficulty: 'R12', effects: ['3 blessures à toutes les cibles dans une petite zone', 'E2 : inflige En Feu', 'Risque : la boule de feu part dans une autre direction'] },
            { name: "Mur de flammes", type: TypeSkill.MagieFeu, difficulty: 'C12', effects: ["Crée un mur de flammes d'environ 5m (15m avec malus) de long qui dure 3 tours", "Ceux qui traversent le mur subissent 1 blessure et l'état En Feu"] },
            { name: "Rage bouillante", type: TypeSkill.MagieFeu, difficulty: 'R14', effects: ["Vous pouvez vous cibler vous ou un allié", "La cible obtient le bonus Enragé pendant 2 tours pour s'énerver et frapper.", "ER4 : les attaques de la cible font 1 blessure supplémentaire", "Risque : la cible subit En Feu"], },
        ]
    },
    {
        id: "Cavalier",
        name: "Cavalier",
        description: ["Éclaireurs et force rapide de frappe, les Cavaliers sont très attachés à leur monture."],
        asset: "Équitation (toute action avec le cheval autre qu'une attaque)",
        equipment: "Possède un cheval, une lance (Anti-Cavalerie) ou une épée longue (Duel).",
        skills: [
            { name: "Charge de cavalerie", type: TypeSkill.Monture, difficulty: 'C10', effects: ['3 blessures', "A besoin de beaucoup d'élan, et d'une arme d'hast ou d'une épée longue."] },
            { name: "Coup à la tête", type: TypeSkill.Monture, difficulty: 'C12', effects: ['2 blessures', "ER2 : vous touchez la tête, la cible subit 1 blessure et le malus Borgne (toute attaque à distance)", "Nécessite une arme"] },
            { name: "Course penchée", type: TypeSkill.Monture, difficulty: 'R14', effects: ["Permet de se pencher sur le côté de sa monture au galop pour esquiver les attaques. Donne un bonus d'esquive.", "Risque : Vous tombez et vous subissez 2 blessures."] },
        ]
    },
    {
        id: "LancierEnchante",
        name: "Lancier Enchanté",
        description: ["Les Lanciers de la Nation Rouge sont positionnés sur les flancs de l'armée, pour décimer toute attaque de cavalerie ennemie."],
        asset: "Lance Enchantée (Anti Cavalerie, 1 Effet aléatoire) (ou bien un Trident ou équivalent)",
        equipment: "",
        skills: [
            { name: "Estoc", type: TypeSkill.ArmeHast, difficulty: 'C8', effects: ['1 blessure', 'ER4 : 1 blessure'] },
            { name: "Mur de Piques", type: TypeSkill.ArmeHast, difficulty: 'C10', effects: ["Si un ennemi vous charge jusqu'à votre prochain tour, il subit un malus.", "Si son attaque rate, il se fait empaler et subit 5 blessures"] },
            { name: "Gerbe de flamme", type: TypeSkill.MagieFeu, difficulty: 'R12', effects: ["Lance une gerbe de flamme à distance depuis une arme d'Hast enchantée", '2 blessures', 'E3 : inflige En Feu', 'Risque : 1 blessure à vous et toutes les cibles proches'] },
        ]
    },
    {
        id: "FantassinEnchante",
        name: "Fantassin Enchanté",
        description: ["Les Fantassins de la Nations Rouge sont le coeur de l'armée. Expert dans le combat rapproché, c'est leur nombre qui fait leur force contre des mages."],
        asset: "Épée Enchantée (Duel, 1 Effet aléatoire) (ou bien un Sabre ou équivalent)",
        equipment: "",
        skills: [
            { name: "Coup Circulaire", type: TypeSkill.ArmeGladiateur, difficulty: 'C12', effects: ['1 blessure sur toutes les cibles proches'] },
            { name: "Riposte", type: TypeSkill.ArmeGladiateur, difficulty: 'C10', effects: ['Suite à une attaque au corps à corps', "2 blessures", "ER6 : 1 blessure"] },
            { name: "Désarmer", type: TypeSkill.ArmeGladiateur, difficulty: 'C14', effects: ['1 blessure', 'Fait lâcher un objet à la cible', 'ER2 : 1 blessure'] },
        ]
    },
    {
        id: "CogneurEnchante",
        name: "Cogneur Enchanté",
        description: ["Les Cogneurs sont facilement reconnaissables par leur carrure. Peu d'hommes sont capables de porter et de frapper avec leurs armes."],
        asset: "Marteau Enchanté (Ignore l'Armure, 1 Effet aléatoire) (ou bien une Masse ou équivalent)",
        equipment: "",
        skills: [
            { name: "Assommer", type: TypeSkill.ArmeContondante, difficulty: 'C18', effects: ["Assomme l'ennemi et lui inflige 2 blessures", "EE5 : inflige le malus Sonné pendant 1 tour"] },
            { name: "Fracasser", type: TypeSkill.ArmeContondante, difficulty: 'R8', effects: ["2 blessures", "Risque : vous êtes déséquilibré et vous tombez au sol"] },
            { name: "Coup dans les Jambes", type: TypeSkill.ArmeContondante, difficulty: 'C12', effects: ['1 blessure', "La cible ne peut pas se déplacer pendant 2 tours", "ER4 : 1 blessure"] },
        ]
    },
    {
        id: "Cueilleur",
        name: "Cueilleur",
        description: ["La Nation Verte excelle pour créer des potions, des poisons et autres produits de la Nature. C'est pour cela que la première tâche des recrues de son armée est de récolter les ressources nécessaires."],
        asset: "Récolte Sauvage",
        equipment: "Serpe (arme légère)",
        skills: [
            { name: "Entaille rapide", type: TypeSkill.ArmeLegere, difficulty: 'C10', effects: ['1 blessure'] },
            { name: "Trouver des baies", type: TypeSkill.Aucun, difficulty: 'C8', effects: ['Prends une heure.', "Vous trouvez des baies qui permettent de nourrir et soigner 1 blessure à chaque personne qui en mange."] },
            { name: "Bandages de feuilles", type: TypeSkill.Aucun, difficulty: 'C8', effects: ['Vous faites un bandage de feuille à votre cible, qui peut être vous même.', "Soigne 2 blessures.", "Utilisable qu'une fois par jour sur une même cible.", "Peut servir d'action de Premiers Soins."] },
        ]
    },
    {
        id: "Chasseur",
        name: "Chasseur",
        description: ["La Nation Verte utilise les armes à distance car elles donnent un avantage certain pour survivre en forêt. Les Chasseurs apprennent à traquer des proies et survivre dans une forêt pleine de prédateurs."],
        asset: "Déplacement Rapide en Forêt",
        equipment: "Arc et couteau",
        skills: [
            { name: "Tir direct", type: TypeSkill.ArmeDistance, difficulty: 'C10', effects: ['1 blessure', 'La difficulté augmente avec la distance. 1-10m : C10, 11-25m : C12, 26-50m : C14.'] },
            { name: "Poignarder", type: TypeSkill.ArmeLegere, difficulty: 'C12', effects: ['2 blessures', "E3 : La cible gagne un bonus pour vous attaquer au corps à corps à son prochain tour.", "Si la cible n'est pas au courant de votre présence vous lui infligez 1 blessure supplémentaire."] },
            { name: "Traque silencieuse", type: TypeSkill.Furtivité, difficulty: 'R14', effects: ["Pendant 3 tours, vous êtes totalement discret tant que vous vous déplacez lentement et hors d'un angle de vue direct.", 'Risque : tout le monde est désormais au courant de votre présence.'] },
        ]
    },
    {
        id: "Soigneur",
        name: "Soigneur",
        description: ["Les soigneurs de la Nation Verte apprennent plusieurs sortes de magie de soins pour toutes les situations.", "ATTENTION : On ne peut lancer que 2 sorts de Magie Solaire par jour, 5 s'il fait ensoleillé."],
        asset: "Photosynthèse : vous vous soignez d'une blessure par heure au soleil",
        equipment: "",
        skills: [
            { name: "Eau revigorante", type: TypeSkill.MagieEau, difficulty: 'C10', effects: ["Soigne 1 blessure, la cible est rafraichie et désaltérée, ne soigne qu'une fois par jour une même cible", "ER4 : la cible gagne l'état Clairvoyant", "Vous pouvez vous cibler"] },
            { name: "Lueur de vie", type: TypeSkill.MagieSolaire, difficulty: 'C12', effects: ["Vous émettez une lueur solaire qui soigne 1 blessure à toutes les personnes proches et les détend.", "ER5 : éblouit (malus) les personnes regardant vers vous"] },
            { name: "Transfert de sève", type: TypeSkill.MagieVegetale, difficulty: 'R14', effects: ['Vous transférer votre énergie vitale, votre sève, pour soigner une cible.', "Soigne 4 blessures, la cible doit passer son prochain tour.", "Risque : vous subissez 2 blessures."] },

        ]
    },
    {
        id: "Druide",
        name: "Druide",
        description: ["Les Druides de la Nation Verte sont des mages qui connaissent la Magie Végétale, utilisant les plantes."],
        asset: "Odeur d'humus : Les animaux sauvages sont moins enclins à vous attaquer, et les animaux passifs deviennent amicaux.",
        equipment: "",
        skills: [
            { name: "Lianes Surgissantes", type: TypeSkill.MagieVegetale, difficulty: 'C12', effects: ["La cible ne peut pas se déplacer pendant 3 tours", "La cible peut faire une action C14 pour se libérer, ou infliger 2 blessures aux lianes.", "ER5 : la cible ne peut plus utiliser ses bras pendant la même durée"] },
            { name: "Ronces Envahissantes", type: TypeSkill.MagieVegetale, difficulty: 'R14', effects: ["À partir du point choisi, des ronces poussent, à chaqu'un de vos tours elles prennent plus de place. Vous choisissez quand les ronces doivent s'arrêter.", "Une cible qui touche les ronces subit 1 blessure, 2 blessures si elle veut les traverser.", "Risque : les ronces sont incontrôlables.", ''] },
            { name: "Écorce", type: TypeSkill.MagieVegetale, difficulty: 'R12', effects: ["Votre peau se transforme en écorce, vous subissez 1 blessure de moins de chaque attaque jusqu'à la fin de la scène.", "Risque : Vous subissez 2 blessures."] },
        ]
    },
    {
        id: "Changeur",
        name: "Changeur",
        description: ["Les mages de la Nation Verte utilisent la Magie Animale, tirant ses pouvoirs des Esprits Animaux. Les Changeurs en sont la forme la plus pure, changeant leur corps temporairement avec cette magie."],
        asset: "Instinct Animal : une fois par jour, vous pouvez réussir automatiquement n'importe quelle sort de Magie Animale, même si vous ne le connaissez pas.",
        equipment: "",
        skills: [
            { name: "Inspiration Animale", type: TypeSkill.MagieAnimale, difficulty: '?', effects: ["Choisissez 3 compétences parmi celles suivantes"], special: "green" },
            { name: "Griffe de l'Ours", type: TypeSkill.MagieAnimale, difficulty: "C12", effects: ["2 blessures", "ER5: projette au sol la cible, 1 blessure supplémentaire"] },
            { name: "Dard de la Guêpe", type: TypeSkill.MagieAnimale, difficulty: "C12", effects: ["2 blessures", "Votre cible est Empoisonnée 3"] },
            { name: "Crocs du Serpent", type: TypeSkill.MagieAnimale, difficulty: "C14", effects: ["2 blessures", "ER2 : Votre cible est Empoisonnée 2"] },
            { name: "Charge du Sanglier", type: TypeSkill.MagieAnimale, difficulty: "C12", effects: ["2 blessures", "ER2 : Vous projetez votre cible au sol", "ER5 : Vous continuez votre route et touchez une seconde cible derrière la première.", "Nécessite de l'élan"] },
            { name: "Sabot du Cerf", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["Vous vous déplacez de 15m.", "Si une cible se trouve au sol sur votre route, vous lui infligez 3 blessures."] },
            { name: "Nage de la Loutre", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["Vous vous déplacez aisément dans l'eau jusqu'à la fin de la scène."] },
            { name: "Vision du Hibou", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["Vous voyez extrêmement bien et de nuit jusqu'à la fin de la scène.", "Si d'éventuels malus s'appliquaient à cause de cela, vous ne les avez plus."] },
            { name: "Griffes de la Taupe", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["1 blessure", "Vous pouvez utilisez cette compétence sur le sol pour creuser d'environ 50cm de profondeur."] },
            { name: "Épines du Hérisson", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["Vous subissez une blessure de moins des attaques pendant 1 tour.", "Si on vous attaque au corps à corps, l'ennemi gagne : 'E2 : vous subissez 1 blessure'"] },
            { name: "Agilité de l'Écureuil", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["Vous pouvez monter aisément aux arbres et vous déplacer d'arbre en arbre.", "ER5 : vous grignottez une noisette, vous vous soignez d'une blessure. (une fois par jour)"] },
            { name: "Langue de la Grenouille", type: TypeSkill.MagieAnimale, difficulty: "C10", effects: ["Vous attrapez avec votre langue n'importe quel objet à moins de 10m de vous.", "La difficulté augmente de 4 si l'objet est tenu par un ennemi."] },
        ]
    },
    {
        id: "Rodeur",
        name: "Rôdeur",
        description: ["Les Rôdeurs de la Nation Verte sont des combattants furtifs. Ce sont les seuls à manier l'épée, mais le combat direct n'est pas leur fort, ils préfèrent la discrétion."],
        asset: "Ombre (furtif dans les endroits naturels)",
        equipment: "Épée",
        skills: [
            { name: "Tranche", type: TypeSkill.ArmeGladiateur, difficulty: 'R11', effects: ['2 blessures', "ER 5 : malus à l'adversaire", 'Risque : la prochaine attaque réussie contre vous vous inflige une blessure de plus.'] },
            { name: "Entaille éclair", type: TypeSkill.ArmeGladiateur, difficulty: 'C12', effects: ["Initiative", "1 blessure", "Inflige 2 blessures de plus si la cible est en train d'effectuer une action autre que vous attaquer ou se défendre."] },
            { name: "Disparaître", type: TypeSkill.Furtivité, difficulty: 'C14', effects: ['Vos ennemis ne sont plus au courant de votre présence.', "La difficulté est celle d'un jet de Furtivité +4."] },
        ]
    },
    {
        id: "TireurVenimeux",
        name: "Tireur Venimeux",
        description: ["Les Tireurs Venimeux pensent que la flèche n'a pas pour but de tuer, juste d'amener le poison dans les veines de leur cible."],
        asset: "Doigts de fée : Vous pouvez appliquer des doses d'Apothicaire sans prendre une action.",
        equipment: "Sarbacane : permet de tirer des fléchettes, innofensives (0 blessure) mais discrètes.",
        skills: [
            { name: "Venin", type: TypeSkill.Apothicaire, difficulty: '3 D', effects: ['A appliquer sur une flèche ou une arme.', "Inflige Empoisonné 3"] },
            { name: "Piqûre", type: TypeSkill.Apothicaire, difficulty: '3 D', effects: ['A appliquer sur une flèche ou une arme.', "Inflige 1 blessure"] },
            { name: "Anti-Venin", type: TypeSkill.Apothicaire, difficulty: '3 D', effects: ['A consommer.', "Enlève les états Empoisonné et Intoxiqué"] },
        ]
    },
    {
        id: "TireurElite",
        name: "Tireur d'Élite",
        description: ["Les tireurs d'élite de la Nation Verte sont les meilleurs archers d'Omnak. Ils maîtrisent l'arc long et sont capables de tirer plus loin que n'importe qui d'autre."],
        asset: "Armes à Distance",
        equipment: "Arc long",
        skills: [
            { name: "Tir puissant", type: TypeSkill.ArmeDistance, difficulty: 'C12', effects: ['2 blessures', "ER18 : 1 blessure supplémentaire", "Distance : 1-25m"] },
            { name: "Tir en cloche", type: TypeSkill.ArmeDistance, difficulty: 'C14', effects: ['1 blessure', "Distance: 50-125m"] },
            { name: "Viser un point faible", type: TypeSkill.ArmeDistance, difficulty: 'C16', effects: ["Avant de faire l'action choisissez entre : état En Sang, état Immobilisé (pendant 2 tours), malus Borgne (toute la scène) et malus Incapable de se servir de [membre au choix] (toute la scène).", "1 blessure, le choix est infligé à la cible.", "Distance : 1-25m", ""] },
        ]
    },
    {
        id: "MageSable",
        name: "Mage de Sable",
        description: ["La Nation Sable envoie ses futurs Mages au milieu du désert. Livrés à eux mêmes, les survivants ne font plus qu'un avec le sable.", "ATTENTION : La Magie du Sable nécessite du Sable."],
        asset: "Survie en milieu désertique",
        equipment: "",
        skills: [
            { name: "Jet de Sable", type: TypeSkill.MagieSable, difficulty: 'C8', effects: ['1 blessure', 'ER5 : met du sable dans les yeux'] },
            { name: "Leurre de Sable", type: TypeSkill.MagieSable, difficulty: 'R12', effects: ["Vous créez un double de vous qui s'il est attaqué n'est en faite que du sable.", "Risque : celui qui sera attaqué ce sera vous, et le double disparaîtra alors"] },
            { name: "Parler aux Esprits du Désert", type: TypeSkill.MagieSable, difficulty: 'C10', effects: ["Vous communiquer avec ces étranges esprits qui traverse le désert en quelques minutes.", "Vous pouvez demander des informations sur tout ce qui touche le sable", "Vous pouvez envoyez un message à un autre Mage connaissant ce sort", ''] },
        ]
    },
    {
        id: "EnfantPoignard",
        name: "Enfant du Poignard",
        description: ["La Nation Sable choisi ses futurs Mages dès l'enfance. Ils sont entraînés à tuer très jeunes. On leur apprend que leur mission est plus importante que tout."],
        asset: "Obstiné",
        equipment: "Poignard (arme légère)",
        skills: [
            { name: "Entaille rapide", type: TypeSkill.ArmeLegere, difficulty: 'C10', effects: ['1 blessure'] },
            { name: "Lancer de lame", type: TypeSkill.ArmeLegere, difficulty: 'C12', effects: ['2 blessures', 'ER2 : 1 blessure', 'Il vous faut 1 tour pour récupérer votre arme sur un cadavre, et réussir une action C14 si la cible se débat'] },
            { name: "Égorger", type: TypeSkill.ArmeLegere, difficulty: 'C16', effects: ["Ne faites cette action que si la cible n'est pas au courant de votre présence", "La cible est morte", "EE4 : 2 blessures"] },
        ]
    },
    {
        id: "PorteurObsidienne",
        name: "Porteur d'Obsidienne",
        description: ["L'Obsidienne donne une résistance physique impressionnante. Leurs porteurs ne tombent jamais malades"],
        asset: "Solide : vos seuils de blessures sont augmentés de 4",
        equipment: "",
        skills: [
            { name: "Concentration Noire", type: TypeSkill.Aucun, difficulty: 'R8', effects: ["Toutes les attaques jusqu'à votre prochain tour vous infligent une blessure de moins.", "ER6 : les projectiles ricochent sur vous", "Risque : malus pour se défendre"] },
            { name: "Projection d'éclats d'Obsidienne", type: TypeSkill.MagieRoche, difficulty: 'R10', effects: ['2 blessures sur une petite zone', 'ER3 : inflige En Sang', 'Risque : les éclats partent dans tous les sens et infligent 1 blessure à vous et aux personnes proches de vous'] },
            { name: "Secousse mineure", type: TypeSkill.MagieRoche, difficulty: 'C13', effects: ["Provoque un petit tremblement de terre, tout le monde sauf vous subit un malus Déséquilibré jusqu'à votre prochain tour."] },
        ]
    },
    {
        id: "PorteurEmeraude",
        name: "Porteur d'Émeraude",
        description: ["Les Porteurs d'Émeraude sont des mages anti magie. Ils sont capables de diminuer les pouvoirs magiques d'autres mages, et d'annuler complètement certains sorts."],
        asset: "Bouclier d'Émeraude : une fois par jour, vous pouvez totalement être immunisé d'un sort qui aurait dû vous toucher",
        equipment: "",
        skills: [
            { name: "Concentration Verte", type: TypeSkill.Aucun, difficulty: 'R8', effects: ["Vous neutralisez toutes la magie autour de vous. Tous les sorts jusqu'à votre prochain tour ont un malus.", "ER6 : les sorts qui sont tout de même réussis infligent 1 blessure de moins", "Risque : vous ne pouvez plus lancer de sort ou cette compétence. Dure 2 tours", ''] },
            { name: "Tapis de Pointes d'Émeraude", type: TypeSkill.MagieRoche, difficulty: 'C10', effects: ['Choisissez une zone, au début de votre prochain tour des pointes vertes y apparaissent. Les personnes se trouvant ou voulant traverser cette zone subissent 2 blessures et En Sang. Dure toute la scène.'] },
            { name: "Protection", type: TypeSkill.Aucun, difficulty: 'C12', effects: ["Choisissez un type de Magie, vous avez un bonus pour vous en défendre pendant 2 tours"] },
        ]
    },
    {
        id: "PorteurSaphir",
        name: "Porteur de Saphir",
        description: ["Les Saphirs ne choisissent pas souvent de porteur, ils sont exigeants. Ils cherchent ceux dont les capacités magiques sont exceptionnelles, pour les rendre uniques."],
        asset: "Magie Impressionnante : vos sorts ont 'ER18 : le sort est magnifique, toute personne présente est impressionnée.'",
        equipment: "",
        skills: [
            { name: "Concentration Bleue", type: TypeSkill.Aucun, difficulty: 'R8', effects: ['Vous concentrez vos capacités magiques. Vous gagnez un bonus pour le prochain sort que vous lancez durant la scène.', "ER6 : le sort infligera 1 blessure supplémentaire s'il réussi", "Risque : malus pour le prochain sort", ''] },
            { name: "Projection de pierres bleues", type: TypeSkill.MagieRoche, difficulty: 'C10', effects: ["Vous lancez sur une cible une rangée de pierres bleues lévitantes.", "1 blessure", "ER4 : vous attaquez une seconde cible avec ce sort", "ER5 : inflige le malus Sonné pendant 1 tour"] },
            { name: "Garder son calme", type: TypeSkill.Aucun, difficulty: 'C11', effects: ["Vous pouvez utiliser cette compétence lorsque vous subissez un état d'énervement, de confusion, de persuasion ou de peur.", "Vous ne subissez pas cet état.", "ER5 : Vous obtenez l'état Clairvoyant", ""] },
        ]
    },
    {
        id: "PorteurTopaze",
        name: "Porteur de Topaze",
        description: ["Le Topaze, aussi appelé la pierre solaire, permet à son porteur de maîtriser la puissante magie du soleil.", "ATTENTION : On ne peut lancer que 2 sorts de Magie Solaire par jour, 5 s'il fait ensoleillé."],
        asset: "Réserve Solaire : une fois par jour, vous pouvez (sans utiliser une action) libérer la lumière solaire contenue dans votre Topaze. Il fait jour et chaud jusqu'à la fin de la scène, vous pouvez lancer 2 sorts de Magie Solaire sans qu'ils comptent dans votre limite.",
        equipment: "",
        skills: [
            { name: "Flash", type: TypeSkill.MagieSolaire, difficulty: 'C10', effects: ['Éblouit (malus) toutes les personnes proches regardant vers vous.', "ER4 : touche toute personne qui vous as dans son champ de vision", "Dure jusqu'à votre prochain tour"] },
            { name: "Révélation Radieuse", type: TypeSkill.MagieSolaire, difficulty: 'C12', effects: ['Envoie un rayon de lumière dans une direction, révélant des choses cachées même magiquement.', "Sur une cible seule, peut lui faire avouer un secret."] },
            { name: "Soleil Réduit", type: TypeSkill.MagieSolaire, difficulty: 'R14', effects: ["Vous lancez une boule de Magie Solaire en l'air, elle illumine et brûle les personnes dans la zone en dessous d'elle, au rythme d'une blessure par tour.", "Commence maintenant et dure 2 tours", "Risque : la boule explose, brûlant toute personne présente de 2 blessures", ''] },
        ]
    },
    {
        id: "PorteurRubis",
        name: "Porteur de Rubis",
        description: ["Ceux qui se lient avec un Rubis ont souvent une courte vie. Fulgurante, furieuse, foudroyante, mais sans retour."],
        asset: "Rage du Rubis : une fois par scène, si vous avez le bonus Enragé, vous pouvez vous en servir pour lancer des sorts offensifs. Dure aussi longtemps que le bonus.",
        equipment: "Poignard (arme légère)",
        skills: [
            { name: "Surf du Désert", type: TypeSkill.MagieSable, difficulty: 'R10', effects: ["Vous vous déplacez sur une vague de sable rapidement.", "Risque : vous chutez et subissez 1 blessure."] },
            { name: "Assault Frénétique", type: TypeSkill.ArmeLegere, difficulty: 'R12', effects: ["Ne peut être utilisé qu'avec le bonus Enragé.", "3 blessures", "Risque : dans votre rage, la cible de cette compétence est choisie aléatoirement"] },
            { name: "S'énerver", type: TypeSkill.Aucun, difficulty: 'C11', effects: ["", "Vous pouvez utiliser cette compétence lorsque vous subissez un état d'apaisement, d'intimidation, de contrôle ou de peur. Sinon, subissez 1 blessure pour lancer.", "Vous ne subissez pas cet état et obtenez le bonus Enragé (frapper) pendant 2 tours.", ""] },
        ]
    },
    {
        id: "PorteurPyrite",
        name: "Porteur de Pyrite",
        description: ["On raconte que ceux qui portent une Pyrite finissent par devenir d'habiles manipulateurs."],
        asset: "Menteur",
        equipment: "",
        skills: [
            { name: "Lame de Sable", type: TypeSkill.MagieSable, difficulty: 'C10', effects: ["Génère un poignard (Arme Légère) en sable.", "Vous pouvez aussitôt utiliser une action d'Arme Légère", "Redevient du sable à la fin de votre tour."] },
            { name: "Statuette de Sable", type: TypeSkill.MagieSable, difficulty: 'C12', effects: ["Génère un petit objet au choix à l'apparence réelle.", "Dure toute la scène ou jusqu'à ce que quelque chose le touche. Après il redevient du sable."] },
            { name: "Masque de Sable", type: TypeSkill.MagieSable, difficulty: 'R14', effects: ["Vous vous faites passer pour quelqu'un d'autre pendant la scène grâce à un masque reprenant les traits physiques d'un autre. Votre voix est aussi modifiée.", "Risque : le masque s'effrite à votre prochain tour."] },
        ]
    },
    {
        id: "PorteurAmethyste",
        name: "Porteur d'Améthyste",
        description: ["Les Porteurs d'Améthystes sont les premiers à avoir utilisé la Magie d'Invisibilité, avant qu'elle soit utilisée par les Mages Assassins et les Invisibles."],
        asset: "Pas Furtif : impossible d'être repéré par le seul bruit des pas",
        equipment: "",
        skills: [
            { name: "Concentration Violette", type: TypeSkill.Aucun, difficulty: 'R8', effects: ["Vous vous concentrez pour votre action furtive du prochain tour, décrivez la intégralement, vous gagnez un bonus.", "Si un élément de votre description a changé, vous subissez un malus à la place.", "Risque : malus à la place, action obligatoire", ""] },
            { name: "Flou", type: TypeSkill.MagieInvisible, difficulty: "C10", effects: ["Votre cible gagne le bonus Flou (difficile à viser et à reconnaître) pendant 2 tours.", "Vous pouvez vous cibler.", "ER4 : dure un tour de plus"] },
            { name: "Intraçable", type: TypeSkill.MagieInvisible, difficulty: "C12", effects: ["Vous faites effacer des empreintes par magie. Peut être utilisé tout en marchant.", "ER5 : vous créer de fausses empreintes."] },
        ]
    },
    {
        id: "PorteurHematite",
        name: "Porteur d'Hématite",
        description: ["La Magie du Sang est rare et dangereuse, les Porteurs d'Hématite peuvent en maîtriser les bases."],
        asset: "Coagulation Rapide : vous ne pouvez pas subir En Sang. Vous régénérez une blessure de plus par repos.",
        equipment: "",
        skills: [
            { name: "Vertiges Sanglants", type: TypeSkill.MagieSang, difficulty: 'C14', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Votre ennemi devient Désorienté (malus) pendant 1 tour."] },
            { name: "Hémorragie", type: TypeSkill.MagieSang, difficulty: 'C10', effects: ['', 'Vous vous infligez 1 blessure avant de lancer ce sort.', 'Uniquement sur une cible déjà blessée', "Les blessures de la cible saignent abondemment. Elle subit 1 blessure pour chaque blessure qu'elle a déjà, jusqu'à un maximum de 3."] },
            { name: "Appel du Sang", type: TypeSkill.MagieSang, difficulty: 'C10', effects: ['Vous vous infligez 3 blessures avant de lancer ce sort.', 'Vous aspirez le sang de tous vous ennemis à 10m environ. Ils subissent 2 blessures.'] },
        ]
    },
    {
        id: "PorteurTurquoise",
        name: "Porteur de Turquoise",
        description: ["Les Porteurs de Turquoise font preuve de rapidité. Ils se déplacent, attaquent et fuient plus vite que les autres."],
        asset: "Initiative (vous pouvez toujours jouer en premier)",
        equipment: "",
        skills: [
            { name: "Dash", type: TypeSkill.Deplacement, difficulty: 'C11', effects: ['Déplacez vous de quelques mètres', 'Rejouez'] },
            { name: "Pas en arrière", type: TypeSkill.Deplacement, difficulty: 'C14', effects: ["Vous pouvez faire cette action après une action d'attaque réussie", "Déplacez vous de quelques mètres pour vous éloigner du combat"] },
            { name: "Charge et série de coups", type: TypeSkill.ArmeLegere, difficulty: 'R14', effects: ["Vous vous rapprochez rapidement de votre cible.", '3 blessures', "Risque : vous glissez et tombez au sol."] },
        ]
    },
    {
        id: "Marin",
        name: "Marin",
        description: ["La Nation Grise recrute de nombreux marins pour ses navires. Ils deviennent vite habitués aux tempêtes."],
        asset: "Pied marin (tout ce qui se passe sur un navire)",
        equipment: "",
        skills: [
            { name: "Course Venteuse", type: TypeSkill.MagieTempetes, difficulty: 'C8', effects: ["Lorsque vous courrez, le vent est avec vous.", "Vous vous déplacez de deux fois la distance maximale.", "ER5 : vous gagnez un bonus Esquive jusqu'à votre prochain tour"] },
            { name: "Poing électrostatique", type: TypeSkill.MagieFoudre, difficulty: 'C10', effects: ["1 blessure", "ER10 : la cible subit l'état Paralysé"] },
            { name: "Chant des marins", type: TypeSkill.MagieGaldrar, difficulty: 'C6', effects: ['', "Améliore le moral, instaure une cadence et une coordination des actions du groupe.", "Lors de plusieurs actions coordonnées par le groupe, la dernière gagne un bonus. Ce bonus est utilisable jusqu'à la fin de la scène.", ''] },
        ]
    },
    {
        id: "Artiste",
        name: "Artiste",
        description: ["La Nation Grise voit les artistes comme une véritable force armée, capable d'encourager ses guerriers et marins. Poètes, musiciens, bardes, tous ceux qui peuvent remonter le moral sont engagés."],
        asset: "Charismatique",
        equipment: "Vous pouvez avoir un instrument de musique, ou un recueil de poésie, ou ce que vous voulez.",
        skills: [
            { name: "Galdr d'encouragement", type: TypeSkill.MagieGaldrar, difficulty: 'R8', effects: ["Vous encouragez vos alliés", "Ils résistent mieux à la peur, aux intimidations et au désespoir.", "Le groupe est plus soudé, cela limite les tensions.", "Risque : effet inverse"] },
            { name: "Galdr de vitesse", type: TypeSkill.MagieGaldrar, difficulty: 'C10', effects: ["Vous motivez vos alliés en accélérant peu à peu votre rythme", "Ils courent plus vite, ou s'ils font des actions longues, ils les font plus rapidement."] },
            { name: "Galdr d'amour", type: TypeSkill.MagieGaldrar, difficulty: 'R12', effects: ["Vous séduisez une cible", "Si la cible veut refuser vos avances, elle doit réussir une action C12 pour garder ses esprits", "Risque : vous repoussez la cible"] },
        ]
    },
    {
        id: "Brave",
        name: "Brave",
        description: ["Les Braves de la Nation Grise sont élevés depuis tout jeune à combattre. Musclés, imposants, rustres, il ne vaut mieux pas s'y confronter.",
            "ATTENTION : les Armes de Taille (comme la Hache de Guerre) ont le bonus Tranchant (ER2 : inflige En Sang)"
        ],
        asset: "Courageux (faire des actions dangereuses, vaincre la peur)",
        equipment: "Hache de guerre",
        skills: [
            { name: "Coup Lourd", type: TypeSkill.ArmeTaille, difficulty: 'C14', effects: ["2 blessures", "ER4 : fait tomber la cible au sol"] },
            { name: "Tranche Bouclier", type: TypeSkill.ArmeTaille, difficulty: 'C12', effects: ["1 blessure", "Peut cibler un bouclier ou une armure, la détruit"] },
            { name: "Feinte Coup de Genou", type: TypeSkill.Aucun, difficulty: 'C10', effects: ["Vous levez votre hache, mais vous frappez avec votre genou", "1 blessure", "ER2 : inflige le malus 'Douleur au ventre' pendant 1 tour"] },
        ]
    },
    {
        id: "JeteurOrbesTempete",
        name: "Jeteur d'Orbes (Tempête)",
        description: ["Les Orbes sont des objets magiques renfermant un sort. Les Jeteurs d'Orbes n'ont pas encore de grands pouvoirs, mais ils savent très bien lancer des Orbes."],
        asset: "Améliorateur d'Orbe : quand vous lancez une orbe, vous pouvez lancer 1D20 : de 1 à 7 vous annulez ses effets, de 8 à 15 l'effet est normal, au dessus vous l'améliorez comme bon vous semble",
        equipment: "",
        skills: [
            { name: "Orbe d'Aspiration", type: TypeSkill.Apothicaire, difficulty: '3', effects: ["A lancer, s'active en se brisant", "Crée un flux de vent vers l'orbe venant de toutes les directions", "Donne un bonus pour se déplacer vers l'orbe, il faut réussir l'action 'C14 vous vous éloignez de l'orbe, Rejouez'", "Dure 2 tours"] },
            { name: "Orbe d'Éclairs", type: TypeSkill.Apothicaire, difficulty: '3', effects: ["A lancer, s'active en se brisant", "Des éclairs sortent de l'orbe aléatoirement, à chaque tour une cible proche est frappée par un éclair, elle subit 2 blessures.", "Dure 3 tours, commence maintenant"] },
            { name: "Orbe Nuageuse", type: TypeSkill.Apothicaire, difficulty: '3', effects: ["A lancer, s'active en se brisant", "Installe un brouillard dans la zone.", "Aux tours 1 et 4, malus pour viser. Aux tours 2 et 3, impossible de viser, malus pour attaquer."] },
        ]
    },
    {
        id: "FaiseurPluie",
        name: "Faiseur de Pluie",
        description: ["Les autres nations n'étant pas habitués à se battre dans des conditions extrêmes, la Nation Grise aime les invoquer pour se battre dans son élément. Les Faiseurs de Pluie sont là pour ça."],
        asset: "Enfant de la Pluie : une fois par scène s'il pleut, l'un de vos sorts 'Magie des Tempêtes' ou 'Magie de la Foudre' ou 'Magie de l'Eau' a un bonus",
        equipment: "",
        skills: [
            { name: "Danse de la Pluie", type: TypeSkill.MagieTempetes, difficulty: 'C8', effects: ["En chantant et dansant, vous appelez la pluie", "Le temps change, il passe d'un niveau sur cette liste : ensoleillé, nuageux, pluvieux, tempête.", "Cette compétence est plus difficile (C12) dans les régions désertiques."] },
            { name: "Pluie Coupante", type: TypeSkill.MagieEau, difficulty: 'C12', effects: ["Ne peut être lancé que s'il pleut", "La pluie devient si violente dans une petite zone qu'elle coupe la peau", "Inflige 2 blessures à toutes les cibles dans la zone", "E3 : le sol à cet endroit devient glissant"] },
            { name: "Pluie Cathartique", type: TypeSkill.MagieEau, difficulty: 'C6', effects: ["Ne peut être lancé que s'il ne pleut pas", "Doit être lancé après une épreuve compliquée", "Fais tomber la pluie, qui appaise les esprits et restaure le calme.", "Soigne 1 blessure à tous vos alliés"] },
        ]
    },
    {
        id: "DresseurPygargues",
        name: "Dresseur de Pygargues",
        description: ["Les pygargues sont les oiseaux les plus admirés par la Nation Grise car ils incarnent le courage, la résistance face aux tempêtes, et le retour à la côte. Les Dresseurs de Pygargues sont quant à eux très respectés, à la fois pour les valeurs de leurs oiseaux, mais aussi pour leur utilité au combat.",
            "ATTENTION : si vous sifflez, action gratuite, vous annulez tous les ordres et tous vos pygargues retournent dans le ciel"
        ],
        asset: "Dressage d'oiseaux (toute action en lien avec les oiseaux sauf attaque)",
        equipment: "Possède 2 Pygargues domestiqués (oiseaux marins de la taille d'un aigle, ils volent toujours non loin de vous, ils fuient à 2 blessures, meurent à 4)",
        skills: [
            { name: "Ordre d'attaque", type: TypeSkill.Aucun, difficulty: 'R12', effects: ["Vous désignez une cible qu'un de vos pygargue attaque", "A chaque tour, le pygargue inflige 1 blessure", "ER4 : inflige le malus Borgne", "Risque : le pygargue ne fait aucune blessure au premier tour"] },
            { name: "Ordre de dérober", type: TypeSkill.Aucun, difficulty: 'R14', effects: ["Vous désignez un objet qu'un de vos pygargue va récupérer", "Risque : il s'est trompé d'objet"] },
            { name: "Ordre de survol", type: TypeSkill.Aucun, difficulty: 'R10', effects: ['', "Vous désignez une large zone où l'un de vos pygargue va surveiller", "Si le pygargue repère quelque chose, il vous préviendra avec son chant", "Risque : le pygargue est parti chasser quand il se passe quelque chose", ''] },
        ]
    },
    {
        id: "LanceurHaches",
        name: "Lanceur de Haches",
        description: ["Attaquer à distance est perçu partout comme un avantage. La Nation Grise a décidé qu'il n'était pas nécessaire de changer d'arme pour cela.",
            "ATTENTION : les Haches de lancer sont aussi des armes de Taille, elles ont donc Tranchante (ER2 : inflige En Sang)"
        ],
        asset: "Lanceur d'armes",
        equipment: "Haches de lancer (x4)",
        skills: [
            { name: "Jet de Hache", type: TypeSkill.ArmeTaille, difficulty: 'C12', effects: ["1 blessure", "Portée de 10m maximum"] },
            { name: "Retour du bras", type: TypeSkill.ArmeTaille, difficulty: 'C14', effects: ["Peut être lancé après un 'Jet de Hache' réussi", "Vous pouvez tenter un nouveau 'Jet de Hache', pas forcément sur la même cible."] },
            { name: "Lancer de toutes ses forces", type: TypeSkill.ArmeTaille, difficulty: 'C16', effects: ["2 blessures, fais tomber au sol la cible", "Portée de 10m maximum"] },
        ]
    },
    {
        id: "SouffleurMots",
        name: "Souffleur de Mots",
        description: ["La Magie des Galdrar a de nombreuses facettes. L'une d'entre elle est la faculté de souffler des mots d'une langue ancienne qui se matérialisent de différentes manières. Les Souffleur de Mots de la Nation Grise sont quasiment les seuls à connaître et utiliser cette langue."],
        asset: "Voix Magique : lorsque vous parlez ou lancez un sort de Magie des Galdrar vous avez 'EE3 : suivant le ton utilisé, réconforte, intimide ou donne du courage à la cible'",
        equipment: "",
        skills: [
            { name: "Vraam (Flamme)", type: TypeSkill.MagieGaldrar, difficulty: 'C11', effects: ["Crache une gerbe de flamme sur une cible proche, elle subit 2 blessures", "ER5: elle subit l'état 'En Feu'"] },
            { name: "Shlii (Bouclier)", type: TypeSkill.MagieGaldrar, difficulty: 'C12', effects: ["Crée un bouclier invisible qui diminue la puissance des projectiles vous ciblant d'une blessure jusqu'à votre prochain tour"] },
            { name: "Fouss (Souffle)", type: TypeSkill.MagieGaldrar, difficulty: 'C14', effects: ["Repousse les cibles proches de 5 mètres environ, elles subissent 1 blessure.", "ER5: elles sont repoussées de 10m."] },
        ]
    },


    //#region Neutre

    {
        id: "Cheval",
        name: "Cheval",
        description: ["Les chevaux sont de fidèles destriers, rapides et intelligents.",
            "4 blessures : désarçonne son cavalier et fuit. Le cavalier doit réussir une action C14 pour ne pas subir 2 blessures.",
            "6 blessures : K.O.",
            "8 blessures : mort."],
        asset: "",
        equipment: "",
        skills: []
    },

    //#region Idées pour plus tard 
    {
        id: "IdeesMagieSang",
        name: "Idées de sorts pour la Magie du Sang",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Goût du Sang", type: TypeSkill.MagieSang, difficulty: 'R14', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Le groupe d'ennemi choisi devient fou de violence. Ils se battent les uns contre les autres pendant 1 tour.", "Risque : le groupe d'ennemi vous attaque vous à la place.", ''] },
            { idea: true, name: "Lame de Sang", type: TypeSkill.MagieSang, difficulty: 'C6', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Vous créez une arme légère en Sang. Vous pouvez l'utiliser jusqu'à la fin de la scène."] },
            { idea: true, name: "Hémorragie Multiple", type: TypeSkill.MagieSang, difficulty: 'C6', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Toutes les personnes déjà blessées (dont vous) subissent 2 blessures et l'état En Sang."] },
        ]
    },
    {
        id: "IdeesGladiator",
        name: "Idées de sorts pour l'épée etc.",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Frappe", type: TypeSkill.ArmeGladiateur, difficulty: 'C12', effects: ['2 blessures'] },
            { idea: true, name: "Enchaînement d'attaque", type: TypeSkill.ArmeGladiateur, difficulty: 'C14', effects: ['3 blessures'] },
            { idea: true, name: "Frappe plongeante", type: TypeSkill.ArmeGladiateur, difficulty: 'C16', effects: ['4 blessures', 'EE3 : malus pour se défendre au corps à corps'] },
            { idea: true, name: "Feinte", type: TypeSkill.ArmeGladiateur, difficulty: 'R14', effects: ["Les bonus de défense de l'adversaire ne compte pas pour cette attaque.", '3 blessures', 'Risque : malus pour se défendre des attaques au corps à corps'] },
        ]
    },
    {
        id: "IdeesMagieGlace",
        name: "Idées de sorts pour la Magie de Glace",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Lame de givre", type: TypeSkill.MagieGlace, difficulty: 'C10', effects: ["Vous faites apparaître une lame de givre d'environ 1m de type Arme de Gladiateur.", "Vous pouvez la donner à un allié, elle dure jusqu'à la fin de la scène.", "Légère et maniable, elle offre 1 bonus."] },
        ]
    },

    {
        id: "IdeesMagieFeu",
        name: "Idées de sorts pour la Magie de Feu",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Fumigène", type: TypeSkill.MagieFeu, difficulty: 'R14', effects: ['Vous faites exploser un fumigène à vos pied, vos ennemis vous perdent de vue.', "Dure 2 tours.", "Risque : vous subissez le malus Asphyxié pendant 2 tours"] },
            { idea: true, name: "Mains brûlantes", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: [""] },
            { idea: true, name: "Lame de feu", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: ["Vous faites apparaître une lame de feu d'environ 1m de type Arme de Gladiateur.", "Seul vous pouvez la manier, elle dure jusqu'à la fin de la scène.", "Une attaque réussie avec inflige En Feu et 1 blessure supplémentaire."] },
            { idea: true, name: "Tempête de flammes", type: TypeSkill.MagieFeu, difficulty: 'C16', effects: ["Fait apparaître une immense tempête de flammes", "Tout le monde sauf vous est projeté au sol et subit 4 blessures."] },
            { idea: true, name: "Ailes de Feu", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Pluie de feu", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Brasier", type: TypeSkill.MagieFeu, difficulty: '', effects: ["Autour de vous"] },
            { idea: true, name: "Incendie", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Explosion", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Fournaise", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: ["L'effet est différent suivant le nombre de fois que le sort est réussi d'affilé.", "1ère fois : il fait chaud. 2e : Malus surchauffe à toutes les personnes dans la salle sauf le lanceur. 3e et plus : 1 blessure à tous sauf au lanceur"] },
            { idea: true, name: "Touché carbonisant", type: TypeSkill.MagieFeu, difficulty: "R14", effects: ["Vous attrapez une cible avec vos mains, elle brûle à l'endroit où vous la tenez.", "4 blessures", "Risque : malus pour se défendre des attaques au corps à corps"] },
            // volcan
            { idea: true, name: "Éruption", type: TypeSkill.MagieFeu, difficulty: '', effects: ["Gerbes sortent du sol"] },
            { idea: true, name: "Élémentaire du Volcan", type: TypeSkill.MagieFeu, difficulty: '', effects: ["famillier"] },
            { idea: true, name: "Armée du Volcan", type: TypeSkill.MagieFeu, difficulty: '', effects: ["familliers"] },
            //Souffleur de Feu
            { idea: true, name: "Souffle de feu", type: TypeSkill.MagieFeu, difficulty: '', effects: ["monocible ultra puissant"] },
            //Pyromancien
            { idea: true, name: "Sollicitation Infernale", type: TypeSkill.MagieFeu, difficulty: '', effects: ["Mains en l'air, vous demandez à toutes les flammes présentes de s'intensifier.", "Toutes les personnes qui ont l'état En Feu subissent 2 blessures."] },
            //Assoifeur
            { idea: true, name: "", type: TypeSkill.MagieFeu, difficulty: '', effects: ["A la première réussite d'affilée de ce sort sur une même cible : malus Faible", "2e : malus Faible et malus Déshydraté", "3e et plus : malus Faible et malus Déshydraté et 2 blessures"] },
        ]
    },

    {
        id: "IdeesMagieSable",
        name: "Idées de sorts pour la Magie du Sable",
        description: ["ATTENTION : La Magie du Sable nécessite du Sable."],
        asset: "",
        equipment: "",
        skills: [
            // Élémentaliste
            { idea: true, name: "Réduire en poussière", type: TypeSkill.MagieSable, difficulty: 'R12', effects: ["Génère une quantité de sable suffisante pour 3 sorts.", "Risque : quantité suffisante pour 1 sort seulement"] },
            { idea: true, name: "Tempête du Sable", type: TypeSkill.MagieSable, difficulty: '', effects: [""] },
            { idea: true, name: "Enrober de sable", type: TypeSkill.MagieSable, difficulty: '', effects: ["Fait des dégâts et un malus, énorme malus pour une cible en armure"] },
            { idea: true, name: "Psammos kinésie", type: TypeSkill.MagieSable, difficulty: 'C15', effects: ["Déplacer le sable et en faire ce que vous souhaitez.", "La difficulté peut varier de 12 à 16 suivant l'action."] },

            // Verrier
            { idea: true, name: "Jet de lames de verre", type: TypeSkill.MagieSable, difficulty: '', effects: [""] },
        ]
    },

    {
        id: "IdeesMagieRoche",
        name: "Idées de sorts pour la Magie des Roches",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Mur de Roche", type: TypeSkill.MagieRoche, difficulty: '', effects: [""] },
            { idea: true, name: "Peau de Pierre", type: TypeSkill.MagieRoche, difficulty: '', effects: [""] },
            { idea: true, name: "Appel des Profondeurs", type: TypeSkill.MagieRoche, difficulty: '', effects: ["Fait s'écrouler le sol sous vos ennemis.", "Toutes les cibles dans une zone moyenne tombent au sol.", "2 blessures"] },
            { idea: true, name: "Poing de Fer", type: TypeSkill.MagieRoche, difficulty: '', effects: ["Coup de poing amélioré."] },
            { idea: true, name: "Chute de Pierres", type: TypeSkill.MagieRoche, difficulty: '', effects: [""] },
            { idea: true, name: "Lithos kinésie", type: TypeSkill.MagieRoche, difficulty: 'C16', effects: ["Déplacer les roches, construisez ce que vous souhaitez.", "La difficulté peut varier de 14 à 18 suivant l'action."] },
            { idea: true, name: "Mur transparent de Saphir", type: TypeSkill.MagieRoche, difficulty: 'R12', effects: ["Vous érigez un mur ou un dôme autour de vous et des personnes proches. Le son et les effets magiques ne le traversent pas.", "Le mur est détruit au bout de 3 blessures.", "Risque : le mur est extrêmement fragile et se brisera en éclats coupants (1 blessure)", ""] },
        ]
    },

    {
        id: "IdeesMagieVegetale",
        name: "Idées de sorts pour la Magie Végétale",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Plante Carnivore", type: TypeSkill.MagieVegetale, difficulty: 'C10', effects: ["Une plante carnivore pousse à l'endroit désigné pendant 1 tour.", "Une fois poussée, elle attaque tout ce qui est autour d'elle, elle utilise Morsure C8 : inflige 2 blessures.", "Elle meurt à 3 blessures."] },
            { idea: true, name: "Fleur Hypnotisante", type: TypeSkill.MagieVegetale, difficulty: 'C10', effects: ["Une fleur hypnotisante pousse à l'endroit désigné pendant 1 tour.", "Une fois poussée, elle émet du pollen qui rend détraqué (malus) les personnes proches, puis loin.", "Elle meurt à 3 blessures."] },
            { idea: true, name: "Fleur Cadavre", type: TypeSkill.MagieVegetale, difficulty: 'C10', effects: ["Une fleur cadavre pousse à l'endroit désigné pendant 1 tour.", "Une fois poussée, elle émet du poison dans l'air, inflige 1 blessure par tour aux personnes proches, puis loin.", "Elle meurt à 3 blessures."] },
            { idea: true, name: "Souvenirs du Bois", type: TypeSkill.MagieVegetale, difficulty: 'C14', effects: ["En touchant un arbre, vous pouvez ressassez un de ses souvenirs. Quelque chose de marquant, imprégné dans son bois.", "Vous vous trouvez à la place de l'arbre, vous voyez flou et entendez peu."] },
        ]
    },

    {
        id: "IdeesMagieSolaire",
        name: "Idées de sorts pour la Magie Solaire",
        description: ["ATTENTION : On ne peut lancer que 2 sorts de Magie Solaire par jour, 5 s'il fait ensoleillé."],
        asset: "",
        equipment: "",
        skills: [
            // Arbréen ?
            { idea: true, name: "Halo Purificateur", type: TypeSkill.MagieSolaire, difficulty: 'C12', effects: ["Vous apposez vos mains sur une cible immobile, elle perd toute malédiction, poison, ou contrôle.", "ER5 : soigne 1 blessure"] },

            { idea: true, name: "Rayon Solaire", type: TypeSkill.MagieSolaire, difficulty: 'C14', effects: ["3 blessures, traverse pour toucher 3 cibles", "ER2 : éblouit (malus) toute personne dans la direction du rayon.", "Compte pour 2 sorts dans la limite Solaire."] },
            { idea: true, name: "Ultra Rayon Solaire", type: TypeSkill.MagieSolaire, difficulty: 'C16', effects: ["5 blessures, traverse et touche toutes les cibles", "ER2 : éblouit (malus) toute personne dans la direction du rayon.", "Compte pour 3 sorts dans la limite Solaire."] },
        ]
    },

    {
        id: "IdeesArc",
        name: "Idées de sorts pour les Armes à Distance",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Tirs en mouvement", type: TypeSkill.ArmeDistance, difficulty: "R14", effects: ["Vous courrez dans une direction en décochant 2 fléches, sur 1 ou 2 cibles.", "1 blessure par flèche", "Risque : Vous glissez et tombez au sol, tout le monde est au courant de votre présence."] },
            { idea: true, name: "Salve", type: TypeSkill.ArmeDistance, difficulty: "C16", effects: ["Vous lancez 3 flèches sur 3 cibles différentes.", "1 blessure par flèche", "EE3 : l'une des 3 flèches atteint sa cible", "Distance : 1-10m"] },
            { idea: true, name: "Pluie de flèche", type: TypeSkill.ArmeDistance, difficulty: "C16", effects: ["Vous lancez 3 flèches en cloche sur une zone", "Chaque personne dans la zone lance 1D20, sur 1-12 elle prend une flèche, et subit donc 1 blessure.", "Distance : 1-50m"] },
        ]
    },

    {
        id: "IdeesMagieInvisible",
        name: "Idées de sorts pour la Magie d'Invisiblité",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            // Mage Assassin
            { idea: true, name: "Reflets miroirs", type: TypeSkill.MagieInvisible, difficulty: "C12", effects: ["Vous rendez un petit objet, comme une arme légère, complètement invisible jusqu'à la fin de la scène.", "Si l'objet est utilisé il redevient visible.", "Vous pouvez cibler un objet à distance raisonnable.", ""] },

            // Invisible
            { idea: true, name: "Phase", type: TypeSkill.MagieInvisible, difficulty: "R14", effects: ["Vous entrez en phase, dans un autre plan d'existence, réalité alternative à la notre.", "Lors de votre prochain tour, vous agissez dans cet autre plan.", "Vous revenez dans le plan réel au début du tour suivant.", "Risque : vous subissez 4 blessures."] },
            { idea: true, name: "Oubli", type: TypeSkill.MagieInvisible, difficulty: "R14", effects: ["Vous modifiez la mémoire immédiate d'une cible.", "Si elle n'a pas fait particulièrement attention à vous, elle vous oublie.", "Risque : la cible reste bloquée sur vous."] },

            { idea: true, name: "Mirage", type: TypeSkill.MagieInvisible, difficulty: "", effects: ["Vous faites croire à une cible ou un groupe de cible qu'une partie du paysage est différent."] },
        ]
    },

    {
        id: "IdeesMagieTempête",
        name: "Idées de sorts pour la Magie des Tempêtes",
        description: ["ATTENTION : la Magie des Tempêtes a un bonus pendant une tempête."],
        asset: "",
        equipment: "",
        skills: [
            // Elementaliste Vent
            { idea: true, name: "Tourbillon ascendant", type: TypeSkill.MagieTempetes, difficulty: "C10", effects: ["Un tourbillon de vent et de poussières apparait à vos pieds et vous propulse en l'air. Vous volez."] },
        ]
    },
    {
        id: "IdeesMagieFoudre",
        name: "Idées de sorts pour la Magie de la Foudre",
        description: [],
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Chaîne d'éclairs", type: TypeSkill.MagieFoudre, difficulty: "", effects: ["Plusieurs cibles qui s'enchaînent"] },
            { idea: true, name: "Chute de Foudre", type: TypeSkill.MagieFoudre, difficulty: "", effects: ["Une cible ou petite zone ?"] },
            { idea: true, name: "Lance de Foudre", type: TypeSkill.MagieFoudre, difficulty: "", effects: ["Monocible mais peut transpercer et en toucher une 2e."] },
        ]
    }
    //#endregion
]
