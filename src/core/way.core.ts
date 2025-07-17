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
    idea?: boolean,
    special?: string,
}

export interface SkillSelectable extends Skill {
    selected?: boolean,
    id: number,
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
    MagieEau = "Magie de l'Eau",
    MagieGlace = "Magie de Glace",
    MagieSable = "Magie du Sable",
    MagieRoche = "Magie des Roches",
    MagieSang = "Magie du Sang",
    MagieAnimale = "Magie Animale",
    MagieVegetale = "Magie Végétale",
    MagieSolaire = "Magie Solaire",
    Deplacement = "Déplacement",
    Furtivité = "Furtivité",
    Apothicaire = "Apothicaire",
}
