export const opacity = {
    hidden: { opacity: 0, filter: 'blur(20px)' },
    visible: { opacity: 1, filter: 'none' },
    transition: {
        duration: 0.4,
        ease: 'easeInOut'
    }
}
export const presentHeading = {
    hidden: {
        opacity: 0,
        blur: '100px'
    },
    visible: {
        opacity: 1,
        blur: 0
    },
    transition: {
        delay: 0.4,
        duration: 1.3,
        ease: 'easeInOut'
    }
}
export const presentCard = {
    hidden: {
        opacity: 0,
        x: -20,
        filter: 'blur(20px)'
    },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0)'
    },
    transition: {
        duration: 1.6,
        delay: 2.1,
        ease: 'easeInOut'
    }
}
export const componentopacity = {
    shuru: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0
    }
}