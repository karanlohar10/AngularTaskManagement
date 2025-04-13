import { Component, Input, input, Output, output, signal, computed, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
// id: string;
// avatar: string;
// name: string;
// }

interface User
{
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) user!: User;

//  @Input({required: true}) user!: {
//   id: string;
//   avatar: string;
//   name: string;
// };

  @Output() select = new EventEmitter<string>();
  
  get imagePath () {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
