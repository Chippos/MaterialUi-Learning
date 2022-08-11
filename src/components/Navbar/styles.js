const navbarStyles = {
  drawer: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
      backgroundColor: '#101F33',
      color: 'rgba(255,255,255,0.7)',
    },
    '& .Mui-selected': {
      color: 'red',
    },
  },
  icons: {
    color: 'rgba(255,255,255,0.7) !important',
  },
  text: {
    '& span': {
      marginLeft: '-10px',
      fontWeight: '600',
      fontSize: '16px',
    },
  },
  navDivider: {
    backgroundColor: 'gray',
    width: '90%',
    marginInline: 'auto',
  },
};

export default navbarStyles;
