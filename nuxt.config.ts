import Aura from '@primeuix/themes/aura'
import pkg from './package.json'

export const wrappedPrimeInputs: string[] = ['AutoComplete', 'CascadeSelect', 'Checkbox', 'Chip', 'ColorPicker', 'DatePicker', 'InputMask', 'InputNumber', 'InputOtp', 'InputText', 'Knob', 'Listbox', 'MultiSelect', 'Password', 'RadioButton', 'Rating', 'Select', 'SelectButton', 'Slider', 'Textarea', 'ToggleButton', 'ToggleSwitch', 'TreeSelect']

export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@sfxcode/formkit-primevue-nuxt',
    '@unocss/nuxt',
    '@pinia/colada-nuxt',
    '@compodium/nuxt',
  ],

  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      // eslint-disable-next-line node/prefer-global/process
      APP_MODE: process.env?.NODE_ENV,
    },
  },

  build: {
    transpile: ['nuxt', 'primevue', '@sfxcode/formkit-primevue'],
  },

  sourcemap: {
    client: false,
    server: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    appManifest: false,
  },

  compatibilityDate: '2024-07-04',

  debug: false,

  compodium: {
    /* List of glob patterns to exclude components. */
    ignore: ['**/AppSidebar.vue'],
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  formkitPrimevue: {
    includePrimeIcons: true,
    includeStyles: true,
    installFormKit: true,
    installI18N: true,
  },

  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' },
    ],
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
      ripple: true,
    },
    components: {
      exclude: [...wrappedPrimeInputs, 'Button', 'Form', 'FormField', 'Chart', 'Editor'],
    },

  },

})
