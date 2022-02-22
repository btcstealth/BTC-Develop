import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  yearlyDividends = 10000;

  investedSaxo = 183000;
  investedNordnet = 42000;
  investedCrypto = 0;
  totalInvested = this.investedSaxo + this.investedNordnet + this.investedCrypto;

  savingsBank = 115000;
  savingsSaxo = 130000;
  savingsNordnet = 50000;

  totalSavings = this.savingsBank + this.savingsSaxo + this.savingsNordnet;

  constructor() { }

  ngOnInit(): void {
  }

  myType = ChartType.PieChart;
  data = [
        ['Firefox', 45.0],
        ['IE', 26.8],
        ['Chrome', 12.8],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {};
  width = 550;
  height = 400;
}
