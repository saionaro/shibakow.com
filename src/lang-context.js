import { createContext } from 'react';
import ru from './locales/ru.json';
import en from './locales/en.json';

export const LangContext = createContext(ru);

export const locales = { en, ru };
