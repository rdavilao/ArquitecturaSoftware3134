import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Deposit from '../views/transaction/types/deposit';
import PaymentServices from '../views/transaction/types/paymentServices';
import Transfer from '../views/transaction/types/transfer';
import Withdrawal from '../views/transaction/types/withdrawal';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: 354,
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="Depósito" {...a11yProps(0)} />
        <Tab label="Retiro" {...a11yProps(1)} />
        <Tab label="Pago servicios básicos" {...a11yProps(2)} />
        <Tab label="Transferencias" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Deposit />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Withdrawal />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PaymentServices />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Transfer />
      </TabPanel>
    </div>
  );
}