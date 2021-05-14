import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {BundleData} from './test01/test01.model';

@Injectable()
export class AppService {

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Function to get default location
   * @return Observable<Premises>
   */
  getBundleData(): Observable<BundleData[]> {
    return new Observable((observer: Observer<BundleData[]>) => {
      observer.next([
        {
          text: 'Open a chequing account'
        },
        {
          text: 'Open a savings account'
        },
        {
          text: 'Open a U.S. Dollar account'
        },
        {
          text: 'Review my everyday banking needs'
        },
        {
          text: 'Switch to TD'
        },
        {
          text: 'Apply for Overdraft Protection'
        }
      ]);
      observer.complete();
    });
  }
}
