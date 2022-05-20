import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from 'src/app/models/log-in';
import { LogInService } from 'src/app/services/log-in.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logIn = new LogIn();
  constructor(private LogInService : LogInService, public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  checkValidity() : void{
    this.LogInService.checkMail().subscribe(data => {
      
      if (this.logIn.mail === data[0].mail && this.logIn.password === data[0].password){
        this.toastr.success('Authentification éffectué avec succès', 'redirection en cours')
        this.router.navigate(['/admin/Pizza']);
      }else{
        this.toastr.error('Authentification refusé', 'les informations rentré sont fausse')
      }
    })
  }

}
