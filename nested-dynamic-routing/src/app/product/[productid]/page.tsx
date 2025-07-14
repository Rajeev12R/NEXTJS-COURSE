export default function Productdetails( {params}: {
    params: {productid: string}
} ){
    return (
        <div className="items-center justify-center flex w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
            <h1>Product Details: {params.productid}</h1>
        </div>
        </div>
    )
}