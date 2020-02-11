import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Trofit-Angular';
  BurgerCheck = true;
  previousId = 'MenuAcceuil';

  burger() {
    const BurgerTile = [document.getElementById('B1'), document.getElementById('B2'), document.getElementById('B3')];
    const Menu = document.getElementById('Menu');

    if (this.BurgerCheck === true) {
      for (const index of BurgerTile) {
        index.style.backgroundColor = '#29201B';
      }
      BurgerTile[0].style.transform = 'rotate(45deg) translate(8px,6px)';
      BurgerTile[1].style.opacity = '0';
      BurgerTile[2].style.transform = 'rotate(-45deg) translate(8px,-10px)';
      Menu.style.right = '0';
      this.BurgerCheck = false;
    } else {
      for (const index of BurgerTile) {
        index.style.backgroundColor = '#33FF68';
      }
      BurgerTile[0].style.transform = 'rotate(0deg) translate(0,0)';
      BurgerTile[1].style.opacity = '1';
      BurgerTile[2].style.transform = 'rotate(0deg) translate(0,0)';
      Menu.style.right = '-100vw';
      this.BurgerCheck = true;
    }
  }

  slideMenu(id) {
    if (this.previousId !== id) {
      const firstID = document.getElementById(id).style;
      const secondID = document.getElementById(this.previousId).style;
      firstID.fontWeight = '800';
      firstID.transform = 'scale(1.5)';
      secondID.fontWeight = 'normal';
      secondID.transform = 'scale(1)';
      this.previousId = id;
    }
  }

  ngOnInit(): void {
    this.slideMenu('MenuAcceuil');
  }
}


