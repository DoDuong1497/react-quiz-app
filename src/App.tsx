import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import styled from '@emotion/styled';

const TitleStyled = styled.h1`
  text-align: center
`

function App() {

  return (
    <>
      <br />
      <Container maxWidth="sm">
        <TitleStyled>Quiz App</TitleStyled>
        <br />

        <Box textAlign="center">
          <FormControl fullWidth size='small'>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField fullWidth size="small" label="Amount of Questions" variant="outlined" />
        </Box>
      </Container>
    </>
  )
}

export default App
