import {assert} from 'chai'
import index from '../controllers/Total.js'


describe("/login",()=>{
    describe("test add",()=>{
        it("test add",()=>{
            let results=index.addition(5,4)
            assert.equal(results, 9, "Pass");
        })
        it("test add-1",()=>{
            let results=index.sub(4,2)
            assert.equal(results, 2, "Pass");
        })
    })
})

