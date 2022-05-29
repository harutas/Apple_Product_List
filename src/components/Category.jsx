import Item from "./Item"

const Category = (props) => {
    const items = props.products;
    const listItems = items.map((item) => 
        <Item item={item} key={item.productName} />
    );

    return (
        <div className="d-flex flex-column mt-4">
            <h2 className="fw-bold text-start m-0">{props.category}</h2>
            <div className="d-flex overflow-auto">
                {listItems}
            </div>
        </div>
    )
}

export default Category