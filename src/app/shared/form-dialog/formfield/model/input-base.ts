import { FormfieldBase } from './formfield-base';

interface InputBaseOptions {
  controlName: string;
  label: string;
  value?: any;
  type?: string;
  required?: boolean;
  order?: number;
  max?: number; // Add max property
  min?: number; // Good to add min as well for completeness
  validators?: {
    // Add validators object
    max?: number;
    min?: number;
    pattern?: string;
    required?: boolean;
  };
}

export class InputBase extends FormfieldBase {
  controlName: string;
  value: any;
  type: string;
  max?: number;
  min?: number;
  validators?: {
    max?: number;
    min?: number;
    pattern?: string;
    required?: boolean;
  };

  constructor(options: InputBaseOptions) {
    super(options);
    this.controlName = options.controlName;
    this.value = options.value;
    this.type = options.type || 'text';
    this.max = options.max;
    this.min = options.min;
    this.validators = options.validators;
  }
}
