import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectStyled } from '../style'
import { TSelectProps } from '@/types'

const options = [
  { name: 'File', value: 'file', id: 1 },
  { name: 'Folder', value: 'folder', id: 2 },
]

const CustomSelect = ({ handleChange, value }: TSelectProps) => {
  return (
    <FormControl sx={{ ml: 2, width: 100 }}>
      <InputLabel>Type</InputLabel>
      <SelectStyled value={value} label='Type' onChange={handleChange}>
        {options?.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </SelectStyled>
    </FormControl>
  )
}

export default CustomSelect
