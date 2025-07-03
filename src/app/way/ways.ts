import { TypeSkill, Way } from "../../core/way.core";

export let ways: Way[] = [
    {
        id: "Soldat",
        name: "Soldat",
        description: "Toute l'armée de la Nation Rouge commence par une formation de soldat. Les bases du combat et de la discipline y sont acquises.",
        asset: "Honorable",
        equipment: "Glaive, cotte de mailles",
        skills: [
            { name: "Estoc", type: TypeSkill.ArmeGladiateur, difficulty: 'C8', effects: ['1 blessure'] },
            { name: "Diagonale", type: TypeSkill.ArmeGladiateur, difficulty: 'C10', effects: ['1 blessure', 'ER4 : 1 blessure'] },
            { name: "Garde", type: TypeSkill.ArmeGladiateur, difficulty: 'R12', effects: ['bonus pour se défendre des attaques au corps à corps', 'R : malus à la place'] },
        ]
    },
    {
        id: "MageFeu",
        name: "Mage de Feu",
        description: "La Nation Rouge est la seule à maîtriser la Magie du Feu. Puissante et destructrice, son apprentissage ne se fait pas sans brûlures.",
        asset: 'Représailles de Flammes : quand attaqué au corps à corps, votre ennemi reçoit : "E3 : vous êtes brûlé, vous subissez 1 blessure"',
        equipment: "",
        skills: [
            { name: "Boule de Feu", type: TypeSkill.MagieFeu, difficulty: 'R12', effects: ['3 blessures à toutes les cibles dans une petite zone', 'E2 : inflige En Feu', 'R : la boule de feu part dans une autre direction'] },
            { name: "Mur de flammes", type: TypeSkill.MagieFeu, difficulty: 'C12', effects: ["Crée un mur de flammes d'environ 5m (15m avec malus) qui dure 3 tours", "Ceux qui traversent le mur subissent 1 blessure et l'état En Feu"] },
            { name: "Rage bouillante", type: TypeSkill.MagieFeu, difficulty: 'R14', effects: ["Vous pouvez vous cibler vous ou un allié", "La cible obtient le bonus Enragé pendant 2 tours pour s'énerver et frapper.", "ER4 : les attaques de la cible font 1 blessure supplémentaire", "R : la cible subit En Feu"], },
        ]
    },
    {
        id: "Cavalier",
        name: "Cavalier",
        description: "Éclaireurs et force rapide de frappe, les Cavaliers sont très attachés à leur monture.",
        asset: "Équitation (toute action avec le cheval autre qu'une attaque)",
        equipment: "Possède un cheval, une lance (Anti-Cavalerie) ou une épée longue (Duel).",
        skills: [
            { name: "Charge de cavalerie", type: TypeSkill.Monture, difficulty: 'C10', effects: ['3 blessures', "A besoin de beaucoup d'élan, et d'une arme d'hast ou d'une épée longue."] },
            { name: "Coup à la tête", type: TypeSkill.Monture, difficulty: 'C12', effects: ['2 blessures', "ER2 : vous touchez la tête, la cible subit 1 blessure et le malus Borgne (toute attaque à distance)", "Nécessite une arme"] },
            { name: "Course penchée", type: TypeSkill.Monture, difficulty: 'R14', effects: ["Permet de se pencher sur le côté de sa monture au galop pour esquiver les attaques. Donne un bonus d'esquive.", "R : Vous tombez et vous subissez 2 blessures."] },
        ]
    },
    {
        id: "LancierEnchante",
        name: "Lancier Enchanté",
        description: "Les Lanciers de la Nation Rouge sont positionnés sur les flancs de l'armée, pour décimer toute attaque de cavalerie ennemie.",
        asset: "Lance Enchantée (Anti Cavalerie, 1 Effet aléatoire) (ou bien un Trident ou équivalent)",
        equipment: "",
        skills: [
            { name: "Estoc", type: TypeSkill.ArmeHast, difficulty: 'C8', effects: ['1 blessure', 'ER4 : 1 blessure'] },
            { name: "Mur de Piques", type: TypeSkill.ArmeHast, difficulty: 'C10', effects: ["Si un ennemi vous charge jusqu'à votre prochain tour, il subit un malus, et 5 blessures si son attaque rate."] },
            { name: "Gerbe de flamme", type: TypeSkill.MagieFeu, difficulty: 'R12', effects: ["Lance une gerbe de flamme à distance depuis une arme d'Hast enchantée", '2 blessures', 'E3 : inflige En Feu', 'R : 1 blessure à vous et toutes les cibles proches'] },
        ]
    },
    {
        id: "FantassinEnchante",
        name: "Fantassin Enchanté",
        description: "Les Fantassins de la Nations Rouge sont le coeur de l'armée. Expert dans le combat rapproché, c'est leur nombre qui fait leur force contre des mages.",
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
        description: "Les Cogneurs sont facilement reconnaissables par leur carrure. Peu d'hommes sont capables de porter et de frapper avec leurs armes.",
        asset: "Marteau Enchanté (Ignore l'Armure, 1 Effet aléatoire) (ou bien une Masse ou équivalent)",
        equipment: "",
        skills: [
            { name: "Assommer", type: TypeSkill.ArmeContondante, difficulty: 'C18', effects: ["Assomme l'ennemi et lui inflige 2 blessures"] },
            { name: "Fracasser", type: TypeSkill.ArmeContondante, difficulty: 'R8', effects: ["2 blessures", "R : tombe au sol, bonus pour toute attaque ennemie jusqu'à votre prochain tour, malus au prochain tour"] },
            { name: "Coup dans les Jambes", type: TypeSkill.ArmeContondante, difficulty: 'C12', effects: ['1 blessure', "La cible ne peut pas se déplacer pendant 2 tours", "ER4 : 1 blessure"] },
        ]
    },
    {
        id: "Cueilleur",
        name: "Cueilleur",
        description: "",
        asset: "Récolte Sauvage",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "Chasseur",
        name: "Chasseur",
        description: "",
        asset: "Déplacement Rapide en Forêt",
        equipment: "Arc et couteau",
        skills: [
            { name: "Tir", type: TypeSkill.ArmeDistance, difficulty: 'C10', effects: ['1 blessure', 'La difficulté augmente avec la distance. 1-10m : C10, 11-25m : C12, 26-50m : C14.'] },
            { name: "Poignarder", type: TypeSkill.ArmeLegere, difficulty: 'C10', effects: ['2 blessures', "E3 : La cible gagne un bonus pour vous attaquer au corps à corps à son prochain tour.", "Si la cible n'est pas au courant de votre présence vous lui infligez 1 blessure supplémentaire."] },
            { name: "Traque silencieuse", type: TypeSkill.Furtivité, difficulty: 'R14', effects: ["Pour les 3 prochains tours, vous êtes totalement discret tant que vous vous déplacez lentement et hors d'un angle de vue direct.", 'R : tout le monde est désormais au courant de votre présence.'] },
        ]
    },
    {
        id: "Soigneur",
        name: "Soigneur",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "Druide",
        name: "Druide",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "Changeur",
        name: "Changeur",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "Rodeur",
        name: "Rôdeur",
        description: "Les Rôdeurs de la Nation Verte sont des combattants furtifs. Ce sont les seuls à manier l'épée, mais le combat direct n'est pas leur fort, ils préfèrent la discrétion.",
        asset: "Ombre (furtif dans les endroits naturels)",
        equipment: "Épée",
        skills: [
            { name: "Tranche", type: TypeSkill.ArmeGladiateur, difficulty: 'R11', effects: ['2 blessures', "ER 5 : malus à l'adversaire", 'R : la prochaine attaque réussie contre vous vous inflige une blessure de plus.'] },
            { name: "Entaille éclair", type: TypeSkill.ArmeGladiateur, difficulty: 'C12', effects: ["Initiative", "1 blessure", "Inflige 2 blessures de plus si la cible est en train d'effectuer une action autre que vous attaquer ou se défendre."] },
            { name: "Disparaître", type: TypeSkill.Furtivité, difficulty: 'C14', effects: ['Vos ennemis ne sont plus au courant de votre présence.', "La difficulté est celle d'un jet de Furtivité +4."] },
        ]
    },
    {
        id: "TireurVenimeux",
        name: "Tireur Venimeux",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "TireurElite",
        name: "Tireur d'Élite",
        description: "",
        asset: "Armes à Distance",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "MageSable",
        name: "Mage de Sable",
        description: "La Nation Sable envoie ses futurs Mages au milieu du désert. Livrés à eux mêmes, les survivants ne font plus qu'un avec le sable. ATTENTION : La Magie du Sable nécessite du Sable.",
        asset: "Survie en milieu désertique",
        equipment: "",
        skills: [
            { name: "Jet de Sable", type: TypeSkill.MagieSable, difficulty: 'C8', effects: ['1 blessure', 'ER5 : met du sable dans les yeux'] },
            { name: "Leurre de Sable", type: TypeSkill.MagieSable, difficulty: 'R12', effects: ["Vous créez un double de vous qui s'il est attaqué n'est en faite que du sable.", "R : celui qui sera attaqué ce sera vous, et le double disparaîtra alors"] },
            { name: "Parler aux Esprits du Désert", type: TypeSkill.MagieSable, difficulty: 'C10', effects: ["Vous communiquer avec ces étranges esprits qui traverse le désert en quelques minutes.", "Vous pouvez demander des informations sur tout ce qui touche le sable", "Vous pouvez envoyez un message à un autre Mage connaissant ce sort", ''] },
        ]
    },
    {
        id: "EnfantPoignard",
        name: "Enfant du Poignard",
        description: "La Nation Sable choisi ses futurs Mages dès l'enfance. Ils sont entraînés à tuer très jeunes. On leur apprend que leur mission est plus importante que tout.",
        asset: "Obstiné",
        equipment: "Poignard",
        skills: [
            { name: "Entaille rapide", type: TypeSkill.ArmeLegere, difficulty: 'C10', effects: ['1 blessure'] },
            { name: "Lancer de lame", type: TypeSkill.ArmeLegere, difficulty: 'C12', effects: ['2 blessures', 'ER2 : 1 blessure', 'Il vous faut 1 tour pour récupérer votre arme sur un cadavre, et réussir une action C14 si la cible se débat'] },
            { name: "Égorger", type: TypeSkill.ArmeLegere, difficulty: 'C16', effects: ["Ne faites cette action que si la cible n'est pas au courant de votre présence", "La cible est morte", "EE4 : 2 blessures"] },
        ]
    },
    {
        id: "PorteurObsidienne",
        name: "Porteur d'Obsidienne",
        description: "L'Obsidienne donne une résistance physique impressionnante. Leurs porteurs ne tombent jamais malades",
        asset: "Solide : vos seuils de blessures sont augmentés de 4.",
        equipment: "",
        skills: [
            { name: "Concentration Noire", type: TypeSkill.Aucun, difficulty: 'R8', effects: ["Toutes les attaques jusqu'à votre prochain tour vous infligent une blessure de moins.", "R : malus pour se défendre"] },
            { name: "Projection d'éclats d'Obsidienne", type: TypeSkill.MagieRoche, difficulty: 'R10', effects: ['2 blessures sur une petite zone', 'ER3 : inflige En Sang', 'R : les éclats partent dans tous les sens et infligent 1 blessure à vous et aux personnes proches de vous'] },
            { name: "Secousse mineure", type: TypeSkill.MagieRoche, difficulty: 'C13', effects: ["Provoque un petit tremblement de terre, tout le monde sauf vous subit un malus Déséquilibré jusqu'à votre prochain tour."] },
        ]
    },
    {
        id: "PorteurEmeraude",
        name: "Porteur d'Émeraude",
        description: "Les Émeraudes ne choisissent pas souvent de porteur, exigeantes elles cherchent ceux dont les capacités magiques sont exceptionnelles.",
        asset: "Bouclier d'Émeraude : une fois par jour, vous pouvez totalement être immunisé d'un sort qui aurait dû vous toucher",
        equipment: "",
        skills: [
            { name: "Concentration d'Émeraude", type: TypeSkill.Aucun, difficulty: 'R8', effects: ['Vous concentrez vos capacités magiques. Vous gagnez un bonus pour le prochain sort que vous lancez durant la scène.', "ER6 : le sort infligera 1 blessure supplémentaire s'il réussi", "R : malus pour le prochain sort", ''] },
            { name: "Protection", type: TypeSkill.Aucun, difficulty: 'C12', effects: ["Choisissez un type de Magie, vous avez un bonus pour vous en défendre pendant 2 tours"] },
            { name: "", type: TypeSkill.MagieRoche, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurSaphir",
        name: "Porteur de Saphir",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurTopaze",
        name: "Porteur de Topaze",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurRubis",
        name: "Porteur de Rubis",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurPyrite",
        name: "Porteur de Pyrite",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurAmethyste",
        name: "Porteur d'Améthyste",
        description: "",
        asset: "Pas Furtif : impossible d'être repéré par le seul bruit des pas",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurHematite",
        name: "Porteur d'Hématite",
        description: "La Magie du Sang est rare et dangereuse, les Porteurs d'Hématite peuvent en maîtriser les bases.",
        asset: "Coagulation Rapide : vous ne pouvez pas subir En Sang. Vous régénérez une blessure de plus par repos.",
        equipment: "",
        skills: [
            { name: "Vertiges Sanglants", type: TypeSkill.MagieSang, difficulty: 'C14', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Votre ennemi devient Désorienté (malus) pendant 1 tour."] },
            { name: "Hémorragie", type: TypeSkill.MagieSang, difficulty: 'C10', effects: ['Uniquement sur une cible déjà blessée', "Les blessures de la cible saignent abondemment. Elle subit 1 blessure pour chaque blessure qu'elle a déjà, jusqu'à un maximum de 3."] },
            { name: "Appel du Sang", type: TypeSkill.MagieSang, difficulty: 'C10', effects: ['Vous vous infligez 3 blessures avant de lancer ce sort.', 'Vous aspirez le sang de tous vous ennemis à 10m environ. Ils subissent 2 blessures.'] },
        ]
    },
    {
        id: "PorteurTurquoise",
        name: "Porteur de Turquoise",
        description: "Les Porteurs de Turquoise font preuve de rapidité. Ils se déplacent, attaquent et fuient plus vite que les autres.",
        asset: "Initiative (vous pouvez toujours jouer en premier)",
        equipment: "",
        skills: [
            { name: "Dash", type: TypeSkill.Deplacement, difficulty: 'C11', effects: ['Déplacez vous de quelques mètres', 'Rejouez'] },
            { name: "Pas en arrière", type: TypeSkill.Deplacement, difficulty: 'C14', effects: ["Vous pouvez faire cette action après une action d'attaque", "Déplacez vous de quelques mètres pour vous éloigner du combat"] },
            { name: "", type: TypeSkill.Deplacement, difficulty: '', effects: [''] },
        ]
    },

    //#region Idées pour plus tard 
    {
        id: "IdeesMagieSang",
        name: "Idées de sorts pour la Magie du Sang",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Goût du Sang", type: TypeSkill.MagieSang, difficulty: 'R14', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Le groupe d'ennemi choisi devient fou de violence. Ils se battent les uns contre les autres pendant 1 tour.", "R : le groupe d'ennemi vous attaque vous à la place.", ''] },
            { idea: true, name: "Lame de Sang", type: TypeSkill.MagieSang, difficulty: 'C6', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Vous créez une arme légère en Sang. Vous pouvez l'utiliser jusqu'à la fin de la scène."] },
            { idea: true, name: "Hémorragie Multiple", type: TypeSkill.MagieSang, difficulty: 'C6', effects: ['Vous vous infligez 1 blessure avant de lancer ce sort.', "Toutes les personnes déjà blessées (dont vous) subissent 2 blessures et l'état En Sang."] },
        ]
    },
    {
        id: "IdeesGladiator",
        name: "Idées de sorts pour l'épée etc.",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Frappe", type: TypeSkill.ArmeGladiateur, difficulty: 'C12', effects: ['2 blessures'] },
            { idea: true, name: "Enchaînement d'attaque", type: TypeSkill.ArmeGladiateur, difficulty: 'C14', effects: ['3 blessures'] },
            { idea: true, name: "Frappe plongeante", type: TypeSkill.ArmeGladiateur, difficulty: 'C16', effects: ['4 blessures', 'EE3 : malus pour se défendre au corps à corps'] },
            { idea: true, name: "Feinte", type: TypeSkill.ArmeGladiateur, difficulty: 'R14', effects: ["Les bonus de défense de l'adversaire ne compte pas pour cette attaque.", '3 blessures', 'R : malus pour se défendre des attaques au corps à corps'] },
        ]
    },
    {
        id: "IdeesMagieGlace",
        name: "Idées de sorts pour la Magie de Glace",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Lame de givre", type: TypeSkill.MagieGlace, difficulty: 'C10', effects: ["Vous faites apparaître une lame de givre d'environ 1m de type Arme de Gladiateur.", "Vous pouvez la donner à un allié, elle dure jusqu'à la fin de la scène.", "Légère et maniable, elle offre 1 bonus."] },
        ]
    },

    {
        id: "IdeesMagieFeu",
        name: "Idées de sorts pour la Magie de Feu",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Mains brûlantes", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: [""] },
            { idea: true, name: "Lame de feu", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: ["Vous faites apparaître une lame de feu d'environ 1m de type Arme de Gladiateur.", "Seul vous pouvez la manier, elle dure jusqu'à la fin de la scène.", "Une attaque réussie avec inflige En Feu et 1 blessure supplémentaire."] },
            { idea: true, name: "Tempête de flammes", type: TypeSkill.MagieFeu, difficulty: 'C16', effects: ["Fait apparaître une immense tempête de flammes", "Tout le monde sauf vous est projeté au sol et subit 4 blessures."] },
            { idea: true, name: "Ailes de Feu", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Pluie de feu", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Brasier", type: TypeSkill.MagieFeu, difficulty: '', effects: ["Autour de vous"] },
            { idea: true, name: "Incendie", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            { idea: true, name: "Explosion", type: TypeSkill.MagieFeu, difficulty: '', effects: [""] },
            // volcan
            { idea: true, name: "Éruption", type: TypeSkill.MagieFeu, difficulty: '', effects: ["Gerbes sortent du sol"] },
            { idea: true, name: "Élémentaire du Volcan", type: TypeSkill.MagieFeu, difficulty: '', effects: ["famillier"] },
            { idea: true, name: "Armée du Volcan", type: TypeSkill.MagieFeu, difficulty: '', effects: ["familliers"] },
            //Souffleur de Feu
            { idea: true, name: "Souffle de feu", type: TypeSkill.MagieFeu, difficulty: '', effects: ["monocible ultra puissant"] },
            //Pyromancien
            { idea: true, name: "Sollicitation Infernale", type: TypeSkill.MagieFeu, difficulty: '', effects: ["Mains en l'air, vous demandez à toutes les flammes présentes de s'intensifier."] },
        ]
    },

    {
        id: "IdeesMagieSable",
        name: "Idées de sorts pour la Magie du Sable",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Surf du Désert", type: TypeSkill.MagieSable, difficulty: 'R10', effects: ["Vous vous déplacez sur une vague de sable rapidement.", "R : vous chutez et subissez 1 blessure."] },

            // Élémentaliste
            { idea: true, name: "Réduire en poussière", type: TypeSkill.MagieSable, difficulty: 'R12', effects: ["Génère une quantité de sable suffisante pour 3 sorts.", "R : quantité suffisante pour 1 sort seulement"] },
            { idea: true, name: "Tempête du Sable", type: TypeSkill.MagieSable, difficulty: '', effects: [""] },
            { idea: true, name: "Psammos kinésie", type: TypeSkill.MagieSable, difficulty: 'C15', effects: ["Déplacer le sable et en faire ce que vous souhaitez.", "La difficulté peut varier de 13 à 17 suivant l'action."] },

            // Verrier
            { idea: true, name: "Jet de lames de verre", type: TypeSkill.MagieSable, difficulty: '', effects: [""] },
        ]
    },

    {
        id: "IdeesMagieRoche",
        name: "Idées de sorts pour la Magie des Roches",
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { idea: true, name: "Mur de Roche", type: TypeSkill.MagieRoche, difficulty: '', effects: [""] },
            { idea: true, name: "Peau de Pierre", type: TypeSkill.MagieRoche, difficulty: '', effects: [""] },
            { idea: true, name: "Appel des Profondeurs", type: TypeSkill.MagieRoche, difficulty: '', effects: ["Fait s'écrouler le sol sous vos ennemis."] },
            { idea: true, name: "Poing de Fer", type: TypeSkill.MagieRoche, difficulty: '', effects: ["Coup de poing amélioré."] },
            { idea: true, name: "Chute de Pierres", type: TypeSkill.MagieRoche, difficulty: '', effects: [""] },
            { idea: true, name: "Lithos kinésie", type: TypeSkill.MagieRoche, difficulty: 'C16', effects: ["Déplacer les roches, construisez ce que vous souhaitez.", "La difficulté peut varier de 14 à 18 suivant l'action."] },
        ]
    }
    //#endregion
]
