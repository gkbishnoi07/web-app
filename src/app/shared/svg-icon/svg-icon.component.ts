import { Component, Input } from '@angular/core';

@Component({
  selector: 'mifosx-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  standalone: false
})
export class SvgIconComponent {
  @Input() iconFile: string;
  @Input() iconName: string;
  @Input() iconClass: string;
  @Input() iconWidth: string;

  constructor() {}
}
