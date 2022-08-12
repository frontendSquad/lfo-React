import SectionHeading from "./SectionHeading";
function HomeBlogs(){
    return(
        <section className="section latest-blog">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="sec-title mb-2 text-center">
                            <SectionHeading secHeading="LATEST NEWS" secSubHeading="Latest From Blog" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <div className="card blog-card">
                            <img src={process.env.PUBLIC_URL + "/images/blog-img-1.png"} alt="" className="card-img-top" />
                            <div className="card-body py-4">
                                <div className="post-meta mb-3">
                                    <time className="cat-name">STUDENT</time>
                                    <time className="time-meta">JULY 15, 2021</time>
                                </div>
                                <h3 className="card-title">Make dry it is saying earth lights great brought</h3>
                                <div className="comments-meta mt-3">
                                    <ul className="mb-0 ps-0">
                                        <li><a href="#"><i className="far fa-comment-alt"></i>4 COMMENTS</a></li>
                                        <li><a href="#"><i className="far fa-heart"></i>15 LIKE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <div className="card blog-card">
                            <img src="images/blog-img-2.png" className="card-img-top" alt="..." />
                            <div className="card-body py-4">
                                <div className="post-meta mb-3">
                                    <time className="cat-name">STUDENT</time>
                                    <time className="time-meta">JULY 15, 2021</time>
                                </div>
                                <h3 className="card-title">Make dry it is saying earth lights great brought</h3>
                                <div className="comments-meta mt-3">
                                    <ul className="mb-0 ps-0">
                                        <li><a href="#"><i className="far fa-comment-alt"></i>4 COMMENTS</a></li>
                                        <li><a href="#"><i className="far fa-heart"></i>15 LIKE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <div className="card blog-card">
                            <img src="images/blog-img-3.png" className="card-img-top" alt="..." />
                            <div className="card-body py-4">
                                <div className="post-meta mb-3">
                                    <time className="cat-name">STUDENT</time>
                                    <time className="time-meta">JULY 15, 2021</time>
                                </div>
                                <h3 className="card-title">Make dry it is saying earth lights great brought</h3>
                                <div className="comments-meta mt-3">
                                    <ul className="mb-0 ps-0">
                                        <li><a href="#"><i className="far fa-comment-alt"></i>4 COMMENTS</a></li>
                                        <li><a href="#"><i className="far fa-heart"></i>15 LIKE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-3 mt-lg-5 pt-2">
                        <a href="#_" className="text-uppercase btn btn-primary">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeBlogs 