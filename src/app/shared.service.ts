import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  shFirstName: string;
  shLastName: string;

  shCollection: Array<object> = [];
  shNameObject: {firstName: string, lastName: string};

  constructor() { }

  addNewName(fname:string, lname:string){
    this.shNameObject = {
      firstName: fname,
       lastName:lname}

    this.shCollection.push(this.shNameObject);
  }

  getNames(): Array<object>{
    return this.shCollection;
  }

}
