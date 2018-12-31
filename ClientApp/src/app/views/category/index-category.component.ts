import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms'
import { ProductHouseService } from 'src/app/services/productHouse.service';
import { MessageService } from 'src/app/vendorservice/message.service';
import { Item } from 'src/app/models/Item';
@Component({
  selector: 'app-index-category',
  templateUrl: './index-category.component.html',
  styleUrls: ['./index-category.component.css']
})
export class IndexCategoryComponent implements OnInit {
  private categoryForm: FormGroup; public message: any; private rowData: any[]; private columnDefs;
  items: Item[];
  constructor(private catService: ProductHouseService, private cat: FormBuilder,
    private msg: MessageService, private httpClient: ProductHouseService) {
    this.categoryForm = this.cat.group({
      id: [0],
      name: ['', [Validators.required]],
    })
  
  }
  private getItemsData() {
    this.columnDefs = [
      { headerName: 'Category Id', field: 'id' },
      { headerName: 'Category Name', field: 'name' },
    ];
    return this.httpClient.getItems().subscribe(items => {
      this.rowData = items
      console.log(items)
    }, error =>
        this.msg.showWarning(error)
    );
  }
  // category list : aggrid
  //private categoryLoad(): void {
  //  this.columnDefs = [
  //    { headerName: 'Category Id', field: 'id' },
  //    { headerName: 'Category Name', field: 'name' },
  //  ];
  //  this.getItemsData();
  //}

 

  ngOnInit() {
    //default grid call
    this.getItemsData();
  }
  // call submit to save 
  onSubmit() {
    this.catService.addCategory(this.categoryForm.value)
      .subscribe((data) => {
        console.log(data); this.message = data; /*this.categoryForm.reset();*/
        if (this.message == "Successfully Save.")
          this.msg.showSuccess(data);
        else
          this.msg.showError(data)
      }, error =>
          this.msg.showWarning(error)
      );
    //this.getItemsData();
  }
  // submit post data
  //onSubmit() {
  //  this.save();
  //  this.getItemsData();
  //}
 // End: getItems()
}
