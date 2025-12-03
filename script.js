// --- 1. Data Source ---
const companyDetails = {
    name: "TVE Travel Elevator",
    contactPerson: "Manveer",
    address: "Shakti Nagar Colony, Near St. Mary, Bijnor (U.P.)",
    phones: ["+91 8279404446", "+91 6005209377", "+91 8006217116"],
    email: "contact@tvetravelelevator.com"
};

// COMPRESSED DETAILS: Descriptions shortened to punchy phrases
const products = [
    // Updated to use the correct spaced .jpg/.png file names from the directory listing
    { id: "pass1", category: "Passenger Elevators", name: "Building Passenger Elevator", image: "Lifts/Commercial Passenger Elevator.jpg", specs: ["10 Persons (1000kg)", "Manual Door", "Simplex Signal"], details: "High-efficiency lift for commercial towers." },
    { id: "pass2", category: "Passenger Elevators", name: "Residential Automatic", image: "Lifts/Luxury Residential Automatic Elevator.jpg", specs: ["6-10 Persons", "Auto Door", "SS Finish"], details: "Silent operation for modern homes." },
    { id: "pass3", category: "Passenger Elevators", name: "MS Passenger Elevator", image: "Lifts/MS Powder-Coated Passenger Elevator.jpg", specs: ["10 Persons", "Mild Steel", "110 KG Load"], details: "Premium quality for standard housing." },
    { id: "pass4", category: "Passenger Elevators", name: "Telescopic Door Elevator", image: "Lifts/Telescopic Door Elevator.jpg", specs: ["15 Persons", "0.6 m/s Speed", "Manual Door"], details: "Safe, telescopic door system." },
    { id: "pass5", category: "Passenger Elevators", name: "Manual Passenger Lift", image: "Lifts/Manual Passenger Elevator.jpg", specs: ["13 Persons", "Sharp Machine", "SS Finish"], details: "Robust build with manual doors." },
    { id: "pass6", category: "Passenger Elevators", name: "Auto Door Elevator", image: "Lifts/Automatic Sliding Door Elevator.jpg", specs: ["15 Persons", "Geared Traction", "Mild Steel"], details: "Geared traction for heavy residential use." },
    { id: "pass7", category: "Passenger Elevators", name: "SS Passenger Elevators", image: "Lifts/Luxury Stainless Steel Hotel Elevator.jpg", specs: ["10 Persons", "High Speed", "Auto Door"], details: "Durable, full Stainless Steel finish." },
    { id: "pass8", category: "Passenger Elevators", name: "Swing Door Elevator", image: "Lifts/Swing Door Residential Elevator.jpg", specs: ["18 Persons", "1 m/s Speed", "Swing Door"], details: "Home-style swing door design." },
    { id: "home1", category: "Home Elevators", name: "Hydraulic Home Lift", image: "Lifts/Hydraulic Glass Home Elevator.jpg", specs: ["6 Persons", "0.5 m/s", "No Machine Room"], details: "No shaft required; fits existing homes." },
    { id: "home2", category: "Home Elevators", name: "Residential Traction", image: "Lifts/Residential Traction Elevator.jpg", specs: ["13 Persons", "SS Finish", "Geared Traction"], details: "Smooth, reliable residential traction." },
    { id: "part1", category: "Elevator Parts", name: "SS-304 Cabins", image: "Lifts/Ultra-Luxury SS-304 Cabin.jpg", specs: ["SS 304 (1.2mm)", "13 Persons", "Mirror Finish"], details: "Durable SS-304 mirror finish." },
    { id: "part2", category: "Elevator Parts", name: "SS Elevator Door", image: "Lifts/Stainless Steel Elevator Doors.jpg", specs: ["Height: 6-7 Ft", "SS (18 Gauge)", "Auto Open"], details: "Standard replacement SS doors." },
    { id: "part3", category: "Elevator Parts", name: "Door Sensors", image: "Lifts/door_sensor.png", specs: ["50cm Range", "Wireless: 200m", "Anti-interference"], details: "Safety sensors prevent closing accidents." },
    { id: "part4", category: "Elevator Parts", name: "MS Powder Coated Cabin", image: "Lifts/Powder-Coated MS Industrial Cabin.jpg", specs: ["Mild Steel", "1000kg", "Powder Coated"], details: "Cost-effective powder coated cabin." },
    { id: "spec1", category: "Specialized Elevators", name: "Hospital Stretcher Lift", image: "Lifts/Hostpital strecher.png", specs: ["10-26 Persons", "680-1668 kgs", "Deep Car"], details: "Fits medical stretchers and equipment." },
    { id: "spec2", category: "Specialized Elevators", name: "Dumbwaiter", image: "Lifts/Commercial Kitchen Dumbwaiter.jpg", specs: ["100-500 kgs", "Industrial Use", "SS Body"], details: "Small freight lift for hotels/hospitals." },
    { id: "goods1", category: "Specialized Elevators", name: "Goods Cum Passenger", image: "Lifts/Goods-Cum-Passenger Elevator.jpg", specs: ["1-3 Ton", "Mild Steel", "Heavy Duty"], details: "Heavy-duty factory elevator." },
    { id: "cap1", category: "Capsule Elevators", name: "Panoramic Capsule", image: "Lifts/Panoramic Glass Capsule Elevator.jpg", specs: ["10-12 Persons", "Glass Body", "2.0 m/s"], details: "Glass walls for panoramic views." },
    { id: "auto1", category: "Automobile Elevators", name: "Car Elevator", image: "Lifts/Vehicle Car Elevator.jpg", specs: ["0-2 Tons", "Mild Steel", "Manual Lock"], details: "Heavy-duty car parking lift." },
    { id: "serv1", category: "Services", name: "AMC Service", image: "Lifts/Maintenance Engineer.jpg", specs: ["Annual Maint.", "On-site Service", "24/7 Call"], details: "24/7 on-site maintenance support." }
];

// --- 2. Helper Logic ---
const getImage = (item) => {
    if (item.image && item.image.trim() !== "") {
        // FIX: Encode the path to handle spaces (e.g., replace ' ' with '%20')
        return item.image.split('/').map(segment => encodeURIComponent(segment)).join('/').replace(/%2520/g, '%20');
    }
    return `https://placehold.co/600x400/0f172a/FFFFFF?text=${encodeURIComponent(item.name)}`;
};

// Global object to store frequently accessed DOM elements
const DOM = {
    // Footer Elements
    year: document.getElementById('year'),
    footerAddress: document.getElementById('footer-address'),
    footerPhones: document.getElementById('footer-phones'),
    footerEmail: document.getElementById('footer-email'),

    // Navigation Elements
    menuToggle: document.querySelector('.menu-toggle'),
    navMenu: document.querySelector('.nav-menu'),

    // Hero Elements
    elevatorMover: document.querySelector('.elevator-cabin-mover'),
    elevatorShaft: document.querySelector('.elevator-shaft'),
    floorContainer: document.getElementById('floor-display'),
    gsapFadeElements: document.querySelectorAll('.gsap-fade'),

    // Product Page Elements
    productContainer: document.getElementById('product-list-container'),
    detailCard: document.getElementById('detail-card'),
    relatedSectionWrapper: document.getElementById('rec-section-wrapper'), // Renamed from recWrapper
};


// --- 3. Core Functions ---

/**
 * Handles the injection of company details into the footer.
 */
function initializeFooter() {
    if (DOM.year) DOM.year.textContent = new Date().getFullYear();
    if (DOM.footerAddress) DOM.footerAddress.textContent = companyDetails.address;
    if (DOM.footerEmail) DOM.footerEmail.textContent = companyDetails.email;
    if (DOM.footerPhones) {
        DOM.footerPhones.innerHTML = companyDetails.phones
            .map(p => `<div>📞 ${p}</div>`)
            .join('');
    }
}

/**
 * Handles the mobile menu toggle functionality.
 */
function setupMobileMenu() {
    if (DOM.menuToggle && DOM.navMenu) {
        DOM.menuToggle.addEventListener('click', () => {
            const isFlex = DOM.navMenu.style.display === 'flex';
            DOM.navMenu.style.display = isFlex ? 'none' : 'flex';
            
            if(!isFlex) {
                // Apply mobile menu styles on open
                DOM.navMenu.style.flexDirection = 'column';
                DOM.navMenu.style.position = 'absolute';
                DOM.navMenu.style.top = '70px';
                DOM.navMenu.style.left = '0';
                DOM.navMenu.style.width = '100%';
                DOM.navMenu.style.background = 'white';
                DOM.navMenu.style.padding = '20px';
                DOM.navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
}

/**
 * Sets up GSAP animations for the Hero section.
 */
function setupHeroAnimations() {
    // Elevator Cabin Mover
    if (DOM.elevatorMover) {
        let elevatorAnim = gsap.to(DOM.elevatorMover, { 
            y: "-380px", 
            duration: 5, 
            ease: "power2.inOut", 
            repeat: -1, 
            yoyo: true 
        });

        if (DOM.elevatorShaft) {
            DOM.elevatorShaft.addEventListener('mouseenter', () => elevatorAnim.pause());
            DOM.elevatorShaft.addEventListener('mouseleave', () => elevatorAnim.play());
        }
    }

    // Glowing Floors Display
    if (DOM.floorContainer) {
        const floors = ['G', '1', '2', '3', '4', '5', '6', '7', '8'];
        floors.forEach(floor => {
            const div = document.createElement('div');
            div.classList.add('bg-floor-number');
            div.innerText = floor;
            DOM.floorContainer.appendChild(div);
        });
        // Loop the floor numbers vertically
        gsap.to(DOM.floorContainer, { 
            y: "50%", 
            duration: 12, 
            ease: "linear", 
            repeat: -1, 
            modifiers: { 
                y: gsap.utils.unitize(y => parseFloat(y) % 1500) 
            } 
        });
    }

    // Hero Text Fade In
    if(DOM.gsapFadeElements.length > 0) {
        gsap.from(DOM.gsapFadeElements, { 
            y: 30, 
            opacity: 0, 
            duration: 1, 
            stagger: 0.2, 
            ease: "power2.out" 
        });
    }
}

/**
 * Renders the product catalog on the index page.
 */
function renderProductCatalog() {
    if (!DOM.productContainer) return;

    // Group products by category
    const grouped = products.reduce((acc, curr) => { 
        (acc[curr.category] = acc[curr.category] || []).push(curr); 
        return acc; 
    }, {});

    Object.keys(grouped).forEach(category => {
        const categoryId = 'cat-' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        // Create Category Wrapper
        const wrapper = document.createElement('div');
        wrapper.id = categoryId; 
        wrapper.style.scrollMarginTop = "100px";
        wrapper.innerHTML = `<h3 class="cat-header">${category}</h3>`;
        
        // Create Product Grid
        const grid = document.createElement('div');
        grid.className = 'grid-layout';

        // Populate Grid with Product Cards
        grouped[category].forEach(item => {
            grid.innerHTML += `
                <div class="prod-card">
                    <div class="p-img-wrap">
                        <img src="${getImage(item)}" alt="${item.name}" class="p-img">
                    </div>
                    <a href="product-detail.html?id=${item.id}" class="p-link" style="text-decoration:none; color:inherit;">
                        <div class="p-body">
                            <h4 class="p-title">${item.name}</h4>
                            <p class="p-desc">${item.details}</p>
                            <span style="font-weight:600; font-size:0.9rem; color:#3b82f6;">View Specs →</span>
                        </div>
                    </a>
                </div>
            `;
        });
        
        wrapper.appendChild(grid);
        DOM.productContainer.appendChild(wrapper);
    });
}

/**
 * Handles rendering the specific product on the detail page.
 */
function renderProductDetail() {
    if (!DOM.detailCard) return;

    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get('id');
    const product = products.find(p => p.id === prodId);

    if (!product) {
        DOM.detailCard.innerHTML = "<h2 style='padding:40px; text-align:center'>Product Not Found. <a href='index.html'>Go Home</a></h2>";
        return;
    }
    
    // Inject Main Product Details
    document.getElementById('d-img').src = getImage(product);
    document.getElementById('d-category').textContent = product.category;
    document.getElementById('d-name').textContent = product.name;
    document.getElementById('d-details').textContent = product.details;
    
    // Inject Specs List
    const specsList = document.getElementById('d-specs');
    product.specs.forEach(spec => { 
        const li = document.createElement('li'); 
        li.textContent = spec; 
        specsList.appendChild(li); 
    });
    
    // Animate detail card
    gsap.from(".detail-layout", { y: 20, opacity: 0, duration: 0.8 });

    // Handle Related Products Slider
    renderRelatedProducts(product);
}

/**
 * Renders the related products slider on the detail page.
 * @param {Object} currentProduct - The product currently being viewed.
 */
function renderRelatedProducts(currentProduct) {
    if (!DOM.relatedSectionWrapper) return;

    const relatedItems = products.filter(
        p => p.category === currentProduct.category && p.id !== currentProduct.id
    );

    if (relatedItems.length === 0) {
        DOM.relatedSectionWrapper.style.display = 'none';
        return;
    }
    
    DOM.relatedSectionWrapper.style.display = 'block';

    // 1. Create wrapper structure with Buttons
    DOM.relatedSectionWrapper.innerHTML = `
        <h3 class="cat-header">Related Solutions</h3>
        <div class="slider-wrapper">
            <button class="slider-btn left" id="slider-btn-left">&#8592;</button>
            <div class="slider-track" id="slider-track">
                ${relatedItems.map(item => `
                    <div class="rec-card" onclick="window.location.href='product-detail.html?id=${item.id}'">
                        <img src="${getImage(item)}" alt="${item.name}" class="rec-img">
                        <div class="rec-body">
                            <h4 class="rec-title">${item.name}</h4>
                            <div style="margin-top:10px; font-size:0.8rem; font-weight:600; color:#3b82f6;">View Details</div>
                        </div>
                    </div>
                `).join('')} 
            </div>
            <button class="slider-btn right" id="slider-btn-right">&#8594;</button>
        </div>
    `;

    // 2. Auto Scroll Logic
    const track = document.getElementById('slider-track');
    let autoScroll;
    const scrollAmount = 320; // Scroll width per step

    // Define scroll function locally for event listeners
    function manualScroll(amount) {
        track.scrollBy({ left: amount, behavior: 'smooth' });
        clearInterval(autoScroll); // Stop auto-scroll on manual interaction
        startAutoScroll();        // Restart auto-scroll after a delay
    }

    function startAutoScroll() {
        // Clear any existing interval before starting a new one
        clearInterval(autoScroll); 
        autoScroll = setInterval(() => {
            // Check if we are near the end of the scrollable content (within 10px)
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                // Scroll back to the start
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll forward by one card width
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000); // Wait 3 seconds before next auto scroll
    }
    
    // Attach event listeners to buttons
    document.getElementById('slider-btn-left').addEventListener('click', () => manualScroll(-scrollAmount));
    document.getElementById('slider-btn-right').addEventListener('click', () => manualScroll(scrollAmount));

    // Start auto-scroll and pause/resume on hover
    startAutoScroll();
    track.addEventListener('mouseenter', () => clearInterval(autoScroll));
    track.addEventListener('mouseleave', () => startAutoScroll());
}


// --- 4. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    initializeFooter();
    setupMobileMenu();
    setupHeroAnimations();
    renderProductCatalog();
    renderProductDetail();
});