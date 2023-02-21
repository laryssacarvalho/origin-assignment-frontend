import { Component } from "@angular/core";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.css']
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) {}
}