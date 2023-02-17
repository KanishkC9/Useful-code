const styles = {
    mainModal: {
      position: 'fixed',
      zIndex: 10,
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      padding: 20,
      overflow: 'auto',
      backgroundColor: 'rgb(0,0,0)',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalContent: {
      margin: isMobile ? '35% auto' : '7% auto',
      padding: '20',
      borderRadius: '8px',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      alignItems: 'center',
    },
  };