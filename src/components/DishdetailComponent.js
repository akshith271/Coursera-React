import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

class DishDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const dish = this.props.dish

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1 ">{renderDish(dish)}</div>

                <div className="col-12 col-md-6 m-1 ">
                    {renderComments(dish.comments)}
                </div>
            </div>
        )
    }
}

const renderDish = (dish) => {
    return (
        <div>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

const renderComments = (comments) => {
    const getComments = comments.map((comment) => {
        return (
            <div key={comment.id} className="mb-3">
                <div>
                    <div> {comment.comment}</div>

                    <div>
                        --{comment.author} , {comment.date}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h4 className="h4">Comments</h4>
            {getComments}
        </div>
    )
}

export default DishDetail
