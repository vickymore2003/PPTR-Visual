const puppeteer = require('puppeteer')
const { percySnapshot } = require('@percy/puppeteer')

describe('Percy vicual Test', () => {
	let browser
	let newPage
	beforeAll(async function () {
		browser = await puppeteer.launch({ headless: true })
		page = browser.newPage()
	})
	afterAll(async function () {
		browser.close()
	})

	test('Full page percy snapshot', async() => {
		await page.goto('https://www.example.com/')
		await page.waitFor(1000)
		await page.percySnapshot(page, 'Example Page')
	})
})
