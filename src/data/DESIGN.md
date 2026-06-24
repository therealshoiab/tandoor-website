---
name: Heritage Contemporary
colors:
  surface: '#fff8ef'
  surface-dim: '#e1d9cb'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e4'
  surface-container: '#f5edde'
  surface-container-high: '#efe7d9'
  surface-container-highest: '#e9e2d3'
  on-surface: '#1e1b13'
  on-surface-variant: '#554240'
  inverse-surface: '#343026'
  inverse-on-surface: '#f8f0e1'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9d4139'
  primary: '#210000'
  on-primary: '#ffffff'
  primary-container: '#4a0404'
  on-primary-container: '#d26a5f'
  inverse-primary: '#ffb4aa'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#7e2b23'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fff8ef'
  on-background: '#1e1b13'
  surface-variant: '#e9e2d3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style

This design system balances the opulence of Kashmiri heritage with the precision of modern fine-dining interfaces. The brand personality is **sophisticated, atmospheric, and artisanal**, aiming to evoke the warmth of a traditional tandoor oven while maintaining the streamlined efficiency of a premium digital experience. 

The aesthetic leverages **Modern Minimalism with Tactile Accents**. It uses expansive whitespace (rendered in cream tones) to allow high-resolution food photography to serve as the primary visual driver. Subtle ornate patterns—inspired by Kashmiri wood carvings—are used sparingly as background textures or dividers to provide cultural context without cluttering the UI. The emotional response should be one of trust, culinary excellence, and sensory invitation.

## Colors

The palette is rooted in the deep, earthy tones of spices and traditional architecture. 
- **Primary (Deep Maroon):** Used for primary actions, branding, and high-level structural elements. It represents the intensity of the tandoor.
- **Secondary (Warm Saffron):** Used for highlights, active states, and secondary buttons. It adds warmth and appetite appeal.
- **Accent (Gold):** Specifically reserved for decorative borders, iconography, and premium labels to denote high-end service.
- **Background (Cream Gold):** Replaces pure white to reduce ocular strain and provide a "paper-like" editorial feel, reminiscent of a physical menu.
- **Text (Deep Charcoal):** Ensures maximum legibility for descriptions and nutritional info.

## Typography

The typographic scale creates a rhythmic contrast between the expressive, high-contrast serifs of the headings and the utilitarian clarity of the body text.
- **Headings:** Utilize *Playfair Display* for a literary, editorial feel. Large titles should use "Optical Sizing" where available to maintain elegance.
- **Body:** *Inter* provides a neutral, highly readable counterpoint, essential for menu descriptions and dense booking forms.
- **Hierarchy:** Use the `label-caps` style for category headers (e.g., "APPETIZERS", "SIDES") to create a structured, organized menu flow.

## Layout & Spacing

The layout follows a **fluid grid system** with generous vertical rhythm to emphasize a "slow-dining" digital experience.
- **Grid:** A 12-column layout for desktop; 4-column for mobile. 
- **Margins:** Wider-than-average margins are used on desktop to center the content and create a sense of exclusivity.
- **Reflow:** On mobile, complex menu items transition from a multi-column card view to a single-column stack, ensuring that food photography remains large and appetizing.
- **Safe Areas:** Maintain a minimum 24px "buffer" around gold-foiled borders to prevent visual crowding.

## Elevation & Depth

This system avoids heavy drop shadows in favor of **Tonal Layering** and **Soft Ambient Occlusion**.
- **Surface Depth:** Elements like menu cards use a very subtle 1px border in a slightly darker cream or gold, rather than a shadow, to feel like physical cardstock.
- **Elevated States:** Interactive elements (e.g., "Book a Table" button) utilize a soft, diffused shadow (`rgba(74, 4, 4, 0.15)`) to suggest they are lifted off the page.
- **Photography:** Images should have a slight inner-glow or soft-corner treatment to blend naturally with the Cream Gold background.

## Shapes

The shape language is **Soft (0.25rem - 0.75rem)**. This avoids the "tech-heavy" feel of fully rounded pill shapes while moving away from the aggressive sharpness of pure brutalism.
- **Cards:** Use `rounded-lg` (0.5rem) for menu and gallery items to provide a modern, approachable feel.
- **Inputs:** Maintain a consistent `rounded-sm` (0.25rem) for form fields to signify precision and formality.
- **Patterns:** Ornate decorative elements should follow geometric repetitions (mandala-inspired) but remain contained within these soft-cornered containers.

## Components

- **Buttons:** Primary buttons are Deep Maroon with Gold text; secondary buttons are Saffron with White text. Use a slight scale-up transition on hover.
- **Menu Cards:** Feature a high-quality circular thumbnail of the dish on the left, with the title in Playfair Display and a price in Saffron. Use a subtle Gold divider between items.
- **Booking Forms:** Minimalist input fields with Deep Charcoal borders. The "Reserve" button should be full-width on mobile to maximize conversion.
- **Masonry Gallery:** Used for the "Vibe & Atmosphere" section. Images should have varying aspect ratios with consistent 16px gaps, using a "Zoom-on-Hover" effect.
- **Ornate Dividers:** A custom component consisting of a horizontal line with a small Gold geometric diamond or floral motif in the center, used to separate major sections like "Our Story" and "The Menu."
- **Chips:** Used for dietary labels (e.g., Vegan, Spicy). These should be low-contrast (Cream Gold background with Deep Maroon text) to avoid distracting from the food names.