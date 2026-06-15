import com from "./Container.module.css"
const Container=(props) => {
    return <div className={com.container}>{props.children}</div>
}

export default  Container;