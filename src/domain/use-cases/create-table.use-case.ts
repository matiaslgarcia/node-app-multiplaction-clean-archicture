export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number
}

export class CreateTable implements CreateTableUseCase {


    constructor(
        // REalizar injeccion de dependecias
    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let outMessage = ''
        for (let i = 1; i <= limit; i++) {
            outMessage += `${base} x ${i.toString()} = ${(i * base).toString()}\n`

        }

        return outMessage
    }
}