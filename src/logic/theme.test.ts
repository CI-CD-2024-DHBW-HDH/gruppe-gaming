import { Theme } from "./theme";

describe("Theme", () => { const theme = new Theme({ primary: "#1e1f26", secondary: "#bdc3c7", primaryAccent: "#3498db", secondaryAccent: "#2980b9", background: "#2c3e50", name: "Midnight blue", });

it("should create a new theme object with the provided values", () => {
    expect(theme.primary).toBe("#1e1f26"); expect(theme.secondary).toBe("#bdc3c7"); 
    expect(theme.primaryAccent).toBe("#3498db"); expect(theme.secondaryAccent).toBe("#2980b9"); 
    expect(theme.background).toBe("#2c3e50"); expect(theme.name).toBe("Midnight blue"); 
});

it("should return the CSS string with the correct values", () => { 
    const expectedCSS = "--primary: #1e1f26; --secondary: #bdc3c7; --primaryAccent: #3498db; --secondaryAccent: #2980b9; --background: #2c3e50"; 
    expect(theme.CSS()).toBe(expectedCSS); }); 
});