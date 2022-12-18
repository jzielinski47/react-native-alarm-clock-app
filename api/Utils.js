export const formatNumber = (num) => {
    if (num.length < 2) return `0${num}`
    else return num
}