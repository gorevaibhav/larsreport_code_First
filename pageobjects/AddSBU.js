const dataset=JSON.parse(JSON.stringify(require("../utils/logindataset.json")));
class AddSBU{
    constructor(page){
        this.page = page;
        this.ToolManager=page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a');
        this.ManageSBU=page.getByRole('link', { name: 'Manage SBU' });
        this.SBUcode =page.locator('#ctl00_ContentPlaceHolder1_ucManageSBU_txtSBUCode');
        this.SBUname=page.locator('#ctl00_ContentPlaceHolder1_ucManageSBU_txtSBUName');
        this.status=page.locator('#ctl00_ContentPlaceHolder1_ucManageSBU_DDStatus');
        this.save=page.locator('#ctl00_ContentPlaceHolder1_ucManageSBU_btnSave');
        this.sbuapprovemessage=page.locator("#ctl00_ContentPlaceHolder1_ucManageSBU_lblMessage");
        this.sbuduplicatemessage=page.locator("#ctl00_ContentPlaceHolder1_ucManageSBU_lblMessage");
        this.blankmessage=page.locator("#ctl00_ContentPlaceHolder1_ucManageSBU_valsum");
        //locator('#ctl00_ContentPlaceHolder1_ucApprove_TR_SBU').getByRole('cell', { name: 'Reject Accept', exact: true })
    }
   async addsbu(){
   await this.ToolManager.click();
   await this.ManageSBU.click();
   await this.SBUcode.fill(dataset.SBC);
   await this.SBUname.fill(dataset.SBN);
   await this.status.selectOption(({ label: 'Active' }));
   await this.save.click();
   console.log ( await this.sbuapprovemessage.textContent());
   

   }
   async addduplicatesbu(){
    await this.ToolManager.click();
    await this.ManageSBU.click();
    await this.SBUcode.fill(dataset.SBC);
    await this.SBUname.fill(dataset.SBN);
    await this.status.selectOption(({ label: 'Active' }));
    await this.save.click();
    console.log ( await this.sbuduplicatemessage.textContent());
    
}
   async addblanksbu(){
    await this.ToolManager.click();
    await this.ManageSBU.click();
    await this.SBUcode.fill(' ');
    await this.SBUname.fill(" ");
   // await this.status.selectOption(({ label: 'Active' }));
   //    await this.page.on('dialog', async (dialog) => {
   //    console.log('Dialog message:', dialog.message());
  //    await dialog.accept(); 
 //   });
  
    await this.save.click();
    console.log(await this.blankmessage.textContent());
    
}
 async verifyaddsbu(){
    await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
    await this.page.getByRole('link', { name: 'Manage SBU' }).click();
    
    await this.page.locator("//input[@id='ctl00_ContentPlaceHolder1_ucManageSBU_btnResetFilter']").click();
    
    await this.page.locator("#ctl00_ContentPlaceHolder1_ucManageSBU_txtSBUF").fill(dataset.SBN);
    await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageSBU_btnFilter').click();
  
    const SBUname = await this.page.textContent("//table[@id='ctl00_ContentPlaceHolder1_ucManageSBU_GVSBU']/tbody/tr[2]/td[4]");
    //table[@id='ctl00_ContentPlaceHolder1_ucManageLocations_GVLocation']/tbody/tr[2]/td[4]
    const trimmedText = SBUname.replace(/\s+/g, '');
    const trimmedText1 = dataset.SBN.replace(/\s+/g, '');
    
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
 
async ImportedSBU(){
   await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
  await this.page.getByRole('link', { name: 'Import' }).click();
  await this.page.getByRole('link', { name: 'Import SBU' }).click();
     

     const[uploadFiles] =  await Promise.all([

      this.page.waitForEvent("filechooser"),
      this.page.waitForTimeout(2000),
      this.page.click('input[type="file"]')
       ])
      
    await uploadFiles.setFiles(dataset.SBUPath);
    await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportSBU_btnImport').click();
   
    
    const text= await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportSBU_lblTotalCount').textContent();
    console.log(text);
    const text2=await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportSBU_lblMessImported').textContent();
    console.log(text2);
    const linkvisible= await this.page.getByRole('link', { name: 'Download Fail record(s) File' }).isVisible();
    console.log(linkvisible);
     
    if(linkvisible){
       await Promise.all([
        this.page.waitForEvent('download'),
        this.page.getByRole('link', { name: 'Download Fail record(s) File' }).click() 
       
     ])
    }
}
}module.exports ={AddSBU};
