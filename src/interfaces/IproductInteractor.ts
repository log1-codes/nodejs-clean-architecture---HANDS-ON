export interface IProductInteractor {

    createProduct(input: any) : any  ;
    updateStock(id: number, stock : number) : any ; 
    getProducts(limit : number, offset : number)  : any 

}