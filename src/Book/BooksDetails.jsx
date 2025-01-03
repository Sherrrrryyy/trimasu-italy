import { useParams } from "react-router-dom";
import allBooks from "../constant/book";

const BooksDetail = () => {
    const {title} = useParams();
    console.log(title);
    

    const {title: bookTitle, id ,image,author} = allBooks.find((book)=> book.title === title)
    

    return (
        <>
            <div className="min-h-screen flex">
            <div className="w-1/2 mt-28">
                        <h1 className="text-4xl font-bold mb-4">{bookTitle}</h1>
                        <h2 className="text-2xl text-gray-700 mb-4">{author}</h2>
                        <p className="text-2xl font-bold text-blue-600 mb-6">{"$20.00"}</p>
                    </div>
                <div className="containerw-1/2 py-12">
                
                    <div className="max-w-4xl mx-auto p-8 rounded-lg">
                        <img src={image} alt={bookTitle} className=" object-cover rounded-lg" />
                    </div>


                   

                </div>
            </div>
        </>


    )
}


export default BooksDetail;