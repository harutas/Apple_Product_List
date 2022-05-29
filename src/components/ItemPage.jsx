import Category from "./Category"

const ItemPage = (props) => {
    return (
        <div className="container">
            <Category products={props.products['Mac']} category={'Mac'} />
            <Category products={props.products['iPhone']} category={'iPhone'} />
            <Category products={props.products['iPad']} category={'iPad'} />
            <Category products={props.products['Watch']} category={'Watch'} />
        </div>
    )
}

export default ItemPage