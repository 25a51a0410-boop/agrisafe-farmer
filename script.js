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


/* =========================
   CHANGE LANGUAGE
========================= */

function setLanguage(language) {

    localStorage.setItem("agrisafeLanguage", language);

    const t = text[language];

    const setText = (id, value) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    };


    setText("welcomeTitle", t.welcomeTitle);
    setText("welcomeText", t.welcomeText);
    setText("listenText", t.listen);

    setText("cropPhoto", t.cropPhoto);
    setText("takePhoto", t.takePhoto);

    setText("cropHealth", t.cropHealth);
    setText("cropHealthy", t.cropHealthy);

    setText("water", t.water);
    setText("whenWater", t.whenWater);

    setText("weather", t.weather);
    setText("rain", t.rain);

    setText("pests", t.pests);
    setText("pestProblem", t.pestProblem);

    setText("soil", t.soil);
    setText("soilCondition", t.soilCondition);

    setText("schemes", t.schemes);
    setText("getSupport", t.getSupport);

    setText("safety", t.safety);
    setText("staySafe", t.staySafe);

    setText("chooseText", t.choose);

    setText("scanTitle", t.scanTitle);
    setText("scanText", t.scanText);
    setText("checkText", t.check);

    setText("footerText", t.footer);


    /* Government Schemes */

    setText("schemesHeading", language === "te"
        ? "ప్రభుత్వ పథకాలు"
        : "Government Schemes");

    setText("schemesSubheading", language === "te"
        ? "రైతులకు ఉపయోగపడే ప్రభుత్వ సహాయం"
        : "Government support for farmers");

    setText("pmKisanTitle", "PM-KISAN");

    setText("pmKisanText", language === "te"
        ? "అర్హత ఉన్న రైతులకు ఆదాయ సహాయం."
        : "Income support for eligible farmers.");

    setText("pmKisanBtn", language === "te"
        ? "మరింత తెలుసుకోండి"
        : "Learn More");


    setText("fasalTitle", language === "te"
        ? "పంట బీమా"
        : "Crop Insurance");

    setText("fasalText", language === "te"
        ? "పంట నష్టానికి బీమా రక్షణ."
        : "Insurance protection against eligible crop losses.");

    setText("fasalBtn", language === "te"
        ? "మరింత తెలుసుకోండి"
        : "Learn More");


    setText("soilCardTitle", "Soil Health Card");

    setText("soilCardText", language === "te"
        ? "నేల ఆరోగ్యం గురించి సమాచారం."
        : "Information about soil health.");

    setText("soilCardBtn", language === "te"
        ? "మరింత తెలుసుకోండి"
        : "Learn More");


    /* Active button */

    const teBtn = document.getElementById("teluguBtn");
    const enBtn = document.getElementById("englishBtn");

    if (teBtn) {
        teBtn.classList.toggle("active", language === "te");
    }

    if (enBtn) {
        enBtn.classList.toggle("active", language === "en");
    }
}


/* =========================
   VOICE
========================= */

function speak(textToSpeak, language) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(textToSpeak);

    utterance.lang =
        language === "te"
            ? "te-IN"
            : "en-IN";

    utterance.rate = 0.8;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
}


/* =========================
   WELCOME VOICE
========================= */

function speakWelcome() {

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";

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


/* =========================
   OPEN SCAN
========================= */

function openScan() {

    const section =
        document.getElementById("scanSection");

    if (section) {

        section.style.display = "block";

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   PHOTO PREVIEW
========================= */

function previewCrop(event) {

    const file = event.target.files[0];

    if (!file) return;

    const preview =
        document.getElementById("cropPreview");

    const cameraIcon =
        document.getElementById("cameraIcon");

    if (preview) {

        preview.src =
            URL.createObjectURL(file);

        preview.style.display = "block";
    }

    if (cameraIcon) {
        cameraIcon.style.display = "none";
    }

}


/* =========================
   CROP CHECK
========================= */

function scanCrop() {

    const input =
        document.getElementById("cropImage");

    const result =
        document.getElementById("scanResult");

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";


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

        if (result) {

            result.innerHTML =
                language === "te"
                    ? `
                        <div class="result-card">
                            🌱 పంట ఫోటో వచ్చింది
                            <br><br>
                            📷 మీ ఫోటో సిద్ధంగా ఉంది.
                            <br><br>
                            🤖 తర్వాతి దశలో AI ద్వారా
                            పంట సమస్యను గుర్తిస్తాం.
                        </div>
                      `
                    : `
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


/* =========================
   INFORMATION
========================= */

function showMessage(type) {

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";

    const result =
        document.getElementById("messageBox");

    let message = "";


    if (language === "te") {

        if (type === "health")
            message = "🌱 పంట ఆరోగ్యం తెలుసుకోవడానికి పంట ఫోటో తీయండి.";

        if (type === "water")
            message = "💧 నీరు ఇవ్వడానికి ముందు నేల తేమను చూడండి.";

        if (type === "weather")
            message = "🌦️ వాతావరణ సమాచారం త్వరలో ఇక్కడ కనిపిస్తుంది.";

        if (type === "pest")
            message = "🐛 పురుగు సమస్య ఉంటే పంట ఫోటో తీయండి.";

        if (type === "soil")
            message = "🪨 నేల పరిస్థితి గురించి సమాచారం త్వరలో ఇక్కడ కనిపిస్తుంది.";

        if (type === "schemes")
            message = "🏛️ రైతులకు ఉపయోగపడే ప్రభుత్వ పథకాలు ఇక్కడ చూపిస్తాం.";

        if (type === "safety")
            message = "🛡️ వ్యవసాయ మందులు వాడేటప్పుడు భద్రతా సూచనలు పాటించండి.";

    } else {

        if (type === "health")
            message = "🌱 Take a crop photo to check crop health.";

        if (type === "water")
            message = "💧 Check soil moisture before watering.";

        if (type === "weather")
            message = "🌦️ Weather information will appear here.";

        if (type === "pest")
            message = "🐛 Take a crop photo if you see a pest problem.";

        if (type === "soil")
            message = "🪨 Soil information will appear here.";

        if (type === "schemes")
            message = "🏛️ Useful government farmer schemes will appear here.";

        if (type === "safety")
            message = "🛡️ Follow safety instructions when using farm products.";

    }


    if (result) {

        result.innerHTML = `

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
                ${language === "te" ? "వినండి" : "Listen"}

            </button>

        `;

    }


    window.currentVoice = message;

    speak(message, language);

}


/* =========================
   MESSAGE VOICE
========================= */

function speakCurrentMessage() {

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";

    speak(
        window.currentVoice || "",
        language
    );

}


/* =========================
   START
========================= */

window.addEventListener(
    "DOMContentLoaded",
    function() {

        setLanguage(
            localStorage.getItem("agrisafeLanguage") || "te"
        );

    }
);
/* =========================
   GOVERNMENT SCHEMES
========================= */

function showScheme(type) {

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";

    const result =
        document.getElementById("schemeResult");

    if (!result) return;

    let title = "";
    let message = "";


    /* PM KISAN */

    if (type === "pmkisan") {

        if (language === "te") {

            title = "🌾 PM-KISAN";

            message =
                "అర్హత ఉన్న రైతులకు PM-KISAN ద్వారా ఆదాయ సహాయం లభిస్తుంది. అర్హత మరియు దరఖాస్తు వివరాల కోసం అధికారిక ప్రభుత్వ సమాచారాన్ని పరిశీలించండి.";

        } else {

            title = "🌾 PM-KISAN";

            message =
                "PM-KISAN provides income support to eligible farmers. Check official government information for eligibility and application details.";

        }
    }


    /* CROP INSURANCE */

    else if (type === "fasal") {

        if (language === "te") {

            title = "🛡️ పంట బీమా";

            message =
                "అర్హత ఉన్న పంటలకు బీమా రక్షణ లభించవచ్చు. పంట బీమా అర్హత, నమోదు మరియు నిబంధనల కోసం అధికారిక ప్రభుత్వ సమాచారాన్ని చూడండి.";

        } else {

            title = "🛡️ Crop Insurance";

            message =
                "Eligible crops may receive insurance protection. Check official government information for eligibility, registration and terms.";

        }
    }


    /* SOIL HEALTH CARD */

    else if (type === "soil") {

        if (language === "te") {

            title = "🌱 Soil Health Card";

            message =
                "Soil Health Card ద్వారా మీ నేలలోని పోషకాలు మరియు నేల ఆరోగ్యం గురించి సమాచారం తెలుసుకోవచ్చు.";

        } else {

            title = "🌱 Soil Health Card";

            message =
                "The Soil Health Card helps farmers understand soil nutrients and soil health.";

        }
    }


    result.innerHTML = `

        <div class="scheme-result-card">

            <div class="scheme-icon">
                ${type === "pmkisan"
                    ? "🌾"
                    : type === "fasal"
                    ? "🛡️"
                    : "🌱"}
            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${message}
            </p>

            <button
                class="voice-btn"
                onclick="speakScheme()">

                🔊

                ${language === "te"
                    ? "వినండి"
                    : "Listen"}

            </button>

        </div>

    `;


    window.currentSchemeVoice = message;

    result.scrollIntoView({
        behavior: "smooth"
    });


    speak(
        message,
        language
    );
}


/* =========================
   SCHEME VOICE
========================= */

function speakScheme() {

    const language =
        localStorage.getItem("agrisafeLanguage") || "te";

    speak(
        window.currentSchemeVoice || "",
        language
    );
}
