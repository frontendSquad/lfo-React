
function SectionHeading(props){
return(
    <>
        <h5 className="text-uppercase fs-18 fw-semibold text-maroon mb-2">{props.secHeading}</h5>
        <h3 className="fw-bold mb-3">{props.secSubHeading}</h3>
    </>
)
}
export default SectionHeading