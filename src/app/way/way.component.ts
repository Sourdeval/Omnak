import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Way } from '../../core/way.core';
import { ways } from './ways';

@Component({
  selector: 'omnak-way',
  standalone: false,
  templateUrl: './way.component.html',
  styleUrl: './way.component.scss'
})
export class WayComponent implements OnInit {
  wayId: string = '';
  way: Way = {
    id: "",
    name: "",
    description: [],
    asset: "",
    equipment: "",
    skills: []
  };

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.wayId = params['id'];
        let foundWay = ways.find(w => w.id == this.wayId);
        if (foundWay) {
          this.way = foundWay;
        }
        else {
          this.router.navigate(['']);
        }
      }
    });
  }
}
