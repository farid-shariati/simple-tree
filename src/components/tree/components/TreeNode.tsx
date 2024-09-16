import CustomSelect from '@/common/components/CustomSelect'
import CustomTextField from '@/common/components/CustomTextField'
import { useTreeNode } from '@/components/hooks/useTreeNode'
import { Button, IconButton, Typography } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined'
import {
  ToggleButtonStyled,
  TreeNodeContainerStyled,
  TreeNodeStyled,
} from '@/components/styles'
import { TTreeNodeProps } from '@/types'

export const TreeNode: React.FC<TTreeNodeProps> = ({ node, parentId }) => {
  const {
    newChildName,
    setNewChildName,
    newChildType,
    setNewChildType,
    isAddingChild,
    setIsAddingChild,
    isOpen,
    handleToggle,
    handleDelete,
    handleAddChild,
  } = useTreeNode({ node })

  return (
    <TreeNodeContainerStyled parentId={parentId}>
      <TreeNodeStyled>
        <ToggleButtonStyled onClick={handleToggle}>
          {isOpen ? '-' : '+'}
        </ToggleButtonStyled>
        {node.type === 'file' ? (
          <InsertDriveFileOutlinedIcon />
        ) : (
          <FolderOpenOutlinedIcon />
        )}
        <Typography ml={1}>{node.name}</Typography>
        <IconButton color='error' onClick={handleDelete} sx={{ ml: 2 }}>
          <DeleteOutlinedIcon />
        </IconButton>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => setIsAddingChild(true)}
          sx={{ ml: 2 }}
        >
          Add child
        </Button>
      </TreeNodeStyled>
      {isAddingChild && (
        <TreeNodeStyled>
          <CustomTextField
            value={newChildName}
            onChange={(e) => setNewChildName(e.target.value)}
            placeholder='New child name'
          />
          <CustomSelect
            value={newChildType}
            handleChange={(e) =>
              setNewChildType(e.target.value as 'file' | 'folder')
            }
          />
          <Button
            variant='contained'
            onClick={handleAddChild}
            sx={{ marginLeft: '12px' }}
          >
            Add child
          </Button>
          <IconButton color='primary' onClick={() => setIsAddingChild(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </TreeNodeStyled>
      )}
      {isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} parentId={node.id} />
          ))}
        </div>
      )}
    </TreeNodeContainerStyled>
  )
}
