import { Component, OnInit} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ClickerService } from 'src/app/services/clicker.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.page.html',
  styleUrls: ['./clicker.page.scss'],
})
export class ClickerPage implements OnInit{
  phaenomens: string[];
  currentPage = 1;
  test = ["test1", "test2", "test3", "test4", "test5", "test6"];

  constructor(private clickerService: ClickerService, private loadingCtrl: LoadingController) { 
    this.phaenomens = []
  }

  ngOnInit() {
    this.loadPhaenomens();
  }

  async loadPhaenomens() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    loading.dismiss();
    return this.phaenomens = [...this.phaenomens, ...this.test];
  }

}
