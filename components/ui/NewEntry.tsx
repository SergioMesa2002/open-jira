import { Box, Button, TextField } from '@mui/material';
import {
  AddCircleOutlineOutlined, SaveOutlined
} from '@mui/icons-material';

export const NewEntry = () => {
  return (
    <Box sx={{marginBottom: 2, paddingX: 2}}>
      <Button
        variant={'outlined'}
        fullWidth
        startIcon={<AddCircleOutlineOutlined/>}
      >
        Add Task
      </Button>

      <TextField
        fullWidth
        sx={{
          marginTop: 2,
          marginBottom: 1,
        }}
        placeholder={'new Entry'}
        autoFocus
        multiline
        label={'New Entry'}
        helperText={'set value'}
      />
      <Box display={'flex'} justifyContent={'space-between'}>
        <Button
          variant={'text'}
        >
          Cancel
        </Button>
        <Button
          variant={'outlined'}
          color={'secondary'}
          endIcon={<SaveOutlined/>}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
