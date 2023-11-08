
$(document).ready(function() {
    $('#ticketSelectionForm').submit(function(e) {
        e.preventDefault();
        let ticketType = $('#ticketType').val();
        let quantity = $('#quantity').val();
        let promoCode = $('#promoCode').val();


        let totalPrice = calculateTotalPrice(ticketType, quantity, promoCode);
        alert('Thank you for your purchase! Total Price: $' + totalPrice.toFixed(2));
    });

    function calculateTotalPrice(ticketType, quantity, promoCode) {

        let totalPrice = 0;
        let discount = 0;
        switch (ticketType) {
            case 'general':
                totalPrice = 10;
                break;
            case 'vip':
                totalPrice = 20;
                break;
            case 'premium':
                totalPrice = 30;
                break;
        }

        if (promoCode === 'MARVEL20') {
            discount = totalPrice * 0.2;
        }
        else if ( promoCode === ''){
            discount = 0;
        }
        else if (promoCode === 'MARVEL15'){
            discount = 0.15;
        }
        else {
            return alert('Your promo code wrong, write it again ');
        }
        let finalPrice = (totalPrice * quantity) - discount;

        return alert('Ticket purchase successful!\nTotal Price: $' + totalPrice + '\nDiscount: $' + discount + '\nFinal Price: $' + finalPrice);
    }
});