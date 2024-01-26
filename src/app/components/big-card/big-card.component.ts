import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() imageUrl: string = ""
  @Input() titleCard: string = ""
  @Input() descriptionCard:string = ""
}
