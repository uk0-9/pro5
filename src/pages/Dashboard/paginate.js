
import ReactPaginate from "react-paginate";






 export default function PaginatedItems({ itemsPerPage ,setpage,total}) {
const pageCount=total / itemsPerPage


  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e)=>setpage(e.selected+1)}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="costom-pagination1  "
        pageLinkClassName="pagination-tag-anchor mx-2 text-secondary  rounded-circle text-decoration-none"
       className="costom-pagination2 d-flex align-items-center justify-content-end mx-5 "
       activeLinkClassName="text-bg-primary text-white"
      />
    </>
  );
}