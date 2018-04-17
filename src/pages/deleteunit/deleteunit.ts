import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { ListPage } from '../list/list';



@IonicPage()
@Component({
  selector: 'page-deleteunit',
  templateUrl: 'deleteunit.html',
})
export class DeleteunitPage 
{
    unitSelected: unit;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private UnitService: UnitService) 
  {
    this.unitSelected = this.navParams.data;
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad DeleteunitPage');
  }

  OnRemoveUnit(value: unit)
  {
    this.UnitService.removeUnit(value);
    this.navCtrl.pop();
  }

}
