import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section style={{ paddingBottom: "100px" }} id="about-us">
        <div className="container">
          <div className="about-us">
            <h1>About Us</h1>
            <div className="title">
              <p>
                Welcome to SPOTLIGHT, where your shopping experience is elevated
                to new heights! We are not just an online store; we are a
                destination for sty le, quality, and exceptional customer
                service. At SPOTLIGHT, we believe that shopping should be an
                enjoyable and effortless experience. Our team is passionate
                about curating a collection of products that not only meet your
                needs but also exceed your expectations. From the latest trends
                to timeless classics, we have carefully selected each item in
                our inventory to ensure that you find something you love. Our
                commitment to quality is unwavering. We source products from
                reputable manufacturers and artisans who share our dedication to
                craftsmanship. Every item in our store is inspected and chosen
                with an emphasis on durability, functionality, and style. We
                want you to feel confident that when you shop with us, you are
                investing in products that will stand the test of time. What
                sets us apart is our dedication to customer satisfaction. We
                understand that shopping online can be challenging, and we
                strive to make it as seamless as possible. Our customer support
                team is always ready to assist you, whether you have a question
                about a product, need help with the ordering process, or require
                assistance with a return. Your happiness is our priority.
                SPOTLIGHT is not just a place to shop; it's a community. We love
                connecting with our customers and sharing in your joy when you
                find the perfect item. Follow us on social media to stay updated
                on the latest arrivals, promotions, and style inspiration. We
                believe in building lasting relationships with our customers and
                creating a community of like-minded individuals who appreciate
                quality and style. Thank you for choosing SPOTLIGHT. We are
                thrilled to be part of your shopping journey and look forward to
                providing you with a delightful and memorable experience. Happy
                shopping!
              </p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
      <Footer />
    </>
  );
};

export default AboutUs;
