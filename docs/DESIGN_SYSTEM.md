# Design System - Villardonnel

This document defines the visual language for the Villardonnel website. The goal is a "fresh and clean" identity that feels elegant and authoritative for a municipality.

## 1. Color Palette

### Brand Colors (Core Identity)
- **Primary**: `222.2 47.4% 11.2%` (Deep Navy)
- **Secondary**: `210 40% 96.1%` (Soft Grey-Blue)
- **Accent**: `43 79% 60%` (Warm Gold/Ochre) - *Used for call-to-actions and highlights.*
- **Muted**: `215.26 16.86% 17%`
- **Success**: `142.1 70.6% 45.3%`
- **Warning**: `38 92.2% 50.7%`
- **Destructive**: `0 84.2% 67.5%`

### Semantic Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `var(--background)` | Main page background |
| `foreground` | `var(--foreground)` | Main text color |
| `primary` | `var(--primary)` | Primary buttons, active states |
| `secondary` | `var(--secondary)` | Secondary buttons, secondary text |
| `muted` | `var(--muted)` | Less important text, placeholders |
| `accent` | `var(--accent)` | Call to actions, interactive highlights |
| `border` | `var(--border)` | Dividers, input borders |
| `ring` | `var(--ring)` | Focus states |

## 2. Typography

### Font Families
- **Heading (Caractérielle)**: *Playfair Display* (Serif) - Used for titles, headers, and hero sections to evoke tradition and elegance.
- **Body**: *Inter* (Sans-serif) - Used for readability in body text, navigation, and buttons.

### Scales
- **Display**: 48px - 72px (Hero titles)
- **Heading**: 32px - 48px (Section headers)
- **Body Large**: 18px (Subtitles, lead text)
- **Body**: 16px (Standard content)
- **Small**: 14px (Secondary info)
- **Caption**: 12px (Metadata, footer links)

## 3. Spacing & Layout
All spacing follows a 4px or 8px base grid.
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 40px
- `3xl`: 64px
- `4xl`: 80px
- `5xl`: 128px

## 5. Component States

To ensure consistent feedback, every interactive component must display the following states:

- **Default**: The base appearance.
- **Hover**: A subtle change in background color or opacity (typically 10% change).
- **Active**: A visual "pressed" state (scale down or darker background).
- **Focus**: A clear `ring` outline for keyboard navigation (WCAG 2.2 AA).
- **Disabled**: Reduced opacity (0.5) and `pointer-events: none`.
- **Loading**: A skeleton state or a spinner for long-running operations.
- **Empty**: A dedicated "No data" state with helpful instructions or an illustration.
- **Error**: Red border/text and an associated error message.
