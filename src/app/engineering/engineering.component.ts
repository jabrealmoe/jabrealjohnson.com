import {Component, OnInit, Renderer2} from '@angular/core';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import {Geometry} from "three/examples/jsm/deprecated/Geometry";

// Class within a class


@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {
  listener;
  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      console.log(this.getYPosition(e));
    });
  }


  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnDestroy(): void {
    this.listener();
  }

  ngOnInit(): void {
    console.log("Fired Ngoninit engineering")
  }


}
