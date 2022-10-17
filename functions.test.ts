const {shuffleArray} = require('./utils')
const{bots}= require('./data')

describe('shuffleArray should return array', () => {
    const shuffArr=shuffleArray(bots)
    test('should return array',()=>{
        expect(shuffArr).toEqual(
            expect.arrayContaining([]))
    })
    test('input array is same length as shuffled array',()=>{
        expect(shuffArr.length).toEqual(bots.length)
           
    })
})
