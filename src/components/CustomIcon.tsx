import React from 'react';

export type IconType =
  | 'erizo'
  | 'minipig'
  | 'hamster'
  | 'conejo'
  | 'ninfa'
  | 'gallina'
  | 'habitat'
  | 'diagnostico'
  | 'consulta-preventiva'
  | 'sueroterapia-homeopatica'
  | 'terapia-respiratoria'
  | 'medicina-poblacional'
  | 'toma-muestras'
  | string;

interface CustomIconProps {
  name: IconType;
  className?: string;
  title?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  className = 'w-12 h-12 flex-shrink-0',
  title,
}) => {
  const ariaLabel = title || name;

  switch (name) {
    case 'erizo':
    case 'shield_with_heart':
    case 'exoticos':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M11 27 C9 22 11 16 16 13 C20 10 26 10 31 12 C36 14 39 18 39 24 C39 27 37 31 33 33 C27 35 17 35 12 32 C11 30 11 28 11 27 Z" fill="#134E35" opacity="0.12" />
          <path d="M10 29 L7.5 25.5 L10 24 L7 20 L10.5 19 L8.5 15 L12.5 14.5 L12 10.5 L16.5 11.5 L17.5 7.5 L22 9.5 L24 6.5 L28 9 L31 7 L34 10.5 L37.5 9.5 L39 13.5 L42 14 L41.5 18 L43.5 20.5 L40.5 23" fill="none" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 20 L18 17 M21 16 L25 13 M28 17 L32 14 M18 24 L22 21 M26 23 L30 20" stroke="#2D7A58" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M40 23.5 C39.5 24 38 24 37 23.5 C35 23 34 23.5 33 24.5 L28 27 C27 27.5 26 28 25 28.5" fill="none" stroke="#134E35" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M38 23 C39.5 24 43 25.5 44 27 C43.5 28 41 28.5 39 29 C36 29.8 33 33.5 26 34 C18 34.5 13 33 10 29" fill="none" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 22 C33 20 35.5 19 36.5 21" fill="#134E35" stroke="#134E35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="44.2" cy="27" r="1.4" fill="#C45824" />
          <circle cx="38" cy="25.5" r="1.3" fill="#134E35" />
          <path d="M16 34 L15 37 M29 34 L29.5 37" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
      );

    case 'minipig':
    case 'pig':
    case 'minipigs':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <ellipse cx="24" cy="27" rx="13" ry="10" fill="#134E35" opacity="0.12" />
          <ellipse cx="24" cy="29" rx="5" ry="3.5" fill="#C45824" opacity="0.15" />
          <path d="M14 20 C12 15 13.5 11 17 12 C18.5 12.5 19 15 18 19" fill="#134E35" opacity="0.15" />
          <path d="M14 20 C12 15 13.5 11 17 12 C18.5 12.5 19 15 18 19" fill="none" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 16 C14.5 13.5 15.5 12.5 16.5 13" stroke="#C45824" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M34 20 C36 15 34.5 11 31 12 C29.5 12.5 29 15 30 19" fill="#134E35" opacity="0.15" />
          <path d="M34 20 C36 15 34.5 11 31 12 C29.5 12.5 29 15 30 19" fill="none" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 16 C33.5 13.5 32.5 12.5 31.5 13" stroke="#C45824" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 21 C11 25 11 32 16 35.5 C19 37.5 29 37.5 32 35.5 C37 32 37 25 34 21 C31 18 17 18 14 21 Z" fill="none" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="24" cy="29" rx="5.5" ry="4" fill="#EBF4EE" stroke="#134E35" strokeWidth="2.3" />
          <ellipse cx="22" cy="29" rx="1.1" ry="1.6" fill="#C45824" />
          <ellipse cx="26" cy="29" rx="1.1" ry="1.6" fill="#C45824" />
          <circle cx="18" cy="24" r="1.4" fill="#134E35" />
          <circle cx="30" cy="24" r="1.4" fill="#134E35" />
          <circle cx="17.6" cy="23.6" r="0.4" fill="#FFFFFF" />
          <circle cx="29.6" cy="23.6" r="0.4" fill="#FFFFFF" />
          <path d="M13.5 29 C14.5 30 16 29.5 16 28.5" stroke="#2D7A58" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34.5 29 C33.5 30 32 29.5 32 28.5" stroke="#2D7A58" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22.5 34 C23.5 34.6 24.5 34.6 25.5 34" stroke="#134E35" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19 37 L19 40 M29 37 L29 40" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
      );

    case 'hamster':
    case 'roedores':
    case 'pets':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <ellipse cx="24" cy="27" rx="13" ry="11" fill="#134E35" opacity="0.12" />
          <ellipse cx="24" cy="31" rx="8" ry="6" fill="#FFFFFF" opacity="0.4" />
          <path d="M14 18 C12.5 13.5 15.5 11 18.5 13 C20 14 20 16.5 19.5 18" fill="#134E35" opacity="0.15" />
          <path d="M14 18 C12.5 13.5 15.5 11 18.5 13 C20 14 20 16.5 19.5 18" fill="none" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 15.5 C15 14 16.5 13 17.5 14" stroke="#C45824" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M34 18 C35.5 13.5 32.5 11 29.5 13 C28 14 28 16.5 28.5 18" fill="#134E35" opacity="0.15" />
          <path d="M34 18 C35.5 13.5 32.5 11 29.5 13 C28 14 28 16.5 28.5 18" fill="none" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.5 15.5 C33 14 31.5 13 30.5 14" stroke="#C45824" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M19 18 C15 18.5 11 22 11 27 C11 33 16 37 24 37 C32 37 37 33 37 27 C37 22 33 18.5 29 18 C26.5 17 21.5 17 19 18 Z" fill="none" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17.5" cy="24" r="1.6" fill="#134E35" />
          <circle cx="30.5" cy="24" r="1.6" fill="#134E35" />
          <circle cx="17" cy="23.4" r="0.5" fill="#FFFFFF" />
          <circle cx="30" cy="23.4" r="0.5" fill="#FFFFFF" />
          <ellipse cx="24" cy="27" rx="1.5" ry="1.1" fill="#C45824" />
          <path d="M24 28 V29.5 M24 29.5 C22.5 31 20.5 30.5 19.5 29.5 M24 29.5 C25.5 31 27.5 30.5 28.5 29.5" fill="none" stroke="#134E35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="22.8" y="29.7" width="2.4" height="2.2" rx="0.5" fill="#FFFFFF" stroke="#134E35" strokeWidth="1.2" />
          <path d="M15 28 L10.5 27.5 M15 30 L11 31" stroke="#2D7A58" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 28 L37.5 27.5 M33 30 L37 31" stroke="#2D7A58" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="21" cy="35" rx="1.8" ry="2.2" fill="#EBF4EE" stroke="#134E35" strokeWidth="2" />
          <ellipse cx="27" cy="35" rx="1.8" ry="2.2" fill="#EBF4EE" stroke="#134E35" strokeWidth="2" />
          <path d="M24 33 C23 34 23 35.5 24 36.5 C25 35.5 25 34 24 33 Z" fill="#C45824" opacity="0.85" />
        </svg>
      );

    case 'conejo':
    case 'conejos':
    case 'cruelty_free':
    case 'pequeños-mamiferos':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M19 22C17 17 16 10 19 8C21.5 6 23 10 22 20" fill="#134E35" opacity="0.12" />
          <path d="M19 22C17 17 16 10 19 8C21.5 6 23 10 22 20" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 20C25 11 27 6 29.5 7C32 8 31 15 28 22" fill="#134E35" opacity="0.12" />
          <path d="M25 20C25 11 27 6 29.5 7C32 8 31 15 28 22" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 14C19 11 20 9 20.5 8.5" stroke="#C45824" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 27C15 24 18 21 24 21C30 21 33 24 32 27C34 29 35 32 34 35C33 38 29 39 24 39C19 39 15 38 14 35C13 32 14 29 16 27Z" fill="#134E35" opacity="0.12" />
          <path d="M16 27C15 24 18 21 24 21C30 21 33 24 32 27C34 29 35 32 34 35C33 38 29 39 24 39C19 39 15 38 14 35C13 32 14 29 16 27Z" stroke="#134E35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 30L23 28.5H25L24 30Z" fill="#C45824" />
          <path d="M24 30V32M22 32.5C23 33 24 32 24 32C24 32 25 33 26 32.5" stroke="#134E35" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 29L14 28M18 31L14 32M30 29L34 28M30 31L34 32" stroke="#2D7A58" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="19" cy="25" r="1.3" fill="#134E35" />
          <circle cx="29" cy="25" r="1.3" fill="#134E35" />
        </svg>
      );

    case 'ninfa':
    case 'flutter':
    case 'aves-compania':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M22 10C24 12 24 15 22 17M25 8C27 11 27 15 24 18" stroke="#C45824" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 19C18 15 21 14 24 14C27.5 14 29.5 16 30 19C30 22 28 25 28 31C28 36 25 38 22 38C19 38 17 35 17 30C17 24 18 21 18 19Z" fill="#134E35" opacity="0.12" />
          <path d="M18 20C18 15.5 21 14 24 14C27.5 14 29.5 16 30 19C30 22 28 25 28 31C28 36.5 25 38.5 22 38.5C19 38.5 17 35.5 17 30C17 24 18 21 18 20Z" fill="none" stroke="#134E35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29.5 18L35 20C32.5 22 30 22.5 29 23" fill="none" stroke="#134E35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25.5" cy="21.5" r="2.5" fill="#C45824" opacity="0.85" />
          <circle cx="24" cy="18" r="1.3" fill="#134E35" />
          <path d="M22 24C25 26 26 29 25 34" fill="none" stroke="#2D7A58" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 38.5V41M24 38.5V41" stroke="#134E35" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'gallina':
    case 'egg':
    case 'aves-finca':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M19 18 C19 13.5 23 11 27 12 C30 13 32 15.5 32 19 C32 23 35 25 38 29 C40 32 38 38 31 39 C23 40 16 38 14 34 C12 29 15 24 19 18 Z" fill="#134E35" opacity="0.12" />
          <path d="M22 13 C21 10.5 23 8.5 25 9.5 C26 8 28.5 8 29.5 9.5 C31 8.5 33 10.5 32 13" fill="#C45824" stroke="#C45824" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 13.5 C20 16 19 20 19 25 C16 26.5 13.5 30 14 34 C15 38.5 21 40 30 39.5 C36.5 39 39 34.5 38 30 C36.5 25.5 32.5 24 32 21 C31.5 17 31.5 14 31 13.5" fill="none" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 17 L13 19.5 L19 22" fill="#EBF4EE" stroke="#134E35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 22 C17.5 22.5 16.5 24.5 18 26 C19.5 27 21 25.5 20.5 23" fill="#C45824" stroke="#C45824" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24.5" cy="17.5" r="1.5" fill="#134E35" />
          <circle cx="24.2" cy="17.1" r="0.4" fill="#FFFFFF" />
          <path d="M25 26 C28 26 33 27 34 31 C35 34 32 36 27 36 C23.5 36 22 34 23 31 C23.8 28.5 24.2 26 25 26 Z" fill="none" stroke="#2D7A58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26.5 30 C28.5 30 31 31.5 30.5 33.5" stroke="#2D7A58" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M37 28 C40 26 41 23 40 21 M38 31 C41 30 42 27 41.5 25" stroke="#134E35" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M22 40 L22 43 M21 43 L23.5 43 M28 40 L28 43 M27 43 L29.5 43" stroke="#134E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'consulta-preventiva':
    case 'habitat':
    case 'stethoscope':
      return (
        /* SERVICE A: ESCUDO & ESTETOSCOPIO */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M24 10 L34 13.5 C34 23 29.5 29 24 33 C18.5 29 14 23 14 13.5 Z" fill="#134E35" opacity="0.12" />
          <path d="M24 9.5 L34.5 13.5 C34.5 24 29.5 30.5 24 34.5 C18.5 30.5 13.5 24 13.5 13.5 Z" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 13 L31.5 16 C31.5 23 28 27.5 24 30.5 C20 27.5 16.5 23 16.5 16 Z" stroke="#2D7A58" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          <path d="M29 34 C31 35.5 33 37.5 33 40 C33 42 30.5 42.5 28 41.5 C25 40 23 39 20 41 C18 42.5 15 41.5 15 39 C15 37 17 35.5 19 34" stroke="#134E35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28.5" cy="41" r="2.2" fill="#FAF6EE" stroke="#C45824" strokeWidth="1.8" />
          <circle cx="28.5" cy="41" r="0.8" fill="#C45824" />
          <path d="M22.5 17 H25.5 V20.5 H29 V23.5 H25.5 V27 H22.5 V23.5 H19 V20.5 H22.5 Z" fill="#FAF6EE" stroke="#134E35" strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 19.5 C25.5 19.5 26.5 21 26 22.5 C25 24 24 24.5 24 24.5 C24 24.5 23 24 22 22.5 C21.5 21 22.5 19.5 24 19.5 Z" fill="#C45824" />
          <circle cx="24" cy="22" r="0.5" fill="#FFFFFF" />
          <path d="M37 9 L37 13 M35 11 L39 11" stroke="#C45824" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="9.5" cy="18" r="1.1" fill="#C45824" />
          <circle cx="39" cy="26" r="1" fill="#2D7A58" />
        </svg>
      );

    case 'sueroterapia-homeopatica':
    case 'water_drop':
      return (
        /* SERVICE B: SUEROTERAPIA HOMEOPÁTICA */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M19 13 C19 11.5 20.5 11 24 11 C27.5 11 29 11.5 29 13 L31 16 C32.5 18 33 21 33 26 C33 33 30 36 24 36 C18 36 15 33 15 26 C15 21 15.5 18 17 16 Z" fill="#134E35" opacity="0.12" />
          <path d="M15.5 24 C18 22.5 22 26 26 23 C29 21.5 31.5 23 32.5 24 C32.8 26.5 32.5 31 30.5 33.5 C28.5 35.5 26.5 36 24 36 C21.5 36 19.5 35.5 17.5 33.5 C15.5 31 15.2 26.5 15.5 24 Z" fill="#2D7A58" opacity="0.18" />
          <path d="M21 9 C21 7.5 22.5 6.5 24 6.5 C25.5 6.5 27 7.5 27 9 L27 11 L21 11 Z" stroke="#134E35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="8.5" r="1" fill="#134E35" />
          <path d="M19 11 L29 11 M19 11 L16.5 16 C15 18.5 14.5 22 14.5 27 C14.5 34 18 37 24 37 C30 37 33.5 34 33.5 27 C33.5 22 33 18.5 31.5 16 L29 11" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="17.5" y1="20" x2="20" y2="20" stroke="#134E35" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="17" y1="24" x2="21" y2="24" stroke="#134E35" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="17.5" y1="28" x2="20" y2="28" stroke="#134E35" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M24 18 C27.5 18 29.5 21.5 28.5 26 C26.5 29 24 30.5 24 30.5 C24 30.5 21.5 29 19.5 26 C18.5 21.5 20.5 18 24 18 Z" fill="#FAF6EE" stroke="#2D7A58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 20.5 V28.5 M24 23 L26.5 21.5 M24 25.5 L21.5 24" stroke="#2D7A58" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="22" y="37" width="4" height="3" rx="1" fill="#134E35" />
          <path d="M24 40 C24 42 22 43 22 45" stroke="#134E35" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 30 C36 28 38.5 25 38.5 25 C38.5 25 41 28 41 30 C41 31.8 39.8 33 38.5 33 C37.2 33 36 31.8 36 30 Z" fill="#C45824" />
          <circle cx="37.8" cy="29.5" r="0.6" fill="#FFFFFF" />
          <path d="M37 13 L37 17 M35 15 L39 15" stroke="#C45824" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="11.5" cy="19.5" r="1" fill="#C45824" />
        </svg>
      );

    case 'terapia-respiratoria':
    case 'air':
      return (
        /* SERVICE C: NEBULIZACIONES & TERAPIAS RESPIRATORIAS */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M12 28 C12 20 18 16 27 16 C29 16 31 17 32 18 L32 38 C31 39 29 40 27 40 C18 40 12 36 12 28 Z" fill="#134E35" opacity="0.12" />
          <path d="M22 23 C18 21 14 25 10 24 C8.5 23.5 7 21.5 6 22 M24 28 C19 27 15 31 9 30 C7 29.5 5.5 31 4 30.5 M22 33 C18 35 13 32 8 36" stroke="#2D7A58" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="0.5 3.5" />
          <path d="M22 17 C16 19 12 23 12 28 C12 33 16 37 22 39" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 22 C11.5 24 11.5 32 13.5 34" stroke="#C45824" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
          <path d="M22 17 L29 17 C31 17 32 18.5 32 20.5 L32 35.5 C32 37.5 31 39 29 39 L22 39" stroke="#134E35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="27" cy="28" r="3.5" fill="#FAF6EE" stroke="#2D7A58" strokeWidth="1.8" />
          <circle cx="27" cy="28" r="1.2" fill="#134E35" />
          <rect x="32" y="24" width="7" height="8" rx="2.5" fill="#FAF6EE" stroke="#134E35" strokeWidth="2" strokeLinejoin="round" />
          <path d="M33 28.5 C34.5 29 36.5 28 38 28.5 V30.5 C38 31.5 37 32 35.5 32 C34 32 33 31.5 33 30.5 Z" fill="#C45824" />
          <path d="M39 28 H43" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="41" y1="26" x2="41" y2="30" stroke="#134E35" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M19 12 C18 10 19.5 7.5 22 7.5 C23 6 25.5 6 26.5 7.5 C28 7 30 8.5 29.5 10.5 C31 11.5 30.5 14 28.5 14 C27 14 20 14 19 12 Z" fill="#FAF6EE" stroke="#2D7A58" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M23.5 10 C25.5 8.5 27 10 27 10" stroke="#2D7A58" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="9" cy="18" r="1" fill="#C45824" />
          <circle cx="6.5" cy="27" r="1.3" fill="#2D7A58" />
          <circle cx="16" cy="28" r="0.9" fill="#134E35" />
          <path d="M38 12 L38 16 M36 14 L40 14" stroke="#C45824" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'medicina-poblacional':
    case 'groups':
      return (
        /* SERVICE D: MEDICINA POBLACIONAL AVIAR (PARVADA DE GALLINITAS) */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <path d="M12 17 C12 14 14.5 12 17.5 12.5 C19.5 13 21 15 21 18 C21 21 23 23 25 26 C26 28 25 32 20 33 C15 33 11 31 9.5 28 C8.5 25 10 21 12 17 Z" fill="#134E35" opacity="0.12" />
          <path d="M33 19 C33 16 35.5 14 38 15 C39.5 15.5 41 17 41 20 C41 23 42 25 43.5 27 C44.5 29 43.5 33 39 34 C35 34 31 31 31 27 C31 23 32 21 33 19 Z" fill="#134E35" opacity="0.12" />
          <path d="M20 20 C20 16 23.5 14 27 15 C29.5 16 31 18 31 21 C31 24.5 33.5 26.5 35.5 30 C37 33 35.5 38 29.5 39 C23 40 17 38 15.5 34 C14 30 16.5 25 20 20 Z" fill="#134E35" opacity="0.12" />
          <path d="M14 12 C13.5 10.5 15 9 16 10 C16.8 8.8 18.5 9 19 10.2 C20 9.5 21 10.8 20.5 12.5" fill="#C45824" stroke="#C45824" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 12.5 C12.5 14.5 12 17.5 12 21 C10 22 8 25 8.5 28 C9.5 31.5 14 33 20 32.5" stroke="#2D7A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15.5 L8 17.5 L12 19" fill="#EBF4EE" stroke="#2D7A58" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="20.5" r="1.3" fill="#C45824" />
          <circle cx="15.5" cy="15.5" r="1.1" fill="#134E35" />
          <path d="M34.5 14 C34 12.5 35.5 11 36.5 12 C37.3 10.8 39 11 39.5 12.2 C40.5 11.5 41.5 12.8 41 14.5" fill="#C45824" stroke="#C45824" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34.5 14.5 C33.5 16 33 18.5 33 21 C33 25 35 28 39.5 28 C42.5 28 44 26 43 23 C42.5 20 40 18.5 40 15" stroke="#2D7A58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 16.5 L43.5 18 L40 19.5" fill="#EBF4EE" stroke="#2D7A58" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="37.5" cy="16.5" r="1.1" fill="#134E35" />
          <circle cx="40" cy="21" r="1.2" fill="#C45824" />
          <path d="M21 14 C20 12 21.5 10 23.5 11 C24.5 9.5 26.5 9.5 27.5 11 C29 10 30.5 11.5 30 14" fill="#C45824" stroke="#C45824" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 14.5 C19 17 18 20.5 18 25 C15.5 26.5 13.5 29.5 14 33 C15 37 20 38.5 28 38 C33.5 37.5 35.5 34 35 30 C34 26.5 31 24.5 30.5 22 C30 18 30 15 29.5 14.5" stroke="#134E35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 18 L13 20 L18 22" fill="#FAF6EE" stroke="#134E35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22 C16.8 22.5 16 24 17.2 25.2 C18.5 26 19.8 24.8 19.2 23" fill="#C45824" stroke="#C45824" strokeWidth="1.6" stroke-linecap="round" strokeLinejoin="round" />
          <circle cx="23" cy="18" r="1.5" fill="#134E35" />
          <circle cx="22.7" cy="17.6" r="0.4" fill="#FFFFFF" />
          <path d="M23 26 C26 26 30 27 31 30.5 C31.8 33 29.5 35 25 35 C22 35 20.8 33.5 21.5 30.5 C22.2 28.5 22.5 26 23 26 Z" fill="#FAF6EE" stroke="#2D7A58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.5 29.5 C26 29.5 28 30.5 28 32.5" stroke="#2D7A58" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M34 28 C36.5 26.5 37.5 24 37 22 M35 30.5 C38 29.5 38.5 27 38 25" stroke="#134E35" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 38.5 L21 42 M20 42 L22.5 42 M26.5 38.5 L26.5 42 M25.5 42 L28 42" stroke="#134E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41 8.5 V12.5 M39 10.5 H43" stroke="#C45824" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="6.5" cy="14" r="1.1" fill="#C45824" />
          <circle cx="43" cy="35" r="1.1" fill="#2D7A58" />
        </svg>
      );

    case 'diagnostico':
    case 'toma-muestras':
    case 'science':
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" aria-label={ariaLabel}>
          <rect width="48" height="48" rx="12" fill="#EBF4EE" />
          <rect x="18" y="14" width="12" height="22" rx="6" fill="#134E35" opacity="0.12" />
          <rect x="18" y="14" width="12" height="22" rx="6" fill="none" stroke="#134E35" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="14" x2="32" y2="14" stroke="#134E35" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M19.5 27C21 28 27 26 28.5 27V30C28.5 33.3 25.8 35 24 35C22.2 35 19.5 33.3 19.5 30V27Z" fill="#C45824" opacity="0.25" />
          <path d="M19.5 27C21 28 27 26 28.5 27" stroke="#C45824" strokeWidth="2" strokeLinecap="round" />
          <circle cx="23" cy="22" r="1.5" fill="#134E35" />
          <circle cx="26" cy="19" r="1" fill="#2D7A58" />
          <path d="M35 18L37 20M37 18L35 20" stroke="#C45824" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};
