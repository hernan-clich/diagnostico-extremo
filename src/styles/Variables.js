export const primary = (alpha = 1) => {
    return `rgba(255, 189, 0, ${alpha})`;
}

export const secondary = (alpha = 1) => {
    return `rgba(25, 25, 25, ${alpha})`;
}

export const lightText = (alpha = 1) => {
    return `rgba(217, 217, 217, ${alpha})`;
}

export const darkText = (alpha = 1) => {
    return `rgba(83, 83, 83, ${alpha})`;
}

export const plainWhite = (alpha = 1) => {
    return `rgba(255, 255, 255, ${alpha})`;
}

export const outerSpacing = (space = 5) => {
    return `${space}em`;
}