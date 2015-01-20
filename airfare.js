// flat fees and taxes
var customsFee          = 5.5;
var immigrationFee      = 7;
var federalTransportTax = .025;

function calculateAirfare(baseFare) {
    var fare = baseFare;                
    fare += customsFee; // Fixed it! Phew. Glad we didn't ship that! - Alice
    fare += immigrationFee;
    fare += customsFee; // Fixed it! Gee, lucky I caught that one. - Bob
    fare *= (1 + federalTransportTax);
    return fare;
}
