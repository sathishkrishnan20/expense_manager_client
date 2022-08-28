import {
    TextField,
    Paper,
    Select,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Box,
    SelectChangeEvent,
    Button,
  } from '@mui/material'
import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
interface State {
    amount: string;
    expenseName: string;
  }

function AddExpenses() {
    const [category, setCategory] = useState('')
    const [billDate, setBillDate] = useState(new Date());
    
    const [values, setValues] = React.useState<State>({
        amount: '',
        expenseName: ''
      });
      const handleChange =
      (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      }; 
      const handleChangeCategory = (event: SelectChangeEvent) => {
         setCategory(event.target.value as string);
      };

    return (
        <Paper>
        <Box m={8} pt={8}>
            <h2>Add Income</h2>
            
            <InputLabel style={{...styles.marginTop, ...styles.marginBottom}}>Income Date</InputLabel>
            <DatePicker onChange={setBillDate} value={billDate}/>
            
            <InputLabel style={styles.marginTop} id="demo-simple-select-label">Category</InputLabel>
            <Select
                style={styles.marginTop}
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChangeCategory}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            
            <InputLabel  style={styles.marginTop} id="demo-simple-select-label">Income Source</InputLabel>
            <TextField
                margin='dense'
                style={styles.marginTop}
                fullWidth
                type={'text'}
                value={values.expenseName}
                onChange={handleChange('expenseName')}
            />
            
            <InputLabel  style={styles.marginTop} id="demo-simple-select-label">Income Amount</InputLabel>
            <OutlinedInput
                style={styles.marginTop}
                fullWidth
                margin='dense'
                id="outlined-adornment-amount"
                value={values.amount}
                onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                label="Amount"
            />
             <Button style={{...styles.marginTop, ...styles.marginBottom}} 
                fullWidth size='large'
                variant="contained">Add</Button>
        </Box>
        
      </Paper>
              
    )
}
const styles = {
    marginTop: {
        marginTop: 12
    },
    marginBottom: {
        marginBottom: 12
    }
}

export default AddExpenses;