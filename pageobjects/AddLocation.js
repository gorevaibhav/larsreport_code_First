const dataset=JSON.parse(JSON.stringify(require("../utils/logindataset.json")));
class AddLocationPage{
    constructor(page){
        this.page = page;
        this.ToolManager=page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a');
        this.ManageLocation=page.getByRole('link', { name: 'Manage Locations' });
        this.AddLocation=page.getByRole('link', { name: 'Add Location' });
        this.locationcode=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_txtLocationCode');
        this.locationname=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_txtLocationName');
        this.locationtype=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_ddlLocationType');
        this.region=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_ddlRegion');
        this.country=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_ddlCountry');
        this.state=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_ddlState');
        this.city=page.locator("#ctl00_ContentPlaceHolder1_ucLocations_ddlCity");
        this.status=page.locator('#ctl00_ContentPlaceHolder1_ucLocations_ddlStatus');
        this.save=page.getByRole('button', { name: 'Save' });
        this.locationmessage=page.locator("#ctl00_ContentPlaceHolder1_ucLocations_lblMessage");
        this.blankmessage=page.locator("#ctl00_ContentPlaceHolder1_ucManageLocation_valsum");
        
        this.acceptdialog= page.on('dialog',async dialog=>{
            await  dialog.accept();
          })
        
    }
    async addlocation(){
        await this.ToolManager.hover();
        await this.ManageLocation.hover();
        await this.AddLocation.hover();
        await this.AddLocation.click();
        await this.locationcode.fill(dataset.Lcd);
        await this.locationname.fill(dataset.LcnMAN);
        await this.locationtype.selectOption(({ label: dataset.LType }));
        await this.region.selectOption(({label: dataset.LRegion}));
        await this.country.selectOption(({label: dataset.LCountry}));
        await this.state.selectOption(({label:dataset.LState}));
        await this.city.selectOption(({label: dataset.LCity}));
        await this.status.selectOption(({label: dataset.LStatus}));
        await this.save.click();
        console.log ( await this.locationmessage.textContent());
        // approve method
        //tool manger verify

    }
       

    async addduplicatelocation(){
        await this.ToolManager.hover();
        await this.ManageLocation.hover();
        await this.AddLocation.hover();
        await this.AddLocation.click();
        await this.locationcode.fill(dataset.Lcd);
        await this.locationname.fill(dataset.LcnMAN);
        await this.locationtype.selectOption(({ label: dataset.LType }));
        await this.region.selectOption(({label: dataset.LRegion}));
        await this.country.selectOption(({label: dataset.LCountry}));
        await this.state.selectOption(({label:dataset.LState}));
        await this.city.selectOption(({label: dataset.LCity}));
        await this.status.selectOption(({label: dataset.LStatus}));
        await this.save.click();
        console.log(await this.locationmessage.textContent());
        
        
    }
    async addblanklocation(){
        await this.ToolManager.hover();
        await this.ManageLocation.hover();
        await this.AddLocation.hover();
        await this.AddLocation.click();
        // await this.locationcode.fill();
        // await this.locationname.fill();
        // await this.page.on('dialog', async (dialog) => {
        //     console.log('Dialog message:', dialog.message());
        //     await dialog.accept(); 
        //   });
        
        await this.save.click();
       // console.log(await this.blankmessage.textContent());
    }
    async verifyaddlocation(LcnMAN){
        await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
        await this.page.getByRole('link', { name: 'Manage Locations' }).click();
        await this.page.locator("//font[@id='Stm0p11i1eTX']/table/tbody/tr/td").click();
        await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageLocations_btnResetFilter').click();
        
        await this.page.locator("#ctl00_ContentPlaceHolder1_ucManageLocations_txtLocationName").fill(dataset.LcnMAN);
        await this.page.locator('#ctl00_ContentPlaceHolder1_ucManageLocations_btnFilter').click();
      
        const locname = await this.page.textContent("//table[@id='ctl00_ContentPlaceHolder1_ucManageLocations_GVLocation']/tbody/tr[2]/td[4]");
        //table[@id='ctl00_ContentPlaceHolder1_ucManageLocations_GVLocation']/tbody/tr[2]/td[4]
        const trimmedText = locname.replace(/\s+/g, '');
        const trimmedText1 = dataset.LcnMAN.replace(/\s+/g, '');
        
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

    async ImportLocation(){
        await this.page.locator('#Stm0p0i14eTX > table > tbody > tr > td > a').click();
        await this.page.getByRole('link', { name: 'Import' }).click();
        await this.page.getByRole('link', { name: 'Import Location' }).click();
     

     const[uploadFiles] =  await Promise.all([

      this.page.waitForEvent("filechooser"),
      this.page.waitForTimeout(2000),
      this.page.click('input[type="file"]')
       ])
      
     await uploadFiles.setFiles(dataset.LocPath);
     await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportLocation_btnImport').click();
   
    
     const text= await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportLocation_lblTotalCount').textContent();
     console.log(text);
     const text2=await this.page.locator('#ctl00_ContentPlaceHolder1_ucImportLocation_lblMessImported').textContent();
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

module.exports ={AddLocationPage};