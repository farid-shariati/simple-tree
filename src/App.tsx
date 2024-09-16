import React from 'react'
import { TreeForm } from './components/treeForm'
import { useSelector } from 'react-redux'
import Tree from './components/tree'
import { selectNodes } from './redux/slices/treeSlice'
import { Typography } from '@mui/material'

const App: React.FC = () => {
  const nodes = useSelector(selectNodes)

  return (
    <div className='app'>
      <Typography variant='h4'>Tree Structure - Farid shariati</Typography>
      <TreeForm />
      <Tree nodes={nodes} />
    </div>
  )
}

export default App
