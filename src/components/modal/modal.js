import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import './modal.css'

const Modalcostum = ({handleClose, open, children}) =>{
  return (
    <div className='containerModal'>
      
      <Dialog className='modal'
        open={open}
        onClose={handleClose}
        
      >{children}
        
      </Dialog>
    </div>
  );
}
export default Modalcostum