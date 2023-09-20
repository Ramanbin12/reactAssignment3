export interface trendType{
    title:string,
    desc:string,
    color:string,
    img:string
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type flashSalesType={
    id:number,
    header:string,
    rating:number,
    price:number,
    updatedprice:number,
    desc:string,
    discount:number,
    hours:string,
        minutes:string,
        seconds:string,
    image:string
}
// export interface TimeType{
//     Time:{
//     hours:number,
//     minutes:number,
//     seconds:number,
// }
// }