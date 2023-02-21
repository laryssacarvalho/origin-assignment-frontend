import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ToastService ],
    });

    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#show should push toast to toasts list', () => {
    let toast = { body: 'toast', className: 'bg-info'};
    
    expect(service.toasts.length).toEqual(0);  

    service.show(toast);
    
    expect(service.toasts.length).toEqual(1);      
  });  

  it('#show should remove toast from toasts list', () => {
    let toast = { body: 'toast', className: 'bg-info'};
        
    service.show(toast);
    
    expect(service.toasts.length).toEqual(1);      
    
    service.remove(toast);
    
    expect(service.toasts.length).toEqual(0);  
  });  
});
