import crypto from "crypto";
import { Transactions } from "./transactions";

export class User {
  private _id: string;
  updateInformation: any;
  get id(): string {
    return this._id;
  }
  private _name: string;
  get name(): string {
    return this._name;
  }

  private _age: number;
  get age(): number {
    return this._age;
  }

  private _cpf: string;
  get cpf(): string {
    return this._cpf;
  }
  private _email: string;
  get email(): string {
    return this._email;
  }
  private _transactions: Transactions[];
  get transactions(): Transactions[] {
    return this._transactions;
  }

  constructor(
    name: string,
    email: string,
    age: number,
    cpf: string,
    transactions: []
  ) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._email = email;
    this._age = age;
    this._cpf = cpf;
    this._transactions = transactions ?? [];
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      age: this._age,
      cpf: this._cpf,
      transactions: this._transactions,
    };
  }
}
