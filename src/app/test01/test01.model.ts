export interface ActionButtonContext {
  context: {
    type: string
    label: string,
    // tslint:disable-next-line:ban-types
    click: Function
  };
}

export interface BundleData {
  text: string;
}
