
export interface IHash {
    hash(content: string) : Promise<string>;
    compareContent(value: string, compare: string) : Promise<boolean>;
}
