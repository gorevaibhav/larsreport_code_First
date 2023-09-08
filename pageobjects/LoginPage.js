const dataset=JSON.parse(JSON.stringify(require("../utils/logindataset.json")));
const { test, expect } = require('@playwright/test');
class LoginPage{
    constructor(page)
{
    this.page = page;
    this.userName=page.locator('#txtEmpID');
    this.Password=page.locator('#Test');
    this.log=page.locator('#imgLogin');
    this.logout=page.getByRole('link', { name: 'Logout' });
}
async goTo(){
    await this.page.goto("http://10.0.77.201/Lars_demo/Login.aspx");
    
}
async validlogin(){
    await this.userName.type(dataset.Vaemail);
    await this.Password.type(dataset.Vapass);
    await this.log.click();
}


async Approvelogin(){
    await this.userName.type(dataset.Apemail);
    await this.Password.type(dataset.Appass);
    await this.log.click();

}
async NewUserLogin(email,pass){
    await this.userName.type(email);
    await this.Password.type(pass);
    await this.log.click();
    const text= (await this.page.getByText(/Welcome/).innerText()).split(' ')[1];
    console.log("New user login :",text);
    //await page.locator('#ctl00_ContentPlaceHolder1_ctl01_UP td').filter({ hasText: dataset.UserEmpName })
    // await expect(page.locator("[align='right']")).toHaveText(dataset.UserEmpName);
    
}
async Logout(){
    await this.logout.click();
}
} 
  module.exports ={LoginPage};