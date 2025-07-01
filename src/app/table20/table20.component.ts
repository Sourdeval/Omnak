import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tables } from './tables';
import { Table } from '../../core/table.core';

@Component({
  selector: 'omnak-table20',
  standalone: false,
  templateUrl: './table20.component.html',
  styleUrl: './table20.component.scss'
})
export class Table20Component {
  @Input()
  tableId: string = '';

  table: Table = {
    id: '',
    title: '',
    values: [],
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.tableId = params['id'];
        let foundTable = tables.find(t => t.id == this.tableId);
        if (foundTable) {
          this.table = foundTable;
        }
        else {
          this.router.navigate(['']);
        }
      }
    });
  }
}
