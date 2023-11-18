import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonActionSheet,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonModal,
  IonButtons,
  IonInput,
  IonItem,
  IonList,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, camera } from 'ionicons/icons';

import { PhotoService } from '../services/photo.service';

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonActionSheet,
    NgFor,
    IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonCol,
    IonRow,
    IonModal,
    IonButtons,
    IonInput,
    IonItem,
    IonList,
  ],
})
export class HomePage {
  constructor(public photoService: PhotoService) {
    addIcons({ add, camera });
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  public expenseContentList = [
    {
      description: 'Expense Description',
      amount: 21.99,
      picture: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
    {
      description: 'Another Expense Description',
      amount: 17.99,
      picture: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
    {
      description: 'Expense Description',
      amount: 21.99,
      picture: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
    {
      description: 'Another Expense Description',
      amount: 17.99,
      picture: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
  ];

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },

    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
