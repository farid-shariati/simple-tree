import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function ThemeConfig({ children }: PropsWithChildren) {
  const lightTheme = createTheme({
    direction: 'ltr',
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: 'none',
            color: '#fff',
            ':hover': {
              boxShadow: 'none',
              background: '#119c36',
            },
          },
          sizeLarge: {
            borderRadius: '16px',
          },
          sizeMedium: {
            height: '32px',
            borderRadius: '12px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& .MuiInputLabel-root': {
                color: 'red',
              },
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            fontWeight: 400,
            fontSize: '14px',
            '& input': {
              color: '#2a2a2a',
            },
            fieldset: {
              border: '2px solid',
              borderColor: '#92b69d',
            },
          },
        },
      },
    },
    palette: {
      background: {
        default: '#d0f0c0',
      },
      mode: 'light',
      primary: {
        main: '#0b7b29',
        50: '#9ce3af',
      },
      secondary: {
        main: '#2a2a2a',
        50: '#d7d6d6',
        100: '#969798',
        200: '#646464',
        300: '#565656  ',
      },
      success: {
        main: '#1be264',
      },
      warning: {
        main: '#efc108',
      },
      error: {
        main: '#f21e1e',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
      },
    },
  })

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
