
import {
    Card,
    CardContent,
    CardHeader,
    TextField,
    Grid,
    Button,
  } from '@mui/material';
import React from 'react';



function ExpenseCategoryAdd() {
    const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }
    return (
       
        <Card className="mb-4">
            
            <CardHeader title="Add Category"/>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField fullWidth size='small' id="outlined-basic" label="Category name" />
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: -4 }}>    
                    <Button fullWidth size='large' variant="contained">Add</Button>
                  
                   </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ExpenseCategoryAdd;