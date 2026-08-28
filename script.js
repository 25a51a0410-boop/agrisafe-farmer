/* ==========================================
   AGRISAFE - LANGUAGE DATA
========================================== */

const text = {

    te: {

        welcomeTitle: "రైతు మిత్రుడు",

        welcomeText:
            "మీ పంటకు కావలసిన సమాచారం ఇక్కడ",

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
   LANGUAGE CHANGE
========================================== */

function setLanguage(language) {

    localStorage.setItem(
        "agrisafeLanguage",
        language
    );

    const t = text[language];

    document.documentElement.lang =
        language === "te" ? "te" : "en";


    /* Welcome */

    document.getElementById("welcomeTitle").textContent =
        t.welcomeTitle;

    document.getElementById("welcomeText").textContent =
        t.welcomeText;

    document.getElementById("listenText").textContent =
        t.listen;


    /* Cards */

    document.getElementById("cropPhoto").textContent =
        t.cropPhoto;

    document.getElementById("takePhoto").textContent =
        t.takePhoto;


    document.getElementById("cropHealth").textContent =
        t.cropHealth;

    document.getElementById("cropHealthy").textContent =
        t.cropHealthy;


    document.getElementById("water").textContent =
        t.water;

    document.getElementById("whenWater").textContent =
        t.whenWater;


    document.getElementById("weather").textContent =
        t.weather;

    document.getElementById("rain").textContent =
        t.rain;


    document.getElementById("pests").textContent =
        t.pests;

    document.getElementById("pestProblem").textContent =
        t.pestProblem;


    document.getElementById("soil").textContent =
        t.soil;

    document.getElementById("soilCondition").textContent =
        t.soilCondition;


    document.getElementById("schemes").textContent =
        t.schemes;

    document.getElementById("getSupport").textContent =
        t.getSupport;


    document.getElementById("safety").textContent =
        t.safety;

    document.getElementById("staySafe").textContent =
        t.staySafe;


    /* Message */

    document.getElementById("chooseText").textContent =
        t.choose;


    /* Scan */

    document.getElementById("scanTitle").textContent =
        t.scanTitle;

    document.getElementById("scanText").textContent =
        t.scanText;

    document.getElementById("checkText").textContent =
        t.check;


    /* Footer */

    document.getElementById("footerText").textContent =
        t.footer;


    /* Active language */

    document.getElementById("teluguBtn").classList.toggle(
        "active",
        language === "te"
    );

    document.getElementById("englishBtn").classList.toggle(
        "active",
        language === "en"
    );
}


/* ==========================================
   VOICE FUNCTION
========================================== */

function speak(textToSpeak, language) {

    if (!("speechSynthesis" in window)) {

        alert(
            language === "te"
                ? "మీ ఫోన్‌లో voice support లేదు."
                : "Voice is not supported on this device."
        );

        return;
    }


    speechSynthesis.cancel();


    const voices =
        speechSynthesis.getVoices();


    let selectedVoice = null;


    /* ======================================
       TELUGU VOICE
    ====================================== */

    if (language === "te") {

        selectedVoice =
            voices.find(function(voice) {

                return voice.lang
                    .toLowerCase() === "te-in";

            });


        if (!selectedVoice) {

            selectedVoice =
                voices.find(function(voice) {

                    return voice.lang
                        .toLowerCase()
                        .startsWith("te");

                });

        }

    }


    /* ======================================
       ENGLISH VOICE
    ====================================== */

    else {

        selectedVoice =
            voices.find(function(voice) {

                return voice.lang
                    .toLowerCase() === "en-in";

            });


        if (!selectedVoice) {

            selectedVoice =
                voices.find(function(voice) {

                    return voice.lang
                        .toLowerCase()
                        .startsWith("en");

                });

        }

    }


    const utterance =
        new SpeechSynthesisUtterance(
            textToSpeak
        );


    utterance.lang =
        language === "te"
            ? "te-IN"
            : "en-IN";


    if (selectedVoice) {

        utterance.voice =
            selectedVoice;

    }


    utterance.rate = 0.8;

    utterance.pitch = 1;

    utterance.volume = 1;


    speechSynthesis.speak(
        utterance
    );
}


/* ==========================================
   LOAD VOICES
========================================== */

if ("speechSynthesis" in window) {

    speechSynthesis.onvoiceschanged =
        function() {

            speechSynthesis.getVoices();

        };

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

    }

    else {

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

    }

    else {

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


    preview.src =
        URL.createObjectURL(file);


    preview.style.display =
        "block";


    cameraIcon.style.display =
        "none";


    result.innerHTML =
        "";


    const language =
        localStorage.getItem(
            "agrisafeLanguage"
        ) || "te";


    if (language === "te") {

        speak(

            "మీ పంట ఫోటో వచ్చింది. ఇప్పుడు పంట చూడండి బటన్ నొక్కండి.",

            "te"

        );

    }

    else {

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

        const message =
            language === "te"
                ? "⚠️ ముందుగా పంట ఫోటో తీయండి."
                : "⚠️ Please take a crop photo.";


        result.innerHTML =
            message;


        speak(

            language === "te"
                ? "ముందుగా పంట ఫోటో తీయండి."
                : "Please take a crop photo.",

            language

        );


        return;

    }


    result.innerHTML =
        language === "te"
            ? "🔍 పంటను పరిశీలిస్తున్నాము..."
            : "🔍 Checking your crop...";


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

        }

        else {

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
   FARMER INFORMATION
========================================== */

function showMessage(type) {

    const
