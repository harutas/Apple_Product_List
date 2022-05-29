
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
const Item = (props) => {
    return (
        <div className='m-3'>
            <Card sx={{ minWidth: 275}} className="rem20">
                <CardContent>
                    <Image image={props.item.image} />
                    <Title title={props.item.productName} />
                    <div className="d-flex justify-content-end align-items-center">
                        <Description description={props.item.price} />
                        <CardActions className="ms-3">
                            <Button variant="contained" size={'small'}>購入</Button>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

const Image = (props) => {
    return (
        <div className='img-container h300'>
            <img src={props.image} className="item-img" alt="" />
        </div>
    )
}

const Title = (props) => {
    return (
        <div className="text-start ps-1">
            <h3 className='fw-semibold item-text'>{props.title}</h3>
        </div>
    )
}

const Description = (props) => {
    return (
        <div>
            <p className="fw-normalbold m-0">{props.description.toLocaleString()}円(税込)から</p>
        </div>
    )
}

export default Item