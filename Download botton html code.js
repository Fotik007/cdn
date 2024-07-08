<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download with Captcha</title>
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
    <h2>Download File</h2>
    <div class="captcha">
        Enter the number: <span id="random-number"></span>
    </div>
    <input type="text" id="captcha-input" placeholder="Enter the number here">
    <br><br>
    <button id="download-btn" disabled>Download</button>
</div>

<script>
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10000);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const randomNumber = generateRandomNumber();
        document.getElementById('random-number').textContent = randomNumber;

        const captchaInput = document.getElementById('captcha-input');
        const downloadBtn = document.getElementById('download-btn');

        captchaInput.addEventListener('input', function() {
            if (captchaInput.value == randomNumber) {
                downloadBtn.disabled = false;
            } else {
                downloadBtn.disabled = true;
            }
        });

        downloadBtn.addEventListener('click', function() {
            alert('Download started!');
            // Replace with actual file URL
            window.location.href = 'path/to/your/file.zip';
        });
    });
</script>

</body>
</html>
