import { LightningElement, track, api } from 'lwc';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import Contact from '@salesforce/schema/Contact'

export default class createRecordForm extends LightningElement {
   @api objectApiName = Contact;
   fields = {'email':EMAIL_FIELD,'phone':PHONE_FIELD};
   @track successMessage;
   handleSuccess(event) {
    this.successMessage = 'Record Successfully created with Id: '+event.detail.id;
   }
}
