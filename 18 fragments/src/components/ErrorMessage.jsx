const ErrorMessage = ({ items }) => {

    // let foodItems = ["Dal", "Vegitable", "Fruits", "Roti","Milk", "Ghee"]

    return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>

}

export default ErrorMessage;

