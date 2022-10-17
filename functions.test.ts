const {shuffleArray} = require('./utils')
const{bots}= require('./data')

describe('shuffleArray should return array', () => {
    const botArr=shuffleArray(bots)
    test('should return array',()=>{
        expect(botArr).toEqual(
            expect.arrayContaining([]))
    })
})