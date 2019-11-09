import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  nomEtu = '';
  prenomEtu = '';

  retNomEtu(){
    return this.nomEtu = 'Martin';
  }

  retPrenomEtu(){
    return this.prenomEtu = 'Paul';
  }

  constructor() { }

  ngOnInit() {
  }
}
