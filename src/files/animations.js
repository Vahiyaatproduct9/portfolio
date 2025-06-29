export const opacity = {
    hidden: { opacity: 0, filter: 'blur(20px)' },
    visible: { opacity: 1, filter: 'none' },
    exit: {
        opacity: 1,
        x: 1,
        transition: {
            delay: 3
        }
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
        skewX: 0,
        opacity: 0,
        x: -20,
        filter: 'blur(20px)'
    },
    visible: {
        skewX: 0,
        opacity: 1,
        x: 0,
        filter: 'blur(0)'
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