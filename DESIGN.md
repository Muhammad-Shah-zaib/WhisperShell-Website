---
name: WhisperShell
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cbc4d0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#948e99'
  outline-variant: '#49454f'
  surface-tint: '#d2bcfb'
  primary: '#d2bcfb'
  on-primary: '#38265b'
  primary-container: '#b19cd9'
  on-primary-container: '#443267'
  inverse-primary: '#67558c'
  secondary: '#c4c3e9'
  on-secondary: '#2d2d4c'
  secondary-container: '#464666'
  on-secondary-container: '#b6b5db'
  tertiary: '#d3c974'
  on-tertiary: '#363100'
  tertiary-container: '#b1a857'
  on-tertiary-container: '#423c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d2bcfb'
  on-primary-fixed: '#220f44'
  on-primary-fixed-variant: '#4f3d73'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c4c3e9'
  on-secondary-fixed: '#181835'
  on-secondary-fixed-variant: '#444463'
  tertiary-fixed: '#efe58d'
  tertiary-fixed-dim: '#d3c974'
  on-tertiary-fixed: '#1f1c00'
  on-tertiary-fixed-variant: '#4e4800'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: Roboto Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  button:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system for this application focuses on high-performance utility and deep focus, specifically tailored for the Fedora/Linux ecosystem. The brand personality is efficient, secure, and modern, reflecting the cutting-edge nature of Wayland-based voice processing. 

The aesthetic is **Dark-Mode Minimalism** with **Material UI** influences. It prioritizes clarity through high-contrast typography and a restricted color palette, ensuring that the interface recedes into the background to keep the user's focus on their spoken and transcribed content. Visual flourishes are limited to subtle lavender accents and smooth, purposeful transitions that feel native to a modern GNOME/Workstation environment.

## Technologies

The following core technologies will be utilized for the application:
- **Vue.js 3**: The main frontend framework, structured using the Composition API.
- **Vite**: The fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling based on the custom design system.
- **Iconify**: For universal icons. We will **exclusively use the Material Design Icons (`mdi`)** collection to maintain visual consistency and align with the Material UI influences.

## Architecture & File Structure

This website will be built with **Vue.js** and **Tailwind CSS**, designed as a static frontend. To maintain scalability and separation of concerns, the project follows a feature-based modular file structure.

### Modular Folder Structure

The `src/` directory is split into two primary areas: `core` and `features` (modules).

```text
src/
├── core/                  # Core application logic and shared resources
│   ├── components/        # Reusable UI components (Buttons, Inputs, Cards)
│   ├── composables/       # Global Vue composables (e.g., useTheme, useWindowSize)
│   ├── layouts/           # Global layouts (e.g., MainLayout, DocsLayout)
│   ├── router/            # Vue Router configuration
│   └── styles/            # Global CSS (Tailwind entry point, CSS Variables)
│       └── global.css     # CSS Variables and Tailwind imports
└── features/              # Feature modules (Domain-driven design)
    ├── landing/           # Landing page feature module
    │   ├── components/    # Landing-specific components (Hero, FeaturesList)
    │   ├── composables/   
    │   └── views/         # Landing page views
    └── downloads/         # Downloads feature module
        ├── components/    # OS selectors, Version history
        └── views/         

docs/                      # Developer Documentation (Internal)
├── components/            # Documentation for individual components
│   └── [ComponentName].md # Props, states, and usage details
└── pages/                 # Documentation for views and pages
    └── [PageName].md      # Layout details and components used
```

### Developer Documentation Strategy

This project maintains **developer-facing documentation** to ensure that future contributors can easily understand and update the application structure. This is internal documentation meant for developers, not a public-facing feature.

- **Storage Structure**: Documentation is stored at the project root in the `docs/` folder.
  - `docs/components/`: Explains what each component is, its props, state, and usage examples.
  - `docs/pages/`: Details the structure of each view/page, outlining which components are used and what purpose the page serves.
- **Process**: Whenever a new component or page is created or significantly modified, a corresponding markdown file should be added or updated in the `docs/` folder to clearly describe its behavior and role within the system.

## Styling & Tailwind Integration

The application styling is powered by Tailwind CSS, enhanced with custom CSS variables generated from our color scheme.

### CSS Variables (`global.css`)
We will extract the custom lavender-dark theme colors into CSS custom properties in `src/core/styles/global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: #d2bcfb;
    --color-surface: #131313;
    --color-background: #131313;
    --color-on-background: #e5e2e1;
    --color-on-primary: #38265b;
    /* ...other color variables from the theme */
  }

  body {
    @apply bg-background text-on-background;
  }
}
```

### Tailwind Configuration (`tailwind.config.js`)
These variables will be mapped inside `tailwind.config.js` to allow native utility classes:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        background: 'var(--color-background)',
        // ...
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    }
  }
}
```

### Fonts Integration
The project requires three distinct Google Fonts:
1. **Poppins**: Used for main headings (`headline-xl`, `headline-lg`). Mapped as `font-heading`.
2. **Roboto**: Used for normal body text (`body-md`, `body-sm`). Mapped as `font-sans`.
3. **Roboto Mono**: Used for inline code components and labels. Mapped as `font-mono`.

## Colors
The palette is built on a "True Black" foundation to maximize contrast and efficiency on modern displays. 

- **Primary (Lavender):** Used exclusively for active states, primary actions, and brand-critical elements. It provides a soft yet distinct focal point against the dark background.
- **Background (Deep Black):** The base layer of the application, ensuring a seamless bezel-less feel.
- **Surface (Rich Charcoal):** A slightly lighter black used for elevated components like cards or menus to create depth without relying on heavy shadows.
- **Text:** High-contrast white for readability, with a desaturated lavender-grey for secondary metadata and inactive states.

## Typography
The typography system balances the bold, geometric nature of **Poppins** for headings with the utilitarian readability of **Roboto** for body text. 

- **Headlines:** Set in Extra Bold Poppins. These should be large and impactful, creating a clear entry point for each screen.
- **Body:** Roboto is used for all transcribed text and long-form reading, providing a neutral, highly legible experience.
- **Monospace Labels:** Used for technical metadata, shortcuts, and system status indicators (e.g., "SECURE CHANNEL - WAYLAND"), reinforcing the Linux-native toolset aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a heavy emphasis on generous "safe areas" around the transcription feed.

- **Grid:** A 12-column grid for desktop, collapsing to a single column for mobile or sidebar views.
- **Rhythm:** An 8px base unit governs all dimensions.
- **Focus Mode:** The design system supports a "Zen Mode" where margins expand to 15% on each side, centering the text and removing all peripheral UI elements to facilitate deep dictation.
- **Breakpoints:** 
  - Mobile: < 600px (16px margins)
  - Tablet: 600px - 1024px (24px margins)
  - Desktop: > 1024px (48px margins)

## Elevation & Depth
In this dark-themed system, depth is communicated through **Tonal Layering** rather than traditional shadows. 

1. **Level 0 (Background):** Pure #000000. Used for the main canvas.
2. **Level 1 (Surface):** #121212. Used for persistent sidebars or container elements.
3. **Level 2 (Interaction):** #1E1E2E. Used for hovered items or active input fields.
4. **Outlines:** Instead of shadows, use 1px solid borders in a low-opacity white (10% alpha) to define component boundaries. This maintains the "clean lines" aesthetic and performs better on high-DPI Wayland displays.

## Shapes
Following Material UI's modern evolution, the shape language uses **Soft** rounding. 

- **Standard Elements:** 0.25rem (4px) corner radius for buttons and input fields to maintain a professional, sharp look.
- **Cards/Modals:** 0.75rem (12px) for larger surfaces to create a distinct separation from the background.
- **Transcription Bubbles:** Should use the standard 0.5rem (8px) radius to feel approachable but structured.

## Components
- **Buttons:** Primary buttons use a solid Lavender (#B19CD9) fill with Black text. Secondary buttons use a ghost style with a 1px Lavender outline.
- **Transcription Feed:** Text appears in real-time. Use a pulsing Lavender dot for the "Listening" state. Finished sentences should have a subtle fade-in animation.
- **Chips:** Used for "Voice Model" or "Language" tags. These should be #1E1E2E with Lavender-Grey text and no border.
- **Input Fields:** Bottom-border only or very subtle 1px outline. When focused, the border transitions to Lavender.
- **Status Badges:** Specifically for Fedora/Wayland security indicators, use Roboto Mono in a small, capitalized badge format with a subtle 5% Lavender tint background.
- **The Waveform:** A minimal, single-line CSS waveform at the bottom of the screen that reacts to voice input, using the primary Lavender color.
