import { cva } from "../../../../../styled-system/css/cva.mjs";

export const output_box = cva({
    base: {
        display: 'flex',
        flexDirection: { xsm: 'column' },
        alignItems: { xsm: 'center' },
        width: { xsm: '100%' },
        height: { xsm: '100%' },
        backgroundColor: 'white',
        '& #content_box': {
            display: 'flex',
            flexDirection: { xsm: 'row' },
            alignItems: { xsm: 'center' },
            justifyContent: { xsm: 'center' },
            width: { xsm: '100%' },
            height: { xsm: 'calc( 100& / 3 )' },
            '& #data-value': {
                marginRight: '10px'
            }
        }
    }
});

export const data = cva({
    base: {
        fontFamily: 'poppins_extra_bold_italic',
        fontSize: '52px',
    },

    variants: {
        visual: {
            value: { color: 'hsl(259, 100%, 65%)' },
            label: { color: 'black' }
        }
    }
})