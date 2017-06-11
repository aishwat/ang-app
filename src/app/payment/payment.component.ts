import { Component, OnInit,Inject, ViewChild, TemplateRef} from '@angular/core';
import { WindowRef } from '../WindowRef';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  //input user
  //input test details like amount and test_id

  constructor(private winRef: WindowRef) {
  }
  ngOnInit() {}
  rzp1:any;
  options:any = {
    "key": "rzp_test_HTQz79bVMhpN4L",
    "amount": "2000",
    "name": "Enterprise Name",
    "description": "Test Book 1",
    "image": "../../assets/avatars/png/user-16.png",
    "handler": function(response){
        //make server call and show success
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Frank Underwood",
        "email": "frank.underwood@gmail.com",
        "contact": "9535373749"
    },
    "notes": {
        "address": "Hello World"
    },
    "theme": {
        "color": "#3f51b5"
    }
  }

  public initPay():void {
    this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
