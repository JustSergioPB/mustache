import { AddressProps } from '../../address';
import { Currency } from '../../currency';
import { HousingType } from '../types';
import { EmisionProps, EnergyProps } from '../value-objects';

export type HousingProps = {
  cost: number;
  currency: Currency;
  imgUrls: string[];
  address: AddressProps;
  bedrooms: number;
  bathrooms: number;
  area: number;
  floor: number;
  parkingLots: number;
  type: HousingType;
  emision: EmisionProps;
  energy: EnergyProps;
  isFurnished: boolean;
  hasElevator: boolean;
  heating: string;
  orientation: string;
  condition: string;
};
