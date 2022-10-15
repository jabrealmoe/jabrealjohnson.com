import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("do someting ")
  }

  images = [
    {

      imageSrc: 'https://burst.shopifycdn.com/photos/laptop-from-above.jpg',
      imageAlt: 'nature1'
    },
    {
      imageSrc: 'https://media.istockphoto.com/photos/coach-drawing-american-football-game-playbook-picture-id1366672302?b=1&k=20&m=1366672302&s=170667a&w=0&h=icvKGPFCVclcwsj0l3D91o2MStAYTEGRLijEs2JiCwk=',
      imageAlt: 'nature2'
    },
    {
      imageSrc: 'https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg',
      imageAlt: 'nature3'
    },
    {
      imageSrc: 'https://miro.medium.com/max/1400/1*3Fxk3b8h1kvKJFe5gVf98A.png',
      imageAlt: 'nature4'
    },
    {
      imageSrc: 'https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:786fd7a8-9b53-4b73-af03-fb1b76992638/SMT-2480_JiraAlign_Screenshots-01-ProgramManagement.png',
      imageAlt: 'Jira Strategy'
    },
    {
      imageSrc: 'https://www.worldofagile.com/wp-content/uploads/2018/03/DevOpsToolchain.png',
      imageAlt: 'nature5'
    },
  ]

  goToBlogs() {

  }
}
