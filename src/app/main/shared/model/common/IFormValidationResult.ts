export interface IFormValidationResult {
  isValid: boolean;
  controlName: string;
  error: string;
  index?: number
}
