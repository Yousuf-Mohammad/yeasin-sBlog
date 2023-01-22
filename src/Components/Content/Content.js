import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Content.css"

const Content = () => {
    return (
        <div>

            <Container>
                <Row className='m-5'>
                    <Col><div className=' home-content-card'>


                        <div className='home-content-card-textBox'>
                            <p className='home-content-text-1'> 10th May 2022</p>
                            <h5 className='home-content-text-2'> Blue Birishiri  </h5>
                        </div>
                        <div>
                            <img className='home-content-card-img' src='https://chokkor.com/wp-content/uploads/2018/10/BIRISHIRI-NETROKONA.jpg' alt="" />

                        </div>
                    </div></Col>
                    <Col><div className=' home-content-card mt-5'>


                        <div className='home-content-card-textBox'>
                            <p className='home-content-text-1'> 10th October 2021</p>
                            <h5 className='home-content-text-2'> Magnificent Kaptai  </h5>
                        </div>
                        <div>
                            <img className='home-content-card-img' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/48/d7/a9/star-land.jpg?w=500&h=300&s=1' alt="" />

                        </div>
                    </div></Col>

                </Row>
                <Row className='m-5'>
                    <Col><div className=' home-content-card'>


                        <div className='home-content-card-textBox'>
                            <p className='home-content-text-1'> 13th March 2022</p>
                            <h5 className='home-content-text-2'> Treking Experience in Bandarban </h5>
                        </div>
                        <div>
                            <img className='home-content-card-img' src='https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/blog-post-img-62.jpg' alt="" />

                        </div>
                    </div></Col>
                    <Col><div className=' home-content-card mt-5'>


                        <div className='home-content-card-textBox'>
                            <p className='home-content-text-1'> 15th january 2022</p>
                            <h5 className='home-content-text-2'> Tanguar Haor</h5>
                        </div>
                        <div>
                            <img className='home-content-card-img' src='https://lh3.googleusercontent.com/p/AF1QipM8CJpp9Bgw1avymo4FKK5nzUyxPdyHulpqRQK0=s680-w680-h510' alt="" />

                        </div>
                    </div></Col>

                </Row>
                <Row className='m-5'>
                    <Col><div className=' home-content-card'>


                        <div className='home-content-card-textBox'>
                            <p className='home-content-text-1'> 5th june 2022</p>
                            <h5 className='home-content-text-2'> সমুদ্র বিলাস  </h5>
                        </div>
                        <div>
                            <img className='home-content-card-img' src='https://1.bp.blogspot.com/-ysovcxw_Szw/YFhGajIirkI/AAAAAAAAFg8/od4MdJcD0sYPBqkd3KWeTGxCLtmfxlD1ACLcBGAsYHQ/s575/coxsbaza-development.jpg' alt="" />

                        </div>
                    </div></Col>
                    <Col><div className=' home-content-card mt-5'>


                        <div className='home-content-card-textBox'>
                            <p className='home-content-text-1'> 9th October 2022</p>
                            <h5 className='home-content-text-2'> ধুপপানি ঝর্না</h5>
                        </div>
                        <div>
                            <img className='home-content-card-img' src='https://backoffice.daily-bangladesh.com/media/imgAll/2019September/Duppani-guha-1910310857.jpg' alt="" />

                        </div>
                    </div></Col>

                </Row>
            </Container>








        </div >
    );
}

export default Content;
