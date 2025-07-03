export interface LandingViewModel {
    //data: LandingAttributes
    attributes: LandingAttributes,
}

export interface LandingAttributes {
    hero: LandingHero
    steps: LandingSteps
}

export interface LandingHero {
    heading: string,
    description: string
    img_1_url: string,
    img_1_alternativeText: string
    img_2_url: string,
    img_2_alternativeText: string
    img_3_url: string,
    img_3_alternativeText: string
}

export interface LandingSteps {
    title_1: string,
    description_1: string,
    title_2: string,
    description_2: string,
    title_3: string,
    description_3: string,    
}