import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  skill: Skill = null;

  constructor(private sSkill: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      {
        next: data =>{
          this.skill = data;
        },
        error: err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.update(id, this.skill).subscribe(
      {
        next: data =>{
          this.router.navigate(['']);
        },
        error: err =>{
          alert("Error al modificar la habilidad");
          this.router.navigate(['']);
        }
      });
  }

}
