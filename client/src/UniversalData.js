export const heroText = () => {
    console.log("this renders?");
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
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis odio esse rem quis aliquid modi provident! Pariatur, ad debitis!"
    },
    {
        index: 1,
        classIndex: "two",
        title: "iOS Development", 
        type: "MobileDevelopment",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis odio esse rem quis aliquid modi provident! Pariatur, ad debitis!"
    },
    {
        index: 2,
        classIndex: "three",
        title: "Business Integration", 
        type: "BusinessTechnologies",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis odio esse rem quis aliquid modi provident! Pariatur, ad debitis!"
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
