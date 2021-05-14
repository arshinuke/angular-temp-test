import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {take} from 'rxjs/operators';
import {ActionButtonContext, BundleData} from './test01.model';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test01Component implements OnInit {

  actionButtonContexts: ActionButtonContext[] = [];

  /*@constructor
   */
  constructor(private appService: AppService) {
  }

  /**
   * Implementation for OnInit
   */
  ngOnInit() {
    this.appService.getBundleData().pipe(take(1)).subscribe((bundles: BundleData[]) => {
      bundles.forEach((bundle: BundleData) => {
        this.actionButtonContexts.push({
          context: {
            type: bundle.text,
            label: bundle.text,
            click: (type: string) => {
              console.log('----> buttonClicked', type);
            }
          }
        });
      });
    });
  }
}
