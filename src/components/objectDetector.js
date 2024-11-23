async function createObjectDetector {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    objectDetector = ObjectDetector.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-tasks/object_detector/efficientdet_lite0_uint8.tflite`,
        },
        scoreThreshold: 0.5,
        runningMode: 'IMAGE'
    });
    createObjectDetector();
}

const detectionResult = objectDetector.detect(image); // Returns a 'result' object containing category and likelihoods
const detections = detectionResult.detections; // Access the results of the image detection
const result = detections[0].categories[0].categoryName; // Assigning the first category from the first detection 

// Video detection
const startTime = performance.now();
const videoDetectionResult = objectDetector.detectForVideo(
    video,
    startTime
)