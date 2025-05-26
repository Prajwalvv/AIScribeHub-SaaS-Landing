# AIScribeHub Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Documentation](#component-documentation)
3. [Styling Guide](#styling-guide)
4. [Animation System](#animation-system)
5. [Theme System](#theme-system)
6. [Best Practices](#best-practices)

## Architecture Overview

### Project Structure

The project follows a modular architecture with clear separation of concerns:

```
src/
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utilities and helpers
└── public/            # Static assets
```

### Key Technologies

- **Next.js 13** - React framework with app directory
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component system
- **Framer Motion** - Animation library

## Component Documentation

### Hero Section

```typescript
// components/hero-section.tsx

interface UseCaseItem {
  icon: ReactNode;
  text: string;
}

interface FloatingStat {
  label: string;
  value: string;
}

export function HeroSection() {
  // Component implementation
}
```

Key features:
- Responsive design
- Animated elements
- Parallax scrolling effects
- Interactive CTA buttons

### Features Section

```typescript
// components/features-section.tsx

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function FeaturesSection() {
  // Component implementation
}
```

Features:
- Grid layout
- Hover animations
- Gradient backgrounds
- Staggered animations

### Pricing Section

```typescript
// components/pricing-section.tsx

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingSection() {
  // Component implementation
}
```

Features:
- Monthly/Annual toggle
- Popular plan highlight
- Responsive pricing cards
- Interactive elements

## Styling Guide

### Color System

```css
:root {
  --primary: 271 76% 53%;
  --secondary: 180 100% 50%;
  --accent: 328 91% 47%;
  /* ... other colors */
}
```

### Typography

- **Headings:** Space Grotesk
- **Body:** Inter
- **Font Sizes:** Follow Tailwind's scale

### Custom Utilities

```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r 
    from-primary via-secondary to-accent;
}

.grain {
  /* Noise texture implementation */
}
```

## Animation System

### Framer Motion Variants

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
```

### Animation Best Practices

1. Use `whileInView` for scroll-based animations
2. Add `viewport={{ once: true }}` to prevent repeated animations
3. Keep animations subtle and purposeful
4. Consider reduced motion preferences

## Theme System

### Dark Mode Implementation

```typescript
// components/theme-provider.tsx

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### Theme Toggle

```typescript
// components/mode-toggle.tsx

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  // Implementation
}
```

## Best Practices

### Performance

1. **Image Optimization**
   - Use `next/image` for all images
   - Implement lazy loading
   - Optimize image sizes

2. **Code Splitting**
   - Use dynamic imports for large components
   - Implement route-based code splitting

3. **State Management**
   - Use React hooks effectively
   - Keep state close to where it's used
   - Implement proper prop drilling alternatives

### Accessibility

1. **Semantic HTML**
   - Use proper heading hierarchy
   - Implement ARIA labels
   - Ensure keyboard navigation

2. **Color Contrast**
   - Maintain WCAG 2.1 compliance
   - Test with color blindness filters

3. **Responsive Design**
   - Mobile-first approach
   - Test across different devices
   - Implement proper touch targets

### Security

1. **Input Validation**
   - Sanitize user inputs
   - Implement proper form validation
   - Use CSRF tokens

2. **API Security**
   - Implement rate limiting
   - Use proper authentication
   - Secure API endpoints

### Testing

1. **Unit Tests**
   - Test component logic
   - Implement snapshot testing
   - Test utility functions

2. **Integration Tests**
   - Test component interactions
   - Verify page transitions
   - Test form submissions

3. **E2E Tests**
   - Test critical user flows
   - Verify responsive behavior
   - Test across browsers