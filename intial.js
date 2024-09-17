<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Input</title>
    <script>
        function combineInputs() {
            // Collecting subjective inputs
            const history = document.getElementById('history').value;
            const previousFunctionalLevel = document.getElementById('previousFunctionalLevel').value;
            const socialHistory = document.getElementById('socialHistory').value;

            // Collecting objective measures
            const bloodPressure = document.getElementById('bloodPressure').value;
            const hr = document.getElementById('hr').value;
            const sao2 = document.getElementById('sao2').value;
            const rr = document.getElementById('rr').value;
            const map = document.getElementById('map').value;
            const walkingDistance = document.getElementById('walkingDistance').value;
            const deviceUsed = document.getElementById('deviceUsed').value;

            // Collecting balance ratings
            const staticSeatedBalance = document.querySelector('input[name="staticSeatedBalance"]:checked')?.value || 'Not Rated';
            const dynamicSeatedBalance = document.querySelector('input[name="dynamicSeatedBalance"]:checked')?.value || 'Not Rated';
            const staticStandingBalance = document.querySelector('input[name="staticStandingBalance"]:checked')?.value || 'Not Rated';

            // Collecting cognition ratings
            const orientation = document.querySelector('input[name="orientation"]:checked')?.value || 'Not Rated';
            const commands = document.querySelector('input[name="commands"]:checked')?.value || 'Not Rated';
            const behavior = document.querySelector('input[name="behavior"]:checked')?.value || 'Not Rated';

            // Collecting physical examination strengths
            const lshoulderflexion = document.getElementById('lshoulderflexion').value;
            const rshoulderflexion = document.getElementById('rshoulderflexion').value;
            // Add other strength inputs similarly

            // Combine all inputs into a single string
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

            Balance:
            Static Seated Balance: ${staticSeatedBalance}
            Dynamic Seated Balance: ${dynamicSeatedBalance}
            Static Standing Balance: ${staticStandingBalance}

            Cognition:
            Orientation: ${orientation}
            Commands: ${commands}
            Behavior: ${behavior}

            Physical Examination:
            Left Shoulder Flexion: ${lshoulderflexion}
            Right Shoulder Flexion: ${rshoulderflexion}
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

    <h2>Balance:</h2>
    <h3>Static Seated Balance:</h3>
    <input type="radio" name="staticSeatedBalance" value="Poor"> Poor
    <input type="radio" name="staticSeatedBalance" value="Fair -"> Fair -
    <input type="radio" name="staticSeatedBalance" value="Fair"> Fair
    <input type="radio" name="staticSeatedBalance" value="Fair +"> Fair +
    <input type="radio" name="staticSeatedBalance" value="Good"> Good
    <input type="radio" name="staticSeatedBalance" value="Normal"> Normal
    <input type="radio" name="staticSeatedBalance" value="Not Tested"> Not Tested <br>

    <h3>Dynamic Seated Balance:</h3>
    <input type="radio" name="dynamicSeatedBalance" value="Poor"> Poor
    <input type="radio" name="dynamicSeatedBalance" value="Fair -"> Fair -
    <input type="radio" name="dynamicSeatedBalance" value="Fair"> Fair
    <input type="radio" name="dynamicSeatedBalance" value="Fair +"> Fair +
    <input type="radio" name="dynamicSeatedBalance" value="Good"> Good
    <input type="radio" name="dynamicSeatedBalance" value="Normal"> Normal
    <input type="radio" name="dynamicSeatedBalance" value="Not Tested"> Not Tested <br>

    <h3>Static Standing Balance:</h3>
    <input type="radio" name="staticStandingBalance" value="Poor"> Poor
    <input type="radio" name="staticStandingBalance" value="Fair -"> Fair -
    <input type="radio" name="staticStandingBalance" value="Fair"> Fair
    <input type="radio" name="staticStandingBalance" value="Fair +"> Fair +
    <input type="radio" name="staticStandingBalance" value="Good"> Good
    <input type="radio" name="staticStandingBalance" value="Normal"> Normal
    <input type="radio" name="staticStandingBalance" value="Not Tested"> Not Tested<br>

    <h2>Cognition</h2>
    <h3>Orientation:</h3>
    <input type="radio" name="orientation" value="Person"> Person
    <input type="radio" name="orientation" value="Place"> Place
    <input type="radio" name="orientation" value="Time"> Time
    <input type="radio" name="orientation" value="Situation"> Situation
    <input type="radio" name="orientation" value="Not Tested"> Not Tested<br>

    <h3>Commands:</h3>
    <input type="radio" name="commands" value="Complex"> Complex
    <input type="radio" name="commands" value="1step"> 1-Step
    <input type="radio" name="commands" value="unabletofollow"> Unable to Follow
    <input type="radio" name="commands" value="Not Tested"> Not Tested<br>

    <h3>Behavior:</h3>
    <input type="radio" name="behavior" value="appropriate"> Appropriate
    <input type="radio" name="behavior" value="impulsive"> Impulsive
    <input type="radio" name="behavior" value="restless"> Restless
    <input type="radio" name="behavior" value="distractible"> Distractible
    <input type="radio" name="behavior" value="agitated"> Agitated
    <input type="radio" name="behavior" value="lethargic"> Lethargic <br>

    <h2>Physical Examination:</h2>
    <h3>Strength:</h3>
    <p>UE:</p>
    Left Shoulder Flexion: <input type="text" id="lshoulderflexion"><br>
    Right Shoulder Flexion: <input type="text" id="rshoulderflexion"><br>
    <!-- Add other strength inputs similarly -->

    <button type="button" onclick="combineInputs()">Create</button><br><br>

    <textarea id="output" rows="15" cols="50" placeholder="Combined input will appear here..."></textarea>
</body>
</html>
