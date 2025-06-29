import { Component, OnInit } from '@angular/core';
import { Skill, TypeSkill } from '../../core/way.core';
import { ways } from '../way/ways';

@Component({
  selector: 'omnak-skill-list',
  standalone: false,
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent implements OnInit {
  skills: Skill[][] = [[]]

  ngOnInit() {
    this.filterByType();
    this.sortByDiff();
  }

  filterByType() {
    this.skills = [];
    ways.forEach(w => {
      w.skills.forEach(s => {
        if (s.name) {
          let added = false;
          this.skills.forEach(alreadySkillList => {
            if (alreadySkillList[0].type == s.type) {
              alreadySkillList.push(s);
              added = true;
            }
          })
          if (!added) {
            this.skills.push([s]);
          }
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
}
