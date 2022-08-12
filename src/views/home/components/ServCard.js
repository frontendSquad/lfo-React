
function ServCard(props){
return(
    <div className="card service-card">
        <div className="card-header px-0">
            <i className="card-icon mb-4"> <img src={props.data.iconUrl} alt="" /></i>
            <h3 className="card-title">{props.data.title}</h3>
        </div>
        <div className="card-body px-0">
            <p className="card-text">{props.data.text}</p>
        </div>
    </div>
);
}
export default ServCard

