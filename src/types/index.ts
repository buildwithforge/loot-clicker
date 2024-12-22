export interface Cost {
  base: number;
  next: number;
  rate: number;
}

export interface Output {
  base: number;
  next: number;
  current: number;
}

export type AchievementId = 'gold100' | 'gold1000' | 'gold10000';

export type GeneratorId =
  | 'generator1'
  | 'generator2'
  | 'generator3'
  | 'generator4'
  | 'generator5'
  | 'generator6'
  | 'generator7'
  | 'generator8'
  | 'generator9'
  | 'generator10'
  | 'generator11'
  | 'generator12'
  | 'generator13'
  | 'generator14'
  | 'generator15'
  | 'generator16';
