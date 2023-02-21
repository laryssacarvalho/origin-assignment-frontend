import { Injectable } from "@angular/core";

export interface ToastInfo {    
    body: string;
    delay?: number;
    className: string;
}
  
@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: ToastInfo[] = [];
  
    show(toast: ToastInfo) {
      this.toasts.push(toast);
    }

    remove(toast: ToastInfo) {
        this.toasts = this.toasts.filter(t => t != toast);
    }
}