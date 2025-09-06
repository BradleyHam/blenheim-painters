// Color Configuration - Centralized color scheme management
// Update these values to instantly change the entire site's color scheme

import { siteConfig } from './site-config'

export const colorConfig = {
  // ===========================================
  // BRAND COLOR SCHEMES
  // ===========================================
  
  // Default color scheme (Professional Navy & Gold)
  default: {
    // Primary brand colors
    primary: {
      DEFAULT: "#0F1A3A", // Navy blue - main brand color
      50: "#F0F2F9",
      100: "#E1E6F2", 
      200: "#C3CCEC",
      300: "#A5B3E5",
      400: "#6B88D6",
      500: "#4A68C4",
      600: "#344AA3",
      700: "#253682", 
      800: "#1A2761",
      900: "#0F1A3A",
      950: "#0B1529"
    },
    
    // Secondary/accent colors  
    secondary: {
      DEFAULT: "#E6A817", // Gold - accent color
      50: "#FEF9E7",
      100: "#FDF2CE",
      200: "#FAE49D",
      300: "#F7D66C",
      400: "#F4C83B",
      500: "#E6A817",
      600: "#C48C0F",
      700: "#A2700C",
      800: "#7F5409",
      900: "#5D3806",
      950: "#3A2404"
    },

    // Neutral colors
    neutral: {
      DEFAULT: "#64748B", // Slate gray
      50: "#F8FAFC",
      100: "#F1F5F9", 
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
      950: "#020617"
    },

    // Semantic colors
    success: {
      DEFAULT: "#10B981",
      light: "#34D399",
      dark: "#059669"
    },
    
    warning: {
      DEFAULT: "#F59E0B", 
      light: "#FBD65D",
      dark: "#D97706"
    },
    
    error: {
      DEFAULT: "#EF4444",
      light: "#F87171", 
      dark: "#DC2626"
    }
  },

  // Alternative color schemes (for different brands/locations)
  vibrant: {
    primary: {
      DEFAULT: "#1E40AF", // Bright blue
      light: "#3B82F6",
      dark: "#1E3A8A"
    },
    secondary: {
      DEFAULT: "#F59E0B", // Orange
      light: "#FCD34D", 
      dark: "#D97706"
    },
    neutral: {
      DEFAULT: "#6B7280",
      light: "#9CA3AF",
      dark: "#374151"
    }
  },

  earth: {
    primary: {
      DEFAULT: "#92400E", // Brown
      light: "#B45309",
      dark: "#78350F"
    },
    secondary: {
      DEFAULT: "#059669", // Green
      light: "#10B981",
      dark: "#047857"
    },
    neutral: {
      DEFAULT: "#78716C",
      light: "#A8A29E", 
      dark: "#57534E"
    }
  }
}

// ===========================================
// ACTIVE THEME CONFIGURATION
// ===========================================

// Set the active color scheme here (default, vibrant, earth)
export const activeTheme = 'default'

// Get active colors
export const colors = colorConfig[activeTheme]

// ===========================================
// SEMANTIC COLOR MAPPINGS
// ===========================================

// Map semantic names to color values for easy component usage
export const semanticColors = {
  // Brand colors (most commonly used)
  navy: colors.primary.DEFAULT,
  'navy-light': colors.primary[400],
  'navy-dark': colors.primary[800],
  
  gold: colors.secondary.DEFAULT,
  'gold-light': colors.secondary[400],
  'gold-dark': colors.secondary[600],
  
  // Text colors
  'text-primary': colors.primary.DEFAULT,
  'text-secondary': colors.neutral[700],
  'text-muted': colors.neutral[500],
  'text-light': colors.neutral[400],
  darkText: colors.neutral[800], // Legacy naming
  
  // Background colors
  'bg-primary': colors.primary.DEFAULT,
  'bg-secondary': colors.secondary.DEFAULT,
  'bg-light': colors.neutral[50],
  'bg-muted': colors.neutral[100],
  'light-bg': colors.neutral[50], // Fix for undefined color
  
  // Interactive states
  'hover-primary': colors.primary[700],
  'hover-secondary': colors.secondary[600],
  'focus-ring': colors.primary[400],
  
  // Status colors
  success: colors.success.DEFAULT,
  warning: colors.warning.DEFAULT,
  error: colors.error.DEFAULT
}

// ===========================================
// TAILWIND COLOR OBJECT
// ===========================================

// Generate Tailwind-compatible color object
export const tailwindColors = {
  // Brand colors
  navy: {
    DEFAULT: colors.primary.DEFAULT,
    50: colors.primary[50],
    100: colors.primary[100],
    200: colors.primary[200], 
    300: colors.primary[300],
    400: colors.primary[400],
    500: colors.primary[500],
    600: colors.primary[600],
    700: colors.primary[700],
    800: colors.primary[800],
    900: colors.primary[900],
    950: colors.primary[950],
    light: colors.primary[400],
    dark: colors.primary[800]
  },
  
  gold: {
    DEFAULT: colors.secondary.DEFAULT,
    50: colors.secondary[50],
    100: colors.secondary[100],
    200: colors.secondary[200],
    300: colors.secondary[300], 
    400: colors.secondary[400],
    500: colors.secondary[500],
    600: colors.secondary[600],
    700: colors.secondary[700],
    800: colors.secondary[800],
    900: colors.secondary[900],
    950: colors.secondary[950],
    light: colors.secondary[400],
    dark: colors.secondary[600]
  },

  // Semantic colors for component usage
  darkText: colors.neutral[800],
  'light-bg': colors.neutral[50],
  
  // Status colors  
  success: colors.success,
  warning: colors.warning,
  error: colors.error
}

// ===========================================
// CSS VARIABLES GENERATION
// ===========================================

// Generate CSS custom properties for dynamic theming
export function generateCSSVariables(theme = activeTheme) {
  const themeColors = colorConfig[theme]
  
  return {
    // Primary colors
    '--color-primary': themeColors.primary.DEFAULT,
    '--color-primary-50': themeColors.primary[50],
    '--color-primary-100': themeColors.primary[100],
    '--color-primary-200': themeColors.primary[200],
    '--color-primary-300': themeColors.primary[300], 
    '--color-primary-400': themeColors.primary[400],
    '--color-primary-500': themeColors.primary[500],
    '--color-primary-600': themeColors.primary[600],
    '--color-primary-700': themeColors.primary[700],
    '--color-primary-800': themeColors.primary[800],
    '--color-primary-900': themeColors.primary[900],
    
    // Secondary colors
    '--color-secondary': themeColors.secondary.DEFAULT,
    '--color-secondary-50': themeColors.secondary[50],
    '--color-secondary-100': themeColors.secondary[100],
    '--color-secondary-200': themeColors.secondary[200],
    '--color-secondary-300': themeColors.secondary[300],
    '--color-secondary-400': themeColors.secondary[400],
    '--color-secondary-500': themeColors.secondary[500],
    '--color-secondary-600': themeColors.secondary[600],
    '--color-secondary-700': themeColors.secondary[700],
    '--color-secondary-800': themeColors.secondary[800],
    '--color-secondary-900': themeColors.secondary[900],

    // Semantic mappings
    '--color-navy': themeColors.primary.DEFAULT,
    '--color-gold': themeColors.secondary.DEFAULT,
    '--color-text-primary': themeColors.primary.DEFAULT,
    '--color-text-secondary': themeColors.neutral[700],
    '--color-bg-light': themeColors.neutral[50]
  }
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Get a color value by semantic name
 * @param {string} colorName - Semantic color name (e.g., 'navy', 'gold')
 * @returns {string} - Hex color value
 */
export function getColor(colorName) {
  return semanticColors[colorName] || colorName
}

/**
 * Generate color variations (lighter/darker) from base color
 * @param {string} baseColor - Base color hex value
 * @param {number} steps - Number of variations to generate
 * @returns {object} - Object with light/dark variations
 */
export function generateColorVariations(baseColor, steps = 5) {
  // This would implement color manipulation logic
  // For now, return the base color structure
  return {
    50: baseColor,
    100: baseColor,
    200: baseColor,
    300: baseColor,
    400: baseColor,
    500: baseColor, // Base color
    600: baseColor,
    700: baseColor,
    800: baseColor,
    900: baseColor
  }
}

/**
 * Get all color schemes for theme switching
 * @returns {Array} - Array of available color scheme names
 */
export function getAvailableThemes() {
  return Object.keys(colorConfig)
}

/**
 * Switch active theme and regenerate colors
 * @param {string} themeName - Theme to switch to
 * @returns {object} - New active colors
 */
export function switchTheme(themeName) {
  if (!colorConfig[themeName]) {
    console.warn(`Theme '${themeName}' not found. Available themes:`, getAvailableThemes())
    return colors
  }
  
  // In a real implementation, this would update the active theme
  return colorConfig[themeName]
}

/**
 * Get color recommendations for different business types
 * @param {string} businessType - Type of business (painting, construction, etc.)
 * @returns {object} - Recommended color scheme
 */
export function getBusinessColorRecommendations(businessType = 'painting') {
  const recommendations = {
    painting: {
      primary: '#0F1A3A', // Professional navy
      secondary: '#E6A817', // Trustworthy gold
      description: 'Professional and trustworthy - ideal for painting contractors'
    },
    construction: {
      primary: '#92400E', // Construction brown
      secondary: '#059669', // Safety green  
      description: 'Strong and reliable - perfect for construction companies'
    },
    landscaping: {
      primary: '#059669', // Natural green
      secondary: '#D97706', // Earth orange
      description: 'Natural and organic - great for landscaping services'
    }
  }
  
  return recommendations[businessType] || recommendations.painting
}

export default {
  colorConfig,
  colors,
  semanticColors, 
  tailwindColors,
  generateCSSVariables,
  getColor,
  getAvailableThemes,
  switchTheme,
  getBusinessColorRecommendations
}