const Hero = () => {
  return (
    <>
        <section className="hero" id="home">
            <div className="hero-banner">
                <h1>Tiago Gandra</h1>
                <p>
                  Developer motivated to learn and work in the field. Interested in web development, I'm always studying and improving. I aim to become a Full Stack Developer, currently focusing on front-end but planning to dive into back-end in the future.
                  {/* Desenvolvedor motivado em aprender e trabalhar na área. Interessado na área de desenvolvimento web, estou sempre estudando e me aprimorando. Tenho interesses em me tornar um desenvolvedor Full Stack, por enquanto sigo meus estudos no front-end, mas visando me aprofundar no back-end futuramente. */}
                </p>
                <a href="#projects" className="btn hero-btn">explore projects</a>
            </div>
        </section>
    </>
  )
}

export default Hero