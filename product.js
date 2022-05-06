import { EventEmitter } from 'events';
export default class Product {
    constructor({
        onCreate,
        service
    }) {
        this.service = service;
        this.source = new EventEmitter()
        this.source.on('create', onCreate)
    }

    // data = { description, id, price }
    #isValid (data) {

    }
    async create(data) {
        this.#isValid(data)
        const message = await this.service.save(data)
        return message.toUpperCase()
    }
}