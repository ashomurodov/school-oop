export interface BaseService<myType> {
  create(data: myType): any;

  getById(id: number): any;

  deleteById(id: number): any;

  isExist(data: myType) : any;
}
