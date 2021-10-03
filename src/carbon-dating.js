const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


export default function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= MODERN_ACTIVITY) {
        return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
    } else {
        return false
    }
}
