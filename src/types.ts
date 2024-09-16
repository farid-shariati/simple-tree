import { SelectChangeEvent } from '@mui/material'
import { ReactNode } from 'react'

export type TSelectOptions = { name: string; value: string; id: number }[]

export type TSelectProps = {
  handleChange: (e: SelectChangeEvent<unknown>, child: ReactNode) => void
  value: string | undefined
}

export interface TTreeNode {
  id: string
  name: string
  type: 'file' | 'folder'
  children: TTreeNode[]
  isOpen?: boolean
}

export type TUseTreeNodeProps = {
  node: TTreeNode
}

export type TTreeNodeProps = {
  node: TTreeNode
  parentId?: string
}

export type TTreeInitialState = {
  nodes: TTreeNode[]
}
