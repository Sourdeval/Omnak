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
        description: "",
        asset: 'Représailles de Flammes : quand attaqué au corps à corps, votre ennemi reçoit : "E3 : vous êtes brûlé, vous subissez 1 blessure"',
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.MagieFeu, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.MagieFeu, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.MagieFeu, difficulty: '', effects: [''] },
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
        description: "",
        asset: "Lance Enchantée (Anti Cavalerie, 1 Effet aléatoire) (ou bien un Trident ou équivalent)",
        equipment: "",
        skills: [
            { name: "Mur de Piques", type: TypeSkill.ArmeHast, difficulty: 'C12', effects: ["Si un ennemi vous charge jusqu'à votre prochain tour, il subit un malus, et 5 blessures si son attaque rate."] },
            { name: "", type: TypeSkill.ArmeHast, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.ArmeHast, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "FantassinEnchante",
        name: "Fantassin Enchanté",
        description: "",
        asset: "Épée Enchantée (Duel, 1 Effet aléatoire) (ou bien un Sabre ou équivalent)",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.ArmeGladiateur, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.ArmeGladiateur, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.ArmeGladiateur, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "CogneurEnchante",
        name: "Cogneur Enchanté",
        description: "",
        asset: "Marteau Enchanté (Ignore l'Armure, 1 Effet aléatoire) (ou bien une Masse ou équivalent)",
        equipment: "",
        skills: [
            { name: "Assommer", type: TypeSkill.ArmeContondante, difficulty: 'C18', effects: ["Assomme l'ennemi et lui inflige 2 blessures"] },
            { name: "Fracasser", type: TypeSkill.ArmeContondante, difficulty: 'C14', effects: [""] },
            { name: "", type: TypeSkill.ArmeContondante, difficulty: '', effects: [''] },
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
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "EnfantPoignard",
        name: "Enfant du Poignard",
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
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
    {
        id: "PorteurTurquoise",
        name: "Porteur de Turquoise",
        description: "Les Porteurs de Turquoise font preuve de rapidité. Ils se déplacent, attaquent et fuient plus vite que les autres.",
        asset: "",
        equipment: "",
        skills: [
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
            { name: "", type: TypeSkill.Aucun, difficulty: '', effects: [''] },
        ]
    },
]
