import MistralClient from '@mistralai/mistralai';
import { API_CONFIG } from '../config/api';

export const mistralClient = new MistralClient(API_CONFIG.mistralApiKey || '');