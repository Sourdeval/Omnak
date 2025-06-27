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
    effects: string[]
}
