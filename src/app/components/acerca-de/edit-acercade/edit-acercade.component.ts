import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  persona: Persona = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      {
        next: data => {
          this.persona = data;
        },
        error: err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
        },
        error: err => {
          alert("Error al modificar el perfil");
          this.router.navigate(['']);
        }
      });
  }

  uploadImage($event: any){

  }

}
