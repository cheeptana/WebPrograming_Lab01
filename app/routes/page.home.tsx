import { Tbook } from "./data";

function TableProduct({ Id, Titla, Cover, Description, Category, Price, Bestseller, Flashsale }:
    { Id: string, Titla: string, Cover: string, Description: string, Category: string, Price: number, Bestseller: boolean, Flashsale: boolean }) {
    return (
        <>
            

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Cover
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className=" h-20 w-20" src={Cover} alt="" />
                </th>
                <td className="px-6 py-4">
                    {Titla}
                </td>
                <td className="px-6 py-4">
                    {Category}
                </td>
                <td className="px-6 py-4">
                    {Price}
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </>
    )
}

export default function Homepage({ }) {
    const cardframe = Tbook.map(
        cardItem =>
            <center>
                <div>
                    <TableProduct
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

            {cardframe}

        </>
    )
}