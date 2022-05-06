import assert from 'assert.js'
import Product from './product.js'
import Service from './service.js'

// should thrown an error when description is less than 5 characters long
{
    const params = {
        description: 'my p',
        id: 1,
        price: 1000
    }

    const product = new Product({
        onCreate: () => {},
        service: new Service()
    })

    assert.rejects(
        () => product.create(params),
        { message: 'description must be higher than 5' },
        'it should throw an error with wrong description'
    )   
}

// should save product successfully 
{
    const params = {
        description: 'my product',
        id: 1,
        price: 1000
    }

    const product = new Product({
        onCreate: (msg) => console.log('chamou onCreate', msg),
        service: new Service()
    })

    const result = await product.create(params)
}