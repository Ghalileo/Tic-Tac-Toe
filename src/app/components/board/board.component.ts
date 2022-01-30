import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares = [];
  xIsNext!:  boolean;
  winner!: string;


  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame(){
    this.squares = Array(9).fill(null);
  }

}
