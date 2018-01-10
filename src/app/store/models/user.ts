
export enum Sex {
  male,
  female
}

export class User {
  id: number;
  name: string;
  age: number;
  bday: string;
  address: string;
  sex: Sex;
  notes: string;
}

