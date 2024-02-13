interface IOption {
  value: string;
  label: string;
}

export interface SelectProps {
  title: string;
  options: IOption[];
}
