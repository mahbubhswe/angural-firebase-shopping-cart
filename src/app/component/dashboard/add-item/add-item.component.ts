import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../../../Services/fruits.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent{
  fruitCategory: string;
  fruitPrice: number;
  fruitQty = 1;
  fruitPhoto: string = null;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  file: any;
  filePath: any;
  fileRef: any;
  photoStatus: string = null;
  constructor(private db: FruitsService, private storage: AngularFireStorage) { }
  //Function
  isPhoto(event): void{
    this.file = event.target.files[0];
    this.filePath = `fruits/${this.file.name}`;
    this.fileRef = this.storage.ref(this.filePath);
    if (this.file.type.split('/')[0] !== 'image'){
      this.photoStatus = null;
      alert('Selected file not supported. Please select a photo');
    }else{
      this.photoStatus = 'ok';
    }
  }

  upload(event): void{
      const task = this.storage.upload(this.filePath, this.file);
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => {
          this.fileRef.getDownloadURL().subscribe((url) => {
            this.fruitPhoto = url;
            // this.fileService.insertImageDetails(this.id,this.url);
            alert('Upload Successful');
            this.addFruit(event);
          });
        })
      ).subscribe();

  }


  addFruit(event): void{
    const data = {
      fruitCategory: this.fruitCategory,
      fruitPrice: this.fruitPrice,
      fruitPhoto: this.fruitPhoto,
      fruitQty: this.fruitQty,
      date: new Date()
    };
    this.db.addFruit(data);
    this.fruitCategory = null;
    this.fruitPrice = null;
    this.fruitPhoto = null;
    this.photoStatus = null;
  }

}
