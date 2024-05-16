const currecy_Formatter = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency",
});
const formatCurrency = (number)=>{
    return currecy_Formatter.format(number);
};
export default formatCurrency;