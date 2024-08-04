import { Component } from '@angular/core';
import { Vespa } from '../models/vespa';
import { VespaService } from '../services/vespa.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  vespa:Vespa[]=[];
  constructor(private service:VespaService){}
  ngOnInit():void{
    this.service.submitting().subscribe(data=>this.vespa=data); 
   }
}
