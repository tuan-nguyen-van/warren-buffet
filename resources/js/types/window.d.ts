export {};

declare global {
  interface Window {
    isMobile: boolean;
    previousURL?: string;
  }
}
