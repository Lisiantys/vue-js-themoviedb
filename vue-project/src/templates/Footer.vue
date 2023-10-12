<template>
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <RouterLink to="/">Best Movies</RouterLink>
                <RouterLink to="/american-movies">American Movies</RouterLink>
                <RouterLink to="/french-movies">French Movies</RouterLink>
            </div>
            <div class="footer-section">
                <RouterLink to="/upcoming-movies">Upcoming Movies</RouterLink>
                <RouterLink to="/search-movies">Search Movies</RouterLink>
                <RouterLink to="/top-rated-movies">Top Rated Movies</RouterLink>
            </div>
        </div>
        <div class="footer-bottom">
            © 2023 Your Company Name. All rights reserved.
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    font-size: 16px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-section {
    flex: 1;
    padding: 0 20px;
}

.footer-section h3 {
    margin-bottom: 15px;
}

footer a {
    display: block;
    margin-bottom: 10px;
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

footer a:hover {
    opacity: 0.7;
}

.footer-bottom {
    text-align: center;
    margin-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
    }

    .footer-section {
        margin-bottom: 20px;
    }
}

</style>