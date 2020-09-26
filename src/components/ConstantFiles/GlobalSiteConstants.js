const GlobalSiteConstants = {
    HeaderNames: [
        "Home",
        "Login",
        "Contribute",
        "Feedback"
    ],

    HeaderHrefs: [
        "/",
        "/login",
        "/contribute",
        "/feedback"
    ],

    Q1: {
        marginTop: "3rem",
        fontSize: "3rem",
        fontStyle: "auto",
        fontWeight: "700",
        OverallHeight: "40%",
        DisplayMessage:"Welcome to WebJsonify",
        textAlign: "center",
        fontColor: "#1d2d50"
    },

    Q2: {
        marginTop: "3rem",
        fontSize: "1.5rem",
        fontStyle: "italic",
        fontWeight: "300",
        OverallHeight: "20%",
        DisplayMessage:"An Open Source and Fully White Labelled Solution to Build and Create Static Webpages...",
        textAlign: "center",
        fontColor: "#8d93ab"
    },

    Q3: {
        marginTop: "0",
        marginRight: "1rem",
        fontSize: "2.5rem",
        fontStyle: "oblique",
        fontWeight: "500",
        OverallHeight: "40%",
        textAlign: "center",
        fontColor: "#1d2d50",
        TextsToAnimate: ["View","Design","Customize","Create","Share"]

    },

    FrontPageImageDetails: {
        FrontPageImageLocation: require("../../assets/images/welcomepage.png"),
        FrontPageImageAlt: "Front Page Image: Not Able to Load"
    }


};

export default GlobalSiteConstants;