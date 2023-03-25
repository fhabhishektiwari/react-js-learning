import { makeStyles } from "@mui/styles";
export default makeStyles(theme=>({
    button:(props)=>({
        // color:console.log(props),
        // backgroundColor: props.color === 'primary' ? theme.palette.blue.main: theme.palette.secondary.main,
        // color: theme.palette.getContrastText(props.color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main),

        // background:props.color === 'primary'?'red !important':props.color==='secondary'?'lightgreen !important':'blue !important',
        // color: props.color === 'primary' ? '#000 !important' : props.color === 'secondary' ? '#000 !important' : 'blue !important',
        // width:console.log(typeof theme.palette.mode)
        background: theme.palette.mode === 'light' ? '#f001 !important' :'blue !important',
        '&::hove':{
            background: theme.palette.mode === 'light' ? '#ff0 !important' : 'blue !important',
        }

    })
}))