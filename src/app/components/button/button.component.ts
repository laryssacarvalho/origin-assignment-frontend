import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  constructor() { }

	@Input() buttonText: string = '';
	@Input() color: 'primary' | 'secondary' = 'primary';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();

	onClick() {
		this.btnClick.emit();
	}
}
