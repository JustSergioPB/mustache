export type AuthWidget = 'login' | 'signup' | 'recover';

export function isValidAuthWidget(string: string): boolean {
  return string === 'login' || string === 'signup' || string === 'recover';
}
