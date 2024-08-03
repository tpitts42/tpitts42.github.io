# tpitts42.github.io
PT Documentation

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Input</title>
    <script>
        function combineInputs() {
            // Get all input values
            const history = document.getElementById('history').value;
            const previousFunctionalLevel = document.getElementById('previousFunctionalLevel').value;
            const socialHistory = document.getElementById('socialHistory').value;

            const bloodPressure = document.getElementById('bloodPressure').value;
            const hr = document.getElementById('hr').value;
            const sao2 = document.getElementById('sao2').value;
            const rr = document.getElementById('rr').value;
            const map = document.getElementById('map').value;
            const walkingDistance = document.getElementById('walkingDistance').value;
            const deviceUsed = document.getElementById('deviceUsed').value;

            // Get selected button values
            const staticSeatedBalance = document.querySelector('input[name="staticSeatedBalance"]:checked')?.value || 'Not selected';
            const dynamicSeatedBalance = document.querySelector('input[name="dynamicSeatedBalance"]:checked')?.value || 'Not selected';
            const staticStandingBalance = document.querySelector('input[name="staticStandingBalance"]:checked')?.value || 'Not selected';
            const dynamicStandingBalance = document.querySelector('input[name="dynamicStandingBalance"]:checked')?.value || 'Not selected';

            // Combine all inputs into one text
            const combinedText = `
                Subjective:
                History: ${history}
                Previous Functional Level: ${previousFunctionalLevel}
                Occupational/Social History: ${socialHistory}

                Objective Measures:
                Blood Pressure: ${bloodPressure}
                HR: ${hr}
                SaO2%: ${sao2}
                RR: ${rr}
                MAP: ${map}
                Walking Distance: ${walkingDistance}
                Device Used: ${deviceUsed}

                Static Seated Balance: ${staticSeatedBalance}
                Dynamic Seated Balance: ${dynamicSeatedBalance}
                Static Standing Balance: ${staticStandingBalance}
                Dynamic Standing Balance: ${dynamicStandingBalance}
            `;

            // Display in textarea
            document.getElementById('output').value = combinedText;
        }
    </script>
</head>
<body>
    <h2>Subjective:</h2>
    History: <input type="text" id="history"><br>
    Previous Functional Level: <input type="text" id="previousFunctionalLevel"><br>
    Occupational/Social History: <input type="text" id="socialHistory"><br><br>

    <h2>Objective Measures:</h2>
    Blood Pressure: <input type="text" id="bloodPressure"><br>
    HR: <input type="text" id="hr"><br>
    SaO2%: <input type="text" id="sao2"><br>
    RR: <input type="text" id="rr"><br>
    MAP: <input type="text" id="map"><br>
    Walking Distance: <input type="text" id="walkingDistance"><br>
    Device Used: <input type="text" id="deviceUsed"><br><br>

    <h3>Static Seated Balance:</h3>
    <input type="radio" name="staticSeatedBalance" value="Poor"> Poor
    <input type="radio" name="staticSeatedBalance" value="Fair -"> Fair -
    <input type="radio" name="staticSeatedBalance" value="Fair"> Fair
    <input type="radio" name="staticSeatedBalance" value="Fair +"> Fair +
    <input type="radio" name="staticSeatedBalance" value="Good"> Good
    <input type="radio" name="staticSeatedBalance" value="Normal"> Normal<br>

    <h3>Dynamic Seated Balance:</h3>
    <input type="radio" name="dynamicSeatedBalance" value="Poor"> Poor
    <input type="radio" name="dynamicSeatedBalance" value="Fair -"> Fair -
    <input type="radio" name="dynamicSeatedBalance" value="Fair"> Fair
    <input type="radio" name="dynamicSeatedBalance" value="Fair +"> Fair +
    <input type="radio" name="dynamicSeatedBalance" value="Good"> Good
    <input type="radio" name="dynamicSeatedBalance" value="Normal"> Normal<br>

    <h3>Static Standing Balance:</h3>
    <input type="radio" name="staticStandingBalance" value="Poor"> Poor
    <input type="radio" name="staticStandingBalance" value="Fair -"> Fair -
    <input type="radio" name="staticStandingBalance" value="Fair"> Fair
    <input type="radio" name="staticStandingBalance" value="Fair +"> Fair +
    <input type="radio" name="staticStandingBalance" value="Good"> Good
    <input type="radio" name="staticStandingBalance" value="Normal"> Normal<br>

    <h3>Dynamic Standing Balance:</h3>
    <input type="radio" name="dynamicStandingBalance" value="Poor"> Poor
    <input type="radio" name="dynamicStandingBalance" value="Fair -"> Fair -
    <input type="radio" name="dynamicStandingBalance" value="Fair"> Fair
    <input type="radio" name="dynamicStandingBalance" value="Fair +"> Fair +
    <input type="radio" name="dynamicStandingBalance" value="Good"> Good
    <input type="radio" name="dynamicStandingBalance" value="Normal"> Normal<br><br>

    <button type="button" onclick="combineInputs()">Create</button><br><br>

    <textarea id="output" rows="15" cols="50" placeholder="Combined input will appear here..."></textarea>
</body>
</html>
