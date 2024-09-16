import React from 'react'
import { useTreeForm } from '../hooks/useTreeForm'
import { Button } from '@mui/material'
import CustomTextField from '@/common/components/CustomTextField'
import { TreeFormStyled } from '../styles'
import CustomSelect from '@/common/components/CustomSelect'

export const TreeForm: React.FC = () => {
  const { name, setName, type, setType, handleAddNode } = useTreeForm()

  return (
    <>
      <TreeFormStyled>
        <CustomTextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name'
        />
        <CustomSelect
          value={type}
          handleChange={(e) => setType(e.target.value as 'file' | 'folder')}
        />
        <Button
          variant='contained'
          onClick={handleAddNode}
          sx={{ marginLeft: '12px' }}
        >
          Add Node
        </Button>
      </TreeFormStyled>
    </>
  )
}

export default TreeForm
