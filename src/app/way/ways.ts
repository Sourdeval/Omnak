import { Way } from "../../core/way.core";

export let ways: Way[] = [
    {
        id: "Soldat",
        name: "Soldat",
        description: "Toute l'armée de la Nation Rouge commence par une formation de soldat. Les bases du combat et de la discipline y sont acquises.",
        asset: "Honorable",
        equipment: "Glaive, cotte de maille",
        skills: [
            { name: "Estoc", difficulty: 'C8', effects: ['1 blessure'] },
            { name: "Diagonale", difficulty: 'C10', effects: ['1 blessure', 'ER4 : 1 blessure'] },
            { name: "Garde", difficulty: 'R12', effects: ['bonus pour se défendre des attaques au corps à corps', 'R : malus à la place'] },
        ]
    }
]
