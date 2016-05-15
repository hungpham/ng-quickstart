/**
 * Created by hungpham on 5/15/16.
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { Hero } from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chunk Overstreet');

  submitted = false;
  active = true;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.active = false;
    this.model = new Hero(45, '', '');
    setTimeout(() => this.active = true, 0)
  }
}
