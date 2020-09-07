export const screen = {
    small: (...args) => {
        const smallStyles = args;
        return `@media (min-width: 576px){
            ${smallStyles}
        }`
    },
    medium: (...args) => {
        const mediumStyles = args;
        return `@media (min-width: 768px){
            ${mediumStyles}
        }`
    },
    large: (...args) => {
        const largeStyles = args;
        return `@media (min-width: 992px){
            ${largeStyles}
        }`
    }
}