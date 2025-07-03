export interface Way {
    id: string,
    name: string,
    description: string,
    asset: string,
    equipment: string,
    skills: Skill[],
}

export interface Skill {
    name: string,
    difficulty: string,
    type: TypeSkill,
    effects: string[],
    idea?: boolean;
}

export enum TypeSkill {
    Aucun = '',
    ArmeHast = "Arme d'Hast",
    ArmeGladiateur = "Arme de Gladiateur",
    ArmeContondante = "Arme Contondante",
    ArmeTaille = "Arme de Taille",
    ArmeLegere = "Arme Légère",
    ArmeDistance = "Arme à Distance",
    Monture = "Monture",
    MagieFeu = "Magie du Feu",
    MagieGlace = "Magie de Glace",
    MagieSable = "Magie du Sable",
    MagieRoche = "Magie des Roches",
    MagieSang = "Magie du Sang",
    Deplacement = "Déplacement",
    Furtivité = "Furtivité",
}
