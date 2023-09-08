const dataset=JSON.parse(JSON.stringify(require("../utils/logindataset.json")));

class AddDepartment{
    constructor(page){
        this.page = page;
        this.ToolManager=page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a');
        this.ManageDepartment=page.getByRole('link', { name: 'Manage Departments' });
        this.DepartmentName=page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartments_txtDeptName");
        this.depstatus=page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartments_DDStatus");
        this.save=page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartments_btnSave");
        this.duplicatemessage=page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartments_lblMessage");
        this.approvedepartment=page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartments_lblMessage");
        this.blankmessage=page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartment_valsum");
    }
    async adddepartment(loc){
        await  this.ToolManager.click();
        await  this.ManageDepartment.click();
        await  this.DepartmentName.fill(dataset.DEN);
        await this.depstatus.selectOption(({ label: 'Active' }));
        await this.save.click();
        console.log ( await this.approvedepartment.textContent());
    }
    async addduplicatedepartment(){
        await  this.ToolManager.click();
        await  this.ManageDepartment.click();
        await  this.DepartmentName.fill(dataset.DEN);
        await this.depstatus.selectOption(({ label: 'Active' }));
        await this.save.click();
        console.log ( await this.duplicatemessage.textContent());
    }
    async addblankdepartment(){
        await  this.ToolManager.click();
        await  this.ManageDepartment.click();
        //await  this.DepartmentName.fill();
        // await this.depstatus.selectOption(({ label: 'Active' }));
        await this.save.click();
     //   console.log(await this.blankmessage.textContent());
    //    await this.page.on('dialog', async (dialog) => {
    //         console.log('Dialog message:', dialog.message());
    //         await dialog.accept(); 
    //       });
        
    }
       
    async verifyAddDepartment(){
                await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
                await this.page.getByRole('link', { name: 'Manage Departments' }).click();
                
                await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageDepartments_btnResetFilter').click();
                
                await this.page.locator("#ctl00_ContentPlaceHolder1_ucManageDepartments_txtFDeptName").fill(dataset.DEN);
                await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageDepartments_btnFilter').click();
              
                const depname = await this.page.textContent("//table[@id='ctl00_ContentPlaceHolder1_ucManageDepartments_GVDepartment']/tbody/tr[2]/td[3]");
                //table[@id='ctl00_ContentPlaceHolder1_ucManageLocations_GVLocation']/tbody/tr[2]/td[4]
                const trimmedText = depname.replace(/\s+/g, '');
                const trimmedText1 = dataset.DEN.replace(/\s+/g, '');
                
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
        
    async ImportDepartment(){
        await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
        await this.page.getByRole('link', { name: 'Import' }).click();
        await this.page.getByRole('link', { name: 'Import Department' }).click();
           
      
           const[uploadFiles] =  await Promise.all([
      
            this.page.waitForEvent("filechooser"),
            this.page.waitForTimeout(2000),
            this.page.click('input[type="file"]')
             ])
            
          await uploadFiles.setFiles(dataset.DepPath);
          await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportDepartment_btnImport').click();
         
          
          const text= await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportDepartment_lblTotalCount').textContent();
          console.log(text);
          const text2=await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportDepartment_lblMessImported').textContent();
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
        
        }
     
module.exports ={AddDepartment};