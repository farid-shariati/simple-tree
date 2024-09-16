import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import {
  addNode,
  deleteNode,
  toggleFolder,
  updateNodeName,
} from '@/redux/slices/treeSlice'
import { TTreeNode, TUseTreeNodeProps } from '@/types'

export const useTreeNode = ({ node }: TUseTreeNodeProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const nodes = useSelector((state: RootState) => state.tree.nodes)

  const [newChildName, setNewChildName] = useState('')
  const [newChildType, setNewChildType] = useState<'file' | 'folder'>('file')
  const [isAddingChild, setIsAddingChild] = useState(false)
  const [isOpen, setIsOpen] = useState(node.isOpen || false)
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(node.name || '')

  useEffect(() => {
    const findNodeById = (
      nodes: TTreeNode[],
      id: string,
    ): TTreeNode | undefined => {
      for (const node of nodes) {
        if (node.id === id) return node
        if (node.children) {
          const result = findNodeById(node.children, id)
          if (result) return result
        }
      }
      return undefined
    }

    const parentNode = findNodeById(nodes, node.id)
    if (parentNode) {
      setIsOpen(parentNode.isOpen || false)
    }
  }, [nodes, node.id])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    dispatch(toggleFolder(node.id))
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteNode(node.id))
    }
  }

  const handleAddChild = () => {
    if (newChildName) {
      const newNode: TTreeNode = {
        id: Date.now().toString(),
        name: newChildName,
        type: newChildType,
        children: [],
      }
      dispatch(addNode({ parentId: node.id, newNode }))
      dispatch(toggleFolder(node.id))
      setNewChildName('')
      setNewChildType('file')
      setIsAddingChild(false)
    }
  }

  const handleEditName = () => {
    if (editName && editName !== node.name) {
      dispatch(updateNodeName({ id: node.id, newName: editName }))
      setIsEditing(false)
    }
  }

  return {
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
    isEditing,
    setIsEditing,
    editName,
    setEditName,
    handleEditName,
  }
}
