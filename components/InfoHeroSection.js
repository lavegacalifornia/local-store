import HeroSection from '../components/HeroSection'

export default function InfoHeroSection() {
    return (
        <div className="">
            <HeroSection
                resName={"Resturant's Name"}
                resDescription={"This is a little description of the restaurant"}
                resAdress={"The adress of the restaurant. Could be an ancor with the google's link"}
                time={"8 - 20 Hs"}
            />
        </div>
    )
} 