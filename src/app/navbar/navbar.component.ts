import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar = {
    item1: 'Home',  // Replace 'Home' with your actual content
    item2: 'About', // Replace 'About' with your actual content
    item3: 'Services', // Replace 'Services' with your actual content
    item4: 'Dropdown', // Replace 'Dropdown' with your actual content
    item5: 'Contact' // Replace 'Contact' with your actual content
  };
}