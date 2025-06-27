import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Page from '@/components/Page'

const ContactPage: React.FC = () => (
  <Page title="Zostań z nami w kontakcie" id="contact">
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center">
        <div className="px-4">
          <PhoneIcon className="inline mr-1 text-contact-icons" />
          <span>+ 48 000-111-222</span>
        </div>
        <div className="px-4">
          <MailIcon className="inline mr-1 text-contact-icons" />
          <span>horyzont@xyz.com</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="px-4">
          <FacebookIcon className="inline mr-1 text-contact-icons" />
          <span>@fundacja.horyzont</span>
        </div>
        <div className="px-4">
          <InstagramIcon className="inline mr-1 text-contact-icons" />
          <span>@fundacja.horyzont</span>
        </div>
        <div className="px-4">
          <GithubIcon className="inline mr-1 text-contact-icons" />
          <span>@fundacja.horyzont</span>
        </div>
      </div>
    </div>
  </Page>
)

export default ContactPage
