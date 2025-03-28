import { Title } from "./Title.jsx";

const Contact = () => {
  // Substitua pelo seu número de WhatsApp (apenas números, sem espaços ou caracteres especiais)
  const phoneNumber = "5561992102898"; 
  const defaultMessage = "Olá, vim pelo seu portfólio e gostaria de conversar!";
  
  // Cria o link do WhatsApp com a mensagem
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  return (
    <>
      <section className="section" id="contact">
        <Title title="Contact" subTitle="me" />

        <div className="section-center contact-center">
          <article className="contact-info">
            <h3>Send me a message</h3>
            <p>
              I'm very approachable and would love to chat with you. Feel free
              to call, email, social media or send me a message on whatsapp clicking bellow. You can also send me
              a message using the form on the right.
            </p>
            <p>
              <i className="fa-solid fa-square-envelope"></i> :
              tiagogandrati@gmail.com
            </p>
            <p>
              {" "}
              <i className="fa-solid fa-phone"></i> : +55 (61) 99210-2898
            </p>
            <p>
              <a
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{textDecoration: 'none', color: 'inherit'}}
              >
              <i className="fa-brands fa-whatsapp"></i>: Whatsapp me</a>
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
