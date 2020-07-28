import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Animation, AnimationController } from "@ionic/angular";
//import { animation } from '@angular/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public anim: Animation;
  @ViewChild('square', {static: false} ) square:ElementRef;
  isPlaying = false;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
     const anim: Animation  = this.animationCtrl.create()
      .addElement(this.square.nativeElement)
      .duration(10000)
      .iterations(Infinity)
      .easing('ease-out')
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', 1, 0.2);
    }

    toggleAnimation() {

      if (this.isPlaying) {
        this.anim.pause();
      } else {
        this.anim.play();
      } 
      this.isPlaying = !this.isPlaying;
    }
}
