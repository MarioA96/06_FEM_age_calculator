import { cva } from "../../../../../styled-system/css/cva.mjs";

export const submit_box = cva({
    base: {
      display: 'flex',
      position: { xsm: 'relative' },
      order: { xsm: '2' },
      width: { xsm: '100%' },
      height: { xsm: '50%' },
      alignItems: { xsm: 'center' },
      '& #decoration_box': {
        base: {
            display: 'flex',
            position: { xsm: 'absolute' },
            top: { xsm: '50%' },
            width: { xsm: '100%' },
            height: { xsm: '10%' },
            justifyContent: 'center',
            '& #decoration': {
              base: {
                color: "hsl(0, 0%, 86%)",
                width: "90%",
                borderWidth: '1.5px'
              }
            }
        }
      },
      '& #button_box': {
        base: {
          display: 'flex',
          position: { xsm: 'absolute' },
          top: { xsm: '25%' },
          width: { xsm: '100%' },
          height: { xsm: '20%' },
          zIndex: '9',
          justifyContent: 'center',
          '& :hover': {
                backgroundColor: 'hsl(0, 0%, 86%)',
                cursor: 'pointer'
          },
          '& button': {
            base: {
              display: 'flex',
              width: { xsm : '60px' },
              height: { xsm : '60px' },
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'hsl(259, 100%, 65%)',
              borderRadius: '100%',
              '& img': {
                base: {
                  width: '30px',
                  height: '30px'
                }
              }
            }
          }
        }
      }
    }
  });