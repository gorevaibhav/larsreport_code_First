class ApprovePage{
 constructor(page){
   this.page=page;
   this.approve= page.locator('#Stm0p0i8eTX > table > tbody > tr > td > a');
   this.approvemaster= page.getByRole('link', { name: 'Approve Master' });
   
   this.loccell = page.getByRole('cell', { name: 'LOCATION', exact: true });
   this.locfilter = page.getByRole('cell', { name: 'parle bandra122', exact: true });
   this.locapproveclick = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_GVLocation_ctl02_chk');
   this.newlocation=page.locator("//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVLocation']/tbody/tr/th/input")
   this.locaccept = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_btnLocAccept');
   this.acceptlocmessage=page.locator("#ctl00_ContentPlaceHolder1_ucApprove_lblLocationMsg");

   


   this.deptcell = page.getByRole('cell', { name: 'DEPARTMENT', exact: true });
   this.deptfilter = page.getByRole('cell', { name: 'Train', exact: true });
   this.deptapproveclick = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_GVDepartment_ctl02_chk');
   this.deptaccept = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_btnDeptAccept');
   this.acceptdepartmentmessage = page.locator("#ctl00_ContentPlaceHolder1_ucApprove_lblDepMsg");


   this.SBUcell = page.getByRole('cell', { name: 'SBU', exact: true });
   this.SBUfilter = page.getByRole('cell', { name: 'dnnagar1', exact: true });
   this.view = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU > tbody > .gridAltRow > td > #lnkLogs');
   this.SBUapproveclick = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU_ctl02_chk');
   this.SBUaccept = page.locator('#ctl00_ContentPlaceHolder1_ucApprove_btnSbuAccept');
   this.sbuacceptmessage = page.locator("#ctl00_ContentPlaceHolder1_ucApprove_lblSbuMsg");

  //  this.approvesbucode =  page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(2)');
  //   this.approvesbuname =  page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(3)');
      
 
 }


  //  async ApproveSBU(){
   
  //   await this.approve.click();
  //   await this.approvemaster.click();
  //   const sbucode = await page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(2)');
  //   const sbuname = await page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(3)');
  
  //   const trElements = await page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr');
  //   const a = trElements.length;
  
  //   if (sbucode === s1 && sbuname === s11) {
  //     await page.click('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td');
  //     console.log('go for loop');
  //   } else {
  //     for (let i = 2; i <= a; i++) {
  //       const bac = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td[2]`;
  //       console.log(bac);
  //        const TC = await page.textContent(bac);
  
  //       const SBUC = TC;
  //       console.log(SBUC);
        
  //       if (SBUC === s1) {
  //         console.log('Pass');
  //         const SBUN = await page.textContent(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td[3]`);
          
  //         if (SBUN === s11) {
  //           const TC11 = await page.$(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td/input`);
  //           console.log(TC11);
  //           await TC11.click();
  //         }
  //       }
  //     }
  //   }
    

    
    
  //    await this.SBUapproveclick.click();
  //    await this.newsbu.click();
  //    await this.SBUaccept.click();
  //    console.log( this.sbuacceptmessage.textContent());
    

  // }
 
   

  async APPROVEPAGESBU (SBC,SBN) {
    // const s1 = "9913";
    // const s11 = "PR5";

    await this.approve.click();
    await this.approvemaster.click();

  const sbucode = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(2)');
    const sbuname = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td:nth-child(3)');
  
    const trElements1 = await this.page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr');
    const a1 = trElements1.length;
  
    if (sbucode === SBC && sbuname === SBN) {
      await this.page.click('#ctl00_ContentPlaceHolder1_ucApprove_GVSBU tbody tr:nth-child(2) td');
     // console.log('go for loop');
    } else {
      for (let i = 2; i <= a1; i++) {
        const bac = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td[2]`;
      //  console.log(bac);
         const TC = await this.page.textContent(bac);
  
        const SBUC = TC;
      //  console.log(SBUC);
        
        if (SBUC === SBC) {
         // console.log('Pass');
          const SBUN = await this.page.textContent(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td[3]`);
          
          if (SBUN === SBN) {
            const TC11 = await this.page.$(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVSBU']/tbody/tr[${i}]/td/input`);
            console.log(TC11);
            await TC11.click();
          }
        }
      }
    }
    

    await this.SBUaccept.click();
    const message=this.page.locator("#ctl00_ContentPlaceHolder1_ucApprove_lblSbuMsg");
    console.log(message);
    //console.log(this.sbuacceptmessage.textContent());
}
async APPROVEPAGEDEP (DEN) {
   //const s1 = "parle bandra128255";
   //const s11 = "PR5";

   await this.approve.click();
   await this.approvemaster.click();

  const deptname = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVDepartment tr:nth-child(2) td:nth-child(2)');
  console.log(deptname);
  //onst sbuname = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVDepartment tr:nth-child(2) td:nth-child(3)');

  const trElements = await this.page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GVDepartment tbody tr');
  const a = trElements.length;

  if (deptname === DEN ) {
    await this.page.click('#ctl00_ContentPlaceHolder1_ucApprove_GVDepartment tbody tr:nth-child(2) td');
    console.log('go for loop');
  } else {
    for (let i = 2; i <= a; i++) {
      const bac = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVDepartment']/tbody/tr[${i}]/td[2]`;
      console.log(bac);
       const TC = await this.page.textContent(bac);

      const SBUC = TC;
      console.log(SBUC);
      
      // if (SBUC === s1) {
      //   console.log('Pass');
      //   const SBUN = await this.page.textContent(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVDepartment']/tbody/tr[${i}]/td[3]`);
        
        if (SBUC === DEN) {
          const TC11 = await this.page.$(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVDepartment']/tbody/tr[${i}]/td/input`);
          console.log(TC11);
          await TC11.click();
        }
      //}
    }
  }

       //await this.deptapproveclick.click();
      //  await this.page.on('dialog', async (dialog) => {
      //        //console.log('Dialog message:', dialog.message());
      //        await dialog.accept(); 
      //      });
  await this.deptaccept.click();
  const message=this.page.getByText("#ctl00_ContentPlaceHolder1_ucApprove_lblDepMsg");
  console.log(message);
    // console.log(this.acceptdepartmentmessage.textContent());
}
  async APPROVEPAGELOC (LcnMAN) {
  //const s1 = "parle jogeshwari";
  //const s11 = "PR5";

  await this.approve.click();
  await this.approvemaster.click();

 const deptname = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVLocation tr:nth-child(2) td:nth-child(2)');
 console.log(deptname);
 //const sbuname = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVDepartment tr:nth-child(2) td:nth-child(3)');

 const trElements = await this.page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GVLocation tbody tr');
 const a = trElements.length;

 if (deptname === LcnMAN ) {
   await this.page.click('#ctl00_ContentPlaceHolder1_ucApprove_GVLocation tbody tr:nth-child(2) td');
   //console.log('go for loop');
 } else {
   for (let i = 2; i <= a; i++) {
     const bac = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVLocation']/tbody/tr[${i}]/td[2]`;
     //console.log(bac);
      const TC = await this.page.textContent(bac);

     const SBUC = TC;
     //console.log(SBUC);
     
     // if (SBUC === s1) {
     //   console.log('Pass');
     //   const SBUN = await this.page.textContent(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVDepartment']/tbody/tr[${i}]/td[3]`);
       
       if (SBUC === LcnMAN) {
         const TC11 = await this.page.$(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVLocation']/tbody/tr[${i}]/td/input`);
         console.log(TC11);
         await TC11.click();
       }
     //}
   }
 }
   
     
    await this.locaccept.click();
    const message=this.page.locator("#ctl00_ContentPlaceHolder1_ucApprove_lblLocationMsg");
    console.log(message);
}



async approveauditarea(AuditArea,SBUNAME){

  await this.approve.click();
  await this.approvemaster.click();

  const auditarea1 = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea tbody tr:nth-child(2) td:nth-child(2)');
    const SBUNAME1 = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea tbody tr:nth-child(2) td:nth-child(3)');
  
    const trElements = await this.page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea tbody tr');
    const a = trElements.length;
  
    if (auditarea1 === AuditArea && SBUNAME1 === SBUNAME) {
      await this.page.click('#ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea tbody tr:nth-child(2) td');
     // console.log('go for loop');
    } else {
      for (let i = 2; i <= a; i++) {
        const AA1 = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea']/tbody/tr[${i}]/td[2]`;
       console.log(AA1);
         const AA3 = await this.page.textContent(AA1);
  
        const AA4 = AA3;
        console.log(AA4);
        
        if (AA4 === AuditArea) {
          console.log('Pass');

          const SBUN22 = await this.page.textContent(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea']/tbody/tr[${i}]/td[3]`);
          
          console.log(SBUN22);

          if (SBUN22 === SBUNAME) {
            const TC22 = await this.page.$(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GvAuditArea']/tbody/tr[${i}]/td/input`);
            console.log(TC22);
            await TC22.click();
          }
        }
      }
    }
await this.page.locator("#ctl00_ContentPlaceHolder1_ucApprove_btnAuditAccept").click();

}

async ApproveUser(UserEmpID,UserEmpName){

 // const s1 = "9913";
    // const s11 = "PR5";

    await this.approve.click();
    await this.approvemaster.click();

  const UserEmpI = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVUsers tbody tr:nth-child(2) td:nth-child(3)');
    const UserEmpn = await this.page.textContent('#ctl00_ContentPlaceHolder1_ucApprove_GVUsers tbody tr:nth-child(2) td:nth-child(4)');
  
    const trElements = await this.page.$$('#ctl00_ContentPlaceHolder1_ucApprove_GVUsers tbody tr');
    const a = trElements.length;
  
    if (UserEmpI ===  UserEmpID && UserEmpn === UserEmpName) {
      await this.page.click('#ctl00_ContentPlaceHolder1_ucApprove_GVUsers tbody tr:nth-child(2) td');
     // console.log('go for loop');
    } else {
      for (let i = 2; i <= a; i++) {
        const bac = `//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVUsers']/tbody/tr[${i}]/td[3]`;
      //  console.log(bac);
         const TC = await this.page.textContent(bac);
  
        const SBUC = TC;
      //  console.log(SBUC);
        
        if (SBUC === UserEmpID) {
         // console.log('Pass');
          const SBUN = await this.page.textContent(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVUsers']/tbody/tr[${i}]/td[4]`);
          
          if (SBUN === UserEmpName) {
            const TC11 = await this.page.$(`//table[@id='ctl00_ContentPlaceHolder1_ucApprove_GVUsers']/tbody/tr[${i}]/td/input`);
            console.log(TC11);
            await TC11.click();
          }
        }
      }
    }
      await this.page.locator('#ctl00_ContentPlaceHolder1_ucApprove_btnUserAccept').click();
}
  }

module.exports ={ApprovePage};