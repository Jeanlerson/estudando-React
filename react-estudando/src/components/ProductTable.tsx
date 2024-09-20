import { Product } from "@/types/Product"

type Props = {
    product: Product[];
}

export const ProductTable = ({ product }: Props) => {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Produto</th>
                    <th className="p-3">Trim 1</th>
                    <th className="p-3">Trim 2</th>
                    <th className="p-3">Total Geral</th>
                </tr>
            </thead>
            <tbody>
                {product.map(product => (
                    <tr key={product.id} className="text-gray-600 bg-gray-400 border-b border-gray-600">
                        <td className="p-3 font-bold">{product.productName}</td>
                        <td className="p-3">R$ {product.trim1.toFixed(2)}</td>
                        <td className="p-3">R$ {product.trim2.toFixed(2)}</td>
                        <td className="p-3">R$ {(product.trim1 + product.trim2).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}