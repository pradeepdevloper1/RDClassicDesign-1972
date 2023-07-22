import { Component } from '@angular/core';
import { Literals } from 'src/assets/Literals';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ["./gallery.component.css",
              "../../assets/css/components.css",
              "../../assets/css/icons.css",
              "../../assets/css/responsee.css",
              "../../assets/owl-carousel/owl.carousel.css",
              "../../assets/owl-carousel/owl.theme.css",
              "../../assets/css/template-style.css"]
})
export class GalleryComponent {
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

images = [
  {
    imageSrc:
      '../assets/img/portfolio/thumb-01.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-02.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-03.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-04.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-05.jpg',
    imageAlt: 'nature1',
  },
  
]
images2 = [
  {
    imageSrc:
      '../assets/img/portfolio/thumb-06.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-07.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-08.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-09.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-10.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-11.jpg',
    imageAlt: 'nature1',
  },
]
images3 = [
  {
    imageSrc:
      '../assets/img/portfolio/thumb-05.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-04.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-03.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-02.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-01.jpg',
    imageAlt: 'nature1',
  },
 
]
images4 = [
  {
    imageSrc:
      '../assets/img/portfolio/thumb-11.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-10.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-09.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-08.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-07.jpg',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      '../assets/img/portfolio/thumb-06.jpg',
    imageAlt: 'nature1',
  },
]
}
