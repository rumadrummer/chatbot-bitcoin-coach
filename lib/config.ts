import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🚀 Workflow-ID (kommt nachher aus dem Agent Builder)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

// Session Endpoint
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 🚀 Start-Screen Buttons & Prompts
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Was ist Bitcoin?",
    prompt:
      "Erkläre mir in einfachen Worten, was Bitcoin ist und warum es erfunden wurde."
  },
  {
    label: "Ist Bitcoin Spekulation?",
    prompt:
      "Viele sagen, Bitcoin sei nur Spekulation. Stimmt das? Bitte für skeptische Einsteiger erklären und Risiken sowie Chancen fair darstellen."
  },
  {
    label: "Erste Sats kaufen",
    prompt:
      "Wie kann ich sicher meine ersten Satoshis kaufen – Schritt für Schritt für Anfänger erklärt."
  },
  {
    label: "Wallet & Sicherheit",
    prompt:
      "Was ist ein Wallet, wie bewahre ich Bitcoin sicher auf und was sind typische Anfängerfehler?"
  }
];

// Eingabefeld-Text
export const PLACEHOLDER_INPUT = "Frag den Bitcoin-Coach…";

// 👋 Begrüssungstext
export const GREETING =
  "Hallo 👋 Ich bin dein Bitcoin-Coach! Ich helfe dir, Bitcoin verständlich zu erklären – ohne Fachchinesisch, ohne Hype.";

// 🎨 Bitcoin-Theme (Orange)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4
    },
    accent: {
      primary: "#F7931A", // Bitcoin Orange
      level: 2
    }
  },
  radius: "round"
});





