const { test, expect } = require('@playwright/test');
//const {excel} = require('exceljs');
const{LoginPage} = require('../pageobjects/LoginPage.js');
const{AddLocationPage} = require('../pageobjects/AddLocation.js');
const{ApprovePage} = require('../pageobjects/ApprovePage.js');
const{AddSBU} = require('../pageobjects/AddSBU.js');
const{AddDepartment} = require('../pageobjects/AddDepartment.js');
const{AddRoles} = require('../pageobjects/AddRoles.js');
const { exec } = require('child_process');
const dataset=JSON.parse(JSON.stringify(require("../utils/logindataset.json")));

 //test('add location', async ({ page }) => {
//     const email="p0005"
//     const pass= "a" 
//     const loginpage = new LoginPage(page);
//     const locationadd = new AddLocationPage(page);
//     const approve = new ApprovePage(page);
//     const addsb = new AddSBU(page);

//     await loginpage.goTo();
//     await loginpage.validlogin(email,pass);
//     await page.pause();
//     //await addsb.addsbu();
//    // await locationadd.addlocation();
//     // await approve.ApproveDepartment();
//     // await approve.alertaccept(page);
//     //await addsb.addsbu();
//     await approve.ApproveSBU(); 
    
    
// //    await page.locator('#Stm0p0i8eTX > table > tbody > tr > td > a').click();
// //    await page.getByRole('link', { name: 'Approve Master' }).click();
// //    await page.pause();
   
// //    await page.getByRole('cell', { name: 'LOCATION', exact: true }).click();
// //    await page.getByRole('cell', { name: 'testing 1 pr', exact: true }).click();
// //    await page.locator('#ctl00_ContentPlaceHolder1_ucApprove_GVLocation_ctl02_chk').check();
// //    await page.locator('#ctl00_ContentPlaceHolder1_ucApprove_btnLocAccept').click()
    
//     page.on('dialog',async dialog=>{
//       await  dialog.accept();
//     })
//     await page.click('#ctl00_ContentPlaceHolder1_ucApprove_btnSbuAccept');
   
    
  
// });


  test('Add Approve Verify Location SBU Department Role ',async ({ page })=>{
  
  const loginpage = new LoginPage(page);
  const addlocation = new AddLocationPage(page);
  const adddepartment = new AddDepartment(page);
  const addsb = new AddSBU(page);
  const role = new AddRoles(page);
  const approvepage = new ApprovePage(page);
  
  
   await loginpage.goTo();
   await page.pause();

   await loginpage.validlogin();
   await addlocation.addlocation();
   await addlocation.addduplicatelocation();
   await addlocation.addblanklocation();
   await loginpage.Logout();
   await loginpage.Approvelogin();
   await approvepage.APPROVEPAGELOC(dataset.LcnMAN); 
   await addlocation.verifyaddlocation();
   await loginpage.Logout();

   await loginpage.validlogin();
   await addsb.addsbu();
   await addsb.addduplicatesbu();
   await addsb.addblanksbu();
   await loginpage.Logout();
   await loginpage.Approvelogin(); 
   await approvepage.APPROVEPAGESBU(dataset.SBC,dataset.SBN); 
   await addsb.verifyaddsbu();
   await loginpage.Logout();
   
   await loginpage.validlogin();
   await adddepartment.adddepartment();
   await adddepartment.addduplicatedepartment();
   await adddepartment.addblankdepartment();
   await loginpage.Logout();
   await loginpage.Approvelogin();
   await approvepage.APPROVEPAGEDEP(dataset.DEN); 
   await adddepartment.verifyAddDepartment()
   await loginpage.Logout();

 
   await loginpage.validlogin();
   await role.adduser();
   await loginpage.Logout();
   await loginpage.Approvelogin();
   await approvepage.ApproveUser(dataset.UserEmpId,dataset.UserEmpName);
   await role.verifyadduser();
   const getvalue = await role.grabpassword();
   console.log(getvalue);
   await loginpage.Logout();
   await loginpage.NewUserLogin(dataset.UserEmpId,getvalue);
   await role.changepassword(getvalue);
  
   await loginpage.Logout();
   await loginpage.NewUserLogin(dataset.UserEmpId,dataset.Vapass);
   await loginpage.Logout();


});


test('ADD USER', async ({ page }) => {
  const checkboxLabel = 'Accounts and Finance';
  

  const loginpage = new LoginPage(page);
  const addlocation = new AddLocationPage(page);
  const approvepage = new ApprovePage(page);
  const role = new AddRoles(page);
  await loginpage.goTo();
   await loginpage.validlogin(dataset.email,dataset.pass);
  await page.pause();

  // const msg=await page.locator('#ctl00_ContentPlaceHolder1_ucManageUser_lblMessage').textContent();
  
  // await addlocation.addlocation(dataset.LOCN);
  // await loginpage.Logout();
  // await loginpage.Approvelogin(dataset.email1,dataset.pass1);
  // await approvepage.APPROVEPAGELOC(dataset.LOCN); 
  // await addlocation.verifyaddlocation(dataset.LOCN);
  // await role.adduser(dataset.UserEmpId,dataset.UserEmpName,dataset.location,dataset.sec);
  // await approvepage.ApproveUser(dataset.UserEmpId,dataset.UserEmpName);
  // await role.verifyadduser(dataset.UserEmpId);
  //await role.grabpassword(dataset.UserEmpId);

  //add user
 // await role.adduser(dataset.UserEmpId,dataset.UserEmpName,dataset.location,dataset.sec);
 // await approvepage.ApproveUser(dataset.UserEmpId,dataset.UserEmpName);
  //await role.verifyadduser(dataset.UserEmpId);
  // const getvalue = await role.grabpassword();
  // console.log(getvalue);
  // await loginpage.Logout();
  // await loginpage.validlogin(dataset.UserEmpId,getvalue);
  // await role.changepassword(getvalue);
  // await loginpage.Logout();
 

  // await loginpage.validlogin(dataset.UserEmpId,dataset.pass);
  
   

 //page.locator("#ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation_chosen ul div ul")
// await page.locator('select[id="ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation"] ul div ul li:has-text("0028-Thane - Bhayander (  )")').click();

 //selenium locator await page.locator('//select[@id='ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation']/option[text()='0028-Thane - Bhayander (  )']')
 //const optionSelector = await page.locator('select[id="ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation"]').waitForSelector(option ,has-text("0028-Thane - Bhayander (  )"));
 


 //await optionSelector.click();
 


 
    
  // const location= page.locator('#ctl00_ContentPlaceHolder1_ucUser_lstBoxLocation');
  // await location.selectOption({label: '0062-Palghar (  )'});

  // Find the label associated with the checkbox
  // const labelElement = await page.$$('#ctl00_ContentPlaceHolder1_ucUser_chkSBU tbody tr');
  // const a= labelElement.have;
  // console.log(a)
 
  
  // Click the label to select the checkbox
  // await labelElement.click();
       
  // await loginpage.Logout();
  // page.getByText('0015-Panaji123 (  )').click();

});
test('Add Audit Area Page ', async ({ page }) => {
 

  
  const loginpage = new LoginPage(page);
  let addlocation = new AddLocationPage(page);
  const adddepartment = new AddDepartment(page);
  const addsb = new AddSBU(page);
  const role = new AddRoles(page);
  let approvepage = new ApprovePage(page);
  
await loginpage.goTo();
await loginpage.validlogin(dataset.email,dataset.pass);
await page.pause();
const auditPlanningLink = await page.waitForSelector('a[href="AudiPlanning.aspx"]');
 await auditPlanningLink.click();
// const addauditarea = await page.waitForSelector('img[src*="addauditarea.jpg"]');
// await addauditarea.click();
// await page.locator('#ctl00_ContentPlaceHolder1_lstSBU').selectOption({label : 'Jewellery'});
  
// await page.locator("#ctl00_ContentPlaceHolder1_txtAreaName").fill(dataset.AuditArea);
// await page.locator('#ctl00_ContentPlaceHolder1_btnSave').click();
// console.log(await page.locator('#ctl00_ContentPlaceHolder1_lblMessage').textContent());
//await approvepage.approveauditarea(dataset.AuditArea,dataset.SBUNAME);


//select audit area

// const selectauditarea = await page.waitForSelector('img[src*="selectauditarea.jpg"]');
// await selectauditarea.click();
// await page.locator('#ctl00_ContentPlaceHolder1_txtAuditArea').fill(dataset.AuditArea);
// await page.locator('#ctl00_ContentPlaceHolder1_btnFilter').click();
//  const auditar="Jewellary Audit"
//  const sbunamaa="Jewellery"
//     const auditarea1 = await page.textContent('#demoTable1 tbody tr:nth-child(4) td:nth-child(4)');
//     const SBUNAME1 = await  page.textContent('#demoTable1 tbody tr:nth-child(4) td:nth-child(5)');
//     const trimmeauditarea1 = auditarea1.trim();
//     console.log(trimmeauditarea1);
//     console.log(SBUNAME1);
  
//     const trElements = await page.$$("//table[@class='griddefault gridBorder sSky sSky-Main']/tbody/tr");
//     const a = trElements.length;
//     // table[@id='demoTable1']  id css
  
//       //select audit area
  
//     if (trimmeauditarea1 === auditar && SBUNAME1 === sbunamaa) {
      
//       await page.click('#demoTable1 tbody tr:nth-child(4) td input');
//       // const inputElement = page.locator('#demoTable1 tbody tr:nth-child(4) td:nth-child(2) input');
//       // await inputElement.selectText();
//       // await page.keyboard.press('Delete');
//       // await inputElement.type('2');
      
     
//      console.log('go for loop');
    
//     } else {
//       for (let i = 3; i <= a; i++) {
//         const AA1 = `//table[@class='griddefault gridBorder sSky sSky-Main']/tbody/tr[${i}]/td[4]`;
//       // console.log(AA1);
//          const AA3 = await page.textContent(AA1);
  
//        const AA4 = AA3;
//          console.log(AA4);
        
//         if (AA4 === auditar) {
//           console.log('Pass');

//           const SBUN22 = await page.textContent(`//table[@class='griddefault gridBorder sSky sSky-Main']/tbody/tr[${i}]/td[5]`);
          
//           console.log(SBUN22);

//           if (AA1 === sbunamaa) {
//             const TC22 = await page.$(`//table[@class='griddefault gridBorder sSky sSky-Main']/colgroup/tbody/tr[${i}]/td/input`);
//             console.log(TC22);
//             await TC22.click();
//           }
//         }
//       }
//     }
    
//   await page.locator('#ctl00_ContentPlaceHolder1_btnNext').click();




      //Annual audit plan  ctl00_ContentPlaceHolder1_lblmsg  
    //   const auditarea12 = await page.textContent('#ctl00_ContentPlaceHolder1_gvAuditPlan2 tbody tr:nth-child(2) td:nth-child(2)');
    // const SBUNAME12 = await  page.textContent('#ctl00_ContentPlaceHolder1_gvAuditPlan2 tr:nth-child(2) td:nth-child(3)');
    // const trimmeauditarea12 = auditarea12.trim();
    // console.log(trimmeauditarea1);
    // console.log(SBUNAME1);
  
    // const trElements2 = await page.$$("//table[@class='ctl00_ContentPlaceHolder1_gvAuditPlan2']/tbody/tr");
    // const a2 = trElements2.length;
    //  //table[@id='demoTable1']  id css
    // if (trimmeauditarea12 === auditar && SBUNAME12 === sbunamaa) {
      
    //   const inputElement1 = page.locator('#ctl00_ContentPlaceHolder1_gvAuditPlan2 tbody tr:nth-child(2) td:nth-child(4) ');
    //   await inputElement1.locator("#ctl00_ContentPlaceHolder1_gvAuditPlan2_ctl02_ddlReviewer").selectOption(({ label: 'Anuj Sharma' }));
    //   await inputElement1.locator("#ctl00_ContentPlaceHolder1_gvAuditPlan2_ctl02_ddlLeadAuditor").selectOption(({label : 'Akshay'}));
    //   await page.locator('#ctl00_ContentPlaceHolder1_gvAuditPlan2 tbody tr:nth-child(4) td input').click();
  
    //   // const newlocation = auditlocation.locator("#ctl00_ContentPlaceHolder1_gvAuditPlan2_ctl02_cblLocation tbody tr:nth-child(2) td input")
    //   // await newlocation.filter({has : page.getByRole("checkbox",{name: '0025-Gobichettipalayam'} )}).check();
      
    //  await page.locator('#ctl00_ContentPlaceHolder1_btnSave').click();
      
    // } 

    //view selected audit area
       await page.locator("img[src*='viewselectedauditarea.jpg']").click();
       await page.locator("#ctl00_ContentPlaceHolder1_ImageButton1").click();
       await page.locator("#ctl00_ContentPlaceHolder1_ctl00_ddlAuditArea_chosen").click();      
    //  await page.locator("//ul[@class='chosen-results']").filter({hasText:'Jewellary Audit (Jewellery)'}).filter({has :page.locator("//li[@class='active-result']")}).click();
      // const parent= page.locator("//div[@class='chosen-drop']");
       await page.type('//div[@class="chosen-search"]','Jewellary Audit (Jewellery)');
        
        await page.keyboard.press('Enter');
        await page.locator("#ctl00_ContentPlaceHolder1_ctl00_btnFilter").click();



        const auditar="Jewellary Audit"
        const sbunamaa="Jewellery"
    const auditarea1 = await page.textContent('#demoTable tbody tr:nth-child(2) td:nth-child(2)');
    const SBUNAME1 = await  page.textContent('#demoTable tbody tr:nth-child(2) td:nth-child(3)');
    const trimmeauditarea1 = auditarea1.trim();
    // console.log(trimmeauditarea1);
    // console.log(SBUNAME1);
  
    const trElements = await page.$$("//table[@class='griddefault gridHborder sSky sSky-Main']/tbody/tr");
    const a = trElements.length;
    // table[@id='demoTable1']  id css
  
      //select audit area
  
    if (trimmeauditarea1 === dataset.AuditArea && SBUNAME1 === dataset.SBUNAME) {
      
      console.log (await page.textContent('#demoTable tbody tr:nth-child(2) td:nth-child(2)'));
      console.log(await  page.textContent('#demoTable tbody tr:nth-child(2) td:nth-child(3)'));
     
     console.log('go for loop');
    
    } else {
      for (let i = 2; i <= a; i++) {
        const AA1 = `//table[@class='griddefault gridHborder sSky sSky-Main']/tbody/tr[${i}]/td[2]`;
      // console.log(AA1);
         const AA3 = await page.textContent(AA1);
  
       const AA4 = AA3;
         console.log(AA4);
        
        if (AA4 === dataset.auditar) {
          console.log('Pass');

          const SBUN22 = await page.textContent(`//table[@class='griddefault gridHborder sSky sSky-Main']/tbody/tr[${i}]/td[3]`);
          
          console.log(SBUN22);

          if (AA1 === dataset.SBUNAME) {
            const TC22 = await page.$(`//table[@class='griddefault gridHborder sSky sSky-Main']/colgroup/tbody/tr[${i}]/td`);
            console.log(TC22);
            //await TC22.click();
            console.log (await page.textContent('#demoTable tbody tr:nth-child(2) td:nth-child(2)'));
            console.log(await  page.textContent('#demoTable tbody tr:nth-child(2) td:nth-child(3)'));
          }
        }
      }
    }
    await page.getByRole('button', { name: '<< Back to Audit Planning' }).click();


    //assign audits
    await page.locator("img[src*='assignaudits.jpg']").click();
    await page.locator('#ctl00_ContentPlaceHolder1_ctl00_ddlAuditor_chosen').getByRole('textbox').click();
    await page.type('#ctl00_ContentPlaceHolder1_ctl00_ddlAuditor_chosen',  'Akshay');
    await page.keyboard.press('Enter');
    await page.locator('#ctl00_ContentPlaceHolder1_ctl00_ddlLocation_chosen').click();
    await page.type('//div[@class="chosen-search"]','0032-Mumbai - Dadar');
    await page.keyboard.press('Enter');
    await page.locator('#ctl00_ContentPlaceHolder1_ctl00_btnFilter').click();


});
test.only('Import the File',async ({ page }) => {
  

  
      const loginpage = new LoginPage(page);
      const addsb = new AddSBU(page);
      const adddepartment = new AddDepartment(page);
      const addlocation = new AddLocationPage(page);
      await loginpage.goTo();
      await loginpage.Approvelogin();
      await page.pause();
   //  await page.getByTitle
     
      await addsb.ImportedSBU();
      await adddepartment.ImportDepartment();
      await addlocation.ImportLocation();

     });
     test(' ', async ({page})=>{
   
     });
  

