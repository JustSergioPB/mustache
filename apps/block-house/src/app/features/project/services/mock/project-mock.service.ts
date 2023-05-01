import { Injectable } from '@angular/core';
import { ProjectQuery } from '../../models';
import { AbstractProjectService } from '../abstract-project.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectMockService extends AbstractProjectService {
  constructor() {
    super();
  }

  public searchProjects(query?: ProjectQuery): void {
    this._projects$.next({
      value: [
        {
          name: 'Bloque de viviendas',
          imgUrls: ['assets/images/casa-moderna.jpeg'],
          housing: {
            address: {
              street: 'Av. Portugal',
              city: 'Logroño',
            },
          },
          totalInvestment: 260000,
          invested: 120000,
          sharingPrice: 100,
          currency: 'EUR',
          status: 'active',
          duration: {
            amount: 6,
            unit: 'month',
          },
          roi: 16.7,
        },
        {
          name: 'House fliping en Madrid',
          imgUrls: ['assets/images/mini-apartment.jpeg'],
          housing: {
            address: {
              street: 'Gran vía',
              city: 'Madrid',
            },
          },
          totalInvestment: 173000,
          invested: 173000,
          sharingPrice: 50,
          currency: 'EUR',
          status: 'sold',
          duration: {
            amount: 2,
            unit: 'month',
          },
          roi: 11.3,
        },
        {
          name: 'Casas de verano en la costa',
          imgUrls: ['assets/images/coastal-homes.jpeg'],
          housing: {
            address: {
              street: 'Camí del Magistre',
              city: 'Valencia',
            },
          },
          totalInvestment: 315000,
          invested: 60000,
          sharingPrice: 100,
          currency: 'EUR',
          status: 'active',
          duration: {
            amount: 11,
            unit: 'month',
          },
          roi: 9.4,
        },
      ],
      error: null,
      loading: false,
    });
  }
}
