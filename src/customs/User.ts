import crypto from "crypto";

export class User {
  private _id: string;
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
  private _transactions: number[];
  get transactions(): number[] {
    return this._transactions;
  }

  constructor(name: string, email: string, age: number, cpf: string) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._age = age;
    this._cpf = cpf;
    this._email = email;
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      age: this._age,
      email: this._email,
      cpf: this._cpf,
    };
  }
}
