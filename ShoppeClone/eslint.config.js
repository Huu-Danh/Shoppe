import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import { globalIgnores } from 'eslint/config'

import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'

export default tseslint.config([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      eslint.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'warn'
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect React version
      }
    }
  }
])
