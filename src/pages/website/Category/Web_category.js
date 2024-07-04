import React, { useEffect, useState } from 'react';
import { CATEGORIES } from '../../../Api/Api';
import { Axios } from '../../../Api/Axios';
import { Container, Row, Col } from 'react-bootstrap';
import String_slice from '../../../helpers/String_slice';
import Show_skeleton from '../../../components/website/Skeleton';

export default function Web_category() {
  const [category, setCategory] = useState([]);
// Skeleton loading
const [loading, setLoading] = useState(true);
//get ail category
useEffect(() => {Axios.get(`/${CATEGORIES}`).then((response) => setCategory(response.data.slice(-40))).finally(()=>setLoading(false))},[]);
//show ail category
  const show_category = category.map((item) => (
    <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="category-item">
      <div className="category-content">
        <img className="category-image" src={item.image} alt='category' /><br/>
        <h5 className="category-title-page">
        {String_slice(item.title,10)}
        </h5>
      </div>
    </Col>
  ));
  return (
    <div className='py-0 category-container'>
      <Container>
        <h2 className="section-title">Explore Categories</h2>
        <Row className='d-flex align-items-center justify-content-center'>
     {loading?<Show_skeleton height="100px" width="100%" caunt="6" col='col-2'/>:show_category}  
        </Row>
      </Container>
    </div>
  );
}
