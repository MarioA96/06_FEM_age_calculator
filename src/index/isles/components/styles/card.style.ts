import { cva } from "../../../../../styled-system/css/cva.mjs";

export const card = cva({
    base: {
      display: 'flex',
      flexDirection: { lg: 'column', xsm: 'column' },
      width: { xsm: '90%', lg: '40%' },
      height: { xsm: '65%', lg: '60%' },
      backgroundColor: '#ffffff',
      marginTop: { xsm: '-50px' },
      borderRadius: { xsm: '5% 5% 30% 5%'},
      '& #input-submit-box': {
          base: {
              display: 'flex',
              flexDirection: { xsm: 'column' },
              justifyItems: { xsm: 'center' },
              order: { xsm: '1' }
          }
      },
      '& #output-submit-box': {
          base: {
              display: 'flex',
              order: { xsm: '2' },
              backgroundColor: 'blue',
              borderRadius: { xsm: '0% 0% 30% 10%'},
          }
      }
    }
  
  });