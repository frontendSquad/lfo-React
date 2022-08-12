function TestimonialCard(props){
    return(
    <div className="item card client-card flex-grow-1">
        <div className="card-content text-center">
            <i className="quote-left mb-3"><img src="images/quote-icon.png" alt="" className="img-fluid" /> </i>
            <blockquote>{props.data.text}</blockquote>
            <div className="author d-flex flex-column align-items-center">
                <h5>- {props.data.title}</h5>
                <div className="mt-3 text-center avatar-img">
                    <img src="images/testimonial-pic.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
    );
}
export default TestimonialCard;