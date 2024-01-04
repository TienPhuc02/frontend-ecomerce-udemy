export {};

declare global {
  interface IProduct {
    _id: string;
    __v: number;
    updatedAt: string;
    name: string;
    stock: number;
    seller: string;
    ratings: number;
    price: number;
    numOfReview: number;
    description: string;
    category: string;
    createdAt: string;
    images: IProductImages[];
    reviews: IProductReviews[];
  }
  interface IProductImages {
    public_id: string;
    url: string;
    _id: string;
  }
  interface IProductReviews {
    comment: string;
    rating: number;
    user: string;
    _id: string;
  }
  interface IBackendRes<T> {
    error?: string | string[];
    message?: string;
    statusCode?: number;
    statusText: string;
    data?: T;
    headers: any;
    config: any;
    request?: any;
  }
  interface IDataBackendRes {
    filteredProductCount: number;
    message: string;
    products: IProduct[];
  }
  interface IUser {
    name: string;
    email: string;
    avatar: {
      public_id: string;
      url: string;
    };
    role: string;
  }
}
