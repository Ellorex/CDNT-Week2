import { Component } from '@angular/core';
import { Book } from '../../model/Book';

@Component({
    selector: 'intro',
    templateUrl: 'intro.component.html',
    styleUrls: ['intro.component.css']
})

export class IntroComponent {
    title = 'Angular - notes de cours';
    message: number = 4;
    message2 = "";
    nb1: number = 17;
    nb2: number = 3;
    result: number = 0;
    admin_status: boolean = false;
    name: string = "";
    notes: number[] = [1, 7, 12];
    // un tableau de valeur numérique
    stagiaires: string[] = ["Eric", "Tanguy", "Gwendal", "Léa"];
    
    book = {
      author: 'Zola',
      title: 'Germinal',
      topics: ['Histoire', 'Politique', 'Drame']
    }
    topics = this.book.topics;
    book1: Book = new Book('Trois Femmes Puissantes', 'Marie Ndiaye', 2008);
    
  
    test() {
      this.result = this.result + 30;
      this.message = this.result;
      if(this.result >= 120) {
        if (this.admin_status) {
          this.message2 = "Bien ouej l'admin"
        } else {
          this.message2 = "Bien ouej !";
        }
      }
    }
    reset() {
      this.message = this.result + 30;
      this.message2 = "";
    }
    onKeyUp(e) {
      this.message2 += e.key;
    }
}