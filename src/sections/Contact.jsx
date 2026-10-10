import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMail, LuMapPin } from 'react-icons/lu'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import { contact } from '../data/contact'

const links = [
  { label: 'LinkedIn', href: contact.linkedin, icon: FaLinkedin },
  { label: 'GitHub', href: contact.github, icon: FaGithub },
  { label: contact.email, href: `mailto:${contact.email}`, icon: LuMail },
]

const iconClass = 'size-6 shrink-0 text-primary'

function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Vous cherchez un développeur front-end React à Strasbourg ou en Alsace ? Écrivez-moi, je vous réponds rapidement."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-16">
        <ContactForm />

        <ul className="border-t border-border pt-3 lg:mt-8 lg:rounded-xl lg:border lg:px-6 lg:py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link flex min-h-12 items-center gap-3 font-semibold"
              >
                <link.icon aria-hidden="true" className={iconClass} />
                <span className="min-w-0 break-words">{link.label}</span>
              </a>
            </li>
          ))}
          <li className="flex min-h-12 items-center gap-3 text-muted">
            <LuMapPin aria-hidden="true" className={iconClass} />
            {contact.location}
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Contact
