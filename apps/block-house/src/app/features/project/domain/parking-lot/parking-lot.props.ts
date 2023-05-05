import { AddressProps, Currency } from '..';

export type ParkingLotProps = {
  area: number;
  address: AddressProps;
  cost: number;
  currency: Currency;
};
