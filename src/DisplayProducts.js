import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles, createMuiTheme, useTheme, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    border: '1px solid',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});




const DisplayProducts = () => {
   const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
   const [products, setProducts] = useState([]);
   const [selectedProducts, setselectedProducts] = useState({});
   const [open, setOpen] = useState(false);
   const [quantity, setQuantity] = useState(1);
   const [size, setSize] = useState();
   const fetchProducts = () => {
    axios.get('http://images.stockal.com/api/products.json').then(res => {
        console.log(res)
        setProducts(res.data.data.products);
    })
  }

  function handleOpen(resource){
    console.log("@@@@", resource);
    setselectedProducts(resource)
    setOpen(true);
  }

  const handleChange = event => {
    setQuantity(event.target.value);
  }


  function handleClose() {
    setOpen(false);
  }

  const handleSizeChange = (data) => {
    console.log(data)
    setSize(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return(
      <Grid container spacing={6} style={{padding: "60px"}}>
      {(products.map((resource, id) => {
        return(
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  key={id}>
              <Paper className={classes.paper}>
                <Grid container spacing={2} key={id}>
                  <Grid item xs={6}  key={id}>
                  <img src={resource.searchImage} alt={resource.productName} width="100%" />
                  </Grid>
                  <Grid item xs={6}  key={id} style={{display: "flex", alignSelf: "center"}}>
                        <Typography component="div">
                          <Box fontWeight="fontWeightLight" m={1}>
                            {resource.productName}
                          </Box>
                          <Box fontWeight="fontWeightLight" m={1}>
                            {resource.brand}
                          </Box>
                          <Box fontWeight="fontWeightLight" m={1}>
                            $ {resource.price}
                          </Box>
                          <Box fontWeight="fontWeightLight" m={1}>
                            {resource.sizes}
                          </Box>
                           <ThemeProvider theme={theme} key={id}>
                              <Button variant="contained" key={id} color="primary"
                               onClick={handleOpen.bind(null, resource)} className={classes.margin}>
                                Buy
                              </Button>
                            </ThemeProvider>
                        </Typography>
                  </Grid>
                </Grid>
              </Paper>
          </Grid>
        );
      }))}
      <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title"></DialogTitle>
                <DialogContent>
                  <img src={selectedProducts.searchImage} width="400px" height="400px"/><br /><br />
                  <Grid container spacing={6}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center"}}>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="age-customized-select">Quantity</InputLabel>
                      <Select
                        value={quantity}
                        onChange={handleChange}
                        input={<BootstrapInput name="quantity" id="age-customized-select" />}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center"}}>
                    <FormControl className={classes.margin}>
                      <InputLabel htmlFor="age-customized-select">Sizes</InputLabel>
                      <Select
                        value={size}
                        onChange={handleSizeChange}
                        input={<BootstrapInput name="size" id="age-customized-select" />}
                      >
                      {(selectedProducts.sizes) ?
                        <span>
                        {(selectedProducts.sizes.split(',').map((data, index) => {
                          return(
                            <MenuItem value={data} onChange={handleSizeChange.bind(null, data)}>{data}</MenuItem>
                          );
                        }))}
                        </span> : null}
                      </Select>
                    </FormControl>
                    </Grid>
                      </Grid>
                </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Buy
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
  );
}

export default DisplayProducts;



      // <Dialog
      //     fullScreen={fullScreen}
      //     open={open}
      //     onClose={handleClose}
      //     aria-labelledby="responsive-dialog-title"
      //   >
      //     <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
      //     <DialogContent>
      //         {(selectedProducts.map((data, id) => {
      //           return(
      //               <img src={data.searchImage} alt={data.productName} width="400px" height="400px" />
      //           );
      //         }))}
      //     </DialogContent>
      //     <DialogActions>
      //       <Button onClick={handleClose} color="primary">
      //         Buy
      //       </Button>
      //       <Button onClick={handleClose} color="primary" autoFocus>
      //         Close
      //       </Button>
      //     </DialogActions>
      //   </Dialog>
