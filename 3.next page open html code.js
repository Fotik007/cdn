<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Captcha Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .captcha {
            margin: 15px 0;
        }
        .captcha span {
            font-weight: bold;
        }
        input[type="text"] {
            padding: 5px;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Captcha Verification</h2>
    <div class="captcha">
        Enter the number: <span id="random-number"></span>
    </div>
    <input type="text" id="captcha-input" placeholder="Enter the number here">
    <br><br>
    <button id="next-page-btn" disabled>Next Page</button>
</div>

<script>
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10000);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const randomNumber = generateRandomNumber();
        document.getElementById('random-number').textContent = randomNumber;

        const captchaInput = document.getElementById('captcha-input');
        const nextPageBtn = document.getElementById('next-page-btn');

        captchaInput.addEventListener('input', function() {
            if (captchaInput.value == randomNumber) {
                nextPageBtn.disabled = false;
            } else {
                nextPageBtn.disabled = true;
            }
        });

        nextPageBtn.addEventListener('click', function() {
            // Replace with the actual URL of the next page
            window.location.href = '🇮🇳';
        });
    });
</script>

</body>
</html>
