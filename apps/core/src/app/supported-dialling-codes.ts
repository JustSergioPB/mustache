import { DiallingCode } from '@mustache/forms-ui';

export const SUPPORTED_DIALLING_CODES: DiallingCode[] = [
  {
    id: 'en-US',
    pattern: '^(([0-9]{3}) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$',
    prefix: 1,
    country: 'United States',
    icon: '&#x1F1FA;&#x1F1F8;',
    placeholder: '(484)476-0213',
  },
  {
    id: 'es-ES',
    pattern: '(6|7)[ -]*([0-9][ -]*){8}',
    prefix: 34,
    country: 'Spain',
    icon: '&#x1F1EA;&#x1F1F8;',
    placeholder: '699 43 12 40',
  },
];
