import React, { useState } from "react";
import "./poe.css";
import ContactModal from "../../components/contactModal/contactModal";

const Poe = () => {
  const [contactModal, setContactModal] = useState(false);
  return (
    <div className="container">
      <div className="header">
        <text>Privacy Policy</text>
      </div>
      <div className="mainText">
        <text>
          Thank you for choosing to
          be part of our community at Josh Lane (“Company”, “we”, “us”, or
          “our”). We are committed to protecting your personal information and
          your right to privacy. If you have any questions or concerns about
          this privacy notice, or our practices with regards to your personal
          information, please contact us at joshdlane22@gmail.com. When you use
          our mobile application, as the case may be (the "App") and more
          generally, use any of our services (the "Services", which include the
          App), we appreciate that you are trusting us with your personal
          information. We take your privacy very seriously. In this privacy
          notice, we seek to explain to you in the clearest way possible what
          information we collect, how we use it and what rights you have in
          relation to it. We hope you take some time to read through it
          carefully, as it is important. If there are any terms in this privacy
          notice that you do not agree with, please discontinue use of our
          Services immediately. This privacy notice applies to all information
          collected through our Services (which, as described above, includes
          our App), as well as any related services, sales, marketing or events.
          Please read this privacy notice carefully as it will help you
          understand what we do with the information that we collect. WHAT INFORMATION DO WE COLLECT? We do not knowingly collect or monitor any 
          data from our users. This is a very simple service connecting our users to poems 
          they may like. No information is collected on use. 6. HOW DO WE KEEP YOUR
          INFORMATION SAFE? In Short: We aim to protect your personal
          information through a system of organizational and technical security
          measures. We have implemented appropriate technical and organizational
          security measures designed to protect the security of any personal
          information we process. However, despite our safeguards and efforts to
          secure your information, no electronic transmission over the Internet
          or information storage technology can be guaranteed to be 100% secure,
          so we cannot promise or guarantee that hackers, cybercriminals, or
          other unauthorized third parties will not be able to defeat our
          security, and improperly collect, access, steal, or modify your
          information. Although we will do our best to protect your personal
          information, transmission of personal information to and from our App
          is at your own risk. You should only access the App within a secure
          environment. 7. DO WE COLLECT INFORMATION FROM MINORS? In Short: We do
          not knowingly collect data from or market to children under 18 years
          of age. We do not knowingly solicit data from or market to children
          under 18 years of age. By using the App, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent’s use of the App. If we learn that
          personal information from users less than 18 years of age has been
          collected, we will deactivate the account and take reasonable measures
          to promptly delete such data from our records. If you become aware of
          any data we may have collected from children under age 18, please
          contact us at joshdlane22@gmail.com. 8. WHAT ARE YOUR PRIVACY RIGHTS?
          In Short: You may review, change, or terminate your account at any
          time. If you are resident in the European Economic Area and you
          believe we are unlawfully processing your personal information, you
          also have the right to complain to your local data protection
          supervisory authority. You can find their contact details here:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
         DO CALIFORNIA RESIDENTS
          HAVE SPECIFIC PRIVACY RIGHTS? In Short: Yes, if you are a resident of
          California, you are granted specific rights regarding access to your
          personal information. California Civil Code Section 1798.83, also
          known as the “Shine The Light” law, permits our users who are
          California residents to request and obtain from us, once a year and
          free of charge, information about categories of personal information
          (if any) we disclosed to third parties for direct marketing purposes
          and the names and addresses of all third parties with which we shared
          personal information in the immediately preceding calendar year. If
          you are a California resident and would like to make such a request,
          please submit your request in writing to us using the contact
          information provided below. If you are under 18 years of age, reside
          in California, and have a registered account with the App, you have
          the right to request removal of unwanted data that you publicly post
          on the App. To request removal of such data, please contact us using
          the contact information provided below, and include the email address
          associated with your account and a statement that you reside in
          California. We will make sure the data is not publicly displayed on
          the App, but please be aware that the data may not be completely or
          comprehensively removed from all our systems (e.g. backups, etc.). 11.
          DO WE MAKE UPDATES TO THIS NOTICE? In Short: Yes, we will update this
          notice as necessary to stay compliant with relevant laws. We may
          update this privacy notice from time to time. The updated version will
          be indicated by an updated “Revised” date and the updated version will
          be effective as soon as it is accessible. If we make material changes
          to this privacy notice, we may notify you either by prominently
          posting a notice of such changes or by directly sending you a
          notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
          HOW CAN YOU CONTACT US ABOUT THIS NOTICE? If you have questions or
          comments about this notice, you may email us at joshdlane22@gmail.com
          or by post to: Josh Lane 622 Greenwich St. New York, NY 10014 United
          States
        </text>
      </div>
      <div
        className="contact"
        onClick={() => {
          setContactModal(true);
        }}
      >
        <text>CONTACT</text>
      </div>
      <ContactModal
        show={contactModal}
        setModalClosed={() => {
          setContactModal(false);
        }}
      />
    </div>
  );
};

export default Poe;
