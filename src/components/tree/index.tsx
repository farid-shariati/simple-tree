import React from 'react'
import { TreeNode } from './components/TreeNode'
import { TTreeNode } from '@/types'
import { TreeNodeStackStyled } from '../styles'

const Tree: React.FC<{ nodes: TTreeNode[] | [] }> = ({ nodes }) => {
  return (
    <TreeNodeStackStyled>
      {nodes.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </TreeNodeStackStyled>
  )
}

export default Tree
