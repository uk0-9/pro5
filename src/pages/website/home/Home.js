
import { Carousel, Container } from 'react-bootstrap';
import Show_ail_Slider_product from '../Products/Slider/Show_ail_Slider_product';

export default function Home() {
 
//   const [form,setform]=useState({
// name:"",
// email:"",
// password:"",
// password2:"",

//   })
//   console.log(form)
//   function onChanget(e){
// setform({...form,[e.target.name]: e.target.value })
//   }
const data = {
  items: [
    {
      src:"https://f.nooncdn.com/mpcms/EN0002/assets/fa95be3e-a2f4-4a0e-bb7e-f2133eb679ad.png?format=avif",
      // title: "Shampoo Nice",
      // description: "Another Nice Thing which is used by someone i don't know (just random text)"
    },
    {
      src:"https://f.nooncdn.com/mpcms/EN0002/assets/0f21ed09-1303-4699-b167-026d75ed0d8a.png?format=avif",
      // title: "Shampoo Nice",
      // description: "Another Nice Thing which is used by someone i don't know (just random text)"
    },
    {
      src:"https://f.nooncdn.com/mpcms/EN0002/assets/53fdc861-969b-4297-a03c-b838897ed8c9.png?format=avif",
      // title: "Shampoo Nice",
      // description: "Another Nice Thing which is used by someone i don't know (just random text)"
    },
    {
      src:"https://f.nooncdn.com/mpcms/EN0002/assets/d3548ebf-2661-4aab-9dea-0a2f5b9aafe7.png?format=avif",
      // title: "Shampoo Nice",
      // description: "Another Nice Thing which is used by someone i don't know (just random text)"
    },
  ]
};
const show_imges = data.items.map((item, index) => (
  <Carousel.Item key={index} className=' w-100'>
    <img src={item.src} className='d-block w-100' alt='...' />
    <Carousel.Caption>
      <div className="col-lg-5 col-md-8 col-12 text-md-start text-center">
        <h1 className="display-3 fw-bold">{item.title}</h1>
        <h5 style={{ color: "gray" }} className="fw-normal">
          {item.description}
        </h5>
        {/* <Link
          to="/shop"
          className="btn btn-primary mt-3 py-3 px-4 fw-bold text-light"
        >
          Shop Now
        </Link> */}
      </div>
    </Carousel.Caption>
  </Carousel.Item>
));



  return (
  <>


  
    <div className="d-flex align-items-center justify-content-between flex-wrap hand">
    <Container className=' w-100' style={{maxWidth:"1370px"}}>
  <Carousel className=' w-100 '>
  {show_imges}
  </Carousel>
      </Container>
    </div>
    <Show_ail_Slider_product/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
}
