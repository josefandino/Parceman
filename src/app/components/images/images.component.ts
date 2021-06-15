import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {

  title: string = 'Parceman';

  images: any = [
    {
      number: '1',
      name: 'Market Place',
      url: 'https://cbw.to/jgtxgu',
      img: 'assets/img/images/parceman-01.png'
    },
    {
      number: '2',
      name: 'Marca y Marketing',
      url: 'https://cirujanodetumarca.com/',
      img: 'assets/img/images/parceman-02.png'
    },
    {
      number: '3',
      name: 'Soluciones Artisticas',
      url: 'https://www.duomanager.com/',
      img: 'assets/img/images/parceman-03.png'
    },
    {
      number: '4',
      name: 'Soluciones de Salud',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-04.png'
    },
    {
      number: '5',
      name: 'Diligencias y Domicilios',
      url: 'https://www.facebook.com/Inviatocolombia-181136946807562',
      img: 'assets/img/images/parceman-05.png'
    },
    {
      number: '6',
      name: 'Relaciones y Emociones',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-06.png'
    },
    {
      number: '7',
      name: 'Soluciónde Comunicaciones',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-07.png'
    },
    {
      number: '8',
      name: 'Soluciones Laborales y Finacieras',
      url: 'https://www.facebook.com/Minegocioencasa-102755834748820',
      img: 'assets/img/images/parceman-08.png'
    },
    {
      number: '9',
      name: 'Tu Marca es legal',
      url: 'https://tumarcaeslegal.com/',
      img: 'assets/img/images/parceman-09.png'
    },
    {
      number: '10',
      name: 'Entretenimiento',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-10.png'
    },
    {
      number: '11',
      name: 'Apoyoso Sociales',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-11.png'
    },
    {
      number: '12',
      name: 'Entrevistas',
      url: 'https://www.facebook.com/Cuandonosvolvamosaencontrar-114672243595566',
      img: 'assets/img/images/parceman-12.png'
    },
    {
      number: '13',
      name: 'Tecnología',
      url: 'https://www.jjdsystem.com/',
      img: 'assets/img/images/parceman-13.png'
    },
    {
      number: '14',
      name: 'Influencers',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-14.png'
    },
    {
      number: '15',
      name: 'Youtubers',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-15.png'
    },
    {
      number: '16',
      name: 'Mark Brain',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-16.png'
    },
    {
      number: '17',
      name: 'Entrenamientos Coaching',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-17.png'
    },
    {
      number: '18',
      name: 'Cultura y Deportes',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-18.png'
    },
    {
      number: '19',
      name: 'Accesorios y cuidados',
      url: 'https://parceman.com/',
      img: 'assets/img/images/parceman-19.png'
    },
    {
      number: '20',
      name: 'Infantiles',
      url: 'https://www.yosoyhanny.com/',
      img: 'assets/img/images/parceman-20.png'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
