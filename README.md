# Nuxt 4 + PrimeVue 4 Starter

Build your VUE.js App with Nuxt 4. First Class PrimeVUE support. Validation by Formkit.
Module by [FormKit-PrimeVue-Nuxt](https://github.com/sfxcode/formkit-primevue-nuxt).
Based on PrimeVue Styled Theme with Aura Preset.

[![CI](https://github.com/sfxcode/nuxt3-primevue-starter/actions/workflows/main.yml/badge.svg)](https://github.com/sfxcode/nuxt3-primevue-starter/actions/workflows/main.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/436604a1-fe0c-4b76-aeae-75744104d16b/deploy-status)](https://app.netlify.com/sites/nuxt3-primevue-starter/deploys)

THX to [antfu / Vitesse Nuxt3](https://github.com/antfu/vitesse-nuxt3) for starter code

## Features

- [Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- [PrimeVue](https://primevue.org/) 4.4.x with Aura Theme
- [Formkit-PrimeVue](https://formkit-primevue.netlify.app/) PrimeVue Formkit Integration
- [Vite](https://vitejs.dev/) - Instant HMR
- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/antfu/unocss)
- [State Management via Pinia](https://pinia.esm.dev)
- [TipTap](https://tiptap.dev) - Headless Editor
- [Vitest](https://vitest.dev/) - Blazing Fast Unit Test Framework ([Getting started](https://vitest.dev/guide))
- [Compodium](https://github.com/romhml/compodium) - A plug and play component playground for Vue and Nuxt. ([Getting started](https://compodium.dev/getting-started/installation))

## Nuxt Modules (included in formkit-primevue-nuxt)

- [FormKit-PrimeVue-Nuxt](https://github.com/sfxcode/formkit-primevue-nuxt) - FormKit PrimeVue Nuxt Module
- [PrimeVue-Nuxt](https://primevue.org/nuxt/) PrimeVue UI Framework
- [FormKit-Nuxt](https://formkit.com/) - Form Handling
- [I18n-Nuxt](https://v8.i18n.nuxtjs.org) - Integration with [Vue I18n](https://vue-i18n.intlify.dev/)

## Nuxt Modules (additional)

- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.
- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- [Content](https://content.nuxtjs.org) - parses .md, .yml, .csv and .json files
- [Images](https://nuxt.com/modules/images) - Optimised images for Nuxt
- [Fonts](https://nuxt.com/modules/fonts) - Plug-and-play custom web font optimization and configuration for Nuxt apps
- [nuxt-test-utils](https://github.com/nuxt/test-utils) - Support for e2e and unit testing ([Getting started](https://nuxt.com/docs/getting-started/testing))

## Module Configurations

### FormKit PrimeVue Nuxt

Module options for FormKit PrimeVue Nuxt.
Below are the default values, if they fit your needs, you don't need to add them to your nuxt.config.ts.

```typescript
  formkitPrimevue: {
  includePrimeIcons: true,
    includeStyles: true,
    installFormKit: true,
    installI18N: true,
},
```

### Nuxt PrimeVue configuration

```typescript
  primevue: {
    autoImport: true,
  },
  options: {
    theme: {
      preset: Aura,
        options: {
        darkModeSelector: '.dark',
      },
    },
    ripple: true,
  },
},
```

## PrimeVue 3

Nuxt PrimeVue 3 under the [prime3](https://github.com/sfxcode/nuxt3-primevue-starter/tree/prime3) branch of this project

[Starter App on Netlify](https://vite-primevue-starter.netlify.app/)

## Project setup and usage

Install node:

**Latest node LTS version required (20)**
Use node manager like **nvm** to install.

Install pnpm:
[https://pnpm.io/installation](https://pnpm.io/installation)

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Vitest test runner:

```
pnpm test:unit
```

Build:

```
pnpm build
```

Start Production build:

```
pnpm start
```

## Tools

I use IntelliJ with VUE.js plugin.

## Supporters

JetBrains is supporting this open source project with:

[![Intellij IDEA](https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA.svg?_gl=1*186j7fd*_gcl_au*MjEwMzAyNDUzNi4xNzIwMTE5MTc0*_ga*MTg4NjQzMDA5MC4xNzIwMTE5MTc0*_ga_9J976DJZ68*MTcyMDExOTE3NC4xLjAuMTcyMDExOTE3OS41NS4wLjA.)](http://www.jetbrains.com/idea/)

![](public/starter_4.png)
