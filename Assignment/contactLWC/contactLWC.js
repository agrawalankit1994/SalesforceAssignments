import { LightningElement, track } from 'lwc';

export default class createRecordForm extends LightningElement {
   @track successMessage;
   handleSuccess(event) {
    this.successMessage = 'Record Successfully created with Id: '+event.detail.id;
   }
}
