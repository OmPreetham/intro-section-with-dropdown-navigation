const HeroImage = () => {
  return (
    <div className="hero">
      <picture className="hero__picture">
        <source
          srcSet="/images/image-hero-mobile.png"
          media="(max-width: 850px)"
        />
        <img
          className="hero__image"
          src="/images/image-hero-desktop.png"
          alt="Illustration of a Black man holding laptop on his hand"
        />
      </picture>
    </div>
  )
}
export default HeroImage
