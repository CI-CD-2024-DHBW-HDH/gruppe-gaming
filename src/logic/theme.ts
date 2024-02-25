export class Theme {
  primary: string;
  secondary: string;
  primaryAccent: string;
  secondaryAccent: string;
  background: string;
  name: string;

  constructor({
    primary,
    secondary,
    primaryAccent,
    secondaryAccent,
    background,
    name,
  }: {
    primary: string;
    secondary: string;
    primaryAccent: string;
    secondaryAccent: string;
    background: string;
    name: string;
  }) {
    this.primary = primary;
    this.secondary = secondary;
    this.primaryAccent = primaryAccent;
    this.secondaryAccent = secondaryAccent;
    this.background = background;
    this.name = name;
  }

  CSS(): string {
    return `--primary: ${this.primary}; --secondary: ${this.secondary}; --primaryAccent: ${this.primaryAccent}; --secondaryAccent: ${this.secondaryAccent}; --background: ${this.background}`;
  }
}

export const themes: Theme[] = [
  new Theme({
    primary: "#1e1f26",
    secondary: "#bdc3c7",
    primaryAccent: "#3498db",
    secondaryAccent: "#2980b9",
    background: "#2c3e50",
    name: "Midnight blue",
  }),
  new Theme({
    primary: "#ffd700",
    secondary: "#616161",
    primaryAccent: "#8c7853",
    secondaryAccent: "#c5cae9",
    background: "#121212",
    name: "Black and gold",
  }),
  new Theme({
    primary: "#4e9a06",
    secondary: "#f7e267",
    primaryAccent: "#edd400",
    secondaryAccent: "#ce5c00",
    background: "#1b1b1b",
    name: "Dark green",
  }),
  new Theme({
    primary: "#8e24aa",
    secondary: "#ffd54f",
    primaryAccent: "#ffb300",
    secondaryAccent: "#e65100",
    background: "#121212",
    name: "Vibrant purple",
  }),
  new Theme({
    primary: "#008080",
    secondary: "#ffe0b2",
    primaryAccent: "#ffab91",
    secondaryAccent: "#4a148c",
    background: "#232323",
    name: "Teal blue",
  }),
];
