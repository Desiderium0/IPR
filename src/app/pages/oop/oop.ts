import { Component } from '@angular/core';

@Component({
  selector: 'app-oop',
  imports: [],
  templateUrl: './oop.html',
  styleUrl: './oop.scss',
})
export class OOP {
  constructor() {
    TValues.computeValue('2');
    TValues.computeValue(2);
  }
}

class TValues {
  public static computeValue<T>(value: T): T {
    if (typeof value === 'string') {
      return '' as T;
    }

    return value;
  }
}

type User = {
  id: number;
  name: string;
  email: string;
};

type Machine = {
  serialNumber: string;
  model: string;
  isActive: boolean;
};
