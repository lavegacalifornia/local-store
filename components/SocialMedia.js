export default function SocialMedia(source) {
    return (
        <div className="flex flex-row justify-between">
            <a href={source}><img src="../svg/twitter.svg" alt="twitter icon" className="w-8" /></a>
            <a href={source}><img src="../svg/instagram.svg" alt="instagram icon" className="w-8" /></a>
            <a href={source}><img src="../svg/whatsapp.svg" alt="whatssapp icon" className="w-8" /></a>
            <a href={source}><img src="../svg/facebook.svg" alt="facebook icon" className="w-8" /></a>
        </div>
    )
}