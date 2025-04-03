// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../../Services/user.service';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-user',
//   templateUrl: './create-user.component.html',
//   styleUrl: './create-user.component.css'
// })
// export class CreateUserComponent implements OnInit {
//  constructor(private fb: FormBuilder,private userService:UserService ,private router: Router){}
//  ngOnInit(): void {
   
//  }
//   UserForm = this.fb.group({
//     Id: 0,
//     Name: ['', Validators.required],
//      MobileNo: ['', Validators.required],
//      email: ['', Validators.required],
//     BranchId :  ['', Validators.required],
//     IsLibrarian :  ['', Validators.required],
//     IsBranchAdmin :  ['', Validators.required],
//     IsActive :  ['', Validators.required],
//     Password:  ['', Validators.required],
//    });
 
//    futureDateValidator(control:any) {
//      const selectedDate = new Date(control.value);
//      const today = new Date();
//      return selectedDate > today ? null : { futureDate: true };
//    }
//    // It is called when the id=o from UserForm
//  AddUser() {
    
//     const addUser: any =this.UserForm.value;
    
//     this.userService.AddUser(addUser).subscribe({
//     });
//     this.router.navigate(['/']);
//   }
//   // It is used when the Id>o from UserForm
//   UpdateUser() {
   
//     const updateUser: any =this.UserForm.value;
    
//     this.userService.AddUser(updateUser).subscribe({
//     });
//     this.router.navigate(['/']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  isLoading: boolean = false;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const userId = this.router.url.split('/').pop();
    if (userId) {
      this.isEditMode = true;
      this.loadUser(userId);
    }

    
  }
  UserForm = this.fb.group({
    Id: [0],
    Name: ['', Validators.required],
    MobileNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    email: ['', [Validators.required, Validators.email]],
    BranchId: ['', Validators.required],
    IsLibrarian: ['', Validators.required],
    IsBranchAdmin: ['', Validators.required],
    IsActive: ['', Validators.required],
    Password: ['', Validators.required],
  });
  loadUser(userId: string) {
    this.userService.getUserById(+userId).subscribe({
      next: (user) => {
        this.UserForm.patchValue(user);
      },
      error: (err) => {
        console.log(err); // Error will be caught by the interceptor
      }
    });
  }

  AddUser() {
    if (this.UserForm.invalid) return;
    this.isLoading = true;

    this.userService.AddUser(this.UserForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err); // Error will be caught by the interceptor
      }
    });
  }

  UpdateUser() {
    if (this.UserForm.invalid) return;
    this.isLoading = true;
  
    const userId = this.UserForm.value.Id;
    // Check if userId is not null or undefined
    if (userId == null) {
      console.error('User ID is required for updating.');
      this.isLoading = false;
      return; // Optionally show an alert to the user about the missing ID
    }
  
    // Proceed with the update
    this.userService.UpdateUser(userId, this.UserForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err); // Error will be caught by the interceptor
      }
    });
  }
  

  onSubmit() {
    if (this.isEditMode) {
      this.UpdateUser();
    } else {
      this.AddUser();
    }
  }
}
