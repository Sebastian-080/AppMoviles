import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service'; // Verifica que la ruta sea correcta
import { ApiResponse } from '../../models/api-response.model'; // Importa el modelo de respuesta
import { Contacto } from '../../models/contacto.model';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  providers: [ApiService],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {
  frmContacto: FormGroup;

  constructor(private apiService: ApiService) { 
    this.frmContacto = new FormGroup({
      nombre: new FormControl('',Validators.required),
      correo: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
    });
  }

  ngOnInit() {}

  login(){
    console.log(this.frmContacto.value);

    if (!this.frmContacto.invalid) {
      alert("Datos Incompletos.")
    }

    // Aquí estamos asegurando que estamos usando ApiResponse<User>
    this.apiService.post<ApiResponse<Contacto>>('/contacto', this.frmContacto.value).subscribe({
      next: (response) => {
        // Aquí la respuesta es del tipo ApiResponse<User>
        console.log(response);
        this.frmContacto.reset();
        alert("Pronto Contactaremos Con Usted.");
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
