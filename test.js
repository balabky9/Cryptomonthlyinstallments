var Dharma = require("@dharmaprotocol/dharma.js");
var dharma = new Dharma("http://localhost:8545");
console.log(dharma);
// var LoanRequest = Dharma.Types;
// console.log(LoanRequest);
module.exports = {
    genLoan:async function createLoan(tenure=6){
        var loanRequest = await Dharma.Types.LoanRequest.create(dharma, {
            principalAmount: 5,
            principalToken: "WETH",
            collateralAmount: 10,
            collateralToken: "REP",
            interestRate: 1,
            termDuration: tenure,
            termUnit: "months",
            debtorAddress: "0x3fa17c1f1a0ae2db269f0b572ca44b15bc83929a",
            expiresInDuration: 5,
            expiresInUnit: "days",
        });
        loanRequest.data.creditor = '0x6385d458c76cd5360041245daa04df8f50d11a82';
        await loanRequest.signAsCreditor();
        //console.log(loanRequest);
        return loanRequest;
    
    
    },
    approveLoan: async function approve(loanRequestJSON){
        var lr = await Dharma.Types.LoanRequest.load(dharma,loanRequestJSON);
        console.log(lr); 
        const allowance = new Dharma.Types.Allowance(dharma, '0x6385d458c76cd5360041245daa04df8f50d11a82', "WETH");
        const txHash00 = await allowance.makeUnlimitedIfNecessary();
        const allowance2 = new Dharma.Types.Allowance(dharma, '0x3fa17c1f1a0ae2db269f0b572ca44b15bc83929a', "REP");
        const txHash01 = await allowance2.makeUnlimitedIfNecessary();
        const txHash3 = await lr.fill('0x6385d458c76cd5360041245daa04df8f50d11a82');
        // const txHash1 = await lr.allowCollateralTransfer();
        // const txHash2 = await lr.allowPrincipalTransfer();
        
        console.log(txHash3);
        return lr;

    },
    
}