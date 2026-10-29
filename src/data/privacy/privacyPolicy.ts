import type { PrivacyPolicyContent } from '@/types/privacy';

// The Privacy Policy page (/privacy-policy). Section numbers are added in order on the page.
export const privacyPolicy: PrivacyPolicyContent = {
  heading: 'Privacy Policy',
  updated: '15 October 2026',
  company: 'BMU Marketing',
  website: { label: 'https://www.bmumarketing.in/', href: 'https://www.bmumarketing.in/' },
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      blocks: [
        {
          type: 'p',
          text: 'At BMU Marketing, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, submit an inquiry, or communicate with us regarding our services.',
        },
        {
          type: 'p',
          text: 'We respect your trust and are committed to using your personal information responsibly and transparently. We do not sell, rent, or share your personal information with third parties for their own marketing or commercial purposes.',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      blocks: [
        {
          type: 'p',
          text: 'We may collect personal information that you voluntarily provide when interacting with our website or contacting us, including:',
        },
        {
          type: 'list',
          items: [
            { text: 'Your name and contact details, such as your phone number and email address.' },
            { text: 'Business or company information that you choose to provide.' },
            { text: 'Information about your service requirements and inquiries.' },
            { text: 'Communication details that help us respond to your questions and requests.' },
          ],
        },
        {
          type: 'p',
          text: 'We may also collect basic technical information when you visit our website, depending on the website features and technologies in use.',
        },
      ],
    },
    {
      id: 'how-we-use-your-information',
      title: 'How We Use Your Information',
      blocks: [
        {
          type: 'p',
          text: 'BMU Marketing uses your personal information only for legitimate business communication and related purposes, including:',
        },
        {
          type: 'list',
          items: [
            { term: 'Offer Updates', text: 'Informing you about our latest offers, promotions, and special announcements.' },
            { term: 'Service Information', text: 'Explaining our services, features, and available solutions.' },
            { term: 'Customer Communication', text: 'Responding to your inquiries and providing requested information.' },
            { term: 'Business Updates', text: 'Sharing relevant company announcements and service-related updates.' },
            { term: 'Customer Support', text: 'Addressing your questions, feedback, and requests.' },
          ],
        },
        {
          type: 'p',
          text: 'We do not use your personal information for purposes unrelated to these activities unless required or permitted by applicable law.',
        },
      ],
    },
    {
      id: 'no-sale-or-sharing',
      title: 'No Sale or Sharing of Customer Data',
      blocks: [
        {
          type: 'p',
          text: 'Your privacy is important to us. BMU Marketing does not sell, rent, trade, or share your personal information with third parties for their own marketing, promotional, or commercial purposes.',
        },
        {
          type: 'p',
          text: 'We do not provide our customer database or contact lists to other businesses for their independent use.',
        },
        {
          type: 'p',
          text: 'Your information is accessed only by authorised personnel who need it to carry out the purposes described in this policy. We may disclose information where required by applicable law or a valid legal order.',
        },
        {
          type: 'p',
          text: 'Where external technical services are necessary to operate our website or communications, any processing of personal information will be limited to what is necessary for those functions and subject to appropriate safeguards.',
        },
      ],
    },
    {
      id: 'marketing-communications',
      title: 'Marketing Communications and Offers',
      blocks: [
        {
          type: 'p',
          text: 'If you provide your contact details and agree to receive communications from us, we may contact you with information about our services, promotional offers, business updates, and other relevant announcements.',
        },
        {
          type: 'p',
          text: 'You may opt out of promotional communications at any time by contacting us or following the unsubscribe instructions provided in the communication, where available.',
        },
        {
          type: 'p',
          text: 'Choosing not to receive promotional messages will not affect any communication that is necessary to respond to an inquiry or fulfil a legal obligation.',
        },
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      blocks: [
        {
          type: 'p',
          text: 'We take reasonable measures to protect your personal information against unauthorised access, loss, misuse, alteration, or disclosure.',
        },
        {
          type: 'p',
          text: 'Access to personal information is restricted to authorised individuals who require it for legitimate business purposes. However, no method of electronic transmission or storage can be guaranteed to be completely secure.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      blocks: [
        {
          type: 'p',
          text: 'We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this Privacy Policy, respond to inquiries, maintain relevant business records, and meet applicable legal requirements.',
        },
        {
          type: 'p',
          text: 'When information is no longer required, we will take reasonable steps to securely delete it or anonymise it, where appropriate and legally permissible.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and Website Technologies',
      blocks: [
        {
          type: 'p',
          text: 'Our website may use cookies or similar technologies to support essential website functionality and improve the browsing experience.',
        },
        {
          type: 'p',
          text: 'Where such technologies are used, they may collect limited technical information about your browser or website usage. You can manage cookies through your browser settings, although disabling certain cookies may affect website functionality.',
        },
      ],
    },
    {
      id: 'third-party-websites',
      title: 'Third-Party Websites',
      blocks: [
        {
          type: 'p',
          text: 'Our website may contain links to external websites or online platforms. These websites operate independently and may have their own privacy policies and data practices.',
        },
        {
          type: 'p',
          text: 'BMU Marketing is not responsible for the privacy practices or content of external websites. We encourage you to review their privacy policies before providing personal information.',
        },
      ],
    },
    {
      id: 'your-privacy-rights',
      title: 'Your Privacy Rights',
      blocks: [
        { type: 'p', text: 'Subject to applicable law, you may request to:' },
        {
          type: 'list',
          items: [
            { text: 'Know what personal information we hold about you.' },
            { text: 'Correct inaccurate or outdated information.' },
            { text: 'Request the deletion of your personal information where applicable.' },
            { text: 'Withdraw your consent to receive promotional communications.' },
            { text: 'Raise concerns about how your information is collected or used.' },
          ],
        },
        {
          type: 'p',
          text: 'To make a request, please contact BMU Marketing using the contact details provided on our website. We will review and respond to your request in accordance with applicable law.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      blocks: [
        {
          type: 'p',
          text: 'Our website and services are not intended to collect personal information from children without appropriate authorisation where required by law. If you believe that a child has provided personal information to us inappropriately, please contact us so that we can review the matter and take appropriate action.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to This Privacy Policy',
      blocks: [
        {
          type: 'p',
          text: 'BMU Marketing may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, or applicable legal requirements.',
        },
        {
          type: 'p',
          text: 'Any updates will be published on this page along with the revised date. We encourage visitors to review this page periodically to stay informed about how we protect their information.',
        },
      ],
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      blocks: [
        {
          type: 'p',
          text: 'If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how your personal information is handled, please contact us through the contact details available on our website.',
        },
      ],
    },
  ],
  closing: 'We are committed to treating your personal information with care, respect, and transparency.',
};
