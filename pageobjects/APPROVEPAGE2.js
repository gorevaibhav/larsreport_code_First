class APPROVEPAGE2 {
    constructor(page) {
      this.page = page;
    }
  
    async approvePage(s1, s11) {
      const sbuCode = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(2)');
      const sbuName = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(3)');
  
      const trElements = await this.page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr');
      const rowCount = trElements.length;
  
      if (sbuCode === s1 && sbuName === s11) {
        await this.page.click('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td');
        console.log('Going for loop');
      } else {
        for (let i = 2; i <= rowCount; i++) {
          const sbuCodeXPath = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td[2]`;
          console.log(sbuCodeXPath);
          const sbuCodeText = await this.page.textContent(sbuCodeXPath);
  
          const sbuCodeValue = sbuCodeText;
          console.log(sbuCodeValue);
  
          if (sbuCodeValue === s1) {
            console.log('Pass');
            const sbuNameXPath = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td[3]`;
            const sbuNameText = await this.page.textContent(sbuNameXPath);
  
            if (sbuNameText === s11) {
              const checkboxSelector = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td/input`;
              const checkboxElement = await this.page.$(checkboxSelector);
              console.log(checkboxElement);
              await checkboxElement.click();
            }
          }
        }
      }
    }
  }module.exports ={APPROVEPAGE2};
  
//   (async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto('your-page-url');
  
//     const yourPage = new YourPage(page);
//     await yourPage.approvePage('desired-s1-value', 'desired-s11-value');
  
//     await browser.close();
  
  
  