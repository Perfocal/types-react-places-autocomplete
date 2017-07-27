declare module "react-places-autocomplete" {
  import * as React from "react";

  type Styles = any;
  
  type AutocompleteDirecotry<T> = {
    root?: T;
    input?: T;
    autocompleteContainer?: T;
    autocompleteItem?: T;
    autocompleteItemActive?: T;
  }

  type InputProps = {
    value: string;
    onChange: Function;
    onBlur?: Function;
    type?: string;
    placeholder?: string;
    autoFocus?: boolean;
  }

  type LatLng = any;
  type LatLngBounds = any;
  type LatLngBoundsLiteral = {
    east: number;
    west: number;
    south: number;
    north: number;
  }
  type ComponentRestrictions = {
    country: string | string[];
  }

  type Options = {
    bounds?: LatLngBounds | LatLngBoundsLiteral;
    componentRestrictions?: ComponentRestrictions;
    input?: string;
    location?: LatLng;
    offset?: number;
    types?: string[];
  }

  interface PlacesAutocompleteProps {
    inputProps: InputProps;
    autocompleteItem?: React.PureComponent<any, void>;
    classNames?: AutocompleteDirecotry<string>;
    styles?: AutocompleteDirecotry<Styles>;
    onError?: Function;
    clearItemOnError?: boolean;
    onSelect?: Function;
    onEnterKeyDown?: Function;
    options?: Options;
  }

  var geocodeByAddress: (string) => Promise<any>;
  var geocodeByPlaceId: (string) => Promise<any>;
  var getLatLng: (object) => Promise<any>;

  export default class PlacesAutocomplete extends React.Component<PlacesAutocompleteProps, any> {}

  export {
    PlacesAutocomplete,
    PlacesAutocompleteProps,
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  };
}
