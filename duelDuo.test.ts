
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000')
    await driver.sleep(2000)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.xpath('/html/body/h1'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('draw button displays div "choices" when clicked', async()=>{
    const drawBtn=await driver.findElement(By.xpath('/html/body/button[2]'))
    await drawBtn.click()
    await driver.sleep(2000)
    const divChoices=await driver.findElement(By.id("choices"))
    const displayed=await divChoices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('add to duo button displays div "player-duo" when clicked', async()=>{
    const drawBtn=await driver.findElement(By.xpath('/html/body/button[2]'))
    await drawBtn.click()
    await driver.sleep(1000)
    const addBtn=await driver.findElement(By.xpath('/html/body/section[1]/div/div[1]/button'))
    await addBtn.click()
    await driver.sleep(1000)
    const playerDuo= await driver.findElement(By.id('player-duo'))
    const displayed=await playerDuo.isDisplayed()
    expect (displayed).toBe(true)
    await driver.sleep(1000)
})