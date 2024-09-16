import { TextField, useTheme, TextFieldProps, SxProps } from '@mui/material'
import { ReactNode } from 'react'

type TCustomTextField = TextFieldProps & {
  startIcon?: ReactNode
  endIcon?: ReactNode
  inputSx?: SxProps
}

export const CustomTextField = (props: TCustomTextField): JSX.Element => {
  const {
    label,
    color = 'secondary',
    type = 'text',
    inputSx,
    sx,
    placeholder,
    multiline,
    ...rest
  } = props

  const theme = useTheme()

  return (
    <TextField
      label={label}
      color={color}
      InputLabelProps={{
        sx: {
          transform: 'translate(14px,12px)',
          '&.Mui-focused,&.MuiFormLabel-filled': {
            transform: 'translate(14px, -9px) scale(0.75)',
          },
          mb: 20,
        },
      }}
      type={type}
      placeholder={placeholder}
      sx={{
        ...sx,
        height: '32px',
      }}
      multiline={multiline}
      {...rest}
      InputProps={{
        sx: {
          height: '32px',
          borderRadius: '5px',
          '& .Mui-disabled': {
            WebkitTextFillColor: `${theme.palette.secondary.main} !important`,
          },
          '& input': {
            py: 0,
          },
          ...inputSx,
        },
      }}
    />
  )
}

export default CustomTextField
