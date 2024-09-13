import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfases/show.interface';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [NgFor, NgIf,NgStyle],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent {
  
  @Output()
  public deleteElement: EventEmitter<string>=new EventEmitter();
  
  @Input()
  public show:Show={
    "name": "",
    "description": "",
    "image": "",
    "year": 0,
    "episodes": 0,
    "genre": "",
    "likes": []
  }
  backgroundColor: string = 'white';
//Aqui debe editar
  public editar(): void{
    this.backgroundColor = this.backgroundColor === 'white' ? 'lightblue' : 'white';
    
  }
  public delete(name:string):void{
    this.deleteElement.emit(name);
  }
  public create(name:string):void{
    this.deleteElement.emit(name);
  }
  public selectBoton():void{
    
  }
}