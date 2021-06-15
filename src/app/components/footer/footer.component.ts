import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  title = 'Parceman';
  ws: any = 'https://wa.me/393517041000?text=Hola%20deseo%20información%20de:';

  constructor() { }

  ngOnInit() {}

}
