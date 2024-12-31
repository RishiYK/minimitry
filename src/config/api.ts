// API configuration and validation
export const API_CONFIG = {
  mistralApiKey: import.meta.env.VITE_MISTRAL_API_KEY,
};

export function validateApiConfig() {
  if (!API_CONFIG.mistralApiKey) {
    throw new Error('Missing VITE_MISTRAL_API_KEY environment variable');
  }
  return true;
}