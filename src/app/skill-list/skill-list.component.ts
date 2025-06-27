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
    ways.forEach(w => this.skills[0] = this.skills[0].concat(w.skills.filter(s => s.name)));
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
}
