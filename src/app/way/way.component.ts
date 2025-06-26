import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'omnak-way',
  standalone: false,
  templateUrl: './way.component.html',
  styleUrl: './way.component.scss'
})
export class WayComponent implements OnInit {
  @Input()
  wayId: string = '';

  constructor(
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.wayId = params['id'];
      }
    });
  }
}
