import { Tbook } from "./data";
import Headert from "./temple/header";

function CardProduct({ Id, Titla, Cover, Description, Category, Price, Bestseller, Flashsale }:
    { Id: string, Titla: string, Cover: string, Description: string, Category: string, Price: number, Bestseller: boolean, Flashsale: boolean }) {
    return (
        <>
            <a href={Id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Cover} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Titla}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Description}</p>
                </div>
            </a>
        </>
    )
}
export default function CardDetail({ }) {
    const cardframe = Tbook.map(
        cardItem =>
            <center>
                <div className="my-8">
                    <CardProduct
                        Id={cardItem.Id}
                        Titla={cardItem.Title}
                        Cover={cardItem.Cover}
                        Description={cardItem.Description}
                        Category={cardItem.Category}
                        Price={cardItem.Price}
                        Bestseller={cardItem.Bestseller}
                        Flashsale={cardItem.Flashsale}
                    />
                </div>
            </center>
    )
    return (
        <>
        <Headert/>
            {cardframe}
        </>
    )
}