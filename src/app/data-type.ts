export interface SignUp {
    Username: string
    Password: string
    Email: string
}
export interface Login {
    Password: string
    Email: string
}
export interface Product {
    productname: string
    productprice: number
    productcolor: string
    productcategory: string
    productdescription: string
    productimageurl: string
    id: number
}
