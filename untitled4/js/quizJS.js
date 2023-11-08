document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    if ($('#q1').val() === '6') {
        score++;
    }
    if ($('#q2').val() === 'Brooklyn') {
        score++;
    }
    if ($('#q3').val() === 'Howard Stark') {
        score++;
    }
    if ($('#q4').val() === 'Thor') {
        score++;
    }
    if ($('#q5').val() === 'Captain America') {
        score++;
    }
    if ($('#q6').val() === 'Wade Wilson') {
        score++;
    }
    if ($('#q7').val() === 'Wakanda') {
        score++;
    }
    if ($('#q8').val() === 'A cloak') {
        score++;
    }

    // Display result and promo code
    $('#result').removeClass('d-none');
    if (score === 8) {
        $('#promoCode').text('Congratulations! You scored 8/8. Use promo code "MARVEL20" for 20% off your next purchase.');
    } else if (score === 7) {
        $('#promoCode').text('Great job! You scored 7/8. Use promo code "MARVEL15" for 15% off your next purchase.');
    } else {
        $('#promoCode').text('Nice try! You scored ' + score + '/3. Better luck next time!');
    }




});




