import {
     Button,
     withStyles,
  } from '@mui/material'
const styles = (theme: any) => ({
  buttonPadding: {    
    padding: '30px',   
  },
});

function ButtonComponent(props: { classes: any; title: string; }) {
  const { classes, title } = props;

  return (      
      <Button
        variant="contained"
        color="primary"
        title={title}
        className={classes.buttonPadding}
      >
      </Button>
  );
}

// export default withStyles(styles)(ButtonComponent);