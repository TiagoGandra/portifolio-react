import { Title } from "./Title.jsx";

const Contact = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="Contact" subTitle="me" />

        <div className="section-center about-center">
          <article className="about-info">
            <h3>Send me a message</h3>
            <p>
              I'm very approachable and would love to chat with you. Feel free
              to call, email, or connect via social media. You can also send me
              a message using the form on the right (message sending
              functionality not yet implemented).
            </p>
            <p>
              <i className="fa-solid fa-square-envelope"></i> :
              tiagogandrati@gmail.com
            </p>
            <p>
              {" "}
              <i className="fa-solid fa-phone"></i> : +55 (61) 99210-2898
            </p>
          </article>
          <div className="cardRightSide">
            <input name="name" placeholder="Name" />
            <input name="email" placeholder="Email" />
            <input name="subject" placeholder="Subject" />
            <textarea
              name="text"
              placeholder="Write your message here..."
            ></textarea>
            <button className="btn hero-btn" type="submit">
              Send message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
