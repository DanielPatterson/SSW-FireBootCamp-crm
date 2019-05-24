import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTableComponent implements OnInit, OnChanges {

  @Input()
  companies: Company[];

  @Output()
  deleteClicked: EventEmitter<Company>
    = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('NG CHANGES', changes);

  }

  deleteCompany(company: Company) {
    this.deleteClicked.emit(company);
  }

  changeDetected() {
    console.log('CHANGE DETECTED!!');
  }

}
