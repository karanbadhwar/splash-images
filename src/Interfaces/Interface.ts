import { Dispatch } from "react";

// Children Prop interface
export interface IChildren {
  children: JSX.Element | JSX.Element[];
}

// Context Default Value

export interface IContext {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  searchTerm: string;
  setSearchTerm: Dispatch<React.SetStateAction<string>>;
}

//Result Interface
export interface IResults {
  id: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  description: string;
  alt_description: string;
}
