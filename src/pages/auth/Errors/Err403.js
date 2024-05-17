import React from 'react'
import { Link } from 'react-router-dom'


export default function Err403({role}) {


  return (
    
  <div className='test-wrapper'>
        <div className='title' data-content={404}>
          403 -ACCESS DENIED
        </div>
        <div className='subtitle' >
          oops, you don't have permissino to access tihs page.
        <Link to={role==="1996"?"Writer":"/"} className='d-block text-decoration-none tab-content btn  btn-success'>Go To{role==="1996"?" Writer ":"Home "}Page</Link>
        </div>
      </div>






 // <section className="page_404-2">
    // <div className="container-2">
    //   <div className="row">
    //   <div className="col-sm-12 text-center-2">
    //     <div className="four_zero_four_bg-2"/>
    //     <div className="content_box_404-2">
    //     <h3>403 -ACCESS DENIED</h3>
    //     <p>oops, you don't have permissino to access tihs page.</p>
    //     <Link to={role==="1996"?"Writer":"/"} className="link_404-2">GO TO {role==="1996"?"WRITER":"HOME"} PAGE</Link>
    //     </div>
    //   </div>
    //   </div>
    // </div>
    // </section>
  
  )
}

