import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  private heroes:Heroe[]=[];
  private termino:string;

  constructor( private activatedRoute : ActivatedRoute, private _heroeService:HeroesService, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });

  }

  verHeroe(idx:number){
    this.router.navigate( ['/heroe',idx] );
  }

}
