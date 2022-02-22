import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
    {id: 1, name: 'company1', location: 'Copenhagen', remote: true, url: ""},
    {id: 2, name: 'company2', location: 'Copenhagen', remote: false, url: ""},
    {id: 3, name: 'company3', location: 'Copenhagen', remote: false, url: ""},
  ];

  headElements = ['ID', 'Name', 'Location', 'Remote'];

}
