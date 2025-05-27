import { FormfieldBase } from './formfield-base';

interface SelectBaseOptions {
  controlName: string;
  label: string;
  value?: any; // Add this line
  options: {
    label: string;
    value: string;
    data: any[];
  };
  required?: boolean;
  order?: number;
}

export class SelectBase extends FormfieldBase {
  controlName: string;
  value: any; // Add this line
  options: {
    label: string;
    value: string;
    data: any[];
  };

  constructor(options: SelectBaseOptions) {
    super(options);
    this.controlName = options.controlName;
    this.value = options.value;
    this.options = options.options;
  }
}
