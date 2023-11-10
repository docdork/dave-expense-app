import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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
} from '@ionic/angular/standalone';

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
  ],
})
export class HomePage {
  constructor() {}

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
}
