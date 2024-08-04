
aiquickfix.problemPrefix
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
