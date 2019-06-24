const styles = ({
    popup: {
        position: 'fixed',
        width: '100%',
        height: '100%',

        top: '0',
        left: '0',
        right: '0',
        bottom: '0',

        margin: 'auto' ,

        backgroundColor: '#e3e4e5',
        borderRadius: '5px',
    },
    content: {
        position: 'absolute',

        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '25%',

        margin: 'auto' ,

        backgroundColor: 'white',
        borderRadius: '5px',
    },
    actions: {
        justifyContent: 'space-between',
        display: 'flex',
    }
});

export default styles;
