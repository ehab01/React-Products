import "./Products.css";
function Products({ results }) {
  return (
    <>
      <div className="bg-white z-40 ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pt-0 sm:pb:24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {results}
          </div>
        </div>
      </div>
    </>
  )

}
export default Products;