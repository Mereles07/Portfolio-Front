import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private sSkill: SkillService, private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.sSkill.save(skill).subscribe(
      {
        next: data =>{
          alert("Habilidad creada correctamente");
          this.router.navigate(['']);
        },
        error: err =>{
          alert("Fallo");
          this.router.navigate(['']);
        }
      });
  }

}
