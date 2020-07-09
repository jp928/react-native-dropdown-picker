import { ComponentType } from 'react';

declare module 'react-native-dropdown-picker' {
  type DropDownPicker = {
    items: {label: any, value: any, icon?: () => JSX.Element, disabled?: boolean, selected?: boolean}[];
    defaultValue?: any;
    placeholder?: string;
    dropDownMaxHeight?: number;
    style?: Array<Object>|Object;
    dropDownStyle?: Object;
    containerStyle?: Object;
    itemStyle?: Object;
    labelStyle?: Object;
    selectedLabelStyle?: Object;
    placeholderStyle?: Object;
    activeItemStyle?: Object;
    activeLabelStyle?: Object;
    arrowStyle?: Object;
    arrowColor?: string;
    arrowSize?: number;
    showArrow?: boolean;
    customArrowUp?: (size: number, color: string) => JSX.Element;
    customArrowDown?: (size: number, color: string) => JSX.Element;
    customTickIcon?: () => JSX.Element;
    disabled?: boolean;
    isVisible?: boolean;
    multiple?: boolean;
    multipleText?: string;
    min?: number;
    max?: number;
    searchable?: boolean;
    searchablePlaceholder?: string;
    searchablePlaceholderTextColor?: string;
    searchableStyle?: Object;
    searchableError?: () => JSX.Element;
    onOpen?: () => void;
    onClose?: () => void;
    onChangeItem?: (item: any, index: number) => void;
    onLayout?: (arg: Object) => void;
  };
  const DropDownPicker: ComponentType<DropDownPicker>;
  export default DropDownPicker;
}
