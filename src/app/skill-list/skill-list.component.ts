import { Component, OnInit } from '@angular/core';
import { SkillSelectable } from '../../core/way.core';
import { ways } from '../way/ways';
import { Router } from '@angular/router';

@Component({
  selector: 'omnak-skill-list',
  standalone: false,
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent implements OnInit {
  skills: SkillSelectable[][] = [[]]
  private addDuplicates = false;

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.filterByType();
    this.sortByDiff();

    console.log("categories: " + this.skills.length);
    console.log("total of skills: " + this.skills.flat().length);
  }

  filterByType() {
    let nextId = 0;
    this.skills = [];
    ways.forEach(w => {
      w.skills.forEach(s => {
        if (s.name) {
          let added = false;
          this.skills.forEach(alreadySkillList => {
            if (alreadySkillList[0].type == s.type) {
              if (this.addDuplicates || !alreadySkillList.find(alreadySkill => alreadySkill.name == s.name)) {
                alreadySkillList.push({ id: nextId, ...s });
              }
              added = true;
            }
          })
          if (!added) {
            this.skills.push([{ id: nextId, ...s }]);
          }
          nextId++;
        }
      })
    });
  }

  sortByDiff() {
    this.skills.forEach(listSkill => {
      listSkill.sort((s1, s2) => {
        let s1number: number = +s1.difficulty.substring(1);
        let s2number: number = +s2.difficulty.substring(1);
        return s1number - s2number;
      })
    })
  }

  selectSkill(skill: SkillSelectable) {
    skill.selected = !skill.selected;
  }

  print() {
    let ids: number[] = [];
    this.skills.forEach(skillList => {
      skillList.forEach(s => {
        if (s.selected) {
          ids.push(s.id);
        }
      })
    })
    this.router.navigate(['print'], {
      queryParams: { 'skills': ids.join('.') },
    })
  }
}
