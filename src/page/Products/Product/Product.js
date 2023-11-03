import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';
import ReactPaginate from 'react-paginate';
const Product = ( { setSelect } ) => {
    const [products, setProducts] = useState([]);
    const [ currentPage, setCurrentPage ] = useState([])

    const itemPerPage = 6;
    

    useEffect(() => {
        let api = 'https://fakestoreapi.com/products';
        if (setSelect) {
            api = `https://fakestoreapi.com/products/category/${setSelect}`;
        }

        fetch(api)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [setSelect]);

    const pageCount = Math.ceil(products.length / itemPerPage)
    

   const pageChange = ( { selected } ) => {
    setCurrentPage( selected )

   } 
    const displayProducts = 
        products.slice( currentPage * itemPerPage,
        (currentPage + 1) * itemPerPage)

    






   

    




    return (
        <div className="my-5">

            <div className="grid grid-cols-3 gap-5">
                {displayProducts.map((product) => (
                    <ProductCart key={product.id} product={product} />
                ))}
            </div>

            <div className=' mx-5 font-extrabold'>
            <ReactPaginate
            className='flex gap-5 mt-5'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={pageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
            </div>



            

        </div>
    );
}

export default Product