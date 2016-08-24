///<reference path="HttpClient.ts" />
import { HttpClient} from "./HttpClient";

export abstract class BaseService<T> {
    protected httpClient: HttpClient;
    error: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any;
    private dataObject: T;
    protected objectUrl: string;
    protected baseUri: string;
    protected statusCode: { [key: string]: any; };

    abstract createEmptyDataObject(): T;
    constructor(dataObject?: T) {
        if (dataObject) {
            this.dataObject = dataObject;
        } else {
            this.dataObject = this.createEmptyDataObject();
        }
        if (this.dataObject != null) {
            this.objectUrl = `api/${this.dataObject.constructor.name}`;
        }
        this.httpClient = new HttpClient();
        this.baseUri = "http://localhost:13144/";

    }
    searchObjects(queryString: string, callback: (data: Array<any>) => any): void {
        this.httpClient.get(this.baseUri + this.objectUrl + "/" + queryString, callback, this.error, this.statusCode);
    }
    getObjects(callback: (data: Array<any>) => any): void {
        this.httpClient.get(this.baseUri + this.objectUrl, callback, this.error, this.statusCode);
    }
    getObject(id: number, callback: (data: any) => any): void {
        this.httpClient.get(this.baseUri + this.objectUrl+"/"+id, callback, this.error, this.statusCode);
    }
    updateObject(item: any, callback: (data: any) => any): void {
        this.httpClient.put(this.baseUri + this.objectUrl, item, callback, this.error, this.statusCode);
    }
    insertObject(item: any, callback: (data: any) => any): void {
        this.httpClient.post(this.baseUri + this.objectUrl, item, callback, this.error, this.statusCode);
    }
    delete(id: number, callback: (data: any) => any): void {
        this.httpClient.delete(this.baseUri + this.objectUrl +"/"+ id, callback, this.error, this.statusCode);
    }
}