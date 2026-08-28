/* ==========================================
   LANGUAGE DATA
========================================== */

const text = {

    te: {

        welcomeTitle:
            "రైతు మిత్రుడు",

        welcomeText:
            "మీ పంటకు కావలసిన సమాచారం ఇక్కడ",

        listen:
            "వినండి",

        cropPhoto:
            "పంట ఫోటో",

        takePhoto:
            "ఫోటో తీయండి",

        cropHealth:
            "పంట ఆరోగ్యం",

        cropHealthy:
            "పంట బాగుందా?",

        water:
            "నీరు",

        whenWater:
            "ఎప్పుడు నీరు?",

        weather:
            "వాతావరణం",

        rain:
            "వర్షం వస్తుందా?",

        pests:
            "పురుగులు",

        pestProblem:
            "పురుగు సమస్య",

        soil:
            "నేల",

        soilCondition:
            "నేల పరిస్థితి",

        schemes:
            "ప్రభుత్వ పథకాలు",

        getSupport:
            "సహాయం పొందండి",

        safety:
            "భద్రత",

        staySafe:
            "సురక్షితంగా ఉండండి",

        choose:
            "పైన ఉన్న ఒక బటన్‌ను ఎంచుకోండి",

        scanTitle:
            "📷 పంట ఫోటో",

        scanText:
            "మీ పంట ఆకును ఫోటో తీయండి",

        check:
            "పంట చూడండి",

        footer:
            "రైతు కోసం సులభమైన వ్యవసాయ సహాయం"

    },


    en: {

        welcomeTitle:
            "Farmer Friend",

        welcomeText:
            "All the information you need for your crop",

        listen:
            "Listen",

        cropPhoto:
            "Crop Photo",

        takePhoto:
            "Take Photo",

        cropHealth:
            "Crop Health",

        cropHealthy:
            "Is the crop healthy?",

        water:
            "Water",

        whenWater:
            "When to water?",

        weather:
            "Weather",

        rain:
            "Will it rain?",

        pests:
            "Pests",

        pestProblem:
            "Pest problem",

        soil:
            "Soil",

        soilCondition:
            "Soil condition",

        schemes:
            "Government Schemes",

        getSupport:
            "Get support",

        safety:
            "Safety",

        staySafe:
            "Stay safe",

        choose:
            "Choose an option above",

        scanTitle:
            "📷 Crop Photo",

        scanText:
            "Take a photo of your crop leaf",

        check:
            "Check Crop",

        footer:
            "Simple farming help for every farmer"

    }

};


/* ==========================================
   CHANGE LANGUAGE
========================================== */

function setLanguage(language) {

    localStorage.setItem(
        "agrisafeLanguage",
        language
    );


    const t = text[language];


    document.getElementById("welcomeTitle")
        .textContent = t.welcomeTitle;

    document.getElementById("welcomeText")
        .textContent = t.welcomeText;

    document.getElementById("listenText")
        .textContent = t.listen;


    document.getElementById("cropPhoto")
        .textContent = t.cropPhoto;

    document.getElementById("takePhoto")
        .textContent = t.takePhoto;


    document.getElementById("cropHealth")
        .textContent = t.cropHealth;

    document.getElementById("cropHealthy")
        .textContent = t.cropHealthy;


    document.getElementById("water")
        .textContent = t.water;

    document.getElementById("whenWater")
        .textContent = t.whenWater;


    document.getElementById("weather")
        .textContent = t.weather;

    document.getElementById("rain")
        .textContent = t.rain;


    document.getElementById("pests")
        .textContent = t.pests;

    document.getElementById("pestProblem")
        .textContent = t.pestProblem;


    document.getElementById("soil")
        .textContent = t.soil;

    document.getElementById("soilCondition")
        .textContent = t.soilCondition;


    document.getElementById("schemes")
        .textContent = t.schemes;

    document.getElementById("getSupport")
        .textContent = t.getSupport;


    document.getElementById("safety")
        .textContent = t.safety;

    document.getElementById("staySafe")
        .textContent = t.staySafe;


    document.getElementById("chooseText")
        .textContent = t.choose;


    document.getElementById("scanTitle")
        .textContent = t.scanTitle;

    document.getElementById("scanText")
        .textContent = t.scanText;

    document.getElementById("checkText")
        .textContent = t.check;


    document.getElementById("footerText")
        .textContent = t.footer;


    /* Active button */

    document.getElementById("teluguBtn")
        .classList.toggle(
            "active",
            language === "te"
        );

    document.getElementById("englishBtn")
        .classList.toggle(
            "active",
            language === "en"
        );

}


/* ==========================================
   VOICE
========================================== */

function speak(textToSpeak, language) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Voice is not supported on this device."
        );

        return;
    }


    speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(
            textToSpeak
        );


    utterance.lang =
        language === "te"
            ? "te-IN"
            : "en-IN";


    utterance.rate = 0.8;

    utterance.pitch = 1;


    speechSynthesis.speak(
        utterance
    );
}


/* ==========================================
   WELCOME VOICE
========================================== */

function speakWelcome() {

    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    if (language === "te") {

        speak(
            "నమస్కారం రైతు మిత్రమా. మీ పంటకు కావలసిన సహాయం కోసం పైన ఉన్న బటన్ ఎంచుకోండి.",
            "te"
        );

    } else {

        speak(
            "Hello farmer. Choose an option above to get help for your crop.",
            "en"
        );

    }

}


/* ==========================================
   OPEN CAMERA
========================================== */

function openScan() {

    const section =
        document.getElementById(
            "scanSection"
        );


    section.style.display =
        "block";


    section.scrollIntoView({
        behavior: "smooth"
    });


    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    if (language === "te") {

        speak(
            "మీ పంట ఆకును ఫోటో తీయండి.",
            "te"
        );

    } else {

        speak(
            "Take a photo of your crop leaf.",
            "en"
        );

    }

}


/* ==========================================
   PHOTO PREVIEW
========================================== */

function previewCrop(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    const preview =
        document.getElementById(
            "cropPreview"
        );


    const cameraIcon =
        document.getElementById(
            "cameraIcon"
        );


    const result =
        document.getElementById(
            "scanResult"
        );


    /* Show selected photo */

    preview.src =
        URL.createObjectURL(file);


    preview.style.display =
        "block";


    /* Hide camera icon */

    cameraIcon.style.display =
        "none";


    /* Clear old result */

    result.innerHTML = "";


    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    if (language === "te") {

        speak(
            "మీ పంట ఫోటో వచ్చింది. ఇప్పుడు పంట చూడండి బటన్ నొక్కండి.",
            "te"
        );

    } else {

        speak(
            "Your crop photo is ready. Now press the check crop button.",
            "en"
        );

    }

}


/* ==========================================
   CROP CHECK
========================================== */

function scanCrop() {

    const input =
        document.getElementById(
            "cropImage"
        );


    const result =
        document.getElementById(
            "scanResult"
        );


    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    if (!input.files.length) {

        if (language === "te") {

            result.innerHTML =
                "⚠️ ముందుగా పంట ఫోటో తీయండి.";

            speak(
                "ముందుగా పంట ఫోటో తీయండి.",
                "te"
            );

        } else {

            result.innerHTML =
                "⚠️ Please take a crop photo.";

            speak(
                "Please take a crop photo.",
                "en"
            );

        }

        return;
    }


    /* Loading */

    if (language === "te") {

        result.innerHTML =
            "🔍 పంటను పరిశీలిస్తున్నాము...";

    } else {

        result.innerHTML =
            "🔍 Checking your crop...";

    }


    setTimeout(function() {

        if (language === "te") {

            result.innerHTML = `
                <div class="result-card">
                    🌱 పంట ఫోటో వచ్చింది
                    <br><br>
                    📷 మీ ఫోటో సిద్ధంగా ఉంది.
                    <br><br>
                    🤖 తర్వాతి దశలో AI ద్వారా
                    పంట సమస్యను గుర్తిస్తాం.
                </div>
            `;

            speak(
                "మీ పంట ఫోటో వచ్చింది. తర్వాతి దశలో AI ద్వారా పంట సమస్యను గుర్తిస్తాం.",
                "te"
            );

        } else {

            result.innerHTML = `
                <div class="result-card">
                    🌱 Crop photo received
                    <br><br>
                    📷 Your photo is ready.
                    <br><br>
                    🤖 In the next step,
                    AI will identify the crop problem.
                </div>
            `;

            speak(
                "Your crop photo has been received. In the next step, AI will identify the crop problem.",
                "en"
            );

        }

    }, 1200);

}


/* ==========================================
   SIMPLE INFORMATION
========================================== */

function showMessage(type) {

    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    let message = "";
    let voice = "";


    if (language === "te") {

        if (type === "health") {

            message =
                "🌱 పంట ఆరోగ్యం తెలుసుకోవడానికి పంట ఫోటో తీయండి.";

            voice =
                "పంట ఆరోగ్యం తెలుసుకోవడానికి పంట ఫోటో తీయండి.";

        }

        else if (type === "water") {

            message =
                "💧 నీరు ఇవ్వడానికి ముందు నేల తేమను చూడండి.";

            voice =
                "నీరు ఇవ్వడానికి ముందు నేల తేమను చూడండి.";

        }

        else if (type === "weather") {

            message =
                "🌦️ వాతావరణ సమాచారం త్వరలో ఇక్కడ కనిపిస్తుంది.";

            voice =
                "వాతావరణ సమాచారం త్వరలో ఇక్కడ కనిపిస్తుంది.";

        }

        else if (type === "pest") {

            message =
                "🐛 పురుగు సమస్య ఉంటే పంట ఫోటో తీయండి.";

            voice =
                "పురుగు సమస్య ఉంటే పంట ఫోటో తీయండి.";

        }

        else if (type === "soil") {

            message =
                "🪨 నేల పరిస్థితి గురించి సమాచారం త్వరలో ఇక్కడ కనిపిస్తుంది.";

            voice =
                "నేల పరిస్థితి గురించి సమాచారం త్వరలో ఇక్కడ కనిపిస్తుంది.";

        }

        else if (type === "schemes") {

            message =
                "🏛️ రైతులకు ఉపయోగపడే ప్రభుత్వ పథకాలు ఇక్కడ చూపిస్తాం.";

            voice =
                "రైతులకు ఉపయోగపడే ప్రభుత్వ పథకాలు ఇక్కడ చూపిస్తాం.";

        }

        else if (type === "safety") {

            message =
                "🛡️ వ్యవసాయ మందులు వాడేటప్పుడు భద్రతా సూచనలు పాటించండి.";

            voice =
                "వ్యవసాయ మందులు వాడేటప్పుడు భద్రతా సూచనలు పాటించండి.";

        }

    } else {

        if (type === "health") {

            message =
                "🌱 Take a crop photo to check crop health.";

            voice =
                "Take a crop photo to check crop health.";

        }

        else if (type === "water") {

            message =
                "💧 Check soil moisture before watering.";

            voice =
                "Check soil moisture before watering.";

        }

        else if (type === "weather") {

            message =
                "🌦️ Weather information will appear here.";

            voice =
                "Weather information will appear here.";

        }

        else if (type === "pest") {

            message =
                "🐛 Take a crop photo if you see a pest problem.";

            voice =
                "Take a crop photo if you see a pest problem.";

        }

        else if (type === "soil") {

            message =
                "🪨 Soil information will appear here.";

            voice =
                "Soil information will appear here.";

        }

        else if (type === "schemes") {

            message =
                "🏛️ Useful government farmer schemes will appear here.";

            voice =
                "Useful government farmer schemes will appear here.";

        }

        else if (type === "safety") {

            message =
                "🛡️ Follow safety instructions when using farm products.";

            voice =
                "Follow safety instructions when using farm products.";

        }

    }


    window.currentVoice =
        voice;


    document.getElementById(
        "messageBox"
    ).innerHTML = `

        <div class="message-icon">
            🔊
        </div>

        <p>
            ${message}
        </p>

        <br>

        <button
            class="voice-btn"
            onclick="speakCurrentMessage()">

            🔊
            ${language === "te"
                ? "వినండి"
                : "Listen"}

        </button>
    `;


    speak(
        voice,
        language
    );

}


/* ==========================================
   MESSAGE VOICE
========================================== */

function speakCurrentMessage() {

    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    speak(
        window.currentVoice,
        language
    );

}


/* ==========================================
   START IN TELUGU
========================================== */

window.addEventListener(
    "DOMContentLoaded",
    function() {

        setLanguage("te");

    }
);
