const styles = theme => ({
    content: {
        flexGrow: 1,
        minHeight: '100vh',
        overflow: 'auto',
        padding: `${theme.spacing(3)}px ${theme.spacing(1.5)}px ${theme.spacing(3)}px ${theme.spacing(1.5)}px`
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '80vh'
    }
})

export default styles;