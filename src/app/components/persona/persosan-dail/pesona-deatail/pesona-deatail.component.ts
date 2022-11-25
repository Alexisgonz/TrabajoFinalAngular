import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



import { PersonaService } from '../../service/persona.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-pesona-deatail',
  templateUrl: './pesona-deatail.component.html',
  styleUrls: ['./pesona-deatail.component.css']
})
export class PesonaDeatailComponent implements OnInit {
  
  persona = Persona

  constructor(
    private route: ActivatedRoute,
    private personaService:PersonaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params['id'];
      this.fetchPesona(id);
      //this.product = this.productsService.getAllProducts(id);
  })

  this.fetchPesona(id: string){
    this.personaService.getAllPeople(id)
    .subscribe(product => {
      this.persona = Persona;
    });
  }

  addPeople(){
    const newProduct: Persona = {
    id: '222',
    nombres: 'Alexis ',
    apellidos: 'Gonzalez Franco',
    correo: 'alexisgonzalezf07@gmail.com'
    
    };
    this.personaService.fetchPesona(Persona)
    .subscribe(this.persona => {
      console.log(this.persona);
    });
  }

  updatePeople() {
    const updateProduct: Partial<Persona> = {,
      description: 'edicion del producto '
      };
    this.personaService.updatePeople('222',updatePeople)
    .subscribe(product =>{
      console.log(product);
    })
  }

  deletePeople() {
    this.personaService.deletePeople('22')
    .subscribe(rta => {
      console.log(rta);
    })
  }

}
  fetchPesona(id: any) {
    throw new Error('Method not implemented.');
  }

}
function addPeople() {
  throw new Error('Function not implemented.');
}

