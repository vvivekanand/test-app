import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  constructor(private formBuilder:FormBuilder,private roter:Router) { }

  username!: FormGroup;





  ngOnInit(): void {
  this.username= this.formBuilder.group({
  name:['',Validators.required]
  })
  }
  
  
  
  
  
  submitted=false;
  
  
  
  
  
  get f(){
  return this.username.controls;
  }
  onSubmit(){
  this.submitted=true;
  
  
  
  
  
  if(this.username.invalid){
  return;
  }
  localStorage.setItem("name", this.nameKey.nativeElement.value);
  const name=localStorage.getItem("name")!;
  alert("Welcome to the quiz "+`${name}`)
  this.startTest('main');
  
  
  
  }
startTest(pagename:string):void{
  this.roter.navigate([`${pagename}`])
}
}
