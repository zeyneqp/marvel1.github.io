$(document).ready(function () {
    $('#quizForm').submit(function (e) {
        e.preventDefault();
        let result = calculateResult();
        displayResult(result);
    });

    function calculateResult() {
        let scoreHulk = 0;
        let scoreCaptain = 0;
        let scoreTony = 0;
        let result = "";

        // Question 1
        let q1 = $('input[name=q1]:checked').val();
        if (q1 === "q1a1") {
            scoreHulk += 1;
        } else if (q1 === "q1a2") {
            scoreCaptain += 1;
        } else if (q1 === "q1a3") {
            scoreTony += 1;
        }

        // Question 2
        let q2 = $('input[name=q2]:checked').val();
        if (q2 === "q2a1") {
            scoreHulk += 1;
        } else if (q2 === "q2a2") {
            scoreCaptain += 1;
        } else if (q2 === "q2a3") {
            scoreTony += 1;
        }

        // Question 3
        let q3 = $('input[name=q3]:checked').val();
        if (q3 === "q3a1") {
            scoreHulk += 1;
        } else if (q3 === "q3a2") {
            scoreCaptain += 1;
        } else if (q3 === "q3a3") {
            scoreTony += 1;
        }
        // Question 4
        let q4 = $('input[name=q4]:checked').val();
        if (q4 === "q4a1") {
            scoreHulk += 1;
        } else if (q4 === "q4a2") {
            scoreCaptain += 1;
        } else if (q4 === "q4a3") {
            scoreTony += 1;
        }

        // Question 5
        let q5 = $('input[name=q5]:checked').val();
        if (q5 === "q5a1") {
            scoreHulk += 1;
        } else if (q5 === "q5a2") {
            scoreCaptain += 1;
        } else if (q5 === "q5a3") {
            scoreTony += 1;
        }

        // Question 6
        let q6 = $('input[name=q6]:checked').val();
        if (q6 === "q6a1") {
            scoreHulk += 1;
        } else if (q6 === "q6a2") {
            scoreCaptain += 1;
        } else if (q6 === "q6a3") {
            scoreTony += 1;
        }
        // Question 7
        let q7 = $('input[name=q7]:checked').val();
        if (q7 === "q7a1") {
            scoreHulk += 1;
        } else if (q7 === "q7a2") {
            scoreCaptain += 1;
        } else if (q7 === "q7a3") {
            scoreTony += 1;
        }

        // Question 8
        let q8 = $('input[name=q8]:checked').val();
        if (q8 === "q8a1") {
            scoreHulk += 1;
        } else if (q8 === "q8a2") {
            scoreCaptain += 1;
        } else if (q8 === "q8a3") {
            scoreTony += 1;
        }

        // Question 9
        let q9 = $('input[name=q9]:checked').val();
        if (q3 === "q9a1") {
            scoreHulk += 1;
        } else if (q9 === "q9a2") {
            scoreCaptain += 1;
        } else if (q9 === "q9a3") {
            scoreTony += 1;
        }
        // Calculate result based on score
        if (scoreHulk > scoreTony && scoreHulk > scoreCaptain) {
            result = "You look like the Hulk!";
        } else if (scoreCaptain > scoreTony && scoreCaptain > scoreHulk) {
            result = "You look like Captain America!";
        } else {
            result = "You look like Tony Stark!";
        }

        return result;
    }

    function displayResult(result) {
        $('#quiz').addClass('d-none');
        $('#result').removeClass('d-none');
        $('#resultText').text(result);
    }
});