export default function Reviewdetails( {params}: {
    params: {
        productid: string; 
        reviewid: string
    }
} ){
    return (
        <div className="items-center justify-center flex w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
            <h1>Product Details: {params.productid} for Review Details: {params.reviewid}</h1>
        </div>
        </div>
    )
}