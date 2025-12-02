```tsx file="app/privacy-policy/page.tsx"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

          {/* Content Section */}
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              This Privacy Policy, describes how MetaShop Private Limited, (hereinafter referred to as "Company, Us, We,
              Our") collects, uses, shares, protects and processes you personal information obtained from our website
              MetaShop AI &lt;
              <a href="https://www.metashopai.com/" className="text-primary hover:underline">
                https://www.metashopai.com/
              </a>
              &gt;. The personal data collected by us shall be processed and stored within the territory of India. You
              hereby expressly consent to the terms and conditions as provided in this Privacy Policy and the Terms of
              Use (hereinafter referred to as "Terms") and agree to be governed by all the laws of India, including but
              not limited to the applicable laws on data protection and privacy. Capitalise terms which are not defined
              herein shall have the meaning ascribed to them in the Terms.
            </p>

            <ol className="space-y-8 text-gray-300">
              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">PERSONAL INFORMATION WE COLLECT</h2>
                <p className="leading-relaxed">
                  It is to be noted that specific data is gathered in an automated manner upon your visit, utilisation
                  or navigation of the Website. It may encompass device and usage data, including but not limited to
                  your IP address, browser and device attributes, and other particulars regarding your usage of Our
                  Website, and other technical data. The aforementioned information is deemed essential for the
                  preservation of the security and functionality of Our Website.
                </p>
                <p className="leading-relaxed">
                  The Information that We may gather during your usage of Our Website is as follows:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact details, including but not limited to the first and last name, and email address.</li>
                  <li>
                    Authentication Credentials, which grants access to user accounts and data through any third-party
                    service providers.
                  </li>
                  <li>
                    Communications, that we conducted with you, including the instances when you contact us via Our
                    Website or any other means.
                  </li>
                  <li>
                    Videos, Our Service requires us to collect videos to create three dimensional (3D) models as
                    understood by users who avail our Services.
                  </li>
                  <li>
                    Payment information would be required by our payment partner to complete your transactions to use
                    our Service (if any required), including the user's name, payment card information, and billing
                    information. We do not store payment card numbers.
                  </li>
                  <li>Marketing information, such as your preferences for receiving our marketing communications.</li>
                  <li>
                    All other data not explicitly enumerated herein shall be utilised in accordance with the provisions
                    set forth in this Privacy Policy or as otherwise revealed during the data collection process.
                  </li>
                </ol>
                <p className="leading-relaxed mt-4">The information that we obtain from third parties:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    We may collect your information from your interaction with Our social media pages including but not
                    limited to Instagram, Facebook, Linkedin, Twitter, Pinterest and Youtube.
                  </li>
                  <li>
                    We may collect your information when you link or connect or login through third party service
                    providers including but not limited to Google, Facebook and Apple.
                  </li>
                </ol>
                <p className="leading-relaxed mt-4">
                  We might also gather certain data automatically, provided as follows:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    Usage Information – Information relating to but not limited to, how much you use Our Website, the
                    amount of time you spend on it, etc; and
                  </li>
                  <li>
                    Camera, and video – this information is collected because many services on Our Website require us to
                    collect videos from your device's camera and photo gallery.
                  </li>
                </ol>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">COOKIES</h2>
                <p className="leading-relaxed">
                  The Website uses data collection devices such as "cookies" on certain pages of the Website to analyse
                  Our web page flow, measure promotional effectiveness and promote trust and safety. Cookies are small
                  files placed on your hard drive that assist Us in providing the best of Our services to you. These
                  cookies do not contain any personal information of the user. Cookies help Us to provide information to
                  you that is targeted to your interests. There are certain session Cookies which are deleted from your
                  hard drive automatically at the end of your session on the Website. You are always free to
                  decline/delete Our Cookies if your browser permits, although in that case We may not be able to
                  provide you with the best of Our Service.
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">HOW DO WE USE YOUR INFORMATION?</h2>
                <p className="leading-relaxed">
                  We put the data we acquire from Our Website to several different types of business purposes mentioned
                  below. These uses of your personal information are based on Our legitimate business interests, your
                  permission, Our contractual responsibilities, and/or Our legal requirements. We use personal
                  information obtained through the utilisation of Our Website for an array of business objectives as
                  delineated hereunder:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>provide, develop, operate, improve, deliver, maintain the Service as offered by the Website;</li>
                  <li>send you communications, including by email or SMS where permitted;</li>
                  <li>monitor and analyze the usage of Our Website;</li>
                  <li>use your personal information for marketing and advertising purposes;</li>
                  <li>
                    We may process your data if you have granted us explicit permission to use your personal information
                    for a particular purpose;
                  </li>
                  <li>provide a personalized experience of Our Website to you;</li>
                  <li>enhance the safety and security of Our Service;</li>
                  <li>verify your identity and prevent fraud or other unauthorized or illegal activity;</li>
                  <li>enforce, investigate and report any violation of the Terms; and</li>
                  <li>
                    to comply with applicable laws, lawful requests, and legal process, including responding to requests
                    from government authorities.
                  </li>
                </ol>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">HOW WE USE OR SHARE YOUR PERSONAL INFORMATION?</h2>
                <p className="leading-relaxed">
                  The personal information as collected by Us might be shared as allowed under the applicable laws and
                  in line with this Privacy Policy, with including but not limited to Our business partners, service
                  providers, merchants, affiliates, associates, subsidiaries, legally recognized authorities, regulatory
                  bodies, governmental authorities, financial institutions, internal teams, etc. The personal
                  information shall be shared where applicable and, on a need-to-know basis, for the following purposes:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>provide, operate and improve Our Service</li>
                  <li>process your payments and complete transactions;</li>
                  <li>
                    communicate with you about the Service, including but not limited to sending announcements, updates,
                    security updates and support and administrative messages;
                  </li>
                  <li>provide support and respond to requests, questions and feedback;</li>
                  <li>to analyse and improve the Service and develop new products;</li>
                  <li>for marketing purposes;</li>
                  <li>
                    for complying with the applicable laws as well as meeting the Know-Your-Customer (KYC) requirements
                    as mandated by the regulatory bodies;
                  </li>
                  <li>for facilitating your transactions on the Platform;</li>
                  <li>
                    for any requirement as made by the law and which makes such disclosure necessary to respond to
                    subpoenas, court orders, or other legal process;
                  </li>
                  <li>for the resolution of disputes or grievance redressal; and</li>
                  <li>
                    in the event We or Our assets, merge with, or be acquired by any business entity, or there is an
                    occurrence of an amalgamation, re-organization or restructuring of Our business, then such other
                    business entity.
                  </li>
                </ol>
                <p className="leading-relaxed mt-4">
                  While your information being shared to these third parties, we shall ensure stricter and no less
                  stringent privacy protection obligations on these third parties, as applicable. We do not accept any
                  responsibility or liability for usage of your personal information by these third parties or their
                  policies.
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                <p className="leading-relaxed">
                  We use rational and appropriate organisational, technical, and administrative measures that are
                  specifically devised to safeguard against any unauthorised access, misuse, loss, disclosure,
                  alteration, or destruction of the personal information that we maintain. It is regrettable to inform
                  that the security of data transmission over the Internet cannot be guaranteed in its entirety. Whereas
                  our utmost endeavour is to safeguard your personal information, we are unable to provide a guarantee
                  of the security of said personal information.
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                <p className="leading-relaxed">
                  You have access to update your information to be correct, up-to-date, and full. Please get in touch
                  with us as described below, and we will take reasonable measures to update or correct information in
                  our possession that you have submitted via the services in the past.
                </p>
                <p className="leading-relaxed">
                  All the users of Our Platform are provided with an opportunity to opt-out of receiving non-essential
                  (promotional, marketing-related) communications from Us after setting up an account on the Website. If
                  you do not wish to receive the promotional communications from Us, then please unsubscribe by clicking
                  on the unsubscribe link in the email.
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">USAGE BY MINOR INFORMATION</h2>
                <p className="leading-relaxed">
                  We do not render Our Service for use by children under 18 (eighteen) years of age. If you are under
                  the age of 18 (eighteen) years, you shall use the Service of the Website with the involvement of a
                  parent or guardian. We do not knowingly solicit or collect personal information from minors under the
                  age of 18 years.
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">DATA RETENTION</h2>
                <p className="leading-relaxed">
                  We might retain your information for a period of time as provided by applicable laws. Your data shall
                  be retained by Us if:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>there is any legal obligation to retain the data;</li>
                  <li>there is any statutory or regulatory retention requirement by law; and</li>
                  <li>if We believe it may be necessary to prevent fraud or future abuse.</li>
                </ol>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">CHANGES TO THIS PRIVACY POLICY</h2>
                <p className="leading-relaxed">
                  We request you to check Our Privacy Policy periodically for changes. We may update Our policy to
                  reflect material changes to Our information practices. We shall intimate you with any changes to the
                  Privacy Policy by an email notification when We are required to do so by applicable law.
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">GRIEVANCE OFFICER:</h2>
                <p className="leading-relaxed">
                  If your complaint is not resolved even after complaining through Our complaint mechanism, then you can
                  contact Our grievance officer at: info@metashopai.com
                </p>
              </li>

              <li className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">CONTACT US:</h2>
                <p className="leading-relaxed">
                  For any queries or complaints related to the Service of the Website, you contact us by writing to us
                  on: info@metashopai.com
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  )
}
