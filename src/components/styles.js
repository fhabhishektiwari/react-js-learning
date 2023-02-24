import { makeStyles } from "@mui/styles";
export default makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            // width: '100%',
        },
        '& .MuiSelect-select': {
            padding: 0
        }
    },
    label: {
        fontWeight: '500 !important',
        fontSize: '12px!important',
        marginBottom: theme.spacing(1),
        // color: `${theme.palette.black.dark} !important`
    },
    placeholder: {
        // color: "#aaa",
        color: theme.palette.mode === 'light' ? `${theme.palette.grey.main}` : ``,
        fontSize: '12px'
    },
    options: {
        fontSize: '14px !important'
    },
    outlinedInput: {
        fontSize: '12px !important',
        fontWeight: '500 !important',
        padding: '12px !important',
    }
}));