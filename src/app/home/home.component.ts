import { Component } from '@angular/core';
import { Literals } from 'src/assets/Literals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ["./home.component.css",
              "../../assets/css/components.css",
              "../../assets/css/icons.css",
              "../../assets/css/responsee.css",
              "../../assets/owl-carousel/owl.carousel.css",
              "../../assets/owl-carousel/owl.theme.css",
              "../../assets/css/template-style.css"
  ]
})
export class HomeComponent {
  public contactNumber1: string | undefined;
  public contactNumber2: string | undefined;
  public contactNumber3: string | undefined;
  public emailID1: string | undefined;
  public emailID2: string | undefined;
  public emailID3: string | undefined;
  public addressLine1: string | undefined;
  public addressLine2: string | undefined;
  public addressLine3: string | undefined;
    ngOnInit(){
      this.contactNumber1 = Literals.ContactNumbers.contactNumber1;
      this.contactNumber2 = Literals.ContactNumbers.contactNumber2;
      this.contactNumber3 = Literals.ContactNumbers.contactNumber3;
      this.emailID1 = Literals.EmailID.EmailID1;
      this.emailID2 = Literals.EmailID.EmailID2;
      this.emailID3 = Literals.EmailID.EmailID3;
      this.addressLine1 = Literals.address.addressLine1;
      this.addressLine2 = Literals.address.addressLine2;
      this.addressLine3 = Literals.address.addressLine3;
    }



}
