<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-storage.js"></script>


    <title>TLE Eliminators - Manage Server</title>
    <link rel = "icon" href = "logo.jpg" type = "image/x-icon">
    <link rel="stylesheet" href="form.css" />
    <script src="form.js" type="module"></script>
</head>
<body>

    <div class="Form">

        <h1>Upload New Video</h1>

        <br><br><br>
        <input type="text" placeholder="* Class Name..." id="vidname" required/>
        <input type="text" placeholder="* Video Link... (mp4 only)" required id="vidlink"/>
        <input type="text" placeholder="* Slides Link..." required id = "slides"/>

        <textarea placeholder="* Video Description..." required id="vidis"></textarea>

        <button class="upload" onclick="upload()">Upload</button>
    </div>

    <br><br><hr><br><br>
    <div class="Form">

        <h1>Verify Account</h1>

        <br><br><br>
        <input type="email" placeholder="* Email Address..." id = "email" required/>
        <button class="upload" onclick="addNewUser()">Verify Account</button>
    </div>
    
    <br><br><hr><br><br>

    <div class="Form">

        <h1>Delete Account</h1>

        <br><br><br>
        <input type="email" placeholder="* Email Address..." id = "email_del" required/>
        <button class="upload" onclick="deleteUser()">Delete Account</button>
    </div>

    <br><br><hr><br><br>

    <div class="Form">

        <h1>Upload Daily Tasks</h1>

        <br><br><br>
        <input type="text" placeholder="* Task Link..." id = "task" required/>
        <input type="date" required id = "daydate"/>
        <select class="Select" id = "select">
            <option value="batch" id = "batch">Choose Batch</option>
            <option value = "tle1" id = "tle1">TLE Eliminators LVL - 1</option>
            <option value = "tle2" id = "tle2">TLE Eliminators LVL - 2</option>
        </select>
        <button class="upload" onclick="uploadTask()">Upload Task</button>
    </div>

    <br><br><br><br>


</body>
</html>

