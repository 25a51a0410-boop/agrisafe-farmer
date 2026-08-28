/* ==========================================
   AGRISAFE - LANGUAGE DATA
========================================== */

const text = {

    te: {
        welcomeTitle: "రైతు మిత్రుడు",
        welcomeText: "మీ పంటకు కావలసిన సమాచారం ఇక్కడ",
        listen: "వినండి",

        cropPhoto: "పంట ఫోటో",
        takePhoto: "ఫోటో తీయండి",

        cropHealth: "పంట ఆరోగ్యం",
        cropHealthy: "పంట బాగుందా?",

        water: "నీరు",
        whenWater: "ఎప్పుడు నీరు?",

        weather: "వాతావరణం",
        rain: "వర్షం వస్తుందా?",

        pests: "పురుగులు",
        pestProblem: "పురుగు సమస్య",

        soil: "నేల",
        soilCondition: "నేల పరిస్థితి",

        schemes: "ప్రభుత్వ పథకాలు",
        getSupport: "సహాయం పొందండి",

        safety: "భద్రత",
        staySafe: "సురక్షితంగా ఉండండి",

        choose: "పైన ఉన్న ఒక బటన్‌ను ఎంచుకోండి",

        scanTitle: "📷 పంట ఫోటో",
        scanText: "మీ పంట ఆకును ఫోటో తీయండి",
        check: "పంట చూడండి",

        footer: "రైతు కోసం సులభమైన వ్యవసాయ సహాయం"
    },


    en: {
        welcomeTitle: "Farmer Friend",
        welcomeText: "All the information you need for your crop",
        listen: "Listen",

        cropPhoto: "Crop Photo",
        takePhoto: "Take Photo",

        cropHealth: "Crop Health",
        cropHealthy: "Is the crop healthy?",

        water: "Water",
        whenWater: "When to water?",

        weather: "Weather",
        rain: "Will it rain?",

        pests: "Pests",
        pestProblem: "Pest problem",

        soil: "Soil",
        soilCondition: "Soil condition",

        schemes: "Government Schemes",
        getSupport: "Get support",

        safety: "Safety",
        staySafe: "Stay safe",

        choose: "Choose an option above",

        scanTitle: "📷 Crop Photo",
        scanText: "Take a photo of your crop leaf",
        check: "Check Crop",

        footer: "Simple farming help for every farmer"
    }

};


/* ==========================================
   HELPER
========================================== */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}


/* ==========================================
   CHANGE LANGUAGE
========================================== */

function setLanguage(language) {

    localStorage.setItem(
        "agrisafeLanguage",
        language
    );

    const t = text[language];

    if (!t) return;


    /* Welcome */

    setText(
        "welcomeTitle",
        t.welcomeTitle
    );

    setText(
        "welcomeText",
        t.welcomeText
    );

    setText(
        "listenText",
        t.listen
    );


    /* Crop */

    setText(
        "cropPhoto",
        t.cropPhoto
    );

    setText(
        "takePhoto",
        t.takePhoto
    );


    /* Health */

    setText(
        "cropHealth",
        t.cropHealth
    );

    setText(
        "cropHealthy",
        t.cropHealthy
    );


    /* Water */

    setText(
        "water",
        t.water
    );

    setText(
        "whenWater",
        t.whenWater
    );


    /* Weather */

    setText(
        "weather",
        t.weather
    );

    setText(
        "rain",
        t.rain
    );


    /* Pests */

    setText(
        "pests",
        t.pests
    );

    setText(
        "pestProblem",
        t.pestProblem
    );


    /* Soil */

    setText(
        "soil",
        t.soil
    );

    setText(
        "soilCondition",
        t.soilCondition
    );


    /* Schemes */

    setText(
        "schemes",
        t.schemes
    );

    setText(
        "getSupport",
        t.getSupport
    );


    /* Safety */

    setText(
        "safety",
        t.safety
    );

    setText(
        "staySafe",
        t.staySafe
    );


    /* Message */

    setText(
        "chooseText",
        t.choose
    );


    /* Scan */

    setText(
        "scanTitle",
        t.scanTitle
    );

    setText(
        "scanText",
        t.scanText
    );

    setText(
        "checkText",
        t.check
    );


    /* Footer */

    setText(
        "footerText",
        t.footer
    );


    /* Government Scheme Section */

    setText(
        "schemesHeading",
        language === "te"
            ? "ప్రభుత్వ పథకాలు"
            : "Government Schemes"
    );

    setText(
        "schemesSubheading",
        language === "te"
            ? "రైతులకు ఉపయోగపడే ప్రభుత్వ సహాయం"
            : "Government support for farmers"
    );


    setText(
        "pmKisanTitle",
        "PM-KISAN"
    );

    setText(
        "pmKisanText",
        language === "te"
            ? "అర్హత ఉన్న రైతులకు ఆదాయ సహాయం."
            : "Income support for eligible farmers."
    );

    setText(
        "pmKisanBtn",
        language === "te"
            ? "మరింత తెలుసుకోండి"
            : "Learn More"
    );


    setText(
        "fasalTitle",
        language === "te"
            ? "పంట బీమా"
            : "Crop Insurance"
    );

    setText(
        "fasalText",
        language === "te"
            ? "పంట నష్టానికి బీమా రక్షణ."
            : "Insurance protection against eligible crop losses."
    );

    setText(
        "fasalBtn",
        language === "te"
            ? "మరింత తెలుసుకోండి"
            : "Learn More"
    );


    setText(
        "soilCardTitle",
        "Soil Health Card"
    );

    setText(
        "soilCardText",
        language === "te"
            ? "నేల ఆరోగ్యం గురించి సమాచారం."
            : "Information about soil health."
    );

    setText(
        "soilCardBtn",
        language === "te"
            ? "మరింత తెలుసుకోండి"
            : "Learn More"
    );


    /* Active Language Button */

    const teluguBtn =
        document.getElementById("teluguBtn");

    const englishBtn =
        document.getElementById("englishBtn");


    if (teluguBtn) {

        teluguBtn.classList.toggle(
            "active",
            language === "te"
        );

    }


    if (englishBtn) {

        englishBtn.classList.toggle(
            "active",
            language === "en"
        );

    }

}


/* ==========================================
   VOICE
========================================== */

function speak(textToSpeak, language) {

    if (
        !("speechSynthesis" in window)
    ) {
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
   OPEN CROP SCAN
========================================== */

function openScan() {

    const section =
        document.getElementById(
            "scanSection"
        );


    if (!section) return;


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


    if (!file) return;


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


    if (preview) {

        preview.src =
            URL.createObjectURL(file);

        preview.style.display =
            "block";

    }


    if (cameraIcon) {

        cameraIcon.style.display =
            "none";

    }


    if (result) {

        result.innerHTML = "";

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


    if (!input || !input.files.length) {

        if (result) {

            result.innerHTML =
                language === "te"
                    ? "⚠️ ముందుగా పంట ఫోటో తీయండి."
                    : "⚠️ Please take a crop photo.";

        }

        return;

    }


    if (result) {

        result.innerHTML =
            language === "te"
                ? "🔍 పంటను పరిశీలిస్తున్నాము..."
                : "🔍 Checking your crop...";

    }


    setTimeout(function() {

        if (!result) return;


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

        }

    }, 1200);

}


/* ==========================================
   MAIN INFORMATION
========================================== */

function showMessage(type) {

    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    /* GOVERNMENT SCHEMES */

    if (type === "schemes") {

        const schemesSection =
            document.getElementById(
                "schemesSection"
            );


        if (schemesSection) {

            schemesSection.style.display =
                "block";


            schemesSection.scrollIntoView({
                behavior: "smooth"
            });

        }


        return;

    }


    const messageBox =
        document.getElementById(
            "messageBox"
        );


    if (!messageBox) return;


    let message = "";


    if (language === "te") {

        if (type === "health") {

            message =
                "🌱 పంట ఆరోగ్యం తెలుసుకోవడానికి పంట ఫోటో తీయండి.";

        }

        else if (type === "water") {

            message =
                "💧 నీరు ఇవ్వడానికి ముందు నేల తేమను చూడండి.";

        }

        else if (type === "weather") {

            message =
                "🌦️ ఈరోజు మీ ప్రాంతంలోని వాతావరణాన్ని చూసి వ్యవసాయ పనులను ప్లాన్ చేయండి.";

        }

        else if (type === "pest") {

            message =
                "🐛 పురుగు సమస్య ఉంటే పంట ఫోటో తీయండి.";

        }

        else if (type === "soil") {

            message =
                "🪨 నేల పరిస్థితిని తెలుసుకోవడానికి Soil Health Card లేదా నేల పరీక్ష ఉపయోగించండి.";

        }

        else if (type === "safety") {

            message =
                "🛡️ వ్యవసాయ మందులు వాడేటప్పుడు లేబుల్ సూచనలు మరియు భద్రతా పద్ధతులు పాటించండి.";

        }

    }

    else {

        if (type === "health") {

            message =
                "🌱 Take a crop photo to check crop health.";

        }

        else if (type === "water") {

            message =
                "💧 Check soil moisture before watering.";

        }

        else if (type === "weather") {

            message =
                "🌦️ Check today's weather in your area and plan farm activities accordingly.";

        }

        else if (type === "pest") {

            message =
                "🐛 Take a crop photo if you see a pest problem.";

        }

        else if (type === "soil") {

            message =
                "🪨 Use a Soil Health Card or soil test to understand soil condition.";

        }

        else if (type === "safety") {

            message =
                "🛡️ Follow product labels and safety practices when using farm products.";

        }

    }


    window.currentVoice =
        message;


    messageBox.innerHTML = `

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
        message,
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
        window.currentVoice || "",
        language
    );

}


/* ==========================================
   GOVERNMENT SCHEMES
========================================== */

function showScheme(type)
