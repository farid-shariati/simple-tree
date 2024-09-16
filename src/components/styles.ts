import { Stack, styled, Typography } from '@mui/material'

export const TreeFormStyled = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
}))

export const ToggleButtonStyled = styled(Typography)(() => ({
  cursor: 'pointer',
  marginRight: 10,
  fontSize: 24,
}))

export const TreeNodeStyled = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}))

export const TreeNodeStackStyled = styled(Stack)(() => ({
  alignItems: 'right',
  marginTop: 10,
}))

export const TreeNodeContainerStyled = styled(Stack)(
  ({ parentId }: { parentId: string | undefined }) => ({
    marginLeft: parentId ? 20 : 0,
  }),
)
