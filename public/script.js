document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero fade-in animation
    const hero = document.querySelector('.hero-fade-in');
    if (hero) {
        // Ensure animation starts after page load
        setTimeout(() => {
            hero.style.animationPlayState = 'running';
        }, 100);
    }

    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Countdown timer function
    function updateCountdown() {
        const targetDate = new Date('2025-10-19T00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        } else {
            // Conference has started or passed
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
        }
    }

    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    });

    // Handle missing images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            const placeholder = document.createElement('div');
            placeholder.style.width = this.width ? this.width + 'px' : '100%';
            placeholder.style.height = this.height ? this.height + 'px' : '200px';
            placeholder.style.backgroundColor = '#e5e7eb';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.borderRadius = '8px';
            placeholder.style.fontSize = '2rem';
            placeholder.textContent = '📷';
            
            this.parentNode.replaceChild(placeholder, this);
        });
    });

    // Citation data for reports
    const citationData = {
        'digital-divide-paper': {
            title: "Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4",
            authors: "Kush Dave, Ayushmaan Mukherjee, Anika Nandi, Lillianna Stroock",
            year: "2025",
            month: "August",
            type: "unpublished white paper",
            leadResearcher: "Kush Dave (lead researcher)",
            citations: {
                apa: "Dave, K., Mukherjee, A., Nandi, A., & Stroock, L. (2025, August). Closing the gap: Youth education, the digital divide, and the global pursuit of SDG 4 [Unpublished white paper].",
                mla: "Dave, Kush, Ayushmaan Mukherjee, Anika Nandi, and Lillianna Stroock. Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4. Unpublished white paper, Aug. 2025.",
                "chicago-nb": "Kush Dave, Ayushmaan Mukherjee, Anika Nandi, and Lillianna Stroock, Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4 (unpublished white paper, August 2025).",
                "chicago-ad": "Dave, Kush, Ayushmaan Mukherjee, Anika Nandi, and Lillianna Stroock. 2025. Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4. Unpublished white paper, August.",
                harvard: "Dave, K., Mukherjee, A., Nandi, A. and Stroock, L., 2025. Closing the gap: Youth education, the digital divide, and the global pursuit of SDG 4. Unpublished white paper, August.",
                ieee: "[1] K. Dave, A. Mukherjee, A. Nandi, and L. Stroock, \"Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4,\" unpublished white paper, Aug. 2025.",
                vancouver: "Dave K, Mukherjee A, Nandi A, Stroock L. Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4. [unpublished white paper]. 2025 Aug.",
                ama: "Dave K, Mukherjee A, Nandi A, Stroock L. Closing the Gap: Youth Education, the Digital Divide, and the Global Pursuit of SDG 4. Unpublished white paper. August 2025."
            }
        },
        'haiti-report': {
            title: "To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development?",
            author: "Kush K. Dave",
            journal: "Youth In Policy Journal of Policy Analysis",
            year: "2025",
            type: "unpublished manuscript",
            submission: "Summer 2025",
            citations: {
                apa: "Dave, K. K. (2025). To what extent can U.S. and Caribbean-led interventions stabilize Haiti while ensuring its long-term sovereignty and development? [Unpublished manuscript]. Youth In Policy Journal of Policy Analysis.",
                mla: "Dave, Kush K. \"To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development?\" Youth In Policy Journal of Policy Analysis, Summer 2025, Unpublished manuscript.",
                "chicago-nb": "Kush K. Dave, \"To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development?\" (unpublished manuscript, Youth In Policy Journal of Policy Analysis, Summer 2025).",
                "chicago-ad": "Dave, Kush K. 2025. \"To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development?\" Unpublished manuscript, Youth In Policy Journal of Policy Analysis.",
                harvard: "Dave, K.K., 2025. To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development? Unpublished manuscript. Youth In Policy Journal of Policy Analysis.",
                ieee: "[1] K. K. Dave, \"To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development?\", unpublished manuscript, Youth In Policy Journal of Policy Analysis, Summer 2025.",
                vancouver: "1. Dave KK. To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development? [unpublished manuscript]. Youth In Policy Journal of Policy Analysis; 2025.",
                ama: "Dave KK. To What Extent Can U.S. and Caribbean-Led Interventions Stabilize Haiti While Ensuring Its Long-Term Sovereignty and Development? Unpublished manuscript, Youth In Policy Journal of Policy Analysis; 2025."
            }
        },
        'syria-report': {
            title: "Policy Recommendations for the United States Regarding Syria",
            author: "Ayushmaan Mukherjee",
            year: "2025",
            type: "unpublished manuscript",
            pages: "22 pp.",
            postDate: "post–December 2024",
            citations: {
                apa: "Mukherjee, A. (2025). Policy recommendations for the United States regarding Syria [Unpublished manuscript].",
                mla: "Mukherjee, Ayushmaan. Policy Recommendations for the United States Regarding Syria. Unpublished manuscript, 2025.",
                "chicago-nb": "Ayushmaan Mukherjee, \"Policy Recommendations for the United States Regarding Syria\" (unpublished manuscript, 2025).",
                "chicago-ad": "Mukherjee, Ayushmaan. 2025. \"Policy Recommendations for the United States Regarding Syria.\" Unpublished manuscript.",
                harvard: "Mukherjee, A., 2025. Policy Recommendations for the United States Regarding Syria. Unpublished manuscript.",
                ieee: "[2] A. Mukherjee, \"Policy Recommendations for the United States Regarding Syria,\" unpublished manuscript, 22 pp., 2025.",
                vancouver: "2. Mukherjee A. Policy Recommendations for the United States Regarding Syria. [unpublished manuscript]. 2025;22 p.",
                ama: "Mukherjee A. Policy Recommendations for the United States Regarding Syria. Unpublished manuscript; 2025."
            }
        },
        'ukraine-resolution': {
            title: "Resolution on Humanitarian Aid and Reconstruction in Ukraine",
            committee: "United Nations Security Council",
            conference: "GVMUNC VIII",
            year: "2024",
            type: "resolution",
            citations: {
                apa: "United Nations Security Council. (2024). Resolution on humanitarian aid and reconstruction in Ukraine [Conference resolution]. GVMUNC VIII.",
                mla: "United Nations Security Council. \"Resolution on Humanitarian Aid and Reconstruction in Ukraine.\" GVMUNC VIII, 2024.",
                "chicago-nb": "United Nations Security Council, \"Resolution on Humanitarian Aid and Reconstruction in Ukraine\" (conference resolution, GVMUNC VIII, 2024).",
                "chicago-ad": "United Nations Security Council. 2024. \"Resolution on Humanitarian Aid and Reconstruction in Ukraine.\" Conference resolution, GVMUNC VIII.",
                harvard: "United Nations Security Council, 2024. Resolution on humanitarian aid and reconstruction in Ukraine. Conference resolution, GVMUNC VIII.",
                ieee: "[1] United Nations Security Council, \"Resolution on Humanitarian Aid and Reconstruction in Ukraine,\" conference resolution, GVMUNC VIII, 2024.",
                vancouver: "1. United Nations Security Council. Resolution on Humanitarian Aid and Reconstruction in Ukraine [conference resolution]. GVMUNC VIII; 2024.",
                ama: "United Nations Security Council. Resolution on Humanitarian Aid and Reconstruction in Ukraine. Conference resolution, GVMUNC VIII; 2024."
            }
        },
        'climate-resolution': {
            title: "Comprehensive Framework for Climate Action and Green Technology Transfer",
            committee: "United Nations Environment Programme (UNEP)",
            conference: "GVMUNC VII",
            year: "2024",
            type: "resolution",
            citations: {
                apa: "United Nations Environment Programme. (2024). Comprehensive framework for climate action and green technology transfer [Conference resolution]. GVMUNC VII.",
                mla: "United Nations Environment Programme. \"Comprehensive Framework for Climate Action and Green Technology Transfer.\" GVMUNC VII, 2024.",
                "chicago-nb": "United Nations Environment Programme, \"Comprehensive Framework for Climate Action and Green Technology Transfer\" (conference resolution, GVMUNC VII, 2024).",
                "chicago-ad": "United Nations Environment Programme. 2024. \"Comprehensive Framework for Climate Action and Green Technology Transfer.\" Conference resolution, GVMUNC VII.",
                harvard: "United Nations Environment Programme, 2024. Comprehensive framework for climate action and green technology transfer. Conference resolution, GVMUNC VII.",
                ieee: "[2] United Nations Environment Programme, \"Comprehensive Framework for Climate Action and Green Technology Transfer,\" conference resolution, GVMUNC VII, 2024.",
                vancouver: "2. United Nations Environment Programme. Comprehensive Framework for Climate Action and Green Technology Transfer [conference resolution]. GVMUNC VII; 2024.",
                ama: "United Nations Environment Programme. Comprehensive Framework for Climate Action and Green Technology Transfer. Conference resolution, GVMUNC VII; 2024."
            }
        },
        'cybersecurity-resolution': {
            title: "International Cybersecurity Cooperation and Digital Rights Protection",
            committee: "United Nations General Assembly Third Committee",
            conference: "GVMUNC VI",
            year: "2023",
            type: "resolution",
            citations: {
                apa: "United Nations General Assembly Third Committee. (2023). International cybersecurity cooperation and digital rights protection [Conference resolution]. GVMUNC VI.",
                mla: "United Nations General Assembly Third Committee. \"International Cybersecurity Cooperation and Digital Rights Protection.\" GVMUNC VI, 2023.",
                "chicago-nb": "United Nations General Assembly Third Committee, \"International Cybersecurity Cooperation and Digital Rights Protection\" (conference resolution, GVMUNC VI, 2023).",
                "chicago-ad": "United Nations General Assembly Third Committee. 2023. \"International Cybersecurity Cooperation and Digital Rights Protection.\" Conference resolution, GVMUNC VI.",
                harvard: "United Nations General Assembly Third Committee, 2023. International cybersecurity cooperation and digital rights protection. Conference resolution, GVMUNC VI.",
                ieee: "[3] United Nations General Assembly Third Committee, \"International Cybersecurity Cooperation and Digital Rights Protection,\" conference resolution, GVMUNC VI, 2023.",
                vancouver: "3. United Nations General Assembly Third Committee. International Cybersecurity Cooperation and Digital Rights Protection [conference resolution]. GVMUNC VI; 2023.",
                ama: "United Nations General Assembly Third Committee. International Cybersecurity Cooperation and Digital Rights Protection. Conference resolution, GVMUNC VI; 2023."
            }
        },
        'eu-extremism-resolution': {
            title: "Political Extremism",
            committee: "European Union",
            conference: "GVMUNC IV",
            year: "2022",
            type: "resolution",
            citations: {
                apa: "European Union. (2022). Political extremism [Conference resolution]. GVMUNC IV.",
                mla: "European Union. \"Political Extremism.\" GVMUNC IV, 2022.",
                "chicago-nb": "European Union, \"Political Extremism\" (conference resolution, GVMUNC IV, 2022).",
                "chicago-ad": "European Union. 2022. \"Political Extremism.\" Conference resolution, GVMUNC IV.",
                harvard: "European Union, 2022. Political extremism. Conference resolution, GVMUNC IV.",
                ieee: "[4] European Union, \"Political Extremism,\" conference resolution, GVMUNC IV, 2022.",
                vancouver: "4. European Union. Political Extremism [conference resolution]. GVMUNC IV; 2022.",
                ama: "European Union. Political Extremism. Conference resolution, GVMUNC IV; 2022."
            }
        }
    };

    // Citation modal functionality
    const citationModal = document.getElementById('citation-modal');
    const citationTitle = document.getElementById('citation-title');
    const citationStyleSelect = document.getElementById('citation-style');
    const citationTextArea = document.getElementById('citation-text');
    const copyButton = document.getElementById('copy-citation');
    const copySuccess = document.getElementById('copy-success');
    const closeButton = document.querySelector('.citation-close');

    let currentCitationId = null;

    // Open citation modal
    document.querySelectorAll('.citation-btn').forEach(button => {
        button.addEventListener('click', function() {
            const citationId = this.getAttribute('data-citation');
            currentCitationId = citationId;
            
            if (citationData[citationId]) {
                citationTitle.textContent = `Cite: ${citationData[citationId].title.substring(0, 50)}...`;
                updateCitationText();
                citationModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close citation modal
    function closeCitationModal() {
        citationModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        currentCitationId = null;
    }

    closeButton.addEventListener('click', closeCitationModal);

    // Close modal when clicking outside
    citationModal.addEventListener('click', function(e) {
        if (e.target === citationModal) {
            closeCitationModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && citationModal.style.display === 'block') {
            closeCitationModal();
        }
    });

    // Update citation text when style changes
    citationStyleSelect.addEventListener('change', updateCitationText);

    function updateCitationText() {
        if (currentCitationId && citationData[currentCitationId]) {
            const selectedStyle = citationStyleSelect.value;
            const citation = citationData[currentCitationId].citations[selectedStyle];
            citationTextArea.value = citation;
        }
    }

    // Copy citation to clipboard
    copyButton.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(citationTextArea.value);
            showCopySuccess();
        } catch (err) {
            // Fallback for older browsers
            citationTextArea.select();
            citationTextArea.setSelectionRange(0, 99999);
            document.execCommand('copy');
            showCopySuccess();
        }
    });

    function showCopySuccess() {
        copySuccess.classList.add('show');
        setTimeout(() => {
            copySuccess.classList.remove('show');
        }, 3000);
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu && hamburger && window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});
