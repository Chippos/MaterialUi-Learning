import React from 'react';
import Button from '@mui/material/Button';
import Search from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const ButtonUi = () => {
  return (
    <div>
      <Box>
        <Stack direction="row">
          <Button
            variant="contained"
            endIcon={<Search />}
            color="warning"
            onClick={() => {
              console.log('MaterialUi');
            }}
          >
            Material UI
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default ButtonUi;
