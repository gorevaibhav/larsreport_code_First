const dataset=JSON.parse(JSON.stringify(require("../utils/logindataset.json")));
const { test, expect } = require('@playwright/test');


class AddRoles{
 constructor(page){
   this.page=page;
   
   //this.table=page.locator("//table[@id='ctl00_ContentPlaceHolder1_ucManageUser_GVManageUser']");
   this.table=page.locator('tr');
   this.row=page.locator('td,th');
 }

 async adduser(){
   await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
   await this.page.getByRole('link', { name: 'Manage Users' }).click();
   await this.page.getByRole('link', { name: 'Add User' }).click();
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_DDRole').selectOption({label : dataset.Role});

   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_txtEmpID').fill(dataset.UserEmpId);
   await this.page.locator("#ctl00_ContentPlaceHolder1_ucUser_txtFName").fill(dataset.UserEmpName);
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_txtEmail').fill(dataset.UserEmail);
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation_chosen ul li input').dblclick();
   await this.page.locator("//div[@id='ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation_chosen']/ul/li/input").fill(dataset.location);
   await this.page.keyboard.press('Space');
   await this.page.keyboard.press('Enter');
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_chkSBU').filter('tbody tr td input').getByLabel(dataset.sec).click();
   const selectElement =  this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_lboxDept1');
   await selectElement.selectOption({label : 'Billing application'});
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_txtDesignation').fill('Testers');
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_DDApexRights').selectOption({label : 'No' });
   await this.page.locator('#ctl00_ContentPlaceHolder1_ucUser_btnSave').click();

 }
 async verifyadduser(){
        await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
        await this.page.getByRole('link', { name: 'Manage Users' }).click();
        await this.page.locator("//font[@id='Stm0p12i1eTX']/table/tbody/tr/td").click();
       
        await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageUser_ImageButton1').click(); 
       // await this.page.locator("//font[@id='Stm0p11i1eTX']/table/tbody/tr/td").click();
        await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageUser_btnResetFilter').click();
        
        await this.page.locator("#ctl00_ContentPlaceHolder1_ucManageUser_txtUser").fill(dataset.UserEmpId);
        await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageUser_btnFilter').click();
      
        const userid = await this.page.textContent("//table[@id='ctl00_ContentPlaceHolder1_ucManageUser_GVManageUser']/tbody/tr[2]/td[1]");
        //table[@id='ctl00_ContentPlaceHolder1_ucManageLocations_GVLocation']/tbody/tr[2]/td[4]
        const trimmedText = userid.replace(/\s+/g, '');
        const trimmedText1 = dataset.UserEmpId.replace(/\s+/g, '');
        
        if (trimmedText === trimmedText1) {
           console.log('Pass');
           console.log(trimmedText1);
          console.log(trimmedText);
        }
        else {
          console.log('Fail');
          console.log(trimmedText1);
          console.log(trimmedText);
        }
 }
 async grabpassword(){
   
    await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
    await this.page.getByRole('link', { name: 'Manage Users' }).click();
    await this.page.locator("//font[@id='Stm0p12i1eTX']/table/tbody/tr/td").click();
    await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageUser_ImageButton1').click(); 
    await this.page.locator("#ctl00_ContentPlaceHolder1_ucManageUser_txtUser").fill(dataset.UserEmpId);
    await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageUser_btnFilter').click();
    await this.page.locator("#ctl00_ContentPlaceHolder1_ucManageUser_chkShowPW").check();
    const password= await this.page.locator("//table[@id='ctl00_ContentPlaceHolder1_ucManageUser_GVManageUser']/tbody/tr[2]/td[2]").textContent();
    const newpass=password.replace(/\s+/g, '')
    
   // console.log(newpass);
    return newpass;

 }

async changepassword(getvalue){

  await this.page.getByRole('link', { name: 'My Account' }).click();
  await this.page.locator("#ctl00_ContentPlaceHolder1_ucMyAccount_aChangePWD").click();
  await this.page.locator("#ctl00_ContentPlaceHolder1_ucMyAccount_oldPwd").fill(getvalue);
  await this.page.locator("#ctl00_ContentPlaceHolder1_ucMyAccount_newPwd").fill('a');
  await this.page.locator("#ctl00_ContentPlaceHolder1_ucMyAccount_cPwd").fill('a');
  await this.page.locator("#ctl00_ContentPlaceHolder1_ucMyAccount_btnCpwd").click();
  const tx=  await this.page.locator("#ctl00_ContentPlaceHolder1_ucMyAccount_lblMessage").textContent();
  
  console.log(tx);
 

}



 
}module.exports={AddRoles}