import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addNode } from '@/redux/slices/treeSlice'

export const useTreeForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState('')
  const [type, setType] = useState<'file' | 'folder'>('file')

  const handleAddNode = () => {
    if (name) {
      dispatch(
        addNode({
          parentId: null,
          newNode: {
            id: Date.now().toString(),
            name,
            type,
            children: [],
          },
        }),
      )
      setName('')
      setType('file')
    }
  }

  return {
    name,
    setName,
    type,
    setType,
    handleAddNode,
  }
}
