import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Image, Carousel, Accordion, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { PRODUCT } from '../../../Api/Api';
import { Axios } from '../../../Api/Axios';
import { Cart } from '../../../context/Cart_context';

export default function Web_show_Single_product() {
    const cart =useContext(Cart)
    console.log(cart.cartItems)
const add_cart=(product)=>{cart.addToCart(product)}
const remove_cart=(product)=>{cart.removeFromCart(product)}
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    Axios.get(`/${PRODUCT}/${id}`)
      .then((e) => {
        const fetchedProduct = e.data[0];
        if (!fetchedProduct.reviews || fetchedProduct.reviews.length === 0) {
          fetchedProduct.reviews = [
            {
              author: 'John Doe',
              rating: 5,
              comment: 'This product is amazing! It exceeded my expectations in every way.',
              images: [
                'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
                'https://images.unsplash.com/photo-1519337265831-281ec6cc8514',
              ]
            },
            {
              author: 'Jane Smith',
              rating: 4,
              comment: 'Great product, but there is room for improvement in some areas.',
              images: [
                'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
                'https://images.unsplash.com/photo-1519337265831-281ec6cc8514',
              ]
            },
            {
              author: 'Peter Johnson',
              rating: 3,
              comment: 'It works fine, but it is not as good as I hoped it would be.',
              images: [
                'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
                'https://images.unsplash.com/photo-1519337265831-281ec6cc8514',
              ]
            },
          ];
        }
        setProduct(fetchedProduct);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleReviewClick = (review) => {
    setSelectedReview(review);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => setShowReviewModal(false);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
    setShowReviewModal(false);
  };

  const renderRatingStars = (rating) => {
    const ratingStars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      ratingStars.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
    }
    const remainingStars = 5 - Math.floor(rating);
    for (let i = 0; i < remainingStars; i++) {
      ratingStars.push(<FontAwesomeIcon key={i + Math.floor(rating)} icon={faStar} color="gray" />);
    }
    return ratingStars;
  };

  if (loading || !product) {
    return <p>Loading...</p>;
  }

  const productReviewsList = (
    <div>
      <h5 className="text-center mb-3">Customer Reviews</h5>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index} className="mb-3 border p-3 rounded">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <span className="h6">{review.author} - </span>
                {renderRatingStars(review.rating)}
              </div>
              <Button variant="outline-secondary" size="sm" onClick={() => handleReviewClick(review)}>
                Read Review
              </Button>
            </div>
            <p>{review.comment}</p>
            <div className="d-flex">
              {review.images && review.images.length > 0 && (
                <Image
                  src={review.images[0]}
                  alt={`Review by ${review.author}`}
                  style={{ width: '100px', height: '100px', marginRight: '10px' }}
                />
              )}
              {review.images && review.images.length > 1 && (
                <div style={{ position: 'relative', width: '100px', height: '100px', overflow: 'hidden' }}>
                  <Image
                    src={review.images[1]}
                    alt={`Review by ${review.author}`}
                    style={{ width: '200px', height: '100px', filter: 'blur(5px)' }}
                  />
                  <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    +{review.images.length - 1}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );

  return (
    <div className=' overflow-x-hidden'>
      <Container>
        <Row className="mt-4">
          <Col md={6}>
          {product.images.length > 0 ? (
  <Carousel>
    {product.images.map((image, index) => (
      <Carousel.Item key={index}>
        <Image src={image.image} alt={product.title} className="w-100" height="450px" />
      </Carousel.Item>
    ))}
  </Carousel>
) : (
  <Image src={require("../../../imgs/cart.png")} alt={product.title} className="w-100" height="450px" />
)}

          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h3>{product.title}</h3>
                <Badge bg="secondary" className="me-2">
                  {product.category}
                </Badge>
                <p className="product-price">
                  ${product.price - product.discount}
                  <del className="text-muted ms-2">${product.price}</del>
                </p>
                <div>
                  {renderRatingStars(product.rating)}
                  <span className="text-muted"> ({Math.floor(product.rating)} avg)</span>
                </div>
                <p>{product.description}</p>
                <Link onClick={()=>{cart.cartItems.find(item => item.id === product.id)?remove_cart(product):add_cart(product)}} className={`btn  ${cart.cartItems.find(item => item.id === product.id)?"btn-danger":"btn-primary"} btn-primary`}>
                {cart.cartItems.find(item => item.id === product.id) ? "remove" : "Add to Cart"}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Accordion>
              {product.features && product.features.map((feature, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{feature}</Accordion.Header>
                  <Accordion.Body>
                    {feature} description goes here. (You can replace this with actual descriptions)
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            {productReviewsList}
          </Col>
        </Row>
      </Container>

      <Modal show={showReviewModal} onHide={handleCloseReviewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Review by {selectedReview?.author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>{selectedReview && renderRatingStars(selectedReview.rating)}</div>
            <p>{selectedReview?.comment}</p>
            <div className="review-images">
              {selectedReview?.images && selectedReview.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Review by ${selectedReview?.author}`}
                  className="review-image"
                  style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReviewModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {lightboxOpen && selectedReview && (
        <Lightbox
          mainSrc={selectedReview.images[photoIndex]}
          nextSrc={selectedReview.images[(photoIndex + 1) % selectedReview.images.length]}
          prevSrc={selectedReview.images[(photoIndex + selectedReview.images.length - 1) % selectedReview.images.length]}
          onCloseRequest={() => {
            setLightboxOpen(false);
            setShowReviewModal(true);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + selectedReview.images.length - 1) % selectedReview.images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % selectedReview.images.length)
          }
        />
      )}
    </div>
  );
}
