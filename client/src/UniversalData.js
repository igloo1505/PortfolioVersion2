export const heroText = () => {
    return (
        <h1 className="staggeredEntrance">Web Experiences: <br/> Designed Beautifully, <br/> Function Flawlessly</h1>
        )
}
export const HeroImagePallet = {
    white: "#fff", 
    secondary: "#00a0f2",
    secondaryTwo: "#0cf7ff",
    secondaryThree: "#13f9ff",
    contrast: "#f15ed0",
    subtle: "#fdf58a"
}
export const AppColors = {
    navBarColor: "#0080F0",
    heroBodyColor: "#008EEB",
    skillsBodyColor: "#13F9FF",
    promptColor: "#F8F886",
    subtitleColor: "#00B0F8",
    descriptionTextColor: "#3B3B3B"
}

export const promptText = () => {
    return (
        <p className="staggeredEntrance">Learn More Below</p>
    )
}
export const featuredTitleText = () => {
    return (
        <>
        <p className="subtitle" style={{color: AppColors.subtitleColor}}>Featured App</p>
        <a href="#!" className="featured-title">Benchmark iOS App</a>
        <p className="featured-desc" style={{color: AppColors.descriptionTextColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor cum adipisci reiciendis unde beatae delectus itaque saepe. Libero, facilis?</p>
        </>
    )
}

export const skillsArray = [
    {
        index: 0,
        classIndex: "one",
        title: "Modern Frontend Design", 
        type: "FrontendDesign",
        desc: "I strive to build unique online experiences directly from code, using the most modern technology and UI trends. Technologies like Facebook's React framework, Progressive Web Apps to allow functioning offline, and various charting libraries allow the modern web to not only be descriptive, detailed and informative, but perform efficiently."
    
    },
    {
        index: 1,
        classIndex: "two",
        title: "iOS Development", 
        type: "MobileDevelopment",
        desc: "When a browser based website just isn't enough, a native mobile application can help to keep customers connected, employees in touch while on the move, and all of your data just one touch away. I have the most experience building for iOS, but can develop for Android as well using cross-platform technologies like React Native."
    },
    {
        index: 2,
        classIndex: "three",
        title: "Business Integration", 
        type: "BusinessTechnologies",
        desc: "By integrating with powerful analytics tools, clients are able to track dozens of valuable data points in real time. This can provide insight into which marketing strategies are providing the highest ROE, the on-site behavior of each visitor, and be integrated with both Google's own dashboard, as well as a custom built Admin dashboard that only you will have access."
    },
    {
        index: 3,
        classIndex: "four",
        title: "Secure data management", 
        type: "secureBackend",
        desc: "Whether integrating with third party authentication through Google, Apple, and Facebook or creating a completely independent authentication process, you can be sure that only you have access to sensitive information while customers and employees can easily find and access the data they need to keep your business running smoothly."
    },
]

export const portfolioArray = [
    {   
        index: 0, 
        transitionIndex: 4, 
        orientation: "left",
        imageName: "portfolioImageOne",
        appName: "Mock Trivia",
        subTitle: "Javascript Trivia",
        description: "Trivia game for entry level developers, built with and based on Javascript, DBMS's and general development knowledge"
    }
]


export const socialLinks = {
    github: {
        link: "https://github.com/igloo1505",
        display: "list-item"
    },
    linkedIn: {
        link: "https://www.linkedin.com/in/andrew-mueller-689626198/",
        display: "list-item"
    },
    blog: {
        link: "https://one-hundred-days-blog.herokuapp.com/",
        display: "none",
        // display: "list-item"
    }
}
