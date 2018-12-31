import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public toastr: ToastrManager) { }


  showSuccess(message) {
    this.toastr.successToastr(message, 'Success!');
  }

  showError(message) {
    this.toastr.errorToastr(message, 'Oops!');
  }

  showWarning(message) {
    this.toastr.warningToastr(message, 'Alert!');
  }

  showInfo(message) {
    this.toastr.infoToastr(message, 'Info');
  }

  showCustom(message) {
    this.toastr.customToastr('Custom Toast', null, { enableHTML: true });
  }

  showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
  }

 

}
