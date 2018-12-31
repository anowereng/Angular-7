import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'customers',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  items: Item[];

  constructor(private httpClient: EmployeeService) { }
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    return this.httpClient.getItems().subscribe(items => {
      console.log(items);
      this.items = items
    }
    );
  } // End: getItems()
}


