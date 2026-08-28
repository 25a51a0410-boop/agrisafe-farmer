/* ==========================================
   FARMER VOICE ASSISTANT
========================================== */

function startVoiceAssistant() {

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert(
            language === "te"
                ? "మీ browserలో voice feature అందుబాటులో లేదు."
                : "Voice feature is not supported in your browser."
        );

        return;
    }

    const recognition =
        new SpeechRecognition();

    /* Telugu / English */

    recognition.lang =
        language === "te"
            ? "te-IN"
            : "en-IN";

    recognition.interimResults = false;

    recognition.continuous = false;

    const status =
        document.getElementById("voiceStatus");

    const answer =
        document.getElementById("assistantAnswer");


    if (status) {

        status.textContent =
            language === "te"
                ? "🎙️ విన正在్నాను... మాట్లాడండి"
                : "🎙️ Listening... Please speak.";

    }


    if (answer) {

        answer.innerHTML = "";

    }


    recognition.start();


    recognition.onresult = function(event) {

        const question =
            event.results[0][0].transcript;


        if (status) {

            status.textContent =
                language === "te"
                    ? "మీ ప్రశ్న: " + question
                    : "Your question: " + question;

        }


        giveVoiceAnswer(
            question,
            language
        );

    };


    recognition.onerror = function() {

        if (status) {

            status.textContent =
                language === "te"
                    ? "⚠️ మళ్లీ ప్రయత్నించండి."
                    : "⚠️ Please try again.";

        }

    };

}


/* ==========================================
   VOICE ANSWER
========================================== */

function giveVoiceAnswer(
    question,
    language
) {

    let reply = "";


    const q =
        question.toLowerCase();


    if (language === "te") {

        if (
            q.includes("నీరు") ||
            q.includes("నీళ్లు") ||
            q.includes("నీరు ఎప్పుడు")
        ) {

            reply =
                "నేల తేమను చూసి నీరు ఇవ్వండి. నేల ఇప్పటికే తడిగా ఉంటే వెంటనే ఎక్కువ నీరు ఇవ్వకండి.";

        }

        else if (
            q.includes("పురుగు") ||
            q.includes("కీటకం")
        ) {

            reply =
                "పంటలో పురుగులు కనిపిస్తే ముందుగా పంట ఆకుల ఫోటో తీసి పరిశీలించండి. అవసరమైతే వ్యవసాయ అధికారిని సంప్రదించండి.";

        }

        else if (
            q.includes("నేల") ||
            q.includes("మట్టి")
        ) {

            reply =
                "నేల ఆరోగ్యం తెలుసుకోవడానికి నేల పరీక్ష చేయించడం మంచిది.";

        }

        else if (
            q.includes("వాతావరణం") ||
            q.includes("వర్షం")
        ) {

            reply =
                "వ్యవసాయ పనులు చేసే ముందు మీ ప్రాంత వాతావరణ సూచనను పరిశీలించండి.";

        }

        else if (
            q.includes("పంట") ||
            q.includes("ఆకు")
        ) {

            reply =
                "మీ పంట ఆకును ఫోటో తీసి పంట ఫోటో విభాగంలో పరిశీలించండి.";

        }

        else {

            reply =
                "మీ ప్రశ్నను పూర్తిగా అర్థం చేసుకోలేకపోయాను. పంట, నీరు, పురుగులు, నేల లేదా వాతావరణం గురించి అడగండి.";

        }

    }


    else {

        if (
            q.includes("water") ||
            q.includes("irrigation")
        ) {

            reply =
                "Check soil moisture before watering. Avoid giving extra water when the soil is already wet.";

        }

        else if (
            q.includes("pest") ||
            q.includes("insect")
        ) {

            reply =
                "If you see pests, take a clear crop leaf photo and inspect it. Contact an agriculture officer when needed.";

        }

        else if (
            q.includes("soil")
        ) {

            reply =
                "A soil test can help you understand soil health and nutrient needs.";

        }

        else if (
            q.includes("weather") ||
            q.includes("rain")
        ) {

            reply =
                "Check your local weather forecast before planning farm activities.";

        }

        else if (
            q.includes("crop") ||
            q.includes("leaf")
        ) {

            reply =
                "Take a clear photo of your crop leaf and use the crop photo section.";

        }

        else {

            reply =
                "I could not understand the question. Ask about crops, water, pests, soil or weather.";

        }

    }


    const answer =
        document.getElementById(
            "assistantAnswer"
        );


    if (answer) {

        answer.innerHTML = `

            <div class="result-card">

                🤖 <strong>
                    ${
                        language === "te"
                            ? "రైతు సహాయకుడు"
                            : "Farmer Assistant"
                    }
                </strong>

                <br><br>

                ${reply}

                <br><br>

                <button
                    class="voice-btn"
                    onclick="speakAssistantAnswer()">

                    🔊
                    ${
                        language === "te"
                            ? "వినండి"
                            : "Listen"
                    }

                </button>

            </div>

        `;

    }


    window.currentAssistantVoice =
        reply;


    speak(
        reply,
        language
    );

}


/* ==========================================
   ASSISTANT ANSWER VOICE
========================================== */

function speakAssistantAnswer() {

    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    speak(
        window.currentAssistantVoice || "",
        language
    );

}
