import { Component, Input } from '@angular/core';
import { Skill } from '../../core/way.core';

@Component({
  selector: 'omnak-skill',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input()
  skill: Skill = {
    name: '',
    difficulty: '',
    effects: [''],
  };
}
