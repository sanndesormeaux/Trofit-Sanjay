import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.scss']
})
export class SuccesComponent implements OnInit {

  succesTable = [
    {
      name: 'démarer l\'application',
      picture: './../../assets/SuccesPicture/power.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous avez démaré pour la première fois l\'application ! c\'est bravo, cependant, esperons que vous allez continuer à faire du sport !',
      currentGoal: 1,
      goal: 1,
      validation: true
    },
    {
      name: 'faire 200 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Les pompes sont l\'un des premiers exercices que vous rencontrerez dans cette application. cependant, êtes vous capable d\'en faire autant ??',
      currentGoal: 200,
      goal: 200,
      validation: true
    },
    {
      name: 'faire 400 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous aviez déjà accompli 200 pompes. Maintenant la barre est encore plus haute !',
      currentGoal: 200,
      goal: 400,
      validation: false
    },
    {
      name: 'faire 400 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous aviez déjà accompli 200 pompes. Maintenant la barre est encore plus haute !',
      currentGoal: 100,
      goal: 400,
      validation: false
    },
    {
      name: 'faire 400 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous aviez déjà accompli 200 pompes. Maintenant la barre est encore plus haute !',
      currentGoal: 100,
      goal: 400,
      validation: false
    },
    {
      name: 'faire 400 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous aviez déjà accompli 200 pompes. Maintenant la barre est encore plus haute !',
      currentGoal: 100,
      goal: 400,
      validation: false
    },
    {
      name: 'faire 400 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous aviez déjà accompli 200 pompes. Maintenant la barre est encore plus haute !',
      currentGoal: 100,
      goal: 400,
      validation: false
    },
    {
      name: 'faire 400 pompes',
      picture: './../../assets/SuccesPicture/arm.png',
      // tslint:disable-next-line:max-line-length
      content: 'Vous aviez déjà accompli 200 pompes. Maintenant la barre est encore plus haute !',
      currentGoal: 100,
      goal: 400,
      validation: false
    }
  ];

  getColor(validation) {
    if (validation === true) {
      return '#33FF68';
    } else if (validation === false) {
      return 'white';
    }
}

  constructor() { }

  ngOnInit() {
  }

}
