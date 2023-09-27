export interface trendType {
    title: string,
    desc: string,
    color: string,
    img: string
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type flashSalesType = {
    id: number,
    header: string,
    rating: number,
    price: number,
    updatedprice: number,
    desc: string,
    discount: number,
    hours: string,
    minutes: string,
    seconds: string,
    image: string
}
export interface trendsTypes {
    id: number,
    title: string,
    desc: string,
    color: string,
    img: string,
    images: string,

}
// export interface TimeType{
//     Time:{
//     hours:number,
//     minutes:number,
//     seconds:number,
// }
// }

export type colorType = {
    id: number,
    color: string,
    checked: boolean
}
export type sizeType = {

    id: number,
    title: string,
    clicked: boolean,
}
export type clothesType = {

    id: number,
    title: string,
    desc: string,
    updatedprice: number,
    price: number,
    discount: number,
    image: string,
    fav: boolean,
    quantity:number,
    size?:string[],
        color?:string[],

}
export interface ProductdetailType {
    id: number,
    title: string,
    price: sting,
    size: string[],
    quantity: number,
    color: string[],
    delieveryTime: string;
    image:string
}
export type otherProductsType={
    id:number,
        title:string,
        updatedPrice:string,
        price:string,
        discount:string,
        image:dress1
}