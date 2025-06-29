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
            { name: "Boule de Feu", type: TypeSkill.MagieFeu, difficulty: 'R12', effects: ['3 blessures', 'E2 : inflige En Feu', 'R : la boule de feu part dans une autre direction'] },
            { name: "Mains brûlantes", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: [''] },
            { name: "Lame de feu", type: TypeSkill.MagieFeu, difficulty: 'C10', effects: ["Vous faites apparaître une lame de feu d'environ 1m de type Arme de Gladiateur.", "Seul vous pouvez la manier, elle dure jusqu'à la fin de la scène.", "Une attaque réussie avec inflige En Feu et 1 blessure supplémentaire."] },
        ]
    },
    {
        id: "Cavalier",
        name: "Cavalier",
        description: "Éclaireurs et force rapide de frappe, les Cavaliers sont très attachés à leur monture.",
        asset: "Équitation",
        equipment: "Possède un cheval, une lance (Anti-Cavalerie) ou une épée longue (Duel).",
        skills: [
            { name: "Charge de cavalerie", type: TypeSkill.Monture, difficulty: 'C10', effects: ['3 blessures', "A besoin de beaucoup d'élan, et d'une arme d'hast ou d'une épée longue."] },
            { name: "", type: TypeSkill.Monture, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Monture, difficulty: '', effects: [''] },
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
            { name: "Fracasser", type: TypeSkill.ArmeContondante, difficulty: 'R8', effects: ["2 blessures", "R : tombe au sol, bonus pour toute attaque ennemie jusqu'au prochain tour, malus au prochain tour"] },
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
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
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
        asset: "",
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
        description: "",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.MagieSable, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.MagieSable, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.MagieSable, difficulty: '', effects: [''] },
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
        id: "PorteurEmeraude",
        name: "Porteur d'Émeraude",
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
        asset: "",
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
        asset: "Coagulation Rapide : pas besoin de Premiers Secours. Vous régénérez une blessure de plus par repos.",
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
            { idea: true, name: "Echaînement d'attaque", type: TypeSkill.ArmeGladiateur, difficulty: 'C14', effects: ['3 blessures'] },
            { idea: true, name: "Frappe plongeante", type: TypeSkill.ArmeGladiateur, difficulty: 'C16', effects: ['4 blessures', 'EE3 : malus pour se défendre au corps à corps'] },
            { idea: true, name: "Tranche", type: TypeSkill.ArmeGladiateur, difficulty: 'R11', effects: ['2 blessures', "ER 5 : malus à l'adversaire", 'R : la prochaine attaque réussie contre vous vous inflige une blessure de plus.'] },
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


    //#endregion
]
