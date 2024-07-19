import { cva } from "../../../../../styled-system/css/cva.mjs";

export const form_box = cva({
  base: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: { xsm: 'center', lg: 'left' },
      alignContent: { xsm: 'center', lg: 'left' },
      width: '100%',
      height: '100%'
  }
});

export const fields_box = cva({
  base: {
    display: 'flex',
    flexDirection: { xsm: 'row' },
    order: { xsm: '1' },
    width: { xsm: '100%', lg: '70%' },
    height: { xsm: '50%' },
  }
});

export const input_box = cva({
    base: {
      display: 'flex',
      flexDirection: { xsm: 'column' },
      width: { xsm: 'calc( 100% / 3 )' },
      height: { xsm: '100%' },
      margin: { xsm: '0.8rem' },
      '& .input-label': {
        base: {
          display: 'flex',
          order: { xsm: '1' },
          height: { xsm: '20%' },
          width: { xsm: '100%' },
          paddingTop: { xsm: '15%' },
          fontFamily: 'poppins_extra_bold',
          fontSize: { xsm: '12px' },
          letterSpacing: '2px',
          color: 'hsl(0, 1%, 44%)',
        }
      },
      '& .input': {
        base: {
          display: 'flex',
          order: { xsm: '2' },
          height: { xsm: '40%' },
          width: { xsm: '95%' },
          marginLeft: { xsm: '8%' },
          marginTop: { xsm: '20%' },
          paddingLeft: { xsm: '10%' },
          fontFamily: 'poppins_bold',
          fontSize: { xsm: '24px' },
          color: 'hsl(0, 0%, 8%)',
          border: '1px solid hsl(0, 0%, 94%)',
          borderRadius: { xsm: '8px' } 
        }
      }
    }
});