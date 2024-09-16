import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import { TTreeInitialState, TTreeNode } from '@/types'

const initialState: TTreeInitialState = {
  nodes: [],
}

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    addNode(
      state,
      action: PayloadAction<{ parentId: string | null; newNode: TTreeNode }>,
    ) {
      const { parentId, newNode } = action.payload

      const addNodeRecursively = (nodes: TTreeNode[]): TTreeNode[] => {
        return nodes.map((node) => {
          if (node.id === parentId) {
            return {
              ...node,
              children: node.children ? [...node.children, newNode] : [newNode],
            }
          }
          if (node.children) {
            return {
              ...node,
              children: addNodeRecursively(node.children),
            }
          }
          return node
        })
      }

      if (parentId === null) {
        state.nodes.push(newNode)
      } else {
        state.nodes = addNodeRecursively(state.nodes)
      }
    },
    deleteNode(state, action: PayloadAction<string>) {
      const deleteNodeRecursively = (
        nodes: TTreeNode[],
        id: string,
      ): TTreeNode[] => {
        return nodes
          .filter((node) => node.id !== id)
          .map((node) => ({
            ...node,
            children: node.children
              ? deleteNodeRecursively(node.children, id)
              : [],
          }))
      }
      state.nodes = deleteNodeRecursively(state.nodes, action.payload)
    },
    toggleFolder(state, action: PayloadAction<string>) {
      const toggleFolderRecursively = (
        nodes: TTreeNode[],
        id: string,
      ): void => {
        for (const node of nodes) {
          if (node.id === id) {
            node.isOpen = !node.isOpen
            return
          }
          if (node.children) toggleFolderRecursively(node.children, id)
        }
      }
      toggleFolderRecursively(state.nodes, action.payload)
    },
    updateNodeName(
      state,
      action: PayloadAction<{ id: string; newName: string }>,
    ) {
      const updateNameRecursively = (
        nodes: TTreeNode[],
        id: string,
        newName: string,
      ): TTreeNode[] => {
        return nodes.map((node) => {
          if (node.id === id) {
            return { ...node, name: newName }
          }
          if (node.children) {
            return {
              ...node,
              children: updateNameRecursively(node.children, id, newName),
            }
          }
          return node
        })
      }
      state.nodes = updateNameRecursively(
        state.nodes,
        action.payload.id,
        action.payload.newName,
      )
    },
  },
})

export const { addNode, deleteNode, toggleFolder, updateNodeName } =
  treeSlice.actions
export const selectNodes = (state: RootState) => state.tree.nodes
export default treeSlice.reducer
