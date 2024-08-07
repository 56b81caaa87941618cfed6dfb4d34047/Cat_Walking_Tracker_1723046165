/* Summary: This is a canvas element for displaying a purple glow and a particle animation in the background of the hero component.
*/

Vue.component("particle_component_1723046166", {
    template: `
    <div>
        <div id="illustration"
            class="absolute inset-0 -z-10 -mx-28 rounded-b-5xl pointer-events-none overflow-hidden"
            style="z-index:0" aria-hidden="true">
            <div id="illustration-inner" class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
                <svg id="illustration-svg" xmlns="http://www.w3.org/2000/svg" class="max-w-none"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="2146" height="744">
                    <defs>
                        <linearGradient id="gradient1" x1="43.176%" x2="50%" y1="12.436%" y2="97.744%">
                            <stop offset="0%" :stop-color="gradientOnePrimaryStopColor" />
                            <stop offset="100%" :stop-color="gradientSecondaryStopColor" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                            <stop offset="0%" :stop-color="gradientSecondaryStopColor" />
                            <stop offset="100%" :stop-color="gradientSecondaryStopColor" stop-opacity="0" />
                        </linearGradient>
                        <filter id="filter1" width="145.2%" height="187%" x="-22.6%" y="-43.5%"
                            filterUnits="objectBoundingBox">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                        </filter>
                        <filter id="filter2" width="165.1%" height="170.3%" x="-32.5%" y="-35.1%"
                            filterUnits="objectBoundingBox">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                        </filter>
                        <radialGradient id="radial-gradient" cx="50%" cy="100%" r="77.678%" fx="50%"
                            fy="100%" gradientTransform="matrix(0 -1 .37746 0 .123 1.5)">
                            <stop offset="0%" :stop-color="radialGradientPrimaryColor" />
                            <stop offset="22.35%" :stop-color="radialGradientSecondaryColor" />
                            <stop offset="100%" :stop-color="radialGradientTertiaryColor" stop-opacity="0" />
                        </radialGradient>
                        <path id="path1" d="M0 0h2440v921H0z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(-140 -177)">
                        <mask id="mask1" fill="#fff">
                            <use xlink:href="#path1" />
                        </mask>
                        <g mask="url(#mask1)">
                            <path id="radial-path" fill="url(#radial-gradient)" d="M0 0h2440v921H0z" />
                            <path id="gradient-path1" fill="url(#gradient1)" fill-rule="nonzero"
                                d="M1975.72 781.763c-3.682-3-8.757-3.61-13.042-1.568a12.323 12.323 0 0 0-7.014 11.129v98.57h-430.368c-6.79 0-12.296 5.516-12.296 12.321v98.57c0 6.805 5.505 12.321 12.296 12.321h430.368v98.57a12.323 12.323 0 0 0 7.014 11.129 12.276 12.276 0 0 0 13.042-1.568l196.74-160.176a12.33 12.33 0 0 0 4.54-9.561 12.33 12.33 0 0 0-4.54-9.561l-196.74-160.176Z"
                                filter="url(#filter1)" />
                            <path id="gradient-path2" fill="url(#gradient2)" d="m913 274 461 369-284 58z"
                                filter="url(#filter2)" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <div class="container mx-auto px-4 py-8">
            <form @submit.prevent="submitForm" class="bg-pink-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h2 class="text-2xl font-bold mb-6 text-center text-pink-600">Cat Information Form</h2>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catName">
                        Cat's Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catName" type="text" v-model="catName" placeholder="Enter your cat's name" required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catAge">
                        Cat's Age
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catAge" type="number" v-model="catAge" placeholder="Enter your cat's age" required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catBreed">
                        Cat's Breed
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catBreed" type="text" v-model="catBreed" placeholder="Enter your cat's breed" required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catColor">
                        Cat's Color
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catColor" type="text" v-model="catColor" placeholder="Enter your cat's color" required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catWeight">
                        Cat's Weight (in kg)
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catWeight" type="number" step="0.1" v-model="catWeight" placeholder="Enter your cat's weight" required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catDiet">
                        Cat's Diet
                    </label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catDiet" v-model="catDiet" required>
                        <option value="">Select diet type</option>
                        <option value="dry">Dry Food</option>
                        <option value="wet">Wet Food</option>
                        <option value="mixed">Mixed</option>
                        <option value="raw">Raw Diet</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catVaccinated">
                        Is your cat vaccinated?
                    </label>
                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="catVaccinated" v-model="catVaccinated" value="yes" required>
                            <span class="ml-2">Yes</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="catVaccinated" v-model="catVaccinated" value="no">
                            <span class="ml-2">No</span>
                        </label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catPersonality">
                        Cat's Personality Traits (select all that apply)
                    </label>
                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox" v-model="catPersonality" value="playful">
                            <span class="ml-2">Playful</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="checkbox" class="form-checkbox" v-model="catPersonality" value="lazy">
                            <span class="ml-2">Lazy</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="checkbox" class="form-checkbox" v-model="catPersonality" value="affectionate">
                            <span class="ml-2">Affectionate</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="checkbox" class="form-checkbox" v-model="catPersonality" value="independent">
                            <span class="ml-2">Independent</span>
                        </label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="catDescription">
                        Additional Information
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="catDescription" v-model="catDescription" rows="4" placeholder="Enter any additional information about your cat"></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>`,
    data() {
        return {
            expanded: false, 
            tab: null,
            gradientOnePrimaryStopColor:"#A855F7",
            gradientSecondaryStopColor: "#6366F1",
            radialGradientPrimaryColor: "#E9D5FF",
            radialGradientSecondaryColor: "#A855F7",
            radialGradientTertiaryColor: "#0F172A",
            catName: '',
            catAge: null,
            catBreed: '',
            catColor: '',
            catWeight: null,
            catDiet: '',
            catVaccinated: '',
            catPersonality: [],
            catDescription: ''
        };  
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log('Form submitted:', {
                name: this.catName,
                age: this.catAge,
                breed: this.catBreed,
                color: this.catColor,
                weight: this.catWeight,
                diet: this.catDiet,
                vaccinated: this.catVaccinated,
                personality: this.catPersonality,
                description: this.catDescription
            });
            // Reset form fields after submission
            this.catName = '';
            this.catAge = null;
            this.catBreed = '';
            this.catColor = '';
            this.catWeight = null;
            this.catDiet = '';
            this.catVaccinated = '';
            this.catPersonality = [];
            this.catDescription = '';
        }
    }
    });
                    