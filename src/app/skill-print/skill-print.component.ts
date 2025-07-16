import { Component, OnInit } from '@angular/core';
import { Skill } from '../../core/way.core';
import { ActivatedRoute, Router } from '@angular/router';
import { ways } from '../way/ways';

@Component({
  selector: 'omnak-skill-print',
  standalone: false,
  templateUrl: './skill-print.component.html',
  styleUrl: './skill-print.component.scss'
})
export class SkillPrintComponent implements OnInit {
  listSkills: Skill[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(map => {
      let skillsIds = map.get("skills")?.split('.').map(a => Number(a));
      if (!skillsIds) { this.router.navigate(['skills']); return; }
      let nextId = 0;
      ways.forEach(w => {
        w.skills.forEach(s => {
          if (s.name) {
            if (skillsIds.includes(nextId)) {
              this.listSkills.push({ ...s });
            }
            nextId++;
          }
        });
      });
      this.listSkills.forEach(s => {
        s.idea = false;
        s.special = 'print';
      })
    });
  }
}
