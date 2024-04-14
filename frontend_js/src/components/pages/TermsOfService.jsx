import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";

const TermsOfService = () => {
  return (
    <>
      <Header />
      <section style={{ paddingBottom: "100px" }} id="about-us">
        <div className="container">
          <div className="about-us">
            <h1>Terms of Service</h1>
            <div className="title">
              <p>
                1. Introduction Welcome to [Your Online Store Name]! These Terms
                of Service govern your use of our website and services. By
                accessing or using our website, you agree to abide by these
                terms. 2. Use of the Website 2.1. Eligibility: You must be at
                least 18 years old to use our website. By using the website, you
                affirm that you are of legal age. 2.2. Account: You may need to
                create an account to access certain features of our website. You
                are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account. 2.3. Prohibited Activities: You agree not to engage in
                any prohibited activities, including but not limited to
                unauthorized access to our systems, violating any laws or
                regulations, or interfering with the website's functionality. 3.
                Ordering and Payment 3.1. Product Information: We strive to
                provide accurate product descriptions and images on our website.
                However, we do not guarantee the accuracy, completeness, or
                reliability of any product information. 3.2. Pricing: Prices for
                products are subject to change without notice. We reserve the
                right to modify or discontinue any product at any time. 3.3.
                Payment: Payment for orders is due at the time of purchase. We
                accept various payment methods, and all transactions are
                processed securely. 4. Shipping and Delivery 4.1. Shipping: We
                offer shipping to locations specified on our website. Shipping
                times may vary depending on your location and the shipping
                method selected. 4.2. Delivery: We aim to deliver orders in a
                timely manner. However, we are not responsible for delays caused
                by factors beyond our control, such as weather conditions or
                carrier issues. 5. Returns and Refunds 5.1. Returns: We accept
                returns within [number] days of purchase for eligible products.
                To initiate a return, please contact our customer service team.
                5.2. Refunds: Refunds will be issued in accordance with our
                refund policy. Please refer to our refund policy for more
                information. 6. Intellectual Property 6.1. Ownership: All
                content and materials on our website, including but not limited
                to text, images, logos, and trademarks, are the property of
                [Your Online Store Name] or its licensors. 6.2. Use
                Restrictions: You may not use, reproduce, or distribute any
                content from our website without our prior written consent. 7.
                Limitation of Liability 7.1. Disclaimer: Our website and
                services are provided on an "as is" and "as available" basis. We
                make no warranties or representations regarding the accuracy,
                reliability, or availability of our website or services. 7.2.
                Limitation of Liability: To the fullest extent permitted by law,
                we shall not be liable for any direct, indirect, incidental,
                special, or consequential damages arising out of or in any way
                connected with your use of our website or services. 8. Governing
                Law These Terms of Service shall be governed by and construed in
                accordance with the laws of [Your Jurisdiction], without regard
                to its conflict of law principles. 9. Changes to the Terms We
                reserve the right to modify or update these Terms of Service at
                any time. Any changes will be effective immediately upon posting
                on our website. Your continued use of the website after the
                posting of changes constitutes your acceptance of such changes.
                10. Contact Us If you have any questions or concerns about these
                Terms of Service, please contact us at [Contact Information].
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

export default TermsOfService;
