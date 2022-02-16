import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Fruit} from '../Models/fruit';

@Injectable({
  providedIn: 'root'
})

export class FruitsService {
  fruits: Fruit[] = [];

  constructor(private db: AngularFirestore) {
    this.db.collection('fruits').snapshotChanges().subscribe(data => {
      data.forEach(a => {
        const postData: any = a.payload.doc.data();
        postData.id = a.payload.doc.id;
        this.fruits.push(postData as Fruit);
      });
    });
  }
  getFruits(): Fruit[]{
    return this.fruits;
  }
  addFruit(data: Fruit): void{
    this.db.collection('fruits').add(data);
  }
}

