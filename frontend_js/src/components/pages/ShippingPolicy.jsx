import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";

const ShippingPolicy = () => {
  return (
    <>
      <Header />
      <section style={{ paddingBottom: "100px" }} id="about-us">
        <div className="container">
          <div className="about-us">
            <h1>Shipping Policy</h1>
            <div className="title">
              <p>
                Certainly! Here's a sample Shipping Policy for your online
                store: Shipping Policy 1. Shipping Methods We offer several
                shipping methods to accommodate your needs. The available
                options will be displayed during the checkout process. Shipping
                methods may include standard shipping, expedited shipping, and
                international shipping. 2. Processing Time Orders are typically
                processed and shipped within [number] business days of receiving
                payment. During peak seasons or promotional events, processing
                times may be slightly longer. You will receive a confirmation
                email with tracking information once your order has been
                shipped. 3. Shipping Rates Shipping rates are calculated based
                on the destination, shipping method selected, and the weight and
                dimensions of the package. You can view the shipping charges
                during the checkout process before completing your purchase. 4.
                Domestic Shipping For domestic orders within [Your Country], we
                offer standard and expedited shipping options. Standard shipping
                typically takes [number] business days for delivery, while
                expedited shipping delivers within [number] business days. 5.
                International Shipping We also offer international shipping to
                select countries. International shipping times may vary
                depending on the destination and customs clearance procedures.
                Please note that customers are responsible for any customs
                duties, taxes, or fees imposed by their country's customs
                authorities. 6. Order Tracking Once your order has been shipped,
                you will receive a tracking number via email. You can use this
                tracking number to monitor the status of your shipment and
                estimated delivery date. If you have any questions about the
                status of your order, please contact our customer service team.
                7. Shipping Delays While we strive to deliver your order
                promptly, please note that shipping delays may occur due to
                factors beyond our control, such as weather conditions, carrier
                delays, or unforeseen circumstances. We appreciate your patience
                and understanding in such situations. 8. Shipping Address Please
                ensure that the shipping address provided during checkout is
                accurate and complete. We are not responsible for orders
                delivered to incorrect or incomplete addresses provided by the
                customer. If you need to update your shipping address after
                placing an order, please contact our customer service team as
                soon as possible. 9. Lost or Damaged Shipments In the rare event
                that your shipment is lost or damaged in transit, please contact
                our customer service team immediately. We will work with the
                shipping carrier to resolve the issue and ensure that you
                receive a replacement or refund as appropriate. 10. Contact Us
                If you have any questions or concerns about our Shipping Policy,
                please contact us at [Contact Information]. Our customer service
                team is here to assist you.
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

export default ShippingPolicy;
