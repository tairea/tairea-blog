<template>
    <HomeLayout>
        <div id="home-container">

            <div id="ian" class="col-third">
                <g-link to="/Blog/">
                    <img src="">
                    <h1>Ian</h1>
                </g-link>
                </div>
            <div id="ben" class="col-third">
                <img src="">
                <h1>Ben</h1>
            </div>
            <div id="sam" class="col-third">
                <img src="">
                <h1>Sam</h1>
            </div>
        </div>
    </HomeLayout>
</template>

<script>
    import HomeLayout from "../layouts/HomeTemplate";

    export default {
        components: {
            HomeLayout
        },
        metaInfo: {
            title: "Ian",
            titleTemplate: "%s Tairea.io"
        }
    };
</script>

<style lang="scss">
    #home-container {
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    #ian {
        background-image: url("../assets/images/dot-grid.png");
        background-attachment: fixed;
    }

    #ben {
        /* background-image: url("../assets/images/y-so-serious-white.png"); */
        background-image: url("../assets/images/topography.png");
        background-attachment: fixed;
    }

    #sam {
        background-image: url("../assets/images/webb.png");
        background-attachment: fixed;
    }


    .col-third {
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* .container-fluid {
        background-color: #1f1f1f;
        background-image: url("../assets/images/webb.png");
        background-attachment: fixed;
    }

    .subheading {
        text-transform: uppercase;
        font-weight: 500;
        font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1.5rem;
    }

    .fa-ul>li {
        display: flex;
        align-items: center;
    }

    .dev-icons {
        font-size: 3rem;
    }

    .dev-icons .list-inline-item svg:hover {
        color: var(--primary);
    }

    section.resume-section {
        padding-top: 5rem !important;
        padding-bottom: 5rem !important;
        max-width: 75rem;
    }

    section.resume-section .resume-item .resume-date {
        min-width: none;
    }

    @media (min-width: 768px) {
        section.resume-section {
            min-height: 100vh;
        }

        section.resume-section .resume-item .resume-date {
            min-width: 18rem;
        }
    }

    @media (min-width: 992px) {
        section.resume-section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
        }
    } */
</style>