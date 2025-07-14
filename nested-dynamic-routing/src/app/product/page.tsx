export default function Product(){
    return (
        <div className="items-center justify-center flex w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
            <h1>This is a Product List</h1>
            <ol>
                <li><a href="http://localhost:3000/product/1" target="_blank">Product 1</a></li>
                <li><a href="http://localhost:3000/product/2" target="_blank">Product 2</a></li>
                <li><a href="http://localhost:3000/product/3" target="_blank">Product 3</a></li>
            </ol>
        </div>
        </div>
    )
}