import { Product } from "../../..//types/product";

const sortByPrice = (products: Product[]): Product[] => {
    return [...products].sort((a, b) => a.price - b.price);
};

const sortByRating = (products: Product[]): Product[] => {
    return [...products].sort((a, b) => b.rating - a.rating);
};

const sortByName = (products: Product[]): Product[] => {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
};

export const strategies: Record<string, (products: Product[]) => Product[]> = {
    price: sortByPrice,
    rating: sortByRating,
    name: sortByName
};