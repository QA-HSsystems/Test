const puppeteer = require('puppeteer'); 

async function testReg(){
    console.log('Ascendio');
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 20,
    });

   console.log('Avada Kedavra');
    const page = await browser.newPage();

     console.log('Aqua Eructo');
    await page.goto('https://identity.getpostman.com/signup', { waitUntil: 'networkidle0' }); 
	
	console.log('Alohomora');
	await page.type('#email', 'Voldemort@yahoo.com');
	
	console.log('Aguamenti');
  await page.type('#username', 'Dark_Lord77');
  
  console.log('Accio');
  await page.type('#password', 'Expelliarmus');
	
	 console.log('Alarte Ascendare');
	await page.click('#sign-up-btn');
	
const startURL = 'https://identity.getpostman.com/signup'
if (page.url() === startURL) { console.log('Anapneo') }
else { console.log('Anteoculatia') }	

  
   console.log('Wingardium Leviosa');
    await browser.close();
	
	
}

testReg(); 

